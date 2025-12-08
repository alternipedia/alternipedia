"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Button } from "@/app/(components)/ui/button";
import { SimpleEditor } from '@/app/(components)/ui/simple/simple-editor';
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Subscript from "@tiptap/extension-subscript";
import Image from "@tiptap/extension-image";
import BlockQuote from '@tiptap/extension-blockquote';
import { Selection } from "@tiptap/extensions";
import { TableKit } from '@tiptap/extension-table';
// import { Table, TableRow, TableCell, TableHeader } from '@tiptap/extension-table';
import Typography from "@tiptap/extension-typography";
import { ImageUploadNode } from "@/app/(components)/ui/tiptap-node/image-upload-node";
import { AudioUploadNode } from "@/app/(components)/ui/tiptap-node/audio-upload-node";
import { VideoUploadNode } from "@/app/(components)/ui/tiptap-node/video-upload-node";
import { handleFileUpload, MAX_FILE_SIZE_FREE, MAX_FILE_SIZE_PRO } from "@/lib/tiptap-utils";
import { debounce } from "@/lib/utils";
import { useId } from "react";
import { Tag, TagInput } from "emblor";
import { useSession } from "next-auth/react";

const emptyDoc = {
  type: "doc", content: [
    { type: "paragraph", attrs: { textAlign: null }, content: [{ type: "text", text: "This article is empty, you can help by expanding it" }] }
  ]
};
const resetDoc = {
  type: "doc",
  content: []
};

export default function ContentEditorComponent({ slug, lang, bias, revision }: { slug: string; lang: string; bias: string; revision: any }) {
  const id = useId();
  const [tags, setTags] = useState<Tag[]>([]);
  const [allCategories, setAllCategories] = useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  const [serverData, setServerData] = useState<any>();
  const [isSaving, setIsSaving] = useState(false);
  const [articleId, setArticleId] = useState(0);
  const [editorError, setEditorError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tagInputValue, setTagInputValue] = useState("");
  const { data: session, status } = useSession();

  const debouncedSave = useCallback(
    debounce((content: any) => {
      console.log("Auto-saving draft to localStorage:", content);
      localStorage.setItem(`wiki-draft-${slug}-${bias}-${lang}`, JSON.stringify(content));
    }, 500),
    [slug, bias, lang]
  );

  const editor = useEditor({
    onUpdate: ({ editor }) => {
      const content = editor.getJSON();

      let isSame = false;

      if (JSON.stringify(content) === JSON.stringify(emptyDoc)) {
        isSame = true;
      }

      if (JSON.stringify(content) === JSON.stringify(resetDoc)) {
        isSame = true;
      }

      if (JSON.stringify(content) === JSON.stringify(serverData)) {
        isSame = true;
      }

      if (!isSame) {
        debouncedSave(content);
      }
    },
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    editorProps: {
      attributes: {
        autocomplete: "on",
        autocorrect: "on",
        autocapitalize: "off",
        "aria-label": "Main content area, start typing to enter text.",
        class: "simple-editor",
      },
    },
    extensions: [
      StarterKit.configure({
        underline: false,
        strike: false,
        link: {
          openOnClick: false,
          enableClickSelection: true,
        },
        // disable built-in blockquote to allow registering a custom blockquote extension elsewhere
        blockquote: false,
      }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Image,
      BlockQuote,
      Typography,
      Superscript,
      Subscript,
      TableKit,
      Selection,
      ImageUploadNode.configure({
        accept: "image/*",
        maxSize: session?.user.subscription?.tier === 'PRO' ? MAX_FILE_SIZE_PRO : MAX_FILE_SIZE_FREE,
        limit: 3,
        upload: (file, onProgress, abortSignal) => handleFileUpload(file, onProgress, abortSignal, session?.user.subscription?.tier),
        onError: (error) => console.error("Upload failed:", error),
      }),
      AudioUploadNode.configure({
        accept: "audio/*",
        maxSize: session?.user.subscription?.tier === 'PRO' ? MAX_FILE_SIZE_PRO : MAX_FILE_SIZE_FREE,
        limit: 1,
        upload: (file: File, onProgress: ((event: { progress: number; }) => void) | undefined, abortSignal: AbortSignal | undefined) => handleFileUpload(file, onProgress, abortSignal, session?.user.subscription?.tier),
        onError: (error: Error) => console.error("Audio upload failed:", error),
      }),
      VideoUploadNode.configure({
        accept: "video/*",
        maxSize: session?.user.subscription?.tier === 'PRO' ? MAX_FILE_SIZE_PRO : MAX_FILE_SIZE_FREE,
        limit: 1,
        upload: (file: File, onProgress: ((event: { progress: number; }) => void) | undefined, abortSignal: AbortSignal | undefined) => handleFileUpload(file, onProgress, abortSignal, session?.user.subscription?.tier),
        onError: (error: Error) => console.error("Video upload failed:", error),
      }),
    ],
  });

  useEffect(() => {
    // When a new revision arrives, normalize the blocks into a proper doc
    // but only call editor.commands.setContent if the editor instance exists.
    setIsLoaded(false);
    if (revision) {
      let tags = [];
      const revCategories = revision?.article?.categories || [];
      for (const tag of revCategories) {
        tags.push({ id: String(tag.category.id), text: tag.category.name });
      }
      setTags(tags);

      let blocks: any[] = [];
      const revisionBlocks = revision?.revisionBlocks || [];
      for (const revisionBlock of revisionBlocks) {
        blocks.push(revisionBlock.block.content);
      }

      // Normalize into a doc object so tiptap always receives the correct shape
      const doc = (blocks && blocks.length > 0) ? { type: "doc", content: [...blocks] } : emptyDoc;

      setServerData(doc);
      setArticleId(revision?.article?.id || 0);

      if (editor) {
        editor.commands.setContent(doc);
        setIsLoaded(true);
      } else {
        // Editor not ready yet; a separate effect will apply serverData once editor is initialized
        // Keep isLoaded false until content is applied to avoid showing an empty editor briefly
      }
    }
  }, [revision, editor]);

  // If serverData exists but the editor wasn't ready when revision arrived, apply it now
  useEffect(() => {
    if (editor && serverData && !isLoaded) {
      try {
        editor.commands.setContent(serverData);
      } catch (err) {
        console.error("Failed to set content on editor after init:", err);
      }
      setIsLoaded(true);
    }
  }, [editor, serverData, isLoaded]);

  // Fetch category suggestions for the current language and make them available to the TagInput
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const resp = await fetch(`/api/categories/${lang}`);
        if (!resp.ok) return;
        const payload = await resp.json();
        if (!mounted) return;
        const options: Tag[] = (payload.categories || []).map((name: string) => ({ id: name, text: name }));
        setAllCategories(options);
      } catch (err) {
        console.error("Failed to fetch category suggestions:", err);
      }
    })();
    return () => { mounted = false; };
  }, [lang]);

  const handleReset = () => {
    localStorage.removeItem(`wiki-draft-${slug}-${bias}-${lang}`);

    editor?.commands.setContent(serverData.length > 0 ? {
      type: "doc",
      content: [...serverData]
    } : resetDoc);
  };

  const handleSave = async () => {
    setIsSaving(true);
    let saveSucceeded = false;
    try {
      const blocks = editor?.getJSON().content || [];
      const resp = await fetch(`/api/${lang}/wiki/${slug}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          blocks: blocks,
          bias: bias,
          lang: lang,
          categories: tags.map((t) => t.text)
        }),
      });

      // Handle non-2xx responses with friendly messages
      if (!resp.ok) {
        let payload: any = {};
        try {
          payload = await resp.json();
        } catch (e) {
          // non-json response
        }

        // Map common API errors to user-visible text
        const apiError = (payload && payload.error) || resp.statusText || "An error occurred";

        if (resp.status === 401) {
          setEditorError("You must be signed in to submit changes. Please sign in and try again.");
        } else if (resp.status === 403) {
          // Specific messages from server like banned vs permission
          if (typeof apiError === "string" && apiError.toLowerCase().includes("banned")) {
            setEditorError("You are banned from editing this affiliation. If you believe this is a mistake, contact moderators.");
          } else {
            setEditorError("You do not have permission to edit this affiliation. Join the affiliation by setting your preference and try again.");
          }
        } else if (resp.status === 400) {
          // Bad request — show server message or a helpful hint
          if (typeof apiError === "string" && apiError.toLowerCase().includes("bias") && apiError.toLowerCase().includes("not found")) {
            setEditorError("The selected affiliation was not found. Try refreshing the page or pick a different affiliation.");
          } else if (apiError === "Invalid blocks array") {
            setEditorError("The article content looks invalid. Try simplifying your edits or copy your changes, refresh, and try again.");
          } else {
            setEditorError(String(apiError));
          }
        } else if (resp.status >= 500) {
          setEditorError("Server error while saving. Please try again later.");
        } else {
          setEditorError(String(apiError));
        }

        console.error("Save failed:", resp.status, payload);
        return;
      }

      // Success
      localStorage.removeItem(`wiki-draft-${slug}-${bias}-${lang}`);
      saveSucceeded = true;
    } catch (err) {
      console.error("Save failed:", err);
      setEditorError("Unexpected error while saving. Check your connection and try again.");
    } finally {
      setIsSaving(false);
      // Only reload the page when the save actually succeeded. Don't rely on React state here because
      // setEditorError is asynchronous and its value may not be updated yet when finally runs.
      if (saveSucceeded) {
        window.location.reload();
      }
    }
  };


  if (status === "unauthenticated") {
    return (
      <div className="p-4 border border-destructive/20 rounded-md bg-destructive/5 wikipedia-article">
        <div className="text-destructive font-medium">Editor Unavailable</div>
        <div className="text-sm text-muted-foreground mt-1">You must be signed in to edit articles. Please sign in and try again.</div>
      </div>
    )
  }

  // Show loading state
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center p-8 wikipedia-article">
        <div className="text-muted-foreground">Loading editor...</div>
      </div>
    );
  }

  // Show error state
  if (editorError) {
    return (
      <div className="p-4 border border-destructive/20 rounded-md bg-destructive/5 wikipedia-article">
        <div className="text-destructive font-medium">Editor Error</div>
        <div className="text-sm text-muted-foreground mt-1">{editorError}</div>
        <Button
          onClick={() => {
            setEditorError(null);
            window.location.reload();
          }}
          variant="outline"
          size="sm"
          className="mt-2 cursor-pointer"
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full wikipedia-article">
      {/* Page-blocking overlay while saving to prevent accidental clicks */}
      {isSaving && (
        <div
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <div className="bg-white/95 dark:bg-neutral-900/95 rounded-lg shadow-2xl px-6 py-5 flex items-center gap-4 max-w-xl w-[min(90%,560px)]">
            <div className="flex items-center justify-center">
              <svg className="w-10 h-10 animate-spin text-gray-700" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="font-medium text-gray-900 dark:text-gray-100">Saving changes</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Please wait — your edits are being saved to the database.</div>
            </div>
          </div>
        </div>
      )}
      <div className="min-h-[200px] border rounded-md p-1 bg-background">
        <SimpleEditor editor={editor} />
      </div>

      <div className="mt-2">
        <TagInput
          id={id}
          tags={tags}
          setTags={setTags}
          disabled={isSaving}
          placeholder="Categories..."
          enableAutocomplete={true}
          autocompleteOptions={allCategories}
          // Use React state for the typed input and a nicer case-insensitive substring match
          onInputChange={(value: string) => setTagInputValue(value)}
          autocompleteFilter={(optionText: string) => optionText.toLowerCase().includes(tagInputValue.toLowerCase())}
          styleClasses={{
            inlineTagsContainer:
              "border-input rounded-md bg-background shadow-xs transition-[color,box-shadow] focus-within:border-ring outline-none focus-within:ring-[3px] focus-within:ring-ring/50 p-1 gap-1",
            input: "w-full min-w-[80px] shadow-none px-2 h-8",
            autoComplete: {
              popoverTrigger: "",
              popoverContent: "mt-1 w-64 max-h-56 overflow-auto bg-white dark:bg-neutral-900 rounded-md shadow-lg ring-1 ring-black/5",
              commandList: "py-1",
              commandItem: "px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer",
              commandGroup: "",
            },
            tag: {
              body: "h-7 relative bg-background border border-input hover:bg-background rounded-md font-medium text-xs ps-2 pe-7",
              closeButton:
                "absolute -inset-y-px -end-px p-0 rounded-e-md flex size-7 transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] text-muted-foreground/80 hover:text-foreground",
            },
          }}
          activeTagIndex={activeTagIndex}
          setActiveTagIndex={setActiveTagIndex}
        />
      </div>

      <div className="gap-6 flex justify-end">
        <Button
          onClick={handleReset}
          disabled={isSaving}
          variant="destructive"
          className="mt-4 cursor-pointer"
        >
          Reset
        </Button>

        <Button
          onClick={handleSave}
          disabled={isSaving}
          className="mt-4 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white"
        >
          {isSaving ? "Saving..." : "Submit Changes"}
        </Button>
      </div>
    </div>
  );
}

import { generateHTML } from '@tiptap/html';
import ClientLoadedSignal from "@/app/[lang]/wiki/[slug]/[bias]/(client-renders)/load-signal";
import StarterKit from "@tiptap/starter-kit";
import Heading from '@tiptap/extension-heading'
import Blockquote from '@tiptap/extension-blockquote'
import Superscript from "@tiptap/extension-superscript";
// Paragraph styling moved to wrapper to avoid styling nested paragraphs
import TextAlign from "@tiptap/extension-text-align";
import Subscript from "@tiptap/extension-subscript";
import Image from "@tiptap/extension-image";
import { Selection } from "@tiptap/extensions"
import { createColGroup, TableKit } from '@tiptap/extension-table'
import { Table, TableRow, TableCell, TableHeader } from '@tiptap/extension-table'
import Typography from "@tiptap/extension-typography";
import { ImageUploadNode } from "@/app/(components)/ui/tiptap-node/image-upload-node"
import { AudioUploadNode } from "@/app/(components)/ui/tiptap-node/audio-upload-node"
import { VideoUploadNode } from "@/app/(components)/ui/tiptap-node/video-upload-node";
import Link from 'next/link';
import { BulletList, ListItem, OrderedList } from '@tiptap/extension-list';
import { DOMOutputSpec } from '@tiptap/pm/model';
import { mergeAttributes } from '@tiptap/react';

export default function Read({ slug, lang, bias, revision }: { slug: string, lang: string, bias: string, revision: any }) {
  // If this revision has been flagged as violating law, do not render its
  // content. Instead show a clear blocked message to the user.
  if (revision?.violatesLaw) {
    return (
      <>
        <ClientLoadedSignal />
        <div className="w-full flex flex-col items-center justify-center p-6">
          <div className="text-6xl mb-4">🚫</div>
          <div className="text-lg font-semibold mb-2">Content not allowed</div>
          <div className="text-sm text-muted-foreground text-center max-w-xl">
            This revision has been blocked because it was reported as violating applicable laws or site policy. You cannot view the content of this revision.
          </div>
        </div>
      </>
    )
  }
  const doc = {
    type: "doc",
    content: !!revision?.revisionBlocks ? revision.revisionBlocks.map((rb: any) => rb.block.content) : [],
  }

  const categories: any[] = [];

  if (!!revision.article) {
    revision.article.categories?.forEach((cat: any) => {
      categories.push(cat.category.name);
    });
  }

  if (!revision) {
    return (
      <div>
        <ClientLoadedSignal />
      </div>
    );
  }

  return (
    <>
      <ClientLoadedSignal />
      <div
        className="generated-html [&>p]:mb-[20px] [&>img]:mb-[20px] min-w-0 w-full"
        dangerouslySetInnerHTML={{
          __html: generateHTML(doc,
            [
              // disable starter kit's built-in heading so we can provide a custom one
              StarterKit.configure({
                underline: false,
                strike: false,
                link: {
                  openOnClick: false,
                  enableClickSelection: true,
                },
                heading: false,
                // disable built-in blockquote so we can register a custom-styled one below
                blockquote: false,
              }),
              // custom heading extension that adds Tailwind classes to h2
              Heading.extend({
                renderHTML({ node, HTMLAttributes }) {
                  const level = node.attrs.level || 1;
                  const tag = `h${level}`;
                  const title = node.textContent;
                  const id = title.replace(/\s+/g, '_');
                  const existing = HTMLAttributes.class ? HTMLAttributes.class + ' ' : '';
                  if (level == 1) {
                    return [tag, { ...HTMLAttributes, class: `${existing}text-2xl font-bold mt-8 mb-4 heading-anchor`, id: id }, 0];
                  }
                  if (level === 2) {
                    return [tag, { ...HTMLAttributes, class: `${existing}text-xl font-semibold mt-6 mb-2 heading-anchor`, id: id }, 0];
                  }
                  if (level == 3) {
                    return [tag, { ...HTMLAttributes, class: `${existing}text-lg font-semibold mt-4 mb-2 heading-anchor`, id: id }, 0];
                  }
                  return [tag, HTMLAttributes, 0];
                }
              }),
              // custom blockquote styling (Tailwind classes)
              Blockquote.extend({
                renderHTML({ HTMLAttributes }) {
                  const existing = HTMLAttributes.class ? HTMLAttributes.class + ' ' : '';
                  return ['blockquote', { ...HTMLAttributes, class: `${existing}border-l-4 pl-4 pr-4 italic text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 rounded-md py-2 my-4` }, 0];
                }
              }),
              TextAlign.configure({ types: ["heading", "paragraph"] }),
              Image,
              // custom list styling: add Tailwind classes to ul/ol/li
              ListItem.extend({
                renderHTML({ HTMLAttributes }) {
                  const existing = HTMLAttributes.class ? HTMLAttributes.class + ' ' : '';
                  // ensure each list item has comfortable spacing and wraps long words
                  // do NOT set display:block here — list markers require display:list-item
                  return ['li', { ...HTMLAttributes, class: `${existing}mb-2 leading-relaxed break-words min-w-0 whitespace-normal` }, 0];
                }
              }),
              BulletList.extend({
                renderHTML({ HTMLAttributes }) {
                  const existing = HTMLAttributes.class ? HTMLAttributes.class + ' ' : '';
                  // use outside markers and padding instead of list-inside to avoid marker overlap on small screens
                  return ['ul', { ...HTMLAttributes, class: `${existing}list-disc list-outside pl-5 mb-4 text-gray-700 dark:text-gray-300 min-w-0 w-full` }, 0];
                }
              }),
              OrderedList.extend({
                renderHTML({ HTMLAttributes }) {
                  const existing = HTMLAttributes.class ? HTMLAttributes.class + ' ' : '';
                  // decimal markers placed outside with padding for consistent layout on mobile
                  return ['ol', { ...HTMLAttributes, class: `${existing}list-decimal list-outside pl-5 mb-4 text-gray-700 dark:text-gray-300 min-w-0 w-full` }, 0];
                }
              }),
              Typography,
              Superscript,
              Subscript,
              TableKit.configure({
                tableHeader: {
                  HTMLAttributes: { class: 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-semibold text-left px-2' },
                },
                tableCell: {
                  HTMLAttributes: { class: 'px-2 border border-gray-200' },
                },
                table: {
                  HTMLAttributes: { class: 'table-auto w-11/12 mb-4 mx-6 !border !border-gray-300 !dark:border-gray-600 !rounded-lg' },
                  resizable: false,
                },
              }),

              /* Render HTML that mirrors the project's UI table components so
                 generated content uses the same DOM structure and classes. We
                 override only the Table, TableRow, TableHeader (th) and
                 TableCell (td) nodes to add wrapper, data-slot attributes and
                 classes. */
              Table.extend({
                renderHTML({ HTMLAttributes }) {
                  return [
                    'div',
                    { class: 'relative w-full overflow-auto' },
                    ['table', mergeAttributes(HTMLAttributes, { 'data-slot': 'table', class: 'w-full caption-bottom text-sm' }), 0],
                  ] as DOMOutputSpec;
                },
              }),
              TableRow.extend({
                renderHTML({ HTMLAttributes }) {
                  return ['tr', mergeAttributes(HTMLAttributes, { 'data-slot': 'table-row', class: 'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors' }), 0] as DOMOutputSpec;
                },
              }),
              TableHeader.extend({
                renderHTML({ HTMLAttributes }) {
                  return ['th', mergeAttributes(HTMLAttributes, { 'data-slot': 'table-head', class: 'font-bold bg-accent h-12 px-3 text-left align-middle has-[role=checkbox]:w-px [&:has([role=checkbox])]:pr-0' }), 0] as DOMOutputSpec;
                },
              }),
              TableCell.extend({
                renderHTML({ HTMLAttributes }) {
                  return ['td', mergeAttributes(HTMLAttributes, { 'data-slot': 'table-cell', class: 'p-3 align-middle [&:has([role=checkbox])]:pr-0' }), 0] as DOMOutputSpec;
                },
              }),
              Selection,
              ImageUploadNode.configure({
                accept: "image/*",
              }),
              AudioUploadNode.configure({
                accept: "audio/*",
              }),
              VideoUploadNode.configure({
                accept: "video/*",
              }),
            ]
          )
        }} />

      <div className="self-stretch flex flex-col justify-start items-start gap-5 mt-6">
        <div className="self-stretch px-3 py-2.5 bg-orange-400/10 rounded-md inline-flex justify-start items-center gap-1.5 flex-wrap content-center">
          <div className="w-28 h-7 flex justify-start items-center">
            <div className="w-7 self-stretch p-1.5 rounded-md flex justify-center items-center gap-1.5">
              <div className="w-4 h-4 flex justify-start items-center gap-1.5">
                <div data-svg-wrapper="true" data-property-1="Category" className="relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 8H15.9565" stroke="#D8753C" strokeWidth="1.5" strokeLinecap="round">
                  </path>
                    <path d="M8.65234 12.2607H19.0002" stroke="#D8753C" strokeWidth="1.5" strokeLinecap="round">
                    </path>
                    <path d="M5 12.2607H5.0001" stroke="#D8753C" strokeWidth="1.5" strokeLinecap="round">
                    </path>
                    <path d="M8.65234 16.5215H19.0002" stroke="#D8753C" strokeWidth="1.5" strokeLinecap="round">
                    </path>
                    <path d="M5 16.5215H5.0001" stroke="#D8753C" strokeWidth="1.5" strokeLinecap="round">
                    </path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="justify-start text-neutral-800 dark:text-neutral-300 text-sm font-normal ml-2 leading-normal">Categories:</div>
          </div>
          <div className="flex flex-wrap items-center gap-1">
            {categories.map((cat: string, index: number) => (
              <div key={index} className="inline-flex items-center gap-2 px-2 rounded">
                <Link href={`/${lang}/wiki/Category${encodeURIComponent(':' + cat)}/${bias}`} className="hover:underline inline-flex items-center gap-2 whitespace-nowrap">
                  <svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="1.5" cy="2" r="1.5" fill="#D8753C"></circle></svg>
                  <div className="text-orange-400 text-sm font-normal leading-normal">{cat}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="self-stretch justify-start text-gray-500 text-sm font-normal  leading-normal">
          {dict.article.lastEdited} {new Date(wiki.timestamp).toLocaleString(lang, { dateStyle: 'long', timeStyle: 'medium' })} (UTC)
        </div> */}
      </div>
    </>
  )
}
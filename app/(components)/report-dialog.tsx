"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/app/(components)/ui/dialog";
import { Button } from "@/app/(components)/ui/button";
import { Textarea } from "@/app/(components)/ui/textarea";
import { Label } from "@/app/(components)/ui/label";

type ReportDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  targetId: string | number;
  targetType: 'thread' | 'revision' | 'comment';
  onSuccess?: () => void;
};

export function ReportDialog({ open, onOpenChange, targetId, targetType, onSuccess }: ReportDialogProps) {
  const [reason, setReason] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!reason.trim()) {
      setError("Please provide a reason for the report.");
      return;
    }
    if (reason.length > 2000) {
      setError("Reason must be 2000 characters or fewer.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: reason.trim(), type: targetType, id: targetId }),
      });

      if (!res.ok) {
        if (res.status === 401) {
          throw new Error("You must be logged in to report.");
        }
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || "Failed to submit report.");
      }

      setReason("");
      onOpenChange(false);
      onSuccess?.();
      // Optionally show a toast here? User didn't ask for one but good UX.
      // For now, relies on caller or just closing modal as indication.
      // Ideally we would trigger a toast but I don't see a toast context in the snippet provided, 
      // though typically shadcn/ui has one. I'll stick to simple behavior for now.
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Report {targetType}</DialogTitle>
          <DialogDescription>
            Please explain why this {targetType} violates our community guidelines.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="report-reason">Reason</Label>
            <Textarea
              id="report-reason"
              placeholder="Describe the issue..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="min-h-[100px]"
              disabled={submitting}
            />
            <div className="text-xs text-muted-foreground text-right">
              {reason.length}/2000
            </div>
          </div>
          {error && <div className="text-sm text-red-500 font-medium">{error}</div>}
          <DialogFooter>
            <Button className="cursor-pointer" variant="outline" type="button" onClick={() => onOpenChange(false)} disabled={submitting}>
              Cancel
            </Button>
            <Button className="cursor-pointer" type="submit" disabled={submitting || !reason.trim()}>
              {submitting ? "Submitting..." : "Submit Report"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

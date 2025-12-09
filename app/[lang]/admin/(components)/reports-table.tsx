"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/app/(components)/ui/table";
import { Badge } from "@/app/(components)/ui/badge";
import { Button } from "@/app/(components)/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/(components)/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/(components)/ui/dropdown-menu";
import { MoreHorizontal, ExternalLink, Ban, CheckCircle, XCircle, Trash2, Loader2, TriangleAlert } from "lucide-react";
import { resolveReport, banUser, toggleLawViolation } from "@/app/actions/admin-actions";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/app/(components)/ui/dialog";
import { Label } from "@/app/(components)/ui/label";
import { Input } from "@/app/(components)/ui/input";

export function ReportsTable({ initialReports, pageCount, currentPage, currentStatus, lang }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [filtersLoading, setFiltersLoading] = useState(false);
  const [loadingId, setLoadingId] = useState<number | null>(null);

  // Ban Dialog State
  const [banOpen, setBanOpen] = useState(false);
  const [banLoading, setBanLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [selectedBiasId, setSelectedBiasId] = useState<number | null>(null);
  const [banReason, setBanReason] = useState("");
  const [banDuration, setBanDuration] = useState("24"); // hours

  // Reset loading when data updates
  useEffect(() => {
    setFiltersLoading(false);
  }, [initialReports, searchParams]);

  const updateStatus = (status: string) => {
    setFiltersLoading(true);
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("status", status); // 'RESOLVED' mapped to UI 'Removed'
    params.set("page", "0");
    router.push(`${pathname}?${params.toString()}`);
  };

  const updatePage = (page: number) => {
    setFiltersLoading(true);
    const params = new URLSearchParams(searchParams?.toString() || "");
    params.set("page", String(page));
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleResolve = async (id: number, status: 'RESOLVED' | 'DISMISSED') => {
    setLoadingId(id);
    try {
      await resolveReport(id, status);
      router.refresh();
    } catch (e) {
      alert("Failed to update status");
    } finally {
      setLoadingId(null);
    }
  };

  const handleToggleLaw = async (report: any) => {
    setLoadingId(report.id);
    try {
      let entityId, entityType: any, currentVal;
      if (report.thread) { entityId = report.thread.id; entityType = 'THREAD'; currentVal = report.thread.violatesLaw; }
      else if (report.comment) { entityId = report.comment.id; entityType = 'COMMENT'; currentVal = report.comment.violatesLaw; }
      else if (report.revision) { entityId = report.revision.id; entityType = 'REVISION'; currentVal = report.revision.violatesLaw; }
      else if (report.blob) { entityId = report.blob.id; entityType = 'BLOB'; currentVal = report.blob.violatesLaw; }

      if (!entityType) return;

      await toggleLawViolation({
        entityId,
        entityType,
        isViolation: !currentVal
      });
      router.refresh();
    } catch (e: any) {
      alert(e.message || "Failed to toggle law violation");
    } finally {
      setLoadingId(null);
    }
  };

  // Helper to get target link
  const getTargetLink = (r: any) => {
    if (r.thread) {
      // We need the slug from the thread -> article relation
      const slug = r.thread.article?.slug || 'unknown';
      return `/${r.thread.language.toLowerCase()}/wiki/${slug}/${r.thread.biasId}/thread/${r.thread.id}`;
    }
    if (r.comment) {
      const slug = r.comment.thread?.article?.slug || 'unknown';
      const t = r.comment.thread;
      return `/${t.language.toLowerCase()}/wiki/${slug}/${t.biasId}/thread/${t.id}`;
    }
    if (r.revision) {
      return `/${r.revision.article.language.toLowerCase()}/wiki/${r.revision.article.slug}/${r.revision.bias.name}?revision=${r.revision.id}`;
    }
    return "#";
  };

  const handleBanClick = (report: any) => {
    let userToBan = null;
    let biasId = null;

    if (report.thread) {
      userToBan = report.thread.author;
      biasId = report.thread.biasId;
    } else if (report.comment) {
      userToBan = report.comment.author;
      biasId = report.comment.thread.biasId;
    } else if (report.blob) {
      userToBan = report.blob.uploadedBy;
      biasId = report.blob.biasId;
    } else if (report.revision) {
      // Best effort: take author of the first block in revisionBlocks if available
      if (report.revision.revisionBlocks?.length > 0) {
        userToBan = report.revision.revisionBlocks[0].block.author;
      }
      biasId = report.revision.biasId;
    }

    if (userToBan && biasId) {
      setSelectedUser(userToBan);
      setSelectedBiasId(biasId);
      setBanOpen(true);
    } else {
      alert("Could not identify the user or bias context to ban.");
    }
  };

  const executeBan = async () => {
    if (!selectedUser || !selectedBiasId) return;
    setBanLoading(true);
    try {
      await banUser({
        userId: selectedUser.id,
        biasId: selectedBiasId,
        reason: banReason,
        durationHours: Number(banDuration)
      });
      setBanOpen(false);
      setBanReason("");
      router.refresh();
    } catch (e: any) {
      alert(e.message || "Failed to ban user");
    } finally {
      setBanLoading(false);
    }
  };

  const isLawViolation = (r: any) => {
    // Need to safely check despite 'any'
    if (r.thread?.violatesLaw) return true;
    if (r.comment?.violatesLaw) return true;
    if (r.revision?.violatesLaw) return true;
    if (r.blob?.violatesLaw) return true;
    return false;
  };

  return (
    <div className="space-y-4">
      <Dialog open={banOpen} onOpenChange={setBanOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ban User</DialogTitle>
            <DialogDescription>
              You are dealing with {selectedUser?.name} ({selectedUser?.email}).<br />
              This will prevent them from posting in the current bias/context.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Use Default Duration</Label>
              <Select value={banDuration} onValueChange={setBanDuration}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="24">24 Hours</SelectItem>
                  <SelectItem value="72">3 Days</SelectItem>
                  <SelectItem value="168">1 Week</SelectItem>
                  <SelectItem value="720">30 Days</SelectItem>
                  <SelectItem value="8760">1 Year</SelectItem>
                  <SelectItem value="0">Permanent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="banByReason">Reason</Label>
              <Input id="banByReason" value={banReason} onChange={(e) => setBanReason(e.target.value)} placeholder="Violation of community guidelines..." />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setBanOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={executeBan} disabled={banLoading || !banReason}>
              {banLoading ? <Loader2 className="animate-spin h-4 w-4" /> : "Ban User"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Status:</span>
          <Select value={currentStatus} onValueChange={updateStatus} disabled={filtersLoading}>
            <SelectTrigger className="w-[180px]">
              {filtersLoading ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Loading...</span>
                </div>
              ) : (
                <SelectValue placeholder="Status" />
              )}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PENDING">Pending</SelectItem>
              <SelectItem value="RESOLVED">Removed</SelectItem>  {/* UI Mapping */}
              <SelectItem value="DISMISSED">Dismissed</SelectItem>
              <SelectItem value="ALL">All</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => updatePage(Math.max(0, currentPage - 1))} disabled={currentPage <= 0 || filtersLoading}>Previous</Button>
          <span className="text-sm">{currentPage + 1} / {pageCount || 1}</span>
          <Button variant="outline" size="sm" onClick={() => updatePage(currentPage + 1)} disabled={currentPage >= (pageCount - 1) || filtersLoading}>Next</Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Reporter</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {initialReports.map((report: any) => (
              <TableRow key={report.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {report.thread ? <Badge variant="outline">Thread</Badge> :
                      report.comment ? <Badge variant="outline">Comment</Badge> :
                        report.revision ? <Badge variant="outline">Revision</Badge> :
                          report.blob ? <Badge variant="outline">Media</Badge> : 'Unknown'}
                    {isLawViolation(report) && (
                      <Badge variant="destructive" className="flex items-center gap-1 text-[10px] px-1 h-5">
                        <TriangleAlert size={10} /> ILLEGAL
                      </Badge>
                    )}
                  </div>
                </TableCell>
                <TableCell className="max-w-[300px] truncate" title={report.reason}>
                  {report.reason}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {report.reportedBy.image && <img src={report.reportedBy.image} className="w-6 h-6 rounded-full" />}
                    <span className="text-xs">{report.reportedBy.name}</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">
                  {new Date(report.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge variant={report.status === 'PENDING' ? 'default' : report.status === 'RESOLVED' ? 'secondary' : 'outline'}>
                    {report.status === 'RESOLVED' ? 'REMOVED' : report.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0" disabled={loadingId === report.id}>
                        {loadingId === report.id ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <>
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <a href={getTargetLink(report)} target="_blank" rel="noopener noreferrer" className="flex items-center cursor-pointer">
                          <ExternalLink className="mr-2 h-4 w-4" /> View Context
                        </a>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleResolve(report.id, 'RESOLVED')} className="cursor-pointer">
                        <Trash2 className="mr-2 h-4 w-4 text-red-500" /> Remove
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleResolve(report.id, 'DISMISSED')} className="cursor-pointer">
                        <XCircle className="mr-2 h-4 w-4 text-gray-500" /> Dismiss
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleBanClick(report)} className="text-red-500 focus:text-red-500 cursor-pointer">
                        <Ban className="mr-2 h-4 w-4" /> Ban User
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleToggleLaw(report)} className="cursor-pointer text-orange-600 focus:text-orange-600">
                        <TriangleAlert className="mr-2 h-4 w-4" />
                        {isLawViolation(report) ? "Unmark Illegal" : "Mark Illegal"}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
            {initialReports.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center h-24 text-muted-foreground">
                  No reports found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
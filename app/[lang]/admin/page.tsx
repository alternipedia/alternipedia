import { fetchReports } from "@/app/actions/admin-actions";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { ReportsTable } from "./(components)/reports-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/(components)/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/(components)/ui/card";
import { Gavel, ShieldAlert, Users } from "lucide-react";

export default async function AdminPage({
  params,
  searchParams
}: {
  params: Promise<{ lang: string }>,
  searchParams: Promise<{ page?: string, status?: string }>
}) {
  const session = await getServerSession(authOptions);

  // Await params and searchParams (Next.js 15+ requirement)
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  if (!session?.user) {
    redirect(`/${resolvedParams.lang}`);
  }

  // Basic role check before fetching data
  // Note: fetchReports will double check, but good to redirect unauthorized users early
  // We need to fetch user role from DB if session is stale, but assuming session has updated role or we rely on action failure.
  // For better UX, let's assume if they have no role/moderation assignment, they shouldn't be here.
  // BUT the user menu only shows the link if they are auth.

  const page = Number(resolvedSearchParams.page) || 0;
  const statusFilter = (resolvedSearchParams.status as any) || 'PENDING';

  let data;
  try {
    data = await fetchReports({ page, status: statusFilter });
  } catch (e) {
    // If unauthorized, redirect
    redirect(`/${resolvedParams.lang}`);
  }

  return (
    <div className="mx-2 md:mx-auto md:container! py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Moderation Dashboard</h1>
          <p className="text-muted-foreground">Manage reports, bans, and community safety.</p>
        </div>
      </div>

      <Tabs defaultValue="reports" className="space-y-4">
        <TabsList>
          <TabsTrigger value="reports" className="flex items-center gap-2">
            <ShieldAlert size={16} />
            Reports
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users size={16} />
            User Management
          </TabsTrigger>
          <TabsTrigger value="bans" className="flex items-center gap-2">
            <Gavel size={16} />
            Bans
          </TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-4">
          <ReportsTable
            initialReports={data.reports}
            pageCount={data.pageCount}
            currentPage={page}
            currentStatus={statusFilter}
            lang={resolvedParams.lang}
          />
        </TabsContent>

        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Search and manage user roles (Coming soon).</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">User search and role assignment UI will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bans">
          <Card>
            <CardHeader>
              <CardTitle>Active Bans</CardTitle>
              <CardDescription>View and manage active bans (Coming soon).</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Ban list will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

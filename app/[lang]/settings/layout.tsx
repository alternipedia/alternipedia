export default async function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-96">{children}</div>;
}
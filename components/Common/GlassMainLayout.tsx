export default function GlassMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 space-y-2 bg-base-200/40">
      {children}
    </div>
  );
}

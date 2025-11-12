export default function GlassMainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 space-y-2 bg-[rgba(255,255,255,0.4)]">
      {children}
    </div>
  );
}

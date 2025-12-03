export default function GlassLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 bg-base-200/30 rounded-lg border border-base-300">
      {children}
    </div>
  );
}
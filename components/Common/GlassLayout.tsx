export default function GlassLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 bg-[rgba(255,255,255,0.3)] rounded-lg border border-gray-300">
      {children}
    </div>
  );
}
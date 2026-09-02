interface DividerProps {
  className?: string; // Clases CSS adicionales
}
export default function Divider({ className }: DividerProps) {
  return <hr className={`${className}`} />;
}
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string; // URL del enlace
  className?: string; // Clases CSS adicionales
  children: React.ReactNode; // Contenido del enlace
}
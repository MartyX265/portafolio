export interface TextProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement> {
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span"; // Tipo de texto
  className?: string; // Clases CSS adicionales
  children: React.ReactNode; // Texto 
}
export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  type?: "div" | "section" | "article" | "main" | "header" | "nav" | "footer"; // Tipo de contenedor
  children?: React.ReactNode; // Contenido del contenedor
  className?: string; // Clases CSS adicionales
}
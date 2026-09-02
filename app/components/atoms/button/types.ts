export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: "button" | "submit" | "reset"; // Tipo de botón
  className?: string; // Clases CSS adicionales
  children: React.ReactNode; // Contenido del botón
}
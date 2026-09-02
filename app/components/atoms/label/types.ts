export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string;
  className?: string; // Clases CSS adicionales
  text?: string; // Texto del label
  children?: React.ReactNode; // Contenido del label
}

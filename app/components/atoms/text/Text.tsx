import { TextProps } from "./types";


export default function Text({ type, className, children }: TextProps) {
  const Component = type || "span"; // Componente por defecto si no se especifica el tipo
  return (
    <Component className={className}>
      {children}
    </Component>
  );
};

import { ContainerProps } from "./types";

export default function Container({ type, className, children }: ContainerProps) {
  const Component = type || "div";
  return (
    <Component className={className}>
      {children}
    </Component>
  );
};

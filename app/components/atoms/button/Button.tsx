import { ButtonProps } from "./types";


export default function Button({ type, className, children }: ButtonProps) {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};

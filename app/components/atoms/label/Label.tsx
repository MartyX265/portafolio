import { LabelProps } from "./types";

export default function Label({ htmlFor, className, text, children }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {text || children}
    </label>
  );
}
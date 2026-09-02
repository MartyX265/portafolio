import { PillProps } from "./types";

export default function Pill({ text, className }: PillProps) {
  return (
    <span
      className={`w-fit flex flex-row justify-start gap-2 items-center rounded-full px-4 py-2 border ${className}`}
    >
      <div className="bg-[#2b7fff] size-3 rounded-full" />
      {text}
    </span>
  );
}

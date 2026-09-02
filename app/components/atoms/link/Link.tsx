import { LinkProps } from "./types";

export default function Link({ href, className, children }: LinkProps) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

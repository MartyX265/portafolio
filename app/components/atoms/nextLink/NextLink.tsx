import Link from "next/link";
import { NextLinkProps } from "./types";

export default function NextLink({ href, className, children }: NextLinkProps) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

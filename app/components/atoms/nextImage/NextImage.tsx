import Image from "next/image";
import { ImageProps } from "./types";

export default function NextImage({
  src,
  alt,
  className,
  width,
  height,
}: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
    />
  );
}

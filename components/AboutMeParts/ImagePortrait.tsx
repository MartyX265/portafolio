import Image from "next/image";
export default function ImagePortrait() {
  return (
    <div className="flex justify-center">
      <div className="hidden md:block">
        <Image
          src={"https://placehold.co/500"}
          alt={"About Me Image"}
          width={500}
          height={500}
          unoptimized
          className="rounded-lg"
        />
      </div>
      <div className="block md:hidden">
        <Image
          src={"https://placehold.co/200"}
          alt={"About Me Image"}
          width={200}
          height={200}
          unoptimized
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

import Image from "next/image";
export default function ImagePortrait() {
  return (
    <div className="flex justify-center">
      <div className="hidden md:block">
        <Image
          src={"/backgrounds/my-photo.png"}
          alt={"About Me Image"}
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
      <div className="block md:hidden">
        <Image
          src={"/backgrounds/my-photo.png"}
          alt={"About Me Image"}
          width={200}
          height={200}
          className="rounded-lg"
        />
      </div>
    </div>
  );
}

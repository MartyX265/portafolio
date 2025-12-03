import Image from "next/image";

interface Props {
  title: string;
  imageUrl: string;
}

export default function TechCard({ title, imageUrl }: Props) {
  return (
    <div className="p-4">
      <div className="flex flex-col justify-center items-center p-2 rounded-lg bg-gray-100/15">
        <div>
          <Image src={imageUrl} alt={title} width={100} height={100} />
        </div>
        <h3 className="font-semibold text-lg md:text-2xl">{title}</h3>
      </div>
    </div>
  );
}

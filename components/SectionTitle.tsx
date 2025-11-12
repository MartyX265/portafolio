import GlassLayout from "./Common/GlassLayout";

interface Props{
    title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <GlassLayout>
      <h2 className="text-center text-3xl font-bold">{title}</h2>
    </GlassLayout>
  );
}

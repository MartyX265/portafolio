interface Props {
    iconUrl:string;
}
export default function TechBadge({ iconUrl }: Props) {
  return (
    <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.7)]">
      <img src={iconUrl} alt="Tech Logo" className="size-8 md:size-12" />
    </div>
  );
}

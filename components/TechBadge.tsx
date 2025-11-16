interface Props {
  iconUrl: string;
  link: string;
}
export default function TechBadge({ iconUrl, link }: Props) {
  return (
    <div className="p-2 rounded-lg bg-[rgba(255,255,255,0.7)]">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={iconUrl} alt="Tech Logo" className="size-8 md:size-12" />
      </a>
    </div>
  );
}

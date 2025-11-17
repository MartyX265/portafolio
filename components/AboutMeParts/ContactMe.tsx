interface Props{
  url: string;
  iconUrl: string;
}

export default function ContactMe({url, iconUrl}: Props) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img
        src={iconUrl}
        alt="Contact Icon"
        className="size-8"
      />
    </a>
  );
}

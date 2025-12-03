interface Props{
  url: string;
  icon:React.ReactNode;
}

export default function ContactMe({url, icon}: Props) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
}

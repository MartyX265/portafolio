import { Container, Text } from "../../atoms";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  titleStyles?: string;
  subtitleStyles?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  titleStyles,
  subtitleStyles,
}: SectionTitleProps) {
  return (
    <Container type="div" className="flex flex-col gap-2">
      <Text type="h2" className={`${titleStyles}`}>
        {title}
      </Text>
      <Text type="p" className={`${subtitleStyles}`}>
        {subtitle}
      </Text>
    </Container>
  );
}

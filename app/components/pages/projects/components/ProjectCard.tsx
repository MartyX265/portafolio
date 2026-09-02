import { Container, NextImage, Text, Link } from "@/app/components/atoms";
import { Project } from "@/app/redux/api/project.api";
import { FiArrowUpRight } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project: { title, description, techs, links, imageUrl, altTitle },
}: ProjectCardProps) {
  return (
    <Container className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:gap-12 p-4 text-center lg:text-left">
      <Container className="block md:hidden">
        <NextImage
          src={imageUrl}
          alt={altTitle}
          width={400}
          height={300}
          className="border border-gray-500 bg-accent"
        />
      </Container>
      <Container className="hidden md:block">
        <NextImage
          src={imageUrl}
          alt={altTitle}
          width={700}
          height={400}
          className="border border-gray-500 bg-accent"
        />
      </Container>

      <Container className="flex flex-col justify-center gap-4 space-y-2 md:space-y-3 lg:space-y-4">
        <Container className="space-y-4">
          <Text
            type="h3"
            className="font-bold text-2xl md:text-3xl lg:text-4xl"
          >
            {title}
          </Text>
          <Text className="text-gray-500 md:text-lg lg:text-xl">
            {description}
          </Text>
        </Container>
        <Container className="flex flex-row justify-center lg:justify-start log:text-lg *:border-[#27272a] *:bg-[#18181b] gap-2">
          {techs.map((tech, index) => (
            <Container key={index} className="border p-2">
              {tech}
            </Container>
          ))}
        </Container>
        <Container className="flex flex-row justify-center lg:justify-start items-center gap-2">
          {links.repository && (
            <Link href={links.repository}>
              <Container className="flex flex-row items-center gap-2 text-[#2b7fff] text-xl border-b border-[#2b7fff]">
                <Text>Repositorio</Text>
                <FiArrowUpRight />
              </Container>
            </Link>
          )}
          {links.live && (
            <Link href={links.live}>
              <Container className="flex flex-row items-center gap-2 text-[#2b7fff] text-xl border-b border-[#2b7fff]">
                <Text>Ver Proyecto</Text>
                <FiArrowUpRight />
              </Container>
            </Link>
          )}
        </Container>
      </Container>
    </Container>
  );
}

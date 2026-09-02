"use client";
import { useGetProjectsQuery } from "@/app/redux/api/project.api";
import { Container, Divider, Text } from "../../atoms";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  const {
    data: projects,
    isLoading,
    isError,
    isSuccess,
  } = useGetProjectsQuery();

  return (
    <Container type="section" className="p-2 md:p-10 lg:px-48 space-y-3">
      {isLoading && (
        <Text className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl">
          Cargando proyectos...
        </Text>
      )}
      {isError && (
        <Text className="text-center text-red-500 text-lg md:text-xl lg:text-2xl">
          Error al cargar los proyectos.
        </Text>
      )}
      {isSuccess && projects?.length === 0 && (
        <Text className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl">
          No hay proyectos disponibles.
        </Text>
      )}
      {isSuccess && projects?.length > 0 && (
        <>
          <Container className="flex justify-center md:justify-start items-center gap-2 font-bold text-xl md:text-2xl lg:text-3xl">
            <Text>PROYECTOS</Text>
            <Text className="text-[#2b7fff]">/</Text>
            <Text>DESTACADOS</Text>
          </Container>
          <Divider className="border-gray-500" />
          <Container className="flex flex-col lg:*:even:flex-row-reverse gap-4 md:gap-8 lg:gap-12">
            {projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Container>
        </>
      )}
    </Container>
  );
}

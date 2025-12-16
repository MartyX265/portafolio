"use client";
import { Project } from "@/app/redux/api/project.api";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: Project[];
}

export default function ProjectGrid({ projects }: Props) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={t(`projects.project${project.id}.name`)}
          description={t(`projects.project${project.id}.description`)}
          imageUrl={project.imageUrl}
          techs={project.techs}
        />
      ))}
    </div>
  );
}

"use client";
import { useTranslation } from "react-i18next";
import GlassMainLayout from "./Common/GlassMainLayout";
import SectionTitle from "./SectionTitle";
import { useGetProjectsQuery } from "@/app/redux/api/project.api";
import ProjectGrid from "./ProjectGrid";

export default function ProjectSection() {
  const {
    data: projects,
    isLoading,
    isError,
    isSuccess,
  } = useGetProjectsQuery();
  const { t } = useTranslation();
  return (
    <section>
      <GlassMainLayout>
        <SectionTitle title={t("projects.title")} />
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error loading projects</p>}
        {isSuccess && <ProjectGrid projects={projects} />}
      </GlassMainLayout>
    </section>
  );
}

"use client";
import TechCard from "./TechCard";
import Title from "./AboutMeParts/Title";
import ContactMeButtons from "./AboutMeParts/ContactMeButtons";
import Description from "./AboutMeParts/Description";
import SectionTitle from "./SectionTitle";
import ImagePortrait from "./AboutMeParts/ImagePortrait";
import GlassMainLayout from "./Common/GlassMainLayout";
import GlassLayout from "./Common/GlassLayout";
import { useTranslation } from "react-i18next";
import { useGetTechQuery } from "@/app/redux/api/tech.api";
import TechGrid from "./TechGrid";

export default function AboutMeSection() {
  const { data: techs, isLoading, isError, isSuccess } = useGetTechQuery();
  const { t } = useTranslation();
  return (
    <section>
      <GlassMainLayout>
        <SectionTitle title={t("aboutMe.title")} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <GlassLayout>
            <ImagePortrait />
            <div>
              <Title />
              <ContactMeButtons />
              <Description />
            </div>
          </GlassLayout>
          <GlassLayout>
            <h3 className="text-2xl text-center font-bold p-3">
              {t("aboutMe.technologies")}
            </h3>
            <div>
              {isLoading && <p>Loading...</p>}
              {isError && <p>Error loading technologies.</p>}
              {isSuccess && (
                <TechGrid techs={techs} />
              )}
            </div>
          </GlassLayout>
        </div>
      </GlassMainLayout>
    </section>
  );
}

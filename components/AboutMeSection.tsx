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

export default function AboutMeSection() {
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <TechCard title={"HTML 5"} imageUrl={"/commonIcons/html5.svg"} />
              <TechCard title={"CSS 3"} imageUrl={"/commonIcons/css3.svg"} />
              <TechCard title={"JavaScript"} imageUrl={"/commonIcons/javascript.svg"} />
              <TechCard title={"ReactJS"} imageUrl={"/commonIcons/react.svg"} />
              <TechCard title={"NextJS"} imageUrl={"/commonIcons/nextjs.svg"} />
              <TechCard title={"TypeScript"} imageUrl={"/commonIcons/typescript.svg"} />
              <TechCard title={"TailwindCSS"} imageUrl={"/commonIcons/tailwindcss.svg"} />
              <TechCard title={"Expo"} imageUrl={"/commonIcons/expo.svg"} />
              <TechCard title={"Redux Toolkit"} imageUrl={"/commonIcons/redux.svg"} />
              <TechCard title={"GitHub"} imageUrl={"/commonIcons/github.svg"} />
            </div>
          </GlassLayout>
        </div>
      </GlassMainLayout>
    </section>
  );
}

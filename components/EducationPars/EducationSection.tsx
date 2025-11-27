"use client";
import { useTranslation } from "react-i18next";
import GlassMainLayout from "../Common/GlassMainLayout";
import SectionTitle from "../SectionTitle";
import EducationRow from "./EducationRow";

export default function EducationSection() {
  const { t } = useTranslation();
  return (
    <section>
      <GlassMainLayout>
        <SectionTitle title={t("education.title")} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <EducationRow
            schoolName={t("education.education1.institution")}
            degree={t("education.education1.degree")}
            years={t("education.education1.year")}
            details={t("education.education1.details")}
          />
          <EducationRow
            schoolName={t("education.education2.institution")}
            degree={t("education.education2.degree")}
            years={t("education.education2.year")}
            details={t("education.education2.details")}
          />
          <EducationRow
            schoolName={t("education.education3.institution")}
            degree={t("education.education3.degree")}
            years={t("education.education3.year")}
            details={t("education.education3.details")}
          />
        </div>
      </GlassMainLayout>
    </section>
  );
}

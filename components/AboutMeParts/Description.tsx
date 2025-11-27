"use client";

import { useTranslation } from "react-i18next";

export default function Description() {
  const { t } = useTranslation();
  return (
    <div className="p-2">
      <p className="text-center md:text-lg">
          {t("aboutMe.content")}
      </p>
    </div>
  );
}

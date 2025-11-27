"use client";

import { useTranslation } from "react-i18next";

export default function HeroBanner() {
  const {t}= useTranslation();
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(/backgrounds/heroBackground.jpeg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{t("heroBanner.greeting")}</h1>
          <p className="mb-5 text-2xl">
            {t("heroBanner.description")}
          </p>
        </div>
      </div>
    </div>
  );
}

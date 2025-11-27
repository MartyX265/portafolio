"use client";
import { clsx } from "clsx";
import Image from "next/image";
import { useTranslation } from "react-i18next";
interface Props {
  language: string;
  flagSrc: string;
  dataLng: string;
}
export default function LanguageSelectorBtn({
  language,
  flagSrc,
  dataLng,
}: Props) {
  const { i18n } = useTranslation();

  return (
    <button
      className={clsx(
        "btn  rounded-full",
        i18n.language == dataLng && "btn-disabled bg-gray-200"
      )}
      onClick={() => i18n.changeLanguage(dataLng)}
    >
      <div className="flex flex-row gap-4 items-center">
        <Image src={flagSrc} alt={language} width={32} height={32} />
        <span className="text-lg font-semibold">{language}</span>
      </div>
    </button>
  );
}

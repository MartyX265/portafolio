"use client";
import LanguageSelectorBtn from "./Common/LanguageSelectorBtn";
import Main from "./Main";
import "@/app/utils/i18n";
import { useTranslation } from "react-i18next";

export default function Drawer() {
  const { t } = useTranslation();
  return (
    <div className="drawer">
      <input id="drawer-menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Contenido principal */}
        <Main />
      </div>
      <div className="drawer-side bg-[rgba(0,0,0,0.4)]">
        <label
          htmlFor="drawer-menu"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[rgba(255,255,255,0.5)] backdrop-blur-sm min-h-full w-80 p-4 gap-2">
          <span className="text-center font-semibold text-lg">
            {t("drawer.selectLanguage")}
          </span>
          <li>
            <LanguageSelectorBtn
              language={"English"}
              flagSrc={"/commonIcons/flagUS.svg"}
              dataLng={"en"}
            />
          </li>
          <li>
            <LanguageSelectorBtn
              language={"Español"}
              flagSrc={"/commonIcons/flagES.svg"}
              dataLng={"es"}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

"use client";
import { useEffect } from "react";

import "@/app/utils/i18n";
import { useTranslation } from "react-i18next";
import { themeChange } from "theme-change";
import { Main } from "../../pages";

export default function Drawer() {
  const { t } = useTranslation();

  useEffect(() => {
    themeChange(true); // Forzar color oscuro
  }, []);

  return (
    <div className="drawer">
      <input id="drawer-menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Contenido principal */}
        <Main />
      </div>
      <div className="drawer-side bg-base-200/40 backdrop-blur-sm">
        <label
          htmlFor="drawer-menu"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-300 backdrop-blur-sm min-h-full w-80 p-4 gap-2">
          <span className="text-center font-semibold text-lg">
            {t("drawer.selectTheme")}
          </span>
          <li>
            <select data-choose-theme className="select w-full max-w-xs">
              <option value="light">{t("drawer.themes.light")}</option>
              <option value="dark">{t("drawer.themes.dark")}</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
}

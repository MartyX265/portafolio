"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
export default function Navbar() {
  const {t,i18n} = useTranslation();
  return (
    <div className="navbar bg-[rgba(255,255,255,0.4)] shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{t("navbar.title")}</a>
      </div>
      <div className="flex-none">
        <label htmlFor="drawer-menu" className="btn btn-ghost btn-circle">
          <Image src="/modernIcons/menu.svg" alt="Open Drawer" width={24} height={24}/>
        </label>
      </div>
    </div>
  );
}

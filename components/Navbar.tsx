"use client";
import { useTranslation } from "react-i18next";
import { MdOutlineMenu } from "react-icons/md";
export default function Navbar() {
  const {t} = useTranslation();
  return (
    <div className="navbar bg-base-200/40 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{t("navbar.title")}</a>
      </div>
      <div className="flex-none">
        <label htmlFor="drawer-menu" className="btn btn-ghost btn-circle">
          <MdOutlineMenu size={24} />
        </label>
      </div>
    </div>
  );
}

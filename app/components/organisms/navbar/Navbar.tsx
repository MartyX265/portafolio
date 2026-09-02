"use client";

import { Container, Link } from "../../atoms";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <Container type="nav" className="navbar bg-base-200/40 border-b-2 border-[#165ffc] backdrop-blur-sm">
      <Container className="flex-1">
        <Link className="btn btn-ghost text-xl" href={"#"}>{t("navbar.title")}</Link>
      </Container>
      <Container className="flex-none">
      </Container>
    </Container>
  );
}

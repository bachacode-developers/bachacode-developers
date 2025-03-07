import Image from "next/image";
import { Link } from "@/i18n/routing";
import React from "react";
import BachacodeLogoRemoveBg from "@/assets/images/bachacode-removebg.png";
import LanguageSwitcher from "../common/LanguageSwitcher";
import { useLocale, useTranslations } from "next-intl";
import NavMenu from "../common/NavMenu";
import MenuLink from "../common/MenuLink";

export default function MainHeader() {
  const locale = useLocale();

  const t = useTranslations("navigation");

  return (
    <header className="fixed start-0 top-0 z-20 w-full border-b bg-white">
      <nav className="relative mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between py-4 lg:flex-nowrap lg:px-6">
        <Link href="/" className="flex items-center space-x-2 pl-8 lg:pl-0">
          <Image
            src={BachacodeLogoRemoveBg}
            alt="Header bachacode logo"
            style={{ height: "auto", width: "180px" }}
          />
        </Link>

        <div className="flex flex-row items-center gap-8 lg:flex-row-reverse">
          <LanguageSwitcher currentLocale={locale}></LanguageSwitcher>

          <NavMenu>
            <MenuLink href="/">{t("home")}</MenuLink>
            <MenuLink href="/about-us">{t("about_us")}</MenuLink>
            <MenuLink href="/services">{t("services")}</MenuLink>
            <MenuLink href="/portfolio">{t("portfolio")}</MenuLink>
            <MenuLink href="/contact">{t("contact")}</MenuLink>
          </NavMenu>
        </div>
      </nav>
    </header>
  );
}

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import React from "react";
import BachacodeLogoNoBg from "@/assets/images/bachacode-removebg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import BachacodeMiniLogo from "@/assets/images/bachacode-mini.png";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";
import { Pathname } from "@/i18n/routing";
import { Button } from "../ui/button";

interface FooterLink {
  href: Pathname;
  label: string;
}

export default function MainFooter() {
  const t = useTranslations("common");

  const discoverLinks: FooterLink[] = [
    { href: "/", label: t("navigation.main.home") },
    { href: "/about-us", label: t("navigation.main.about_us") },
    { href: "/services", label: t("navigation.main.services") },
    { href: "/portfolio", label: t("navigation.main.portfolio") },
  ];

  const legalLinks: FooterLink[] = [
    { href: "/legal/terms", label: t("navigation.legal.terms") },
    { href: "/legal/privacy", label: t("navigation.legal.privacy") },
    { href: "/legal/cookies", label: t("navigation.legal.cookies") },
  ];

  return (
    <footer className="flex w-full justify-center bg-white">
      <div className="w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between md:px-3">
          {/* Logo */}
          <div className="mb-6 hidden md:mb-0 md:block">
            <Link href="/" className="flex items-center">
              <Image
                src={BachacodeLogoNoBg}
                alt="Bachacode Logo"
                style={{ height: "auto", width: "180px" }}
              />
            </Link>
          </div>
          {/* Links */}
          <div className="flex flex-col items-center gap-8 px-6 md:grid md:grid-cols-3 md:items-start md:px-0">
            {/* Legal Links */}
            <div className="text-center md:text-left">
              <h3 className="pb-3 font-semibold uppercase">{"legal"}</h3>
              <ul className="text-muted-foreground space-y-2 font-medium">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main Links */}
            <div className="text-center md:text-left">
              <h3 className="pb-3 font-semibold uppercase">
                {t("footer.discover")}
              </h3>
              <ul className="text-muted-foreground space-y-2 font-medium">
                {discoverLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div className="text-center md:text-left">
              <h3 className="pb-3 font-semibold uppercase">
                {t("footer.contact")}
              </h3>
              <ul className="text-muted-foreground space-y-2 font-medium">
                <li>
                  <a
                    target="_blank"
                    href="mailto:support@bachacode.com"
                    className="hover:text-primary flex items-center space-x-2 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-xl"
                    ></FontAwesomeIcon>
                    <span>support@bachacode.com</span>
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+584121163349"
                    className="hover:text-primary flex items-center space-x-2 transition-colors"
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-xl"
                    ></FontAwesomeIcon>
                    <span>+58 412-1163349</span>
                  </a>
                </li>

                <li className="py-3">
                  <Button
                    size="lg"
                    className="rounded px-6 py-3 uppercase"
                    asChild
                  >
                    <Link href="/contact">{t("footer.contact_us")}</Link>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
        <div className="flex flex-col items-center space-y-3 md:flex-row md:justify-between md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="block md:hidden">
              <Link href="/" className="flex items-center">
                <Image
                  src={BachacodeMiniLogo}
                  alt="Bachacode Mini Logo for mobile"
                  style={{ height: "auto", width: "70px" }}
                />
              </Link>
            </div>
            <span className="text-sm text-gray-500 md:text-center">
              © 2025{" "}
              <Link href="/" className="hover:underline">
                Bachacode Developers.
              </Link>
              {t("footer.copyright")}
            </span>
          </div>
          <div className="flex md:mt-0 md:justify-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/bachacode-developers/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-3xl"
              ></FontAwesomeIcon>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

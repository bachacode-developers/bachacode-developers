import ContactForm from "@/components/forms/ContactForm";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPaperPlane,
  faPhone,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";
import React from "react";
import { getTranslations } from "next-intl/server";
import { hasLocale, useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Card } from "@/components/cards/Card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getPathname } from "@/i18n/navigation";
import { generateWebPageSchema } from "@/lib/generateWebPageSchema";
import { StructuredData } from "@/components/layout/StructuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const defaultPath = "/contact";
  const pathname = getPathname({
    href: defaultPath,
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
  });

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
    namespace: "contact.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: pathname,
      languages: {
        en: getPathname({ href: defaultPath, locale: "en" }),
        es: getPathname({ href: defaultPath, locale: "es" }),
        "x-default": getPathname({
          href: defaultPath,
          locale: routing.defaultLocale,
        }),
      },
    },
  };
}

export default function Contact() {
  const t = useTranslations("contact");

  const locale = useLocale();
  const pathname = getPathname({
    locale,
    href: "/contact",
  });
  const webpageSchema = generateWebPageSchema({
    pathname,
    title: t("metadata.title"),
    description: t("metadata.description"),
    locale,
  });

  return (
    <StructuredData schemas={[webpageSchema]}>
      <main className="flex w-full flex-col items-center pb-8">
        <div className="bg-orange-primary-50 border-primary w-full border-y px-6 py-8 text-center">
          <div className="text-primary">
            <h1
              id="contact"
              className="pb-3 text-3xl font-semibold capitalize md:text-4xl"
            >
              {t("hero.title")}
            </h1>
            <p className="text-xl">{t("hero.subtitle")}</p>
          </div>
        </div>

        <div className="container px-12 pt-10">
          <div className="flex w-full flex-col-reverse justify-around gap-6 md:flex-row">
            {/* Contact Section */}
            <div className="w-full rounded pb-24 lg:w-6/12 lg:pb-12">
              <div className="space-y-1 pb-4 text-center md:text-left">
                <h2 className="text-2xl font-bold capitalize">
                  {t("form_section.title")}
                </h2>
                <span className="text-muted-foreground">
                  {t("form_section.subtitle")}
                </span>
              </div>
              <ContactForm />
            </div>
            {/* Info Section */}
            <div className="flex w-full flex-col items-center space-y-6 px-6 md:max-w-6/12">
              <div className="w-full pb-4 text-center md:text-left">
                <h2 className="text-2xl font-bold capitalize">
                  {t("info_section.title")}
                </h2>
                <span className="text-muted-foreground">
                  {t("info_section.subtitle")}
                </span>
              </div>
              <Card className="border-primary w-full py-4">
                <CardContent className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center text-base md:text-xl">
                      <FontAwesomeIcon icon={faEnvelope} className="pr-1.5" />
                      <span className="font-bold">
                        {t("info_section.cards.email.title")}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-lg font-extralight">
                      support@bachacode
                    </span>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="mailto:support@bachacode.com"
                        className="hover:bg-primary hover:text-primary-foreground text-primary flex cursor-pointer items-center rounded-lg bg-transparent px-3 py-2.5 transition-colors duration-300"
                      >
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          className="text-2xl"
                        />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      {t("info_section.cards.email.tooltip")}
                    </TooltipContent>
                  </Tooltip>
                </CardContent>
              </Card>

              <Card className="border-primary w-full py-4">
                <CardContent className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center text-base md:text-xl">
                      <FontAwesomeIcon icon={faPhone} className="pr-1.5" />
                      <span className="font-bold">
                        {t("info_section.cards.phone.title")}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-lg font-extralight">
                      +58 412-1163349
                    </span>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href="tel:+584121163349"
                        className="hover:bg-primary hover:text-primary-foreground text-primary flex cursor-pointer items-center rounded-lg bg-transparent px-3 py-2.5 transition-colors duration-300"
                      >
                        <FontAwesomeIcon
                          icon={faPhoneVolume}
                          className="text-2xl"
                        />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      {t("info_section.cards.phone.tooltip")}
                    </TooltipContent>
                  </Tooltip>
                </CardContent>
              </Card>

              <Card
                className="text-primary-foreground group w-full border-0 bg-green-600 py-0 font-light"
                hoverable
              >
                <a
                  href={`https://wa.me/584121163349?text=${t("info_section.cards.whatsapp.message")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 py-5"
                >
                  <CardHeader className="flex items-center text-xl md:text-2xl">
                    <FontAwesomeIcon icon={faWhatsapp} className="pr-1.5" />
                    <CardTitle>
                      {t("info_section.cards.whatsapp.title")}
                    </CardTitle>
                  </CardHeader>
                </a>
              </Card>

              <Card className="bg-orange-primary-50 border-primary hidden w-full space-y-3 border md:block">
                <CardHeader className="flex items-center text-2xl">
                  <CardTitle className="font-light">
                    {t("info_section.cards.quick_response.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {t("info_section.cards.quick_response.message")}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </StructuredData>
  );
}

import React from "react";
import PageSectionWrapper from "@/components/layout/PageSectionWrapper";
import Image from "next/image";
import ncWomanTypingOnMachine from "@/assets/images/nc-woman-typing-on-machine.png";
import ServiceCard, { Service } from "@/components/cards/ServiceCard";
import {
  faLightbulb,
  faCheckCircle,
  faHandshake,
  faCode,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import ContactSection from "@/components/sections/ContactSection";
import TeamCard from "@/components/cards/TeamCard";
import { Metadata } from "next";
import { hasLocale, useLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import UnderlinedText from "@/components/common/UnderlinedText";
import { Badge } from "@/components/ui/badge";
import { getPathname } from "@/i18n/navigation";
import { generateWebPageSchema } from "@/lib/generateWebPageSchema";
import { StructuredData } from "@/components/layout/StructuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const defaultPath = "/about-us";
  const pathname = getPathname({
    href: defaultPath,
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
  });

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
    namespace: "about_us.metadata",
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

export default function SobreNosotros() {
  const t = useTranslations("about_us");

  const locale = useLocale();
  const pathname = getPathname({
    locale,
    href: "/about-us",
  });
  const webpageSchema = generateWebPageSchema({
    pathname,
    title: t("metadata.title"),
    description: t("metadata.description"),
    locale,
  });

  const services: Service[] = [
    {
      title: t("our_values.cards.innovation.title"),
      description: t("our_values.cards.innovation.description"),
      icon: faLightbulb,
      iconColor: "text-selective-yellow-secondary-600",
      borderColor: "border-selective-yellow-secondary-600",
      accent: "bg-primary",
      color: "bg-selective-yellow-secondary-100",
    },
    {
      title: t("our_values.cards.quality.title"),
      description: t("our_values.cards.quality.description"),
      icon: faCheckCircle,
      iconColor: "text-accent",
      borderColor: "border-accent",
      accent: "bg-secondary",
      color: "bg-teal-blue-accent-100",
    },
    {
      title: t("our_values.cards.commitment.title"),
      description: t("our_values.cards.commitment.description"),
      icon: faHandshake,
      iconColor: "text-primary",
      borderColor: "border-primary",
      accent: "bg-accent",
      color: "bg-orange-primary-100",
    },
  ];

  return (
    <StructuredData schemas={[webpageSchema]}>
      <main className="w-full">
        {/* Hero section */}
        <div className="flex w-full flex-col items-center py-8">
          <div className="container">
            {/* Floating Elements */}
            <div className="relative">
              <div className="animate-float">
                <div className="bg-secondary absolute top-0 left-2/12 h-24 w-24 rounded-full opacity-40"></div>
              </div>
              <div className="animate-float" style={{ animationDelay: "1s" }}>
                <div className="bg-accent absolute top-20 right-4/12 h-16 w-16 rounded-full opacity-35"></div>
              </div>
              <div className="animate-float" style={{ animationDelay: "2s" }}>
                <div className="bg-primary absolute top-5 right-2/12 h-12 w-12 rounded-full opacity-20"></div>
              </div>
            </div>
            <div className="relative flex items-center justify-center md:space-x-8">
              {/* Image */}
              <div className="absolute flex h-full w-full flex-col items-center px-6 text-center opacity-20 md:relative md:right-0 md:w-1/2 md:px-0 md:opacity-100">
                <Image
                  src={ncWomanTypingOnMachine}
                  alt="Woman typing on a writing machine"
                  className="max-h-full max-w-full object-contain"
                  style={{ height: "auto", width: "100%" }}
                />
              </div>

              {/* Title & CTA */}
              <div className="flex w-full flex-col items-center space-y-6 text-center md:w-1/2">
                <div className="px-6 md:px-3">
                  <h1
                    id="hero"
                    className="pb-3 text-4xl font-bold tracking-widest lg:text-5xl"
                  >
                    {t.rich("hero.title", {
                      keyword: (chunks) => (
                        <UnderlinedText>{chunks}</UnderlinedText>
                      ),
                    })}
                  </h1>
                  <p className="text-muted-foreground text-xl">
                    {t("hero.description")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
              <Badge
                variant="outline"
                className="border-primary/60 rounded-full px-4 py-2"
              >
                <div className="bg-primary h-3 w-3 rounded-full"></div>
                <span className="text-foreground text-sm font-medium">
                  {t("hero.badges.custom_solutions")}
                </span>
              </Badge>
              <div className="from-primary to-secondary h-0.5 w-8 bg-gradient-to-r"></div>
              <Badge
                variant="outline"
                className="border-secondary/80 rounded-full px-4 py-2"
              >
                <div className="bg-secondary h-3 w-3 rounded-full"></div>
                <span className="text-foreground text-sm font-medium">
                  {t("hero.badges.customer_focus")}
                </span>
              </Badge>
              <div className="from-secondary to-accent h-0.5 w-8 bg-gradient-to-r"></div>
              <Badge
                variant="outline"
                className="border-accent/60 rounded-full px-4 py-2"
              >
                <div className="bg-accent h-3 w-3 rounded-full"></div>
                <span className="text-foreground text-sm font-medium">
                  {t("hero.badges.since")}
                </span>
              </Badge>
            </div>
          </div>
        </div>

        {/* Our values section */}
        <PageSectionWrapper
          titleId="our-values"
          titleName={t.rich("our_values.title", {
            keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText>,
          })}
          subtitle={t("our_values.subtitle")}
          altBackground
        >
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} index={index} service={service} />
            ))}
          </div>
        </PageSectionWrapper>

        {/* Our team */}
        <PageSectionWrapper
          titleId="team"
          titleName={t.rich("our_team.title", {
            keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText>,
          })}
          subtitle={t("our_team.subtitle")}
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TeamCard
              memberName={t("our_team.cards.cristhian.name")}
              profession={t("our_team.cards.cristhian.occupation")}
              description={t("our_team.cards.cristhian.body")}
              linkedinUrl="https://www.linkedin.com/in/cristhian-flo"
              githubUrl="https://github.com/bachacode"
              icon={faCode}
            />

            <TeamCard
              memberName={t("our_team.cards.josibel.name")}
              profession={t("our_team.cards.josibel.occupation")}
              description={t("our_team.cards.josibel.body")}
              linkedinUrl="https://www.linkedin.com/in/josibel-far%C3%ADas-espa%C3%B1a-b36390254"
              icon={faPalette}
            />
          </div>
        </PageSectionWrapper>

        {/* Contact Us */}
        <ContactSection />
      </main>
    </StructuredData>
  );
}

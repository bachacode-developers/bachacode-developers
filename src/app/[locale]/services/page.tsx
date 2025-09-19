import Image from "next/image";
import React from "react";
import ocOnTheLaptop from "@/assets/images/oc-on-the-laptop.svg";
import ocTakingNote from "@/assets/images/oc-taking-note.svg";
import ServiceCardAlt from "@/components/cards/ServiceCardAlt";
import {
  faCode,
  faHeadphones,
  faMessage,
  faPalette,
  faRocket,
  faServer,
  faShield,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import AdvantageCard from "@/components/cards/AdvantageCard";
import PageSectionWrapper from "@/components/layout/PageSectionWrapper";
import { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { getTranslations } from "next-intl/server";
import { hasLocale, useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { getPathname, Link } from "@/i18n/navigation";
import UnderlinedText from "@/components/common/UnderlinedText";
import TechCarouselAlt from "@/components/sections/TechCarouselAlt";
import { HostingServiceCard } from "./HostingServiceCard";
import { generateWebPageSchema } from "@/lib/generateWebPageSchema";
import { StructuredData } from "@/components/layout/StructuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const defaultPath = "/services";
  const pathname = getPathname({
    href: defaultPath,
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
  });

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
    namespace: "services.metadata",
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

export default function Servicios() {
  const t = useTranslations("services");

  const locale = useLocale();
  const pathname = getPathname({
    locale,
    href: "/services",
  });
  const webpageSchema = generateWebPageSchema({
    pathname,
    title: t("metadata.title"),
    description: t("metadata.description"),
    locale,
  });

  const services = [
    {
      title: t("services.cards.static.title"),
      description: t("services.cards.static.body"),
      icon: faWindowRestore,
      iconColor: "text-primary",
    },
    {
      title: t("services.cards.wordpress.title"),
      description: t("services.cards.wordpress.body"),
      icon: faWordpress,
      iconColor: "text-accent",
    },
    {
      title: t("services.cards.web-apps.title"),
      description: t("services.cards.web-apps.body"),
      icon: faCode,
      iconColor: "text-selective-yellow-secondary-500",
    },
    {
      title: t("services.cards.consulting.title"),
      description: t("services.cards.consulting.body"),
      icon: faMessage,
      iconColor: "text-primary",
    },
    {
      title: t("services.cards.support.title"),
      description: t("services.cards.support.body"),
      icon: faHeadphones,
      iconColor: "text-accent",
    },
    {
      title: t("services.cards.optimization.title"),
      description: t("services.cards.optimization.body"),
      icon: faRocket,
      iconColor: "text-selective-yellow-secondary-500",
    },
  ];

  return (
    <StructuredData schemas={[webpageSchema]}>
      <main className="w-full">
        {/* Hero section */}
        <div className="flex w-full flex-col items-center py-8">
          <div className="container">
            {/* Floating Elements */}
            <div className="relative hidden md:block">
              <div className="animate-float">
                <div className="bg-secondary absolute top-15 left-3/12 h-12 w-12 rounded-full opacity-40"></div>
              </div>
              <div className="animate-float" style={{ animationDelay: "1s" }}>
                <div className="bg-accent absolute top-25 right-3/12 h-24 w-24 rounded-full opacity-35"></div>
              </div>
              <div className="animate-float" style={{ animationDelay: "2s" }}>
                <div className="bg-primary absolute top-5 right-5/12 h-16 w-16 rounded-full opacity-20"></div>
              </div>
            </div>
            <div className="relative flex items-center justify-center md:space-x-8">
              {/* Title & CTA */}
              <div className="z-10 flex w-full flex-col items-center space-y-6 text-center md:w-1/2">
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
                    {t("hero.subtitle")}
                  </p>
                </div>
                <Button
                  size="lg"
                  className="rounded-sm px-8 py-6 text-lg uppercase"
                  asChild
                >
                  <Link href="/contact">{t("hero.button")}</Link>
                </Button>
              </div>
              {/* Image */}
              <div className="absolute z-0 flex h-full w-full flex-col items-center px-6 text-center opacity-20 md:relative md:right-0 md:w-1/2 md:px-0 md:opacity-100">
                <Image
                  src={ocOnTheLaptop}
                  alt="OC on the laptop hero image"
                  className="max-h-full max-w-full object-contain"
                  style={{ height: "auto", width: "80%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <PageSectionWrapper
          titleId="services"
          titleName={t.rich("services.title", {
            keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText>,
          })}
          subtitle={t("services.subtitle")}
          altBackground
        >
          {/* Service cards */}
          <div className="grid w-full gap-6 px-2 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCardAlt
                key={index}
                title={service.title}
                icon={service.icon}
                iconColor={service.iconColor}
              >
                {service.description}
              </ServiceCardAlt>
            ))}
          </div>
        </PageSectionWrapper>

        {/* Advantages Section */}
        <PageSectionWrapper
          titleId="advantages"
          titleName={t.rich("advantages.title", {
            keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText>,
          })}
          subtitle={t("advantages.subtitle")}
        >
          {/* Floating Elements */}
          <div className="relative hidden w-full md:block">
            <div className="animate-float">
              <div className="bg-secondary absolute top-25 left-2/12 h-12 w-12 rounded-full opacity-40"></div>
            </div>
            <div className="animate-float" style={{ animationDelay: "1s" }}>
              <div className="bg-accent absolute top-20 left-5/12 h-24 w-24 rounded-full opacity-35"></div>
            </div>
            <div className="animate-float" style={{ animationDelay: "2s" }}>
              <div className="bg-primary absolute top-35 left-4/12 h-16 w-16 rounded-full opacity-45"></div>
            </div>
          </div>

          <div className="relative flex w-full">
            {/* Image */}
            <div className="absolute flex h-full w-full flex-col items-center justify-center px-6 opacity-20 md:px-0 lg:relative lg:left-0 lg:w-1/2 lg:opacity-100">
              <Image
                src={ocTakingNote}
                height={152}
                width={145}
                alt="Header bachacode logo"
                style={{ height: "auto", width: "100%" }}
              />
            </div>

            {/* Advantages List */}
            <div className="relative z-10 flex w-full flex-col justify-stretch gap-6 px-2 md:px-12 lg:w-1/2">
              <AdvantageCard
                title={t("advantages.cards.hosting.title")}
                icon={faServer}
                iconColor="text-accent"
              >
                {t("advantages.cards.hosting.description")}
              </AdvantageCard>
              <AdvantageCard
                title={t("advantages.cards.design.title")}
                icon={faPalette}
                iconColor="text-accent"
              >
                {t("advantages.cards.design.description")}
              </AdvantageCard>

              <AdvantageCard
                title={t("advantages.cards.security.title")}
                icon={faShield}
                iconColor="text-accent"
              >
                {t("advantages.cards.security.description")}
              </AdvantageCard>

              <AdvantageCard
                title={t("advantages.cards.support.title")}
                icon={faHeadphones}
                iconColor="text-accent"
              >
                {t("advantages.cards.support.description")}
              </AdvantageCard>
            </div>
          </div>
        </PageSectionWrapper>

        {/* Technologies section */}
        <div className="bg-primary border-primary flex w-full justify-center border-y">
          <div className="container flex min-h-[160px] flex-col items-center gap-6 px-4 py-2 lg:flex-row">
            <div className="text-primary-foreground lg:w-5/12">
              <h2 id="technology" className="text-3xl font-semibold uppercase">
                {t("technologies.title")}
              </h2>
              <p className="text-xl font-extralight">
                {t("technologies.subtitle")}
              </p>
            </div>

            <div className="lg:w-7/12">
              <TechCarouselAlt></TechCarouselAlt>
            </div>
          </div>
        </div>
        {/* <PageSectionWrapper
        titleId="technology"
        titleName={t("technologies.title")}
        subtitle={t("technologies.subtitle")}
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <TechCard
            icon={faHtml5}
            className="group-hover:text-orange-600"
            title="HTML"
          ></TechCard>
          <TechCard
            icon={faCss3Alt}
            className="group-hover:text-blue-600"
            title="CSS"
          ></TechCard>
          <TechCard
            icon={faJsSquare}
            className="group-hover:text-yellow-500"
            title="JavaScript"
          ></TechCard>
          <TechCard
            icon={faReact}
            className="group-hover:text-blue-400"
            title="React.Js"
          ></TechCard>
          <TechCard
            icon={faVuejs}
            className="group-hover:text-emerald-500"
            title="Vue.Js"
          ></TechCard>
          <TechCard
            icon={faLaravel}
            className="group-hover:text-red-600"
            title="Laravel"
          ></TechCard>
          <TechCard
            icon={faWordpress}
            className="group-hover:text-blue-500"
            title="WordPress"
          ></TechCard>
          <TechCard
            icon={faPhp}
            title="PHP"
            className="group-hover:text-indigo-500"
          ></TechCard>
        </div>
      </PageSectionWrapper> 
      */}

        {/* Hosting section */}
        <PageSectionWrapper
          titleId="hosting"
          titleName={t.rich("hosting.title", {
            keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText>,
          })}
          subtitle={t("hosting.subtitle")}
        >
          {/* Hosting plans */}
          <div className="grid w-full grid-cols-1 gap-4">
            {[
              {
                title: t("hosting.cards.web.title"),
                description: t("hosting.cards.web.description"),
                features: [
                  {
                    title: t(
                      "hosting.cards.web.features.multiple_websites.title",
                    ),
                    description: t(
                      "hosting.cards.web.features.multiple_websites.description",
                    ),
                  },
                  {
                    title: t(
                      "hosting.cards.web.features.professional_email.title",
                    ),
                    description: t(
                      "hosting.cards.web.features.professional_email.description",
                    ),
                  },
                  {
                    title: t("hosting.cards.web.features.custom_php.title"),
                    description: t(
                      "hosting.cards.web.features.custom_php.description",
                    ),
                  },
                  {
                    title: t("hosting.cards.web.features.team_access.title"),
                    description: t(
                      "hosting.cards.web.features.team_access.description",
                    ),
                  },
                ],
              },
              {
                title: t("hosting.cards.cloud.title"),
                description: t("hosting.cards.cloud.description"),
                features: [
                  {
                    title: t(
                      "hosting.cards.cloud.features.dedicated_resources.title",
                    ),
                    description: t(
                      "hosting.cards.cloud.features.dedicated_resources.description",
                    ),
                  },
                  {
                    title: t("hosting.cards.cloud.features.auto_scaling.title"),
                    description: t(
                      "hosting.cards.cloud.features.auto_scaling.description",
                    ),
                  },
                  {
                    title: t(
                      "hosting.cards.cloud.features.high_concurrency.title",
                    ),
                    description: t(
                      "hosting.cards.cloud.features.high_concurrency.description",
                    ),
                  },
                  {
                    title: t(
                      "hosting.cards.cloud.features.flexible_stack.title",
                    ),
                    description: t(
                      "hosting.cards.cloud.features.flexible_stack.description",
                    ),
                  },
                ],
              },
            ].map((service, index) => (
              <HostingServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                reversed={index % 2 == 1}
              />
            ))}
          </div>
        </PageSectionWrapper>

        {/* Contact Us */}
        <ContactSection />
      </main>
    </StructuredData>
  );
}

import Image from "next/image";
import ServiceCard, { Service } from "@/components/cards/ServiceCard";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faComments,
  faDollar,
  faHeadphones,
  faMessage,
  faPuzzlePiece,
  faRocket,
  faWind,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import TechCarousel from "@/components/sections/TechCarousel";
import Heading from "@/components/common/Heading";
import TeamCard from "@/components/cards/TeamCard";
import OfferingCard from "@/components/cards/OfferingCard";
import bachacodeBig from "../../../public/images/bachacode-big.png";
import HomePageCounter from "@/components/sections/HomePageCounter";
import PageSectionWrapper from "@/components/layout/PageSectionWrapper";
import ContactSection from "@/components/sections/ContactSection";
import { hasLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import UnderlinedText from "@/components/common/UnderlinedText";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
    namespace: "home.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
        es: "/es",
        "x-default": "/",
      },
    },
  };
}

export default function Home() {
  const t = useTranslations("home");

  const services: Service[] = [
    {
      title: t("services.cards.static.title"),
      description: t("services.cards.static.body"),
      icon: faWindowRestore,
      iconColor: "text-selective-yellow-secondary-600",
      borderColor: "border-selective-yellow-secondary-600",
      accent: "bg-primary",
      color: "bg-selective-yellow-secondary-100",
      features: [
        t("services.cards.static.features.affordable"),
        t("services.cards.static.features.lightning_fast"),
        t("services.cards.static.features.short_delivery"),
      ],
    },
    {
      title: t("services.cards.wordpress.title"),
      description: t("services.cards.wordpress.body"),
      icon: faWordpress,
      iconColor: "text-accent",
      borderColor: "border-accent",
      accent: "bg-secondary",
      color: "bg-teal-blue-accent-100",
      features: [
        t("services.cards.wordpress.features.custom_plugins"),
        t("services.cards.wordpress.features.custom_themes"),
        t("services.cards.wordpress.features.seo_ready"),
      ],
    },
    {
      title: t("services.cards.web-apps.title"),
      description: t("services.cards.web-apps.body"),
      icon: faCode,
      iconColor: "text-primary",
      borderColor: "border-primary",
      accent: "bg-accent",
      color: "bg-orange-primary-100",
      features: [
        t("services.cards.web-apps.features.custom_features"),
        t("services.cards.web-apps.features.modern_tech"),
        t("services.cards.web-apps.features.scalable"),
      ],
    },
    {
      title: t("services.cards.consulting.title"),
      description: t("services.cards.consulting.body"),
      icon: faMessage,
      iconColor: "text-selective-yellow-secondary-600",
      borderColor: "border-selective-yellow-secondary-600",
      accent: "bg-primary",
      color: "bg-selective-yellow-secondary-100",
      features: [
        t("services.cards.consulting.features.best_practices"),
        t("services.cards.consulting.features.growth_focus"),
        t("services.cards.consulting.features.strategic"),
      ],
    },
    {
      title: t("services.cards.support.title"),
      description: t("services.cards.support.body"),
      icon: faHeadphones,
      iconColor: "text-accent",
      borderColor: "border-accent",
      accent: "bg-secondary",
      color: "bg-teal-blue-accent-100",
      features: [
        t("services.cards.support.features.bug_fixes"),
        t("services.cards.support.features.regular_updates"),
        t("services.cards.support.features.support_time"),
      ],
    },
    {
      title: t("services.cards.optimization.title"),
      description: t("services.cards.optimization.body"),
      icon: faRocket,
      iconColor: "text-primary",
      borderColor: "border-primary",
      accent: "bg-accent",
      color: "bg-orange-primary-100",
      features: [
        t("services.cards.optimization.features.seo_improvement"),
        t("services.cards.optimization.features.speed_boost"),
        t("services.cards.optimization.features.user_experience"),
      ],
    },
  ];

  return (
    <main className="w-full">
      {/* Hero section */}
      <div className="flex w-full flex-col items-center">
        <div className="container flex flex-col items-center justify-center space-y-8 py-8">
          {/* Title */}
          <div className="flex flex-col items-center text-center lg:w-1/2">
            <h1
              id="hero"
              className="mb-6 text-4xl leading-tight font-bold text-balance md:text-6xl"
            >
              {t.rich("hero.title", {
                websites: (chunks) => <UnderlinedText>{chunks}</UnderlinedText>,
              })}
            </h1>
            <p className="text-muted-foreground text-xl font-extralight">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* Contact Button */}
          <div className="flex flex-col gap-3 md:flex-row">
            <Button
              size="lg"
              className="rounded-sm px-8 py-6 text-lg uppercase"
              asChild
            >
              <Link href="/contact">{t("hero.primary_button")}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-sm bg-transparent px-8 py-6 text-lg uppercase"
              asChild
            >
              <Link href="/portfolio">{t("hero.secondary_button")}</Link>
            </Button>
          </div>
        </div>

        {/* Counter */}
        <HomePageCounter
          projects={t("counter.projects")}
          clients={t("counter.clients")}
          experience={t("counter.experience")}
        />
      </div>

      {/* Floating Elements */}
      <div className="relative mt-16">
        <div className="animate-float">
          <div className="bg-secondary absolute top-10 left-1/4 h-16 w-16 rounded-full opacity-40"></div>
        </div>
        <div className="animate-float" style={{ animationDelay: "1s" }}>
          <div className="bg-accent absolute top-20 right-1/3 h-12 w-12 rounded-full opacity-35"></div>
        </div>
        <div className="animate-float" style={{ animationDelay: "2s" }}>
          <div className="bg-primary absolute top-5 right-1/4 h-8 w-8 rounded-full opacity-20"></div>
        </div>
      </div>

      {/* About us section */}
      <div className="flex flex-col items-center p-6 lg:p-12">
        <div className="container flex w-full justify-around">
          <div className="relative flex flex-col items-center lg:w-7/12 lg:items-start lg:pr-6">
            <h2
              id="about"
              className="pb-4 text-center text-4xl font-bold lg:pb-0 lg:text-left"
            >
              {t("about.title")}
            </h2>
            <div className="border-primary mt-1.5 w-36 border-t-2 pb-6"></div>
            <p className="pb-3 text-base whitespace-pre-line lg:text-2xl">
              {t("about.body")}
            </p>

            <div className="absolute top-24 h-48 w-full max-w-sm self-center lg:hidden">
              <Image
                src="/images/bachacode-big.png"
                className="relative z-10 rounded-tl-xl rounded-r-xl opacity-20"
                alt="Bachacode logo"
                fill={true}
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>

          <div className="relative hidden h-48 w-full max-w-sm self-center lg:block">
            <Image
              src={bachacodeBig}
              className="relative z-10 rounded-tl-xl rounded-r-xl"
              alt="Bachacode logo"
              fill={true}
              style={{ objectFit: "contain" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Services section */}
      <PageSectionWrapper
        titleId="services"
        titleName={t.rich("services.title", {
          keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText>,
        })}
        subtitle={t("services.subtitle")}
        altBackground
      >
        <div className="flex flex-col flex-wrap items-stretch lg:flex-row">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-full p-2 lg:w-1/2 ${index % 2 === 1 ? "lg:mt-8" : ""} `}
            >
              <ServiceCard index={index} service={service} />
            </div>
          ))}
        </div>
      </PageSectionWrapper>

      {/* Tech Stack */}
      <div className="flex w-full flex-col items-center py-12">
        <Heading
          id="tech"
          title={t.rich("technologies.title", {
            keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText>,
          })}
          subtitle={t("technologies.subtitle")}
        />

        <div className="flex w-full flex-col items-center">
          <TechCarousel />
          <TechCarousel
            directionAS="backward"
            directionOpt="ltr"
            carouselIndex={3}
          />
        </div>
      </div>

      {/* Our clients */}
      <PageSectionWrapper
        titleId="clients"
        titleName={t.rich("clients.title", {
          keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText>,
        })}
        subtitle={t("clients.subtitle")}
        altBackground
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <TestimonialCard
            name={t("clients.testimonies.tailor.name")}
            profession={t("clients.testimonies.tailor.occupation")}
            testimony={t("clients.testimonies.tailor.body")}
          />

          <TestimonialCard
            name={t("clients.testimonies.mesgo.name")}
            profession={t("clients.testimonies.mesgo.occupation")}
            testimony={t("clients.testimonies.mesgo.body")}
          />
        </div>
      </PageSectionWrapper>

      {/* Our team */}
      <PageSectionWrapper
        titleId="team"
        titleName={t.rich("team.title", {
          keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText>,
        })}
        subtitle={t("team.subtitle")}
      >
        <div className="-mx-4 -mt-4 -mb-10 flex flex-wrap space-y-6 pb-16 sm:-m-4 md:space-y-0">
          <OfferingCard
            title={t("team.cards.development.title")}
            description={t("team.cards.development.body")}
            icon={faWind}
          />

          <OfferingCard
            title={t("team.cards.communication.title")}
            description={t("team.cards.communication.body")}
            icon={faComments}
          />

          <OfferingCard
            title={t("team.cards.prices.title")}
            description={t("team.cards.prices.body")}
            icon={faDollar}
          />

          <OfferingCard
            title={t("team.cards.flexible.title")}
            description={t("team.cards.flexible.body")}
            icon={faPuzzlePiece}
          />
        </div>

        <div className="flex w-full flex-col items-center justify-between lg:flex-row lg:items-start">
          <div className="flex w-full flex-col items-center space-y-2 self-start pb-12 lg:items-start">
            <p className="self-start text-2xl font-light">
              {t("team.members.prefix")}
            </p>
            <h3 className="text-primary text-center text-4xl font-semibold lg:text-left lg:text-6xl">
              {t("team.members.title")}
            </h3>
          </div>

          <div className="flex w-9/12 flex-col space-y-4">
            <TeamCard
              memberName={t("team.members.cristhian.name")}
              profession={t("team.members.cristhian.occupation")}
              description={t("team.members.cristhian.body")}
              linkedinUrl="https://www.linkedin.com/in/cristhian-flo"
              githubUrl="https://github.com/bachacode"
            />

            <TeamCard
              memberName={t("team.members.josibel.name")}
              profession={t("team.members.josibel.occupation")}
              description={t("team.members.josibel.body")}
              linkedinUrl="https://www.linkedin.com/in/josibel-far%C3%ADas-espa%C3%B1a-b36390254"
            />
          </div>
        </div>
      </PageSectionWrapper>
      {/* Steps */}

      {/* Contact Us */}
      <ContactSection />
    </main>
  );
}

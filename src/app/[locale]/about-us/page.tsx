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
import generateTitle from "@/utils/generateTitle";
import { Metadata } from "next";
import { hasLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import UnderlinedText from "@/components/common/UnderlinedText";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
    namespace: "about_us.metadata",
  });

  return {
    title: generateTitle(t("title")),
  };
}

export default function SobreNosotros() {
  const t = useTranslations("about_us");

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
    <main className="w-full">
      {/* Hero section */}
      <div className="w-full flex flex-col items-center pt-28 pb-8">
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
          <div className="relative flex justify-center items-center md:space-x-8">
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
                  {t.rich("hero.title", { keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText> })}
                </h1>
                <p className="text-xl text-muted-foreground">{t("hero.description")}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center flex-col md:flex-row items-center gap-4 mt-12">
            <Badge variant="outline" className="px-4 py-2 rounded-full border-primary/60">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm font-medium text-foreground">{t("hero.badges.custom_solutions")}</span>
            </Badge>
            <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
            <Badge variant="outline" className="px-4 py-2 rounded-full border-secondary/80">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
              <span className="text-sm font-medium text-foreground">{t("hero.badges.customer_focus")}</span>
            </Badge>
            <div className="w-8 h-0.5 bg-gradient-to-r from-secondary to-accent"></div>
            <Badge variant="outline" className="px-4 py-2 rounded-full border-accent/60">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm font-medium text-foreground">{t("hero.badges.since")}</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Our values section */}
      <PageSectionWrapper
        titleId="our-values"
        titleName={t.rich("our_values.title", { keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText> })}
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
        titleName={t.rich("our_team.title", { keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText> })}
        subtitle={t("our_team.subtitle")}
      >
        <div className="grid grid-cols-2 gap-4">
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
  );
}

import React from "react";
import { Metadata } from "next";
import PageSectionWrapper from "@/components/layout/PageSectionWrapper";
import ContactSection from "@/components/sections/ContactSection";
import { hasLocale, useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Badge } from "@/components/ui/badge";
import UnderlinedText from "@/components/common/UnderlinedText";
import MockupBrowserWindow from "./MockupBrowserWindow";
import { Button } from "@/components/ui/button";
import { getPathname, Link } from "@/i18n/navigation";
import { ProjectShowcaseList } from "./ProjectShowcase";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const defaultPath = "/portfolio";
  const pathname = getPathname({
    href: defaultPath,
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
  });

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
    namespace: "portfolio.metadata",
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

export default function Portfolio() {
  const t = useTranslations("portfolio");

  return (
    <main className="w-full">
      {/* Hero section */}
      <div className="flex w-full flex-col items-center py-8">
        <div className="relative container flex justify-center space-x-8 px-8">
          {/* Floating Elements */}
          <div className="absolute -z-10 w-full">
            <div
              className="bg-accent/20 absolute top-20 left-3/4 h-32 w-32 animate-bounce rounded-full lg:left-20"
              style={{ animationDelay: "0s", animationDuration: "3s" }}
            />
            <div
              className="bg-primary/20 absolute top-96 left-4/6 h-24 w-24 animate-bounce rounded-full lg:left-12"
              style={{ animationDelay: "1s", animationDuration: "4s" }}
            />
            <div
              className="bg-chart-4/30 absolute top-72 left-1/6 h-20 w-20 animate-bounce rounded-full lg:left-60"
              style={{ animationDelay: "2s", animationDuration: "5s" }}
            />
            <div
              className="bg-accent/15 absolute top-80 right-1/2 h-28 w-28 animate-bounce rounded-full lg:right-1/2"
              style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
            />
          </div>
          <div className="relative flex flex-col items-center space-y-3 text-center lg:w-5/12 lg:items-start lg:text-start">
            {/* Badge */}
            <Badge className="bg-orange-primary-50 border-primary text-primary border text-xl">
              {t("hero.badge")}
            </Badge>
            {/* Title & Subtitle */}
            <div>
              <h1
                id="hero"
                className="pb-3 text-7xl leading-14 font-bold tracking-widest lg:text-5xl"
              >
                {t.rich("hero.title", {
                  keyword: (chunks) => (
                    <UnderlinedText>{chunks}</UnderlinedText>
                  ),
                })}
              </h1>
              <p className="text-muted-foreground pb-6 text-xl">
                {t("hero.subtitle")}
              </p>

              <Button
                size="lg"
                className="rounded-sm px-8 py-6 text-lg uppercase"
                asChild
              >
                <Link href="/contact">{t("hero.button")}</Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden w-7/12 lg:block">
            {/* Main Visual Container */}
            <div className="from-primary/10 via-accent/10 to-chart-1/10 relative rounded-3xl bg-gradient-to-br p-8 shadow-2xl">
              {/* Mock Browser Windows */}
              <div className="space-y-6">
                {/* Browser Window 1 */}
                <MockupBrowserWindow
                  mockupUrl="restaurant-website.com"
                  tiltDirection="right"
                />

                {/* Browser Window 2 */}
                <MockupBrowserWindow
                  mockupUrl="ecommerce-store.com"
                  tiltDirection="left"
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 rounded-2xl border bg-white p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-primary text-2xl font-bold">15 +</div>
                  <div className="text-muted-foreground text-xs">
                    {t("hero.projects")}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 rounded-2xl border bg-white p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-accent text-2xl font-bold">100%</div>
                  <div className="text-muted-foreground text-xs">
                    {t("hero.success")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Galería de proyectos */}
      <PageSectionWrapper
        titleId="projects"
        titleName={t.rich("projects.title", {
          keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText>,
        })}
        subtitle={t("projects.subtitle")}
      >
        <ProjectShowcaseList />
      </PageSectionWrapper>

      {/* Contact Us */}
      <ContactSection />
    </main>
  );
}

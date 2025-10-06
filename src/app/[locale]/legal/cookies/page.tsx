import { hasLocale, useLocale, useTranslations } from "next-intl";
import { StructuredData } from "@/components/layout/StructuredData";
import { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import CookiebotDeclaration from "./CookiebotDeclaration";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const defaultPath = "/legal/cookies";
  const pathname = getPathname({
    href: defaultPath,
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
  });

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
    namespace: "legal.cookies.metadata",
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

export default function Cookies() {
  const t = useTranslations("legal.cookies");
  const locale = useLocale();
  return (
    <StructuredData schemas={[]}>
      <main className="container px-4 sm:px-6 lg:px-12">
        <h1 className="py-6 text-4xl font-bold">{t("page.title")}</h1>
        <CookiebotDeclaration locale={locale} />
      </main>
    </StructuredData>
  );
}

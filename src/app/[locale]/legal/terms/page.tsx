import { hasLocale, useTranslations } from "next-intl";
import LegalSection from "../LegalSection";
import { StructuredData } from "@/components/layout/StructuredData";
import { Metadata } from "next";
import { getPathname, Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const defaultPath = "/legal/terms";
  const pathname = getPathname({
    href: defaultPath,
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
  });

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
    namespace: "legal.terms.metadata",
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

export default function Terms() {
  const t = useTranslations("legal.terms");

  const br = () => (
    <>
      <br />
      <br />
    </>
  );

  return (
    <StructuredData schemas={[]}>
      <main className="container px-4 sm:px-6 lg:px-12">
        <h1 className="py-6 text-4xl font-bold">{t("page.title")}</h1>

        {/* Identity of Owner */}
        <LegalSection title={t("page.identity.title")}>
          {t.rich("page.identity.body", {
            email: (chunks) => (
              <a
                className="hover:text-primary font-bold underline transition-colors"
                href={`mailto:${chunks}`}
              >
                {chunks}
              </a>
            ),
            homepage: (chunks) => (
              <Link
                className="hover:text-primary font-bold underline transition-colors"
                href="/"
              >
                {chunks}
              </Link>
            ),
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </LegalSection>

        {/* Acceptane of Terms and Conditions */}
        <LegalSection title={t("page.acceptance.title")}>
          {t.rich("page.acceptance.body", {
            br,
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </LegalSection>

        {/* Purpose */}
        <LegalSection title={t("page.purpose.title")}>
          {t.rich("page.purpose.body", {
            list: (chunks) => (
              <ul className="list-inside list-disc space-y-1 pt-2 pb-5">
                {chunks}
              </ul>
            ),
            li: (chunks) => <li className="list-item">{chunks}</li>,
            strong: (chunks) => <strong>{chunks}</strong>,
            br,
          })}
        </LegalSection>

        {/* Use of the Website */}
        <LegalSection title={t("page.use.title")}>
          {t.rich("page.use.body", {
            list: (chunks) => (
              <ul className="list-inside list-disc space-y-1 pt-2">{chunks}</ul>
            ),
            li: (chunks) => <li className="list-item">{chunks}</li>,
            strong: (chunks) => <strong>{chunks}</strong>,
            br,
          })}
        </LegalSection>

        {/* Data Protection */}
        <LegalSection title={t("page.data_protection.title")}>
          {t.rich("page.data_protection.body", {
            link: (chunks) => (
              <Link
                className="hover:text-primary font-bold underline transition-colors"
                href="/legal/privacy"
              >
                {chunks}
              </Link>
            ),
          })}
        </LegalSection>

        {/* Cookies */}
        <LegalSection title={t("page.cookies.title")}>
          {t.rich("page.cookies.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
            link: (chunks) => (
              <Link
                className="hover:text-primary font-bold underline transition-colors"
                href="/legal/cookies"
              >
                {chunks}
              </Link>
            ),
          })}
        </LegalSection>

        {/* Intellectual Property */}
        <LegalSection title={t("page.intellectual_property.title")}>
          {t.rich("page.intellectual_property.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
            br,
          })}
        </LegalSection>

        {/* Liability */}
        <LegalSection title={t("page.liability.title")}>
          {t.rich("page.liability.body", {
            list: (chunks) => (
              <ul className="list-inside list-disc space-y-1 pt-2 pb-5">
                {chunks}
              </ul>
            ),
            li: (chunks) => <li className="list-item">{chunks}</li>,
            strong: (chunks) => <strong>{chunks}</strong>,
            br,
          })}
        </LegalSection>

        {/* Modifications */}
        <LegalSection title={t("page.modifications.title")}>
          {t.rich("page.modifications.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
            br,
          })}
        </LegalSection>

        {/* Severability and Validity of Clauses */}
        <LegalSection title={t("page.severability.title")}>
          {t.rich("page.severability.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </LegalSection>

        {/* Right of Exclusion */}
        <LegalSection title={t("page.exclusion.title")}>
          {t.rich("page.exclusion.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </LegalSection>

        {/* Applicable Law and Jurisdiction */}
        <LegalSection title={t("page.law_jurisdiction.title")}>
          {t.rich("page.law_jurisdiction.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </LegalSection>
      </main>
    </StructuredData>
  );
}

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

  const defaultPath = "/legal/privacy";
  const pathname = getPathname({
    href: defaultPath,
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
  });

  const t = await getTranslations({
    locale: hasLocale(routing.locales, locale) ? locale : routing.defaultLocale,
    namespace: "legal.privacy.metadata",
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

export default function Privacy() {
  const t = useTranslations("legal.privacy");

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

        {/* Privacy Policy */}
        <LegalSection title={t("page.privacy_policy.title")}>
          {t.rich("page.privacy_policy.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
            list: (chunks) => (
              <ul className="list-inside list-disc space-y-1 pt-2 pb-5">
                {chunks}
              </ul>
            ),
            li: (chunks) => <li className="list-item">{chunks}</li>,
            br,
          })}
        </LegalSection>

        {/* Data Controller */}
        <LegalSection title={t("page.data_controller.title")}>
          {t.rich("page.data_controller.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
            list: (chunks) => (
              <ul className="list-inside list-disc space-y-1 pt-2 pb-5">
                {chunks}
              </ul>
            ),
            li: (chunks) => <li className="list-item">{chunks}</li>,
            br,
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
          })}
        </LegalSection>

        {/* Purposes and Legal Bases of Processing */}
        <LegalSection title={t("page.purposes_legal_basis.title")}>
          {t.rich("page.purposes_legal_basis.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
            list: (chunks) => (
              <ul className="list-inside list-disc space-y-1 pt-2 pb-5">
                {chunks}
              </ul>
            ),
            li: (chunks) => <li className="list-item">{chunks}</li>,
          })}
        </LegalSection>

        {/* Types of Data Collected  */}
        <LegalSection title={t("page.data_types.title")}>
          {t.rich("page.data_types.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
            list: (chunks) => (
              <ul className="list-inside list-disc space-y-1 pt-2 pb-5">
                {chunks}
              </ul>
            ),
            li: (chunks) => <li className="list-item">{chunks}</li>,
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

        {/* Data retention  */}
        <LegalSection title={t("page.data_retention.title")}>
          {t.rich("page.data_retention.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
            list: (chunks) => (
              <ul className="list-inside list-disc space-y-1 pt-2 pb-5">
                {chunks}
              </ul>
            ),
            li: (chunks) => <li className="list-item">{chunks}</li>,
          })}
        </LegalSection>

        {/* Recipients of Data  */}
        <LegalSection title={t("page.data_recipients.title")}>
          {t.rich("page.data_recipients.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
            list: (chunks) => (
              <ul className="list-inside list-disc space-y-1 pt-2 pb-5">
                {chunks}
              </ul>
            ),
            li: (chunks) => <li className="list-item">{chunks}</li>,
          })}
        </LegalSection>

        {/* User Rights Regarding Personal Data  */}
        <LegalSection title={t("page.user_rights.title")}>
          {t.rich("page.user_rights.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
            list: (chunks) => (
              <ul className="list-inside list-disc space-y-1 pt-2 pb-5">
                {chunks}
              </ul>
            ),
            li: (chunks) => <li className="list-item">{chunks}</li>,
            email: (chunks) => (
              <a
                className="hover:text-primary font-bold underline transition-colors"
                href={`mailto:${chunks}`}
              >
                {chunks}
              </a>
            ),
            br,
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

        {/* Data Security */}
        <LegalSection title={t("page.data_security.title")}>
          {t.rich("page.data_security.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
            br,
          })}
        </LegalSection>

        {/* Modifications to the Privacy Policy */}
        <LegalSection title={t("page.policy_modifications.title")}>
          {t.rich("page.policy_modifications.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </LegalSection>

        {/* Links to Third-Party Websites */}
        <LegalSection title={t("page.third_party_links.title")}>
          {t.rich("page.third_party_links.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
            br,
          })}
        </LegalSection>

        {/* Questions About the Privacy Policy */}
        <LegalSection title={t("page.policy_questions.title")}>
          {t.rich("page.policy_questions.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
            br,
            email: (chunks) => (
              <a
                className="hover:text-primary font-bold underline transition-colors"
                href={`mailto:${chunks}`}
              >
                {chunks}
              </a>
            ),
          })}
        </LegalSection>

        {/* Acceptance and Consent */}
        <LegalSection title={t("page.acceptance_consent.title")}>
          {t.rich("page.acceptance_consent.body", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </LegalSection>
      </main>
    </StructuredData>
  );
}

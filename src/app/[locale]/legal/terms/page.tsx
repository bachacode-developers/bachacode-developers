import { StructuredData } from "@/components/layout/StructuredData";
import { useTranslations } from "next-intl";

export default function Terms() {
  const t = useTranslations("legal.terms");
  return (
    <StructuredData schemas={[]}>
      <main className="container px-12">
        <h1 className="py-6 text-4xl font-bold">{t("page.title")}</h1>
        <section className="pb-8">
          <h2 className="py-3 text-2xl font-semibold">
            {t("page.identity.title")}
          </h2>
          <p>
            {t.rich("page.identity.body", {
              email: (chunks) => (
                <a
                  className="hover:text-primary font-bold underline transition-colors"
                  href={`mailto:${chunks}`}
                >
                  {chunks}
                </a>
              ),
              website: (chunks) => (
                <a
                  className="hover:text-primary font-bold underline transition-colors"
                  href={`${chunks}`}
                >
                  {chunks}
                </a>
              ),
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </section>
        <section className="pb-8">
          <h2 className="py-3 text-2xl font-semibold">
            {t("page.acceptance.title")}
          </h2>
          <p>
            {t.rich("page.acceptance.body", {
              br: () => (
                <>
                  <br></br>
                  <br></br>
                </>
              ),

              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </p>
        </section>
        <section className="pb-8">
          <h2 className="py-3 text-2xl font-semibold">
            {t("page.purpose.title")}
          </h2>
          <p>
            {t.rich("page.purpose.body", {
              list: (chunks) => (
                <ul className="list-inside list-disc space-y-1">{chunks}</ul>
              ),
              li: (chunks) => <li className="list-item">{chunks}</li>,
              strong: (chunks) => <strong>{chunks}</strong>,
              br: () => <br></br>,
            })}
          </p>
        </section>
      </main>
    </StructuredData>
  );
}

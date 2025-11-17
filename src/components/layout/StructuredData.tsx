import { getLocale, getTranslations } from "next-intl/server";
import { ImageObject, Organization, Thing, WebSite } from "schema-dts";

export async function StructuredData({
  children,
  schemas = [],
}: {
  children: React.ReactNode;
  schemas: Thing[];
}) {
  const locale = await getLocale();
  const t = await getTranslations("common.metadata");
  // Organization Schema
  const organizationSchema: Organization = {
    "@type": "Organization",
    "@id": "https://bachacode.com/#organization",
    name: "Bachacode Developers",
    url: "https://bachacode.com",
    logo: {
      "@type": "ImageObject",
      "@id": "https://bachacode.com/#logo",
      inLanguage: locale,
      height: "95",
      width: "384",
      contentUrl: "https://bachacode.com/images/bachacode.png",
      url: "https://bachacode.com/images/bachacode.png",
      caption: "Bachacode Developers",
    },
    image: { "@id": "https://bachacode.com/#logo" },
    sameAs: [
      "https://www.linkedin.com/company/bachacode-developers",
      "https://github.com/bachacode-developers",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+584121163349",
      email: "support@bachacode.com",
      contactType: "customer service",
      areaServed: "worldwide",
      availableLanguage: ["Spanish", "English"],
    },
  };

  // Website Schema
  const websiteSchema: WebSite = {
    "@type": "WebSite",
    "@id": "https://bachacode.com/#website",
    name: "Bachacode Developers",
    url: "https://bachacode.com",
    description: t("website.description"),
    publisher: { "@id": "https://bachacode.com/#organization" },
    inLanguage: locale,
  };

  // Primary image schema
  const primaryImageSchema: ImageObject = {
    "@type": "ImageObject",
    "@id": "https://bachacode.com/#primaryimage",
    inLanguage: locale,
    height: "500",
    width: "500",
    contentUrl: "https://bachacode.com/images/bachacode-mini.png",
    url: "https://bachacode.com/images/bachacode-mini.png",
    caption: "Bachacode Developers",
  };

  const baseSchemas: Thing[] = [
    organizationSchema,
    websiteSchema,
    primaryImageSchema,
  ];

  return (
    <>
      {children}
      <script
        id="graph-seo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [...baseSchemas, ...schemas],
          }),
        }}
      />
    </>
  );
}

import { WebPage } from "schema-dts";

interface WebPageSchemaProps {
  pathname: string;
  title: string;
  description: string;
  locale: string;
}

export function generateWebPageSchema({
  pathname,
  title,
  description,
  locale,
}: WebPageSchemaProps): WebPage {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "https://bachacode.com";
  const canonicalUrl = pathname === "/" ? url : `${url}${pathname}`;

  return {
    "@type": "WebPage",
    "@id": canonicalUrl,
    url: canonicalUrl,
    name: title,
    description: description,
    isPartOf: { "@id": `${url}/#website` },
    about: { "@id": `${url}/#organization` },
    primaryImageOfPage: { "@id": `${url}/#primaryimage` },
    image: { "@id": `${url}/#primaryimage` },
    thumbnailUrl: `${url}/images/bachacode-mini.png`,
    inLanguage: locale,
    potentialAction: [{ "@type": "ReadAction", target: [canonicalUrl] }],
  };
}

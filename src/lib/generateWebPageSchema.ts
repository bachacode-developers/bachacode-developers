import { Action, WebPage } from "schema-dts";

interface WebPageSchemaProps {
  pathname: string;
  title: string;
  description: string;
  locale: string;
  potentialActions?: Action[];
}

export function generateWebPageSchema({
  pathname,
  title,
  description,
  locale,
  potentialActions,
}: WebPageSchemaProps): WebPage {
  const url = process.env.NEXT_PUBLIC_SITE_URL || "https://bachacode.com";
  const canonicalUrl = pathname === "/" ? url : `${url}${pathname}`;

  const defaultActions: Action[] = potentialActions || [
    {
      "@type": "ReadAction",
      target: [canonicalUrl],
    },
  ];

  return {
    "@type": "WebPage",
    "@id": canonicalUrl,
    url: canonicalUrl,
    name: `${title} | Bachacode Developers`,
    description: description,
    isPartOf: { "@id": `${url}/#website` },
    about: { "@id": `${url}/#organization` },
    primaryImageOfPage: { "@id": `${url}/#primaryimage` },
    image: { "@id": `${url}/#primaryimage` },
    thumbnailUrl: `${url}/images/bachacode-mini.png`,
    inLanguage: locale,
    potentialAction: defaultActions,
  };
}

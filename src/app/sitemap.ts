import { MetadataRoute } from "next";
import { Locale } from "next-intl";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Href = Parameters<typeof getPathname>[0]["href"];
const host = process.env.NEXT_PUBLIC_FRONTEND_URL ?? "https://bachacode.com";

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}

function getEntries(href: Href): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)]),
      ),
    },
    changeFrequency: "monthly",
    lastModified: new Date().toISOString(),
    priority: href === "/" ? 1.0 : 0.8,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...getEntries("/"),
    ...getEntries("/about-us"),
    ...getEntries("/services"),
    ...getEntries("/portfolio"),
    ...getEntries("/contact"),
    ...getEntries("/legal/terms"),
    ...getEntries("/legal/privacy"),
    ...getEntries("/legal/cookies"),
  ];
  return [...routes];
}

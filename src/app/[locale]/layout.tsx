import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import { hasLocale, NextIntlClientProvider, useTranslations } from "next-intl";
import ProgressBarProvider from "@/components/layout/ProgressBarProvider";
import { Analytics } from "@vercel/analytics/next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

const roboto = Roboto({ weight: "500", subsets: ["latin"], display: "swap" });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  const t = useTranslations("metadata");

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <Head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://bachacode.com/#organization",
              name: "Bachacode Developers",
              url: "https://bachacode.com",
              logo: {
                "@type": "ImageObject",
                "@id": "https://bachacode.com/#logo",
                inLanguage: locale,
                height: 95,
                width: 384,
                contentUrl: "https://bachacode.com/images/bachacode.png",
                url: "https://bachacode.com/images/bachacode.png",
                caption: "Bachacode Developers",
              },
              image: { "@id": "https://bachacode.com/#logo" },
              sameAs: [
                "https://www.linkedin.com/company/bachacode-developers",
                "https://github.com/bachacode",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+58 412 116 3349",
                email: "support@bachacode.com",
                contactType: "customer service",
                areaServed: "worldwide",
                availableLanguage: ["Spanish", "English"],
              },
            }),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://bachacode.com/#website",
              name: "Bachacode Developers",
              url: "https://bachacode.com",
              description: t("website.description"),
              publisher: { "@id": "https://bachacode.com/#organization" },
              inLanguage: locale,
            }),
          }}
        />
      </Head>
      <body className={`${roboto.className} bg-background/10`}>
        <NextIntlClientProvider>
          <ProgressBarProvider>
            <div className="flex min-h-screen w-full flex-col items-center">
              {/* Header */}
              <MainHeader></MainHeader>
              {/* Main Context */}
              {children}
              {/* Footer */}
              <MainFooter></MainFooter>
              <Analytics />
            </div>
          </ProgressBarProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import MainHeader from "@/components/layout/MainHeader";
import MainFooter from "@/components/layout/MainFooter";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import ProgressBarProvider from "@/components/layout/ProgressBarProvider";
import { Analytics } from "@vercel/analytics/next";
import { Roboto } from "next/font/google";

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

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale}>
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

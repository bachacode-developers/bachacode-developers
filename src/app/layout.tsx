import type { Metadata, Viewport } from "next";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL ?? "https://bachacode.com";

export const metadata: Metadata = {
  title: {
    default: "Bachacode Developers | Web Development & Consulting",
    template: "%s | Bachacode Developers",
  },
  description:
    "Bachacode Developers specializes in custom web development, offering static sites, web applications and WordPress, tailored to your needs.",
  keywords: [
    "web development",
    "programming",
    "wordpress",
    "php",
    "laravel",
    "support",
    "custom websites",
  ],
  authors: [{ name: "Cristhian Flores", url: "https://bachacode.com" }],
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: new URL("/", baseUrl).toString(),
    languages: {
      en: new URL("/", baseUrl).toString(),
      es: new URL("/es", baseUrl).toString(),
    },
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

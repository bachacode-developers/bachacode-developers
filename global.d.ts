import { routing } from "@/i18n/routing";
import messages from "./lang/en.json";
import common from "./lang/en/common.json";
import homepage from "./lang/en/homepage.json";
import aboutUs from "./lang/en/about_us.json";
import services from "./lang/en/services.json";
import portfolio from "./lang/en/portfolio.json";
import contact from "./lang/en/contact.json";
import terms from "./lang/en/legal/terms.json";
import privacy from "./lang/en/legal/privacy.json";
import cookies from "./lang/en/legal/cookies.json";

type Messages = typeof messages & {
  common: typeof common;
  homepage: typeof homepage;
  about_us: typeof aboutUs;
  services: typeof services;
  portfolio: typeof portfolio;
  contact: typeof contact;
  legal: {
    terms: typeof terms;
    privacy: typeof privacy;
    cookies: typeof cookies;
  };
};

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
  }
}

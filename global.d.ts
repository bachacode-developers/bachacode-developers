import { routing } from "@/i18n/routing";
import common from "./lang/en/common.json";
import homepage from "./lang/en/homepage.json";
import about_us from "./lang/en/about_us.json";
import services from "./lang/en/services.json";
import portfolio from "./lang/en/portfolio.json";
import contact from "./lang/en/contact.json";
import terms from "./lang/en/legal/terms.json";
import privacy from "./lang/en/legal/privacy.json";
import cookies from "./lang/en/legal/cookies.json";

type Messages = {
  common: typeof common;
  homepage: typeof homepage;
  about_us: typeof about_us;
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

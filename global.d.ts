import { routing } from "@/i18n/routing";
import messages from "./lang/en.json";
import common from "./lang/en/common.json";
import homepage from "./lang/en/homepage.json";
import aboutUs from "./lang/en/about_us.json";
import services from "./lang/en/services.json";

type Messages = typeof messages & {
  common: typeof common;
  homepage: typeof homepage;
  about_us: typeof aboutUs;
  services: typeof services;
};

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
  }
}

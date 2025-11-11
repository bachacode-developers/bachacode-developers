import { routing } from "@/i18n/routing";
// import test from "@/i18n/request";V
import messages from "./lang/en.json";
import homepage from "./lang/en/homepage.json";
import common from "./lang/en/common.json";

type Messages = typeof messages & {
  homepage: typeof homepage;
  common: typeof common;
};

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: Messages;
  }
}

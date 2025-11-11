import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const homepage = await import(`../../lang/${locale}/homepage.json`);

  const messages = {
    ...(await import(`../../lang/${locale}.json`)).default,
    homepage: { ...homepage },
  };

  return {
    locale,
    messages,
  };
});

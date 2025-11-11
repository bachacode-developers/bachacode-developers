import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const common = await import(`../../lang/${locale}/common.json`);
  const homepage = await import(`../../lang/${locale}/homepage.json`);
  const aboutUs = await import(`../../lang/${locale}/about_us.json`);
  const services = await import(`../../lang/${locale}/services.json`);
  const portfolio = await import(`../../lang/${locale}/portfolio.json`);
  const contact = await import(`../../lang/${locale}/contact.json`);

  const messages = {
    ...(await import(`../../lang/${locale}.json`)).default,
    common: { ...common },
    homepage: { ...homepage },
    about_us: { ...aboutUs },
    services: { ...services },
    portfolio: { ...portfolio },
    contact: { ...contact },
  };

  return {
    locale,
    messages,
  };
});

import React from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import UnderlinedText from "../common/UnderlinedText";

export default function ContactSection() {
  const t = useTranslations("common.contact_section");
  return (
    <div className="bg-orange-primary-50 border-primary flex w-full justify-center border-y py-6 md:py-20">
      <div className="container mx-auto flex max-w-3xl flex-col items-center space-y-6 px-12 text-2xl text-pretty md:items-start">
        <p className="font-semi-bold text-center md:text-start">
          {t.rich("body", {
            keyword: (chunks) => <UnderlinedText>{chunks}</UnderlinedText>,
          })}
        </p>

        <Button
          size="lg"
          className="rounded-sm px-8 py-6 text-lg uppercase"
          asChild
        >
          <Link href="/contact">{t("button")}</Link>
        </Button>
      </div>
    </div>
  );
}

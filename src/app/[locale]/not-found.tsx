import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import React from "react";
import { Button } from "@/components/ui/button";

export default function LocaleNotFound() {
  const t = useTranslations("common.not_found");
  return (
    <main className="bg-background">
      <div className="container mx-auto px-4 py-8 lg:px-6 lg:py-36">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-primary mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
            404
          </h1>
          <p className="text-foreground mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("title")}
          </p>
          <p className="text-muted-foreground mb-4 text-lg font-light">
            {t("description")}
          </p>
          <Button asChild className="rounded-sm px-8 py-6 text-lg uppercase">
            <Link href="/">{t("button")}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

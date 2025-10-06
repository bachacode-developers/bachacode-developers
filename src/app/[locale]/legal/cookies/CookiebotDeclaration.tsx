"use client";

import { useEffect, useRef } from "react";

export default function CookiebotDeclaration({ locale }: { locale: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    // Avoid injecting script multiple times
    if (document.getElementById("CookieDeclaration")) return;

    const script = document.createElement("script");
    script.id = "CookieDeclaration";
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://consent.cookiebot.com/${process.env.NEXT_PUBLIC_COOKIEBOT_DOMAIN_GROUP_ID}/cd.js`;
    script.setAttribute("data-culture", locale);

    wrapperRef.current.appendChild(script);

    return () => {
      // Optional cleanup: remove script when component unmounts
      script.remove();
    };
  }, []);

  return <div ref={wrapperRef} id="CookiebotDeclaration" />;
}

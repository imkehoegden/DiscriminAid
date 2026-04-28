"use client";

import Section from "./Section";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

type VideoProps = {
  title?: string;
  subtitle?: string;
  url: string;
};

export default function Video({ title, subtitle, url }: VideoProps) {
  if (!url) return null;

  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      setConsent(Cookies.get("vimeo_consent") === "true");
    };

    checkConsent();

    window.addEventListener("vimeo_consent_change", checkConsent);

    return () =>
      window.removeEventListener("vimeo_consent_change", checkConsent);
  }, []);

  const embedUrl = url.replace("vimeo.com", "player.vimeo.com/video");

  return (
    <Section>
      <div className="mb-6">
        {title && <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>}

        {subtitle && <p className="text-xl md:text-2xl mt-4">{subtitle}</p>}
      </div>
      {consent ? (
        <div className="w-full aspect-video">
          <iframe
            src={embedUrl}
            className="w-full h-full rounded-xl"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <p className="text-base md:text-lg font-[var(--font-body)]">
          Bitte akzeptiere Cookies, um dieses Video anzuzeigen.
        </p>
      )}
    </Section>
  );
}

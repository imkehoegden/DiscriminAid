"use client";

import Section from "./Section";
import { useState, useEffect } from "react";

type VideoProps = {
  title?: string;
  subtitle?: string;
  url: string;
};

export default function Video({ title, subtitle, url }: VideoProps) {
  if (!url) return null;

  // const [consent, setConsent] = useState(false);

  // useEffect(() => {
  //   const updateConsent = () => {
  //     setConsent(localStorage.getItem("vimeo_consent") === "true");
  //   };

  //   updateConsent();

  //   window.addEventListener("vimeo_consent_change", updateConsent);

  //   return () =>
  //     window.removeEventListener("vimeo_consent_change", updateConsent);
  // }, []);

  return (
    <Section>
      <div className="mb-6">
        {title && <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>}

        {subtitle && <p className="text-xl md:text-2xl mt-4">{subtitle}</p>}
      </div>
      {/* {consent ? (
        <div className="w-full aspect-video">
          <iframe
            src={`${url.replace("vimeo.com", "player.vimeo.com/video")}`}
            className="w-full h-full rounded-xl"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            loading="eager"
          />
        </div>
      ) : (
        <p>Bitte Cookies akzeptieren, um das Video zu sehen.</p>
      )} */}
      <div className="w-full aspect-video">
        <iframe
          src={`${url.replace("vimeo.com", "player.vimeo.com/video")}`}
          className="w-full h-full rounded-xl"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="eager"
        />
      </div>
    </Section>
  );
}

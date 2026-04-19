"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      cookieName="vimeo_consent"
      buttonText="Video anzeigen"
      enableDeclineButton
      declineButtonText="Nicht laden"
      onAccept={() => {
        localStorage.setItem("vimeo_consent", "true");
      }}
      onDecline={() => {
        localStorage.setItem("vimeo_consent", "false");
      }}
    >
      Dieses Video wird über Vimeo eingebettet. Dabei können Cookies gesetzt
      werden.
    </CookieConsent>
  );
}

// setzt Consent, Video-Komponente liest Consent wiederum aus

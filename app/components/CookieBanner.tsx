"use client";

import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";

export default function CookieBanner() {
  return (
    <CookieConsent
      cookieName="vimeo_consent"
      buttonText="Video anzeigen"
      enableDeclineButton
      declineButtonText="Nicht laden"
      onAccept={() => {
        Cookies.set("vimeo_consent", "true");
        window.dispatchEvent(new Event("vimeo_consent_change"));
      }}
      onDecline={() => {
        Cookies.set("vimeo_consent", "false");
        window.dispatchEvent(new Event("vimeo_consent_change"));
      }}
      style={{
        background: "#5b2c83",
        color: "#fff",
        fontSize: "16px",
      }}
      buttonStyle={{
        background: "#f08a24",
        color: "black",
        borderRadius: "30px",
        padding: "10px 20px",
        fontFamily: "var(--font-headings)",
        fontWeight: 600,
      }}
      declineButtonStyle={{
        background: "transparent",
        color: "#ffffff",
        border: "1px solid #ffffff",
        borderRadius: "30px",
        padding: "10px 20px",
        fontFamily: "var(--font-headings)",
        fontWeight: 600,
      }}
    >
      Videos werden über Vimeo geladen. Dabei können Cookies von Vimeo gesetzt
      werden.
    </CookieConsent>
  );
}

// setzt Consent, Video-Komponente liest Consent wiederum aus

"use client";

import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const setConsent = (key: string, value: boolean) => {
  Cookies.set(key, String(value), { expires: 30 });

  window.dispatchEvent(new Event(`${key}_change`));
};

const decided = () => {
  return (
    Cookies.get("vimeo_consent") !== undefined &&
    Cookies.get("donation_consent") !== undefined
  );
};

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [vimeoChoice, setVimeoChoice] = useState<boolean | null>(null);
  const [donationChoice, setDonationChoice] = useState<boolean | null>(null);

  useEffect(() => {
    setVisible(!decided());
  }, []);

  const handleConsent = (key: string, value: boolean) => {
    setConsent(key, value);

    setTimeout(() => {
      if (decided()) {
        setVisible(false);
      }
    }, 100);
  };

  if (!visible) return null;

  return (
    <div className="w-full px-20 py-10 p-8 fixed bottom-0 left-0 right-0 bg-[var(--secondary)] text-[var(--background)] text-[16px] flex flex-col gap-4 z-50">
      <p className="mb-4">
        Wir nutzen externe Inhalte von Vimeo sowie ein Spendenformular von
        bcause. Dabei können durch die jeweiligen Anbieter:innen Cookies gesetzt
        werden.
      </p>

      <div className="flex flex-wrap items-center gap-3">
        <span className="min-w-[200px]">Vimeo-Videos</span>

        <button
          onClick={() => {
            handleConsent("vimeo_consent", true);
            setVimeoChoice(true);
          }}
          className="bg-[var(--primary)] text-[var(--primarytext)] px-5 py-2 rounded-full semi-bold font-[var(--font-headings)] font-bold hover:bg-[var(--primarytext)] hover:text-[var(--background)] hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Anzeigen
        </button>

        <button
          onClick={() => {
            handleConsent("vimeo_consent", false);
            setVimeoChoice(false);
          }}
          className="bg-transparent text-[var(--background)] border border-[var(--background)] px-5 py-2 rounded-full font-[var(--font-headings)] font-bold hover:bg-[var(--primarytext)] hover:text-[var(--background)] hover:scale-105 transition-all duration-300 ease-in-out hover:border-transparent"
          //conditional rendering noch anpassen!!!
          // className={`px-5 py-2 rounded-full font-bold transition-all duration-300 ease-in-out font-[var(--font-headings)] ${
          //   vimeoChoice === false
          //     ? "bg-[var(--primarytext)] text-[var(--background)] scale-105"
          //     : "bg-transparent text-[var(--background)] border border-[var(--background)] hover:bg-[var(--primarytext)] hover:text-[var(--background)] hover:scale-105 hover:border-transparent"
          // }`}
        >
          Nicht laden
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="min-w-[200px]">Spendenformular</span>

        <button
          onClick={() => {
            handleConsent("donation_consent", true);
            setDonationChoice(true);
          }}
          className="bg-[var(--primary)] text-[var(--primarytext)] px-5 py-2 rounded-full font-[var(--font-headings)] font-bold hover:bg-[var(--primarytext)] hover:text-[var(--background)] hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Anzeigen
        </button>

        <button
          onClick={() => {
            handleConsent("donation_consent", false);
            setDonationChoice(false);
          }}
          className="bg-transparent text-[var(--background)] border border-[var(--background)] px-5 py-2 rounded-full font-[var(--font-headings)] font-bold hover:bg-[var(--primarytext)] hover:text-[var(--background)] hover:scale-105 transition-all duration-300 ease-in-out hover:border-transparent"
        >
          Nicht laden
        </button>
      </div>
    </div>
  );
}

// import CookieConsent from "react-cookie-consent";
// import Cookies from "js-cookie";

// export default function CookieBanner() {
//   return (
//     <CookieConsent
//       cookieName="vimeo_consent"
//       buttonText="Video anzeigen"
//       enableDeclineButton
//       declineButtonText="Nicht laden"
//       onAccept={() => {
//         Cookies.set("vimeo_consent", "true");
//         window.dispatchEvent(new Event("vimeo_consent_change"));
//       }}
//       onDecline={() => {
//         Cookies.set("vimeo_consent", "false");
//         window.dispatchEvent(new Event("vimeo_consent_change"));
//       }}
//       style={{
//         background: "#5b2c83",
//         color: "#fff",
//         fontSize: "16px",
//       }}
//       buttonStyle={{
//         background: "#f08a24",
//         color: "black",
//         borderRadius: "30px",
//         padding: "10px 20px",
//         fontFamily: "var(--font-headings)",
//         fontWeight: 600,
//       }}
//       declineButtonStyle={{
//         background: "transparent",
//         color: "#ffffff",
//         border: "1px solid #ffffff",
//         borderRadius: "30px",
//         padding: "10px 20px",
//         fontFamily: "var(--font-headings)",
//         fontWeight: 600,
//       }}
//     >
//       Videos werden über Vimeo geladen. Dabei können Cookies von Vimeo gesetzt
//       werden.
//     </CookieConsent>
//   );
// }

// setzt Consent, Video-Komponente liest Consent wiederum aus

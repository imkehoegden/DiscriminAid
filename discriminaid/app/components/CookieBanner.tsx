// import CookieConsent from "react-cookie-consent";

// export default function CookieBanner() {
//   return <CookieConsent>Diese Website nutzt Cookies.</CookieConsent>;
// }

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
        window.location.reload();
      }}
      onDecline={() => {
        window.location.reload();
      }}
    >
      Dieses Video wird über Vimeo eingebettet. Dabei können Cookies gesetzt
      werden.
    </CookieConsent>
  );
}

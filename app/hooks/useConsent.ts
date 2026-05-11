"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export function useConsent(key: string) {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const check = () => {
      setConsent(Cookies.get(key) === "true");
    };

    check();

    window.addEventListener(`${key}_change`, check);

    return () => {
      window.removeEventListener(`${key}_change`, check);
    };
  }, [key]);

  return consent;
}

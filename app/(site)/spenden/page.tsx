"use client";

import { useConsent } from "@/app/hooks/useConsent";

export default function DonationPage() {
  const consent = useConsent("donation_consent");

  return (
    <div className="w-full flex flex-col min-h-[calc(100vh-256px)]">
      <div className="w-full py-12 px-6 md:px-16">
        <h1 className="text-5xl text-center font-bold mb-12">Spenden!</h1>
      </div>

      <div className="bg-[var(--primary)] py-12 px-6 md:px-16 flex-1">
        {!consent ? (
          <div className="max-w-5xl mx-auto py-4 px-6 text-left flex flex-col gap-4">
            <p className="text-base md:text-lg font-[var(--font-body)] m-0">
              Bitte aktiviere die Spenden-Cookies, um das Spendenformular
              anzuzeigen.
            </p>
          </div>
        ) : (
          <iframe
            src="https://bcause.com/embed/transaction/frc-309996941579960320"
            className="block w-full max-w-[600px] min-h-[800px] rounded-[20px] border-0 mx-auto"
            allow="payment"
            loading="eager"
            title="Donation Form"
          />
        )}
      </div>
    </div>
  );
}

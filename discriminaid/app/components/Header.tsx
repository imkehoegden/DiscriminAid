import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="flex items-center justify-between px-15 py-10 gap-8 sticky"
        style={{ color: "var(--primarytext)" }}
      >
        <div>
          <Link href="/">
            <Image
              src="/DiscriminAid_Logo_ohneClaim_Freisteller.png"
              alt="DiscriminAid Logo"
              width={350}
              height={91.38}
              loading="eager"
              className="h-auto w-auto"
            />
          </Link>
        </div>
        <ul className="flex p-8 gap-8 items-center font-bold">
          <li>
            <Link href="/about">Wer wir sind</Link>
          </li>
          <li>
            <Link href="/service">Unterstützung finden</Link>
          </li>
          <li>
            <Link href="/magazin">Stimmen & Magazin</Link>
          </li>
          <li>
            <Link href="/spenden">
              <button
                style={{
                  padding: "8px 16px",
                  color: "#000",
                  background: "var(--fourth)",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Spenden! ♥
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

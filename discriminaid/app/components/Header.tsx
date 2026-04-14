"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <header className="fixed top-0 left-0 w-full z-50">
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <nav
        className="flex items-center justify-between px-20 py-10 gap-8 sticky"
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
        <ul className="flex gap-8 items-center font-bold">
          <li>
            <Link
              href="/about"
              className="nav cursor-pointer hover:text-[var(--secondarytext)] transition"
            >
              Wer wir sind
            </Link>
          </li>
          <li>
            <Link
              href="/service"
              className="nav cursor-pointer hover:text-[var(--secondarytext)] transition"
            >
              Unterstützung finden
            </Link>
          </li>
          <li>
            <Link
              href="/magazin"
              className="nav cursor-pointer hover:text-[var(--secondarytext)] transition"
            >
              Stimmen & Magazin
            </Link>
          </li>
          <li>
            <Link href="/spenden" className="cursor-pointer">
              <button className="donateButton">Spenden! ♥</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

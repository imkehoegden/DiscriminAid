"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header({ variant = "transparentOnHero" }) {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto"; // wenn menü offen ist, kann seine nicht scrollen
  }, [openMenu]);

  const [scrolled, setScrolled] = useState(false); // für weißen header

  const isTransparentHero = variant === "transparentOnHero";

  useEffect(() => {
    if (!isTransparentHero) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll); // damit scroll funktioniert
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTransparentHero]);

  return (
    <div aria-hidden={openMenu}>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? "bg-white" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-20 py-10 gap-8 sticky text-[var(--primarytext)]">
          <div>
            <Link href="/">
              <Image
                src="/DiscriminAid_Logo_ohneClaim_Freisteller.png"
                alt="DiscriminAid Logo"
                width={350}
                height={91}
                loading="eager"
                className="h-10 md:h-24 w-auto"
              />
            </Link>
          </div>
          <ul className="hidden md:flex gap-8 items-center font-bold">
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
            <a
              href="https://www.gofundme.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <button className="donateButton">Spenden! ♥</button>
            </a>
          </ul>

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-[60] relative"
            onClick={() => setOpenMenu(!openMenu)}
            aria-expanded={openMenu}
            aria-controls="mobile-menu"
            aria-label={openMenu ? "Menü schließen" : "Menü öffnen"}
          >
            <span
              className={`block w-8 h-0.5 transition duration-300 bg-black ${
                openMenu ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-8 h-0.5 transition bg-black ${
                openMenu ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-8 h-0.5 transition duration-300 bg-black ${
                openMenu ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>
      {/* overlay für mobile menü, also wenn openMenu = true, dann Fullscreen Menü */}
      {openMenu && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden font-bold">
          <Link
            href="/about"
            onClick={() => setOpenMenu(false)} {/* zum schließen des menüs */}
            className="nav"
          >
            Wer wir sind
          </Link>
          <Link
            href="/service"
            onClick={() => setOpenMenu(false)}
            className="nav"
          >
            Unterstützung finden
          </Link>
          <Link
            href="/magazin"
            onClick={() => setOpenMenu(false)}
            className="nav"
          >
            Stimmen & Magazin
          </Link>
          <a
            href="https://www.gofundme.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpenMenu(false)}
            className="nav"
          >
            <button className="donateButton">Spenden! ♥</button>
          </a>
        </div>
      )}
    </div>
  );
}

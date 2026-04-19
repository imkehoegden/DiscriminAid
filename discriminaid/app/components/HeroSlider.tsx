"use client";

import { useState } from "react";
import Link from "next/link";

type Slide = {
  background: string;
  title: string;
  subtitle: string;
  link: string;
};

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  if (!slides?.length) return null; // Fragezeichen hinzugefügt, damit App nicht crasht, wenn slides undefined ist. // greift also nur auf length zu, wenn slides "existiert"

  const current = slides[index];

  function nextSlide() {
    setIndex((prev) => (prev + 1) % slides.length); // modulo brauche ich, damit "Carousel" entsteht, also ein endloser Kreislauf :)
  }

  function prevSlide() {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }

  return (
    <section
      className="hero relative h-screen flex items-center justify-center text-black px-6"
      style={{
        backgroundImage: current.background,
        backgroundSize: "150% 150%",
        backgroundPosition: "0% 50%",
        animation: "gradientMove 8s ease-in-out infinite",
      }}
    >
      <div className="circles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="z-10 text-center flex flex-col gap-10 max-w-3xl">
        <div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            {current.title}
          </h1>
          <Link
            href={current.link}
            className="inline-block mt-6 text-xl md:text-2xl opacity-90 underline underline-offset-4 hover:text-[var(--secondarytext)] transition"
          >
            {current.subtitle} <span className="text-2xl">›</span>
          </Link>
        </div>

        <div className="absolute bottom-8 flex justify-center items-center gap-10 text-6xl w-full left-0">
          <button
            onClick={prevSlide}
            className="cursor-pointer hover:scale-125 transition"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="cursor-pointer hover:scale-125 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

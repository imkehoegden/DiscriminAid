"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";
import Section from "./Section";

type InfoBlockProps = {
  title: string;
  subtitle?: string;
  text: string;
  image: string;
  imagePosition: "left" | "right";
  link?: {
    text?: string;
    href?: string;
  };
  backgroundColor: "primary" | "secondary" | "fourth";
  textColor: "background" | "primarytext";
};

export default function InfoBlock({
  title,
  subtitle,
  text,
  image,
  imagePosition = "right",
  link,
  backgroundColor = "secondary",
  textColor = "background",
}: InfoBlockProps) {
  const isLeft = imagePosition === "left";

  const bgMap = {
    primary: "bg-[var(--primary)]",
    secondary: "bg-[var(--secondary)]",
    fourth: "bg-[var(--fourth)]",
  };

  const textMap = {
    background: "text-[var(--background)]",
    primarytext: "text-[var(--primarytext)]",
  };

  const isExternal = (url?: string) => {
    if (!url) return false;

    return (
      url.startsWith("http://") ||
      url.startsWith("https://") ||
      url.startsWith("mailto:") ||
      url.includes("@")
    );
  };

  const normalizedLink = link?.href
    ? link
    : link?.link
      ? { text: link.text, href: link.link }
      : undefined;

  return (
    <Section
      className={bgMap[backgroundColor]}
      innerClassName="grid md:grid-cols-2 gap-10"
    >
      <div className={`flex flex-col gap-6 ${isLeft ? "md:order-2" : ""}`}>
        <h2 className={`text-4xl md:text-5xl font-bold ${textMap[textColor]}`}>
          {title}
        </h2>

        {subtitle && (
          <p className={`text-xl md:text-2xl ${textMap[textColor]}`}>
            {subtitle}
          </p>
        )}

        <p className={`text-base md:text-lg ${textMap[textColor]}`}>{text}</p>

        {normalizedLink?.href &&
          (isExternal(normalizedLink.href) ? (
            <a
              href={normalizedLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block mt-2 underline underline-offset-4 hover:text-[var(--third)] transition text-base md:text-lg ${textMap[textColor]}`}
            >
              {normalizedLink.text} <span className="text-xl">›</span>
            </a>
          ) : (
            <Link
              href={normalizedLink.href}
              className={`inline-block mt-2 underline underline-offset-4 hover:text-[var(--third)] transition text-base md:text-lg ${textMap[textColor]}`}
            >
              {normalizedLink.text} <span className="text-xl">›</span>
            </Link>
          ))}
      </div>

      <div
        className={`w-full flex justify-center ${isLeft ? "md:justify-start md:order-1" : "md:justify-end md:order-2"}`}
      >
        <div className="relative w-full max-w-md aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={urlFor(image).url()}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager"
          />
        </div>
      </div>
    </Section>
  );
}

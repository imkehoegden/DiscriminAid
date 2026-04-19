"use client";

import Link from "next/link";

type MagazinBlockProps = {
  title: string;
  subtitle?: string;
  text: string;
  link?: {
    text: string;
    type: "internal" | "external";
    internalLink?: string;
    externalLink?: string;
  };
};

export default function MagazinBlock({
  title,
  subtitle,
  text,
  link,
}: MagazinBlockProps) {
  const href =
    link?.type === "internal" ? link.internalLink : link?.externalLink;

  const isExternal = link?.type === "external";

  return (
    <article className="w-full max-w-5xl mx-auto py-10 px-6 border-b border-[var(--third)] flex flex-col gap-4">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>

      {subtitle && <p className="text-lg">{subtitle}</p>}

      <p className="text-base leading-relaxed">{text}</p>

      {link?.text &&
        href &&
        (isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[var(--secondarytext)] transition"
          >
            {link.text} <span className="text-xl">›</span>
          </a>
        ) : (
          <Link
            href={href}
            className="underline hover:text-[var(--secondarytext)] transition"
          >
            {link.text} <span className="text-xl">›</span>
          </Link>
        ))}
    </article>
  );
}

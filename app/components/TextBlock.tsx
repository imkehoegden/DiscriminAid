import { PortableText } from "@portabletext/react"; // wandelt Sanity-Format in HTML um // vorher mit npm install @portabletext/react installiert
import Section from "./Section";
import Link from "next/link";

type TextBlockProps = {
  title?: string;
  subtitle?: string;
  text: any; // später noch besser typisieren
};

export default function TextBlock({ title, subtitle, text }: TextBlockProps) {
  if (!text) return null; // zur Absicherung, damit App nicht crasht, weil null true

  const components = {
    marks: {
      link: ({ value, children }: any) => {
        const href = value?.href;

        if (!href) return <span>{children}</span>;

        const isExternal =
          href.startsWith("http://") ||
          href.startsWith("https://") ||
          href.startsWith("mailto:");

        if (isExternal) {
          return (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 underline underline-offset-4 hover:text-[var(--secondarytext)] transition"
            >
              {children}
            </a>
          );
        }

        return (
          <Link
            href={href}
            className="inline-block mt-2 underline underline-offset-4 hover:text-[var(--secondarytext)] transition"
          >
            {children}
          </Link>
        );
      },
    },
  };

  return (
    <Section>
      <div className="flex flex-col gap-6 max-w-3xl">
        {title && <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>}

        {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}

        <div className="prose prose-lg">
          {" "}
          {/* tw prose macht automatisch, schöne Paragraphen, Abstände, Listen und Überschriften */}
          <PortableText value={text} components={components} />
        </div>
      </div>
    </Section>
  );
}

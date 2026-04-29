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

  // console.log(JSON.stringify(text, null, 2));

  const components = {
    block: {
      normal: ({ children }: any) => <p className="mb-4">{children}</p>,

      h1: ({ children }: any) => (
        <h1 className="text-5xl font-bold mb-6 mt-10">{children}</h1>
      ),

      h2: ({ children }: any) => (
        <h2 className="text-4xl font-bold mb-5 mt-8">{children}</h2>
      ),

      h3: ({ children }: any) => (
        <h3 className="text-3xl font-semibold mb-4 mt-6">{children}</h3>
      ),

      h4: ({ children }: any) => (
        <h4 className="text-2xl font-semibold mb-3 mt-5">{children}</h4>
      ),

      h5: ({ children }: any) => (
        <h5 className="text-xl font-semibold mb-2 mt-4">{children}</h5>
      ),

      h6: ({ children }: any) => (
        <h6 className="text-lg font-medium mb-2 mt-3">{children}</h6>
      ),

      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-gray-400 pl-4 italic my-6 text-gray-600">
          {children}
        </blockquote>
      ),
    },
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

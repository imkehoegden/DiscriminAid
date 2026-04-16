import { PortableText } from "@portabletext/react"; // wandelt Sanity-Format in HTML um // vorher mit npm install @portabletext/react installiert
import Section from "./Section";

type TextBlockProps = {
  title?: string;
  subtitle?: string;
  text: any; // später noch besser typisieren
};

export default function TextBlock({ title, subtitle, text }: TextBlockProps) {
  if (!text) return null; // zur Absicherung, damit App nicht crasht, weil null true

  return (
    <Section>
      <div className="flex flex-col gap-6 max-w-3xl">
        {title && <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>}

        {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}

        <div className="prose prose-lg">
          {" "}
          {/* prose macht automatisch, schöne Paragraphen, Abstände, Listen und Überschriften */}
          <PortableText value={text} />
        </div>
      </div>
    </Section>
  );
}

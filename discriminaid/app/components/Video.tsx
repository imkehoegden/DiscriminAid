import Section from "./Section";

type VideoProps = {
  title?: string;
  subtitle?: string;
  url: string;
};

// Title und Subtitle sind optional.

export default function Video({ title, subtitle, url }: VideoProps) {
  if (!url) return null;

  return (
    <Section>
      <div className="mb-6">
        {title && <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>}

        {subtitle && <p className="text-xl md:text-2xl mt-4">{subtitle}</p>}
      </div>
      <div className="w-full aspect-video">
        <iframe
          src={`${url.replace("vimeo.com", "player.vimeo.com/video")}`}
          className="w-full h-full rounded-xl"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </Section>
  );
}

type VideoProps = {
  title?: string;
  subtitle?: string;
  url: string;
};

export default function Video({ title, subtitle, url }: VideoProps) {
  if (!url) return null;

  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16">
      <div className="mb-6 text-center">
        {title && <h2 className="text-4xl font-bold">{title}</h2>}

        {subtitle && <p className="text-lg opacity-70 mt-2">{subtitle}</p>}
      </div>
      <div className="w-full aspect-video">
        <iframe
          src={`${url.replace("vimeo.com", "player.vimeo.com/video")}`}
          className="w-full h-full rounded-xl"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

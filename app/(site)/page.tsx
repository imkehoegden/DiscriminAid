import HeroSlider from "../components/HeroSlider";
import Video from "../components/Video";
import { client } from "../../sanity/lib/sanity";
// import { VideoSection } from "../components/VideoSection";
import InfoBlock from "../components/InfoBlock";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default async function Home() {
  const homePage = await client.fetch(
    `
  *[_type == "homePage"][0]{
    content
  }
`,
    {},
    { cache: "no-store" },
  );

  if (!homePage) return null;

  return (
    <>
      {homePage.content?.map((block: any) => {
        switch (block._type) {
          case "heroSlider":
            return <HeroSlider key={block._key} slides={block.slides} />;

          case "infoBlock":
            return (
              <InfoBlock
                key={block._key}
                title={block.title}
                subtitle={block.subtitle}
                text={block.text}
                image={block.image}
                imagePosition={block.imagePosition}
                link={block.link}
                backgroundColor={block.backgroundColor}
                textColor={block.textColor}
              />
            );

          case "video":
            return (
              <Video
                key={block._key}
                title={block.title}
                subtitle={block.subtitle}
                url={block.url}
              />
            );

          default:
            return null;
        }
      })}
      <ScrollToTopButton />
    </>
  );
}

import HeroSlider from "../components/HeroSlider";
import Video from "../components/Video";
import { client } from "../../sanity/lib/sanity";
import { VideoSection } from "../components/VideoSection";

// const hero = await client.fetch(`
//   *[_type == "heroSlider"][0]{
//     slides[]{
//       background,
//       title,
//       subtitle,
//       link
//     }
//   }
// `);

export default async function Home() {
  const homePage = await client.fetch(`
    *[_type == "homePage"][0]{
      hero,
      video
    }
  `);

  if (!homePage) return null;

  return (
    <>
      <HeroSlider slides={homePage?.hero?.slides || []} />
      {homePage.video?.url && (
        <VideoSection>
          <Video
            title={homePage.video.title}
            subtitle={homePage.video.subtitle}
            url={homePage.video.url}
          />
        </VideoSection>
      )}
    </>
  );
}

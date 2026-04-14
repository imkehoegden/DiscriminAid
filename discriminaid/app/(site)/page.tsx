import HeroSlider from "../components/HeroSlider";
import { client } from "../../sanity/lib/sanity";

export default async function Home() {
  const hero = await client.fetch(`
    *[_type == "heroSlider"][0]{
      slides[]{
        background,
        title,
        subtitle,
        link
      }
    }
  `);

  return (
    <>
      <HeroSlider slides={hero?.slides || []} />
    </>
  );
}

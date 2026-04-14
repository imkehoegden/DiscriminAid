// import { createClient } from "next-sanity";
import HeroSlider from "../components/HeroSlider";
import { client } from "../../sanity/lib/sanity";

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   apiVersion: "2026-04-13",
//   useCdn: true,
// });

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
      <HeroSlider
        slides={hero?.slides || []}
        // title="Equal Pay Initiative"
        // subtitle="Für echte Gleichberechtigung & Sichtbarkeit"
      />
    </>
  );
}

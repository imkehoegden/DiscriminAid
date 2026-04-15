import InfoBlock from "../../components/InfoBlock";
import { client } from "@/sanity/lib/sanity";

export default async function AboutPage() {
  const aboutPage = await client.fetch(`
    *[_type == "aboutPage"][0]{
      title,
      content[]{
        title,
        subtitle,
        text,
        image,
        imagePosition,
        link,
        backgroundColor,
        textColor
      }
    }
  `);

  if (!aboutPage) return null;

  return (
    <div>
      <h1 className="text-5xl text-center font-bold px-20 py-12">
        {aboutPage.title}
      </h1>

      {aboutPage.content?.map((block: any, index: number) => (
        <InfoBlock key={index} {...block} />
      ))}
    </div>
  );
}

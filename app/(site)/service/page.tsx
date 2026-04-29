import InfoBlock from "../../components/InfoBlock";
import { client } from "@/sanity/lib/sanity";

export default async function ServicePage() {
  const servicePage = await client.fetch(
    `
    *[_type == "servicePage"][0]{
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
  `,
    {},
    { cache: "no-store" },
  );

  if (!servicePage) return null;

  return (
    <div>
      <h1 className="text-5xl text-center font-bold px-20 py-12">
        {servicePage.title}
      </h1>

      {servicePage.content?.map((block: any, index: number) => (
        <InfoBlock key={index} {...block} />
      ))}
    </div>
  );
}

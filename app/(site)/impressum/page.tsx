import TextBlock from "@/app/components/TextBlock";
import { client } from "@/sanity/lib/client";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";

export default async function ImprintPage() {
  const imprintPage = await client.fetch(
    `
    *[_type == "imprintPage"][0]{
    title, 
    content[]{
    _type,
    _type == "textBlock" => {
        title,
        subtitle,
        text
      }
    }}`,
    {},
    { cache: "no-store" },
  );

  if (!imprintPage) return null;

  return (
    <div>
      <h1 className="text-5xl text-center font-bold px-16 py-12">
        {imprintPage.title}
      </h1>

      {imprintPage.content?.map((block: any, index: number) => {
        switch (block._type) {
          case "textBlock":
            return <TextBlock key={index} {...block} />;

          default:
            return null;
        }
      })}
      <ScrollToTopButton />
    </div>
  );
}

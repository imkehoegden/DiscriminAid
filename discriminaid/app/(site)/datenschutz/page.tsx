import ScrollToTopButton from "@/app/components/ScrollToTopButton";
import TextBlock from "@/app/components/TextBlock";
import { client } from "@/sanity/lib/client";

export default async function DataprivacyPage() {
  const dataprivacyPage = await client.fetch(`
    *[_type == "dataprivacyPage"][0]{
    title, 
    content[]{
    _type,
    _type == "textBlock" => {
        title,
        subtitle,
        text
      }
    }}`);

  if (!dataprivacyPage) return null;

  return (
    <div>
      <h1 className="text-5xl text-center font-bold px-16 py-12">
        {dataprivacyPage.title}
      </h1>

      {dataprivacyPage.content?.map((block: any, index: number) => {
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

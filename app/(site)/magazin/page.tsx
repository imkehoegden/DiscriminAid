import { client } from "@/sanity/lib/client";
import MagazinBlock from "@/app/components/MagazinBlock";
import ScrollToTopButton from "@/app/components/ScrollToTopButton";

export default async function MagazinPage() {
  const magazinePage = await client.fetch(`
    *[_type == "magazinPage"][0]{
      title,
      content[]{
        _type,
        title,
        subtitle,
        text,
        link{
          text,
          type,
          internalLink,
          externalLink
        }
      }
    }
  `);

  if (!magazinePage) return null;

  return (
    <div className="w-full py-16 px-6 md:px-16">
      {magazinePage.title && (
        <h1 className="text-5xl text-center font-bold mb-12">
          {magazinePage.title}
        </h1>
      )}

      <div className="flex flex-col gap-10">
        {magazinePage.content?.map((block: any, index: number) => {
          switch (block._type) {
            case "magazinBlock":
              return <MagazinBlock key={index} {...block} />;

            default:
              return null;
          }
        })}
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export default {
  name: "magazinBlock",
  type: "object",
  title: "Magazin Eintrag",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Titel",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Untertitel (optional)",
    },
    {
      name: "text",
      type: "text",
      title: "Text",
    },
    {
      name: "link",
      title: "Link",
      type: "object",
      fields: [
        {
          name: "text",
          type: "string",
          title: "Link Text",
        },
        {
          name: "type",
          type: "string",
          title: "Link Typ",
          options: {
            list: [
              { title: "Intern", value: "internal" },
              { title: "Extern", value: "external" },
            ],
            layout: "radio",
          },
        },
        {
          name: "internalLink",
          type: "string",
          title: "Interner Link (z. B. /about)",
          // @ts-ignore
          hidden: ({ parent }) => parent?.type !== "internal",
        },
        {
          name: "externalLink",
          type: "url",
          title: "Externer Link",
          // @ts-ignore
          hidden: ({ parent }) => parent?.type !== "external",
        },
      ],
    },
  ],
};

// hidden "entscheidet" darüber, ob das Feld im Sanity Studio angezeigt wird. mein parent ist link, also das übergeordnete objekt. // bedingung 1 sagt: zeige dieses feld im studio also nur an, wenn der type internal ist. // wenn ich also intern auswähle, kann ich auch nur internalLink auswählen.

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
          //   hidden: ({ parent }) => !parent || parent.type !== "internal",
        },
        {
          name: "externalLink",
          type: "url",
          title: "Externer Link",
          //   hidden: ({ parent }) => !parent || parent.type !== "external",
        },
      ],
    },
  ],
};

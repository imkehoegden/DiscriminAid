export default {
  name: "infoBlock",
  type: "object",
  title: "Info Block",

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
      name: "image",
      type: "image",
      title: "Bild",
    },
    {
      name: "imagePosition",
      type: "string",
      title: "Bild Position",
      options: {
        list: [
          { title: "Links", value: "left" },
          { title: "Rechts", value: "right" },
        ],
        layout: "radio",
      },
      initialValue: "right",
    },
    {
      name: "link",
      type: "object",
      title: "Link (optional",
      fields: [
        {
          name: "text",
          type: "string",
        },
        {
          name: "href",
          type: "string",
          description: "z. B. about oder service",
        },
      ],
    },
    {
      name: "backgroundColor",
      title: "Hintergrundfarbe",
      type: "string",
      options: {
        list: [
          { title: "Primary (orange)", value: "primary" },
          { title: "Secondary (lila)", value: "secondary" },
          { title: "Fourth (pink)", value: "fourth" },
        ],
        layout: "radio",
      },
    },
    {
      name: "textColor",
      title: "Textfarbe",
      type: "string",
      options: {
        list: [
          { title: "Background (weiß)", value: "background" },
          { title: "Primary Text (schwarz)", value: "primarytext" },
        ],
        layout: "radio",
      },
    },
  ],
};

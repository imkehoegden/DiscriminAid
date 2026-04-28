export default {
  name: "textBlock",
  type: "object",
  title: "Text-Eintrag",

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
      type: "array",
      title: "Text-Editor",
      of: [{ type: "block" }],
    },
  ],
};

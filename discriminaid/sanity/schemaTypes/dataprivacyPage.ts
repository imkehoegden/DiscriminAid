export default {
  name: "dataprivacyPage",
  type: "document",
  title: "Datenschutz",

  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "content",
      type: "array",
      of: [{ type: "infoBlock" }],
    },
  ],
};

export default {
  name: "imprintPage",
  type: "document",
  title: "Impressum",

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

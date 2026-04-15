export default {
  name: "servicePage",
  type: "document",
  title: "Service Seite",

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

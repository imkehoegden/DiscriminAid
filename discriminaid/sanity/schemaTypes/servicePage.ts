export default {
  name: "servicePage",
  type: "document",
  title: "Service / Klient:innen",

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

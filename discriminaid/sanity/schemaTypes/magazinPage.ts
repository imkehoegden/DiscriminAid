export default {
  name: "magazinPage",
  type: "document",
  title: "Magazin Seite",

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

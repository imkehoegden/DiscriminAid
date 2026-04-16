export default {
  name: "magazinPage",
  type: "document",
  title: "Magazin",

  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "content",
      type: "array",
      of: [{ type: "infoBlock" }, { type: "magazinBlock" }, { type: "video" }],
    },
  ],
};

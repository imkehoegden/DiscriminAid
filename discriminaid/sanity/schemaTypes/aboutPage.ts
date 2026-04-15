export default {
  name: "aboutPage",
  type: "document",
  title: "About Seite",

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

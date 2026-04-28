export default {
  name: "aboutPage",
  type: "document",
  title: "About / Team",

  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "content",
      type: "array",
      of: [{ type: "infoBlock" }],
      // of: [{ type: "infoBlock" }, { type: "video" }, { type: "textBlock" }],
    },
  ],
};

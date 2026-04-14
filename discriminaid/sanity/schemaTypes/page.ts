export default {
  name: "page",
  type: "document",
  title: "Seite",

  fields: [
    {
      name: "title",
      type: "string",
    },

    {
      name: "slug",
      type: "slug",
      options: { source: "title" },
    },

    {
      name: "content",
      type: "array",
      of: [{ type: "heroSlider" }, { type: "video" }],
    },
  ],
};

export default {
  name: "video",
  type: "object",
  title: "Video",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Headline",
    },
    {
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    },
    {
      name: "url",
      type: "url",
      title: "Vimeo URL",
      description: "z. B. https://vimeo.com/123456789",
    },
  ],
};

export default {
  name: "heroSlider",
  title: "Hero Slider",
  type: "document",
  fields: [
    {
      name: "slides",
      title: "Slides",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "background",
              title: "Hintergrundfarbe",
              type: "string",
              description: "z. B. #f08a24 oder linear-gradient(...)",
            },
            {
              name: "title",
              title: "Titel",
              type: "string",
            },
            {
              name: "subtitle",
              title: "Untertitel",
              type: "string",
            },
            {
              name: "link",
              title: "Link",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

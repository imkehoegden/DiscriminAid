// export default {
//   name: "homePage",
//   type: "document",
//   title: "Startseite",

//   fields: [
//     {
//       name: "hero",
//       type: "heroSlider",
//     },
//     {
//       name: "infoBlock",
//       type: "infoBlock",
//     },
//     {
//       name: "video",
//       type: "video",
//     },
//     {
//       name: "infoBlock",
//       type: "infoBlock",
//     },
//   ],
// };

export default {
  name: "homePage",
  type: "document",
  title: "Startseite",

  fields: [
    {
      name: "content",
      title: "Seiteninhalt",
      type: "array",
      of: [{ type: "heroSlider" }, { type: "infoBlock" }, { type: "video" }],
    },
  ],
};

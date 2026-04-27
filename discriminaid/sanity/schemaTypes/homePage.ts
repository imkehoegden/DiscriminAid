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

// Schema für ein Dokument in Sanity // Content-Typ

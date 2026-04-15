import { type SchemaTypeDefinition } from "sanity";
import heroSlider from "./heroSlider";
import video from "./video";
import homePage from "./homePage";
import infoBlock from "./infoBlock";
import aboutPage from "./aboutPage";
import servicePage from "./servicePage";
import magazinPage from "./magazinPage";
import imprintPage from "./imprintPage";
import dataprivacyPage from "./dataprivacyPage";

export const schemaTypes: SchemaTypeDefinition[] = [
  heroSlider,
  video,
  infoBlock,
  homePage,
  aboutPage,
  servicePage,
  magazinPage,
  imprintPage,
  dataprivacyPage,
];

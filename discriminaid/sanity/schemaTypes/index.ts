import { type SchemaTypeDefinition } from "sanity";
import heroSlider from "./heroSlider";
import video from "./video";
import homePage from "./homePage";
import infoBlock from "./infoBlock";
import aboutPage from "./aboutPage";

export const schemaTypes: SchemaTypeDefinition[] = [
  heroSlider,
  video,
  homePage,
  infoBlock,
  aboutPage,
];

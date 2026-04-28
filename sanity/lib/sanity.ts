import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2026-04-13",
  // perspective: "drafts",
  // useCdn: false,
  useCdn: true, // bevor ich die drafts-perspective drin hatte, brauchte ich useCdn
});

// hier verbinde ich mein frontend mit sanity // diese config ist mein zugang zur sanity api

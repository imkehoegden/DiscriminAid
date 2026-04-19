import type { Metadata } from "next";
import { Open_Sans, Raleway } from "next/font/google";
import "./globals.css";
// import CookieBanner from "./components/CookieBanner";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-headings",
});

export const metadata: Metadata = {
  title: "DiscriminAid",
  description:
    "Die Initiative DiscriminAid setzt sich für Equal Pay ein. Informationen, Kampagnen und Aufklärung rund um Gender Pay Gap und Gleichstellung.",
  keywords: [
    "Equal Pay",
    "Gender Pay Gap",
    "Feminismus",
    "Gleichberechtigung",
    "Frauenrechte",
    "Diskriminierung",
    "Initiative",
  ],
  creator: "DiscriminAid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${openSans.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
      {/* <CookieBanner /> */}
    </html>
  );
}

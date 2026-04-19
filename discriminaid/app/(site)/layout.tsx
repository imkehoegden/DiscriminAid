"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <div>
        <Header variant="transparentOnHero" />
        <main className={`flex-1 min-h-[88.3vh] ${isHome ? "pt-0" : "pt-36"}`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <Header variant="transparentOnHero" />{" "}
        {/* auf anderen Seiten: <Header variant="solid" /> verwenden */}
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}

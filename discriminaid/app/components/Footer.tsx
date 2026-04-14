import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full px-20 py-10 p-8 flex flex-col md:flex-col lg:flex-row justify-between items-center gap-4"
      style={{ color: "var(--primarytext)" }}
    >
      <div className="font-bold">© DiscriminAid {new Date().getFullYear()}</div>

      <div className="flex flex-col md:flex-col lg:flex-row  justify-between items-center gap-4 lg:gap-6 font-bold">
        <Link href="/impressum">Impressum</Link>
        <Link href="/datenschutz">Datenschutz</Link>
      </div>
    </footer>
  );
}

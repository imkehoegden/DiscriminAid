import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="w-full px-20 py-10 p-8 flex flex-col md:flex-col lg:flex-row justify-between items-center gap-4 nav font-bold"
      style={{
        backgroundColor: "var(--primarytext)",
        color: "var(--background)",
      }}
    >
      <div className="">© DiscriminAid {new Date().getFullYear()}</div>

      <ul className="flex flex-col md:flex-col lg:flex-row  justify-between items-center gap-4 lg:gap-8">
        <li>
          <Link
            href="/impressum"
            className="cursor-pointer transition hover:text-[var(--secondarytext)]"
          >
            Impressum
          </Link>
        </li>
        <li>
          <Link
            href="/datenschutz"
            className="cursor-pointer transition hover:text-[var(--secondarytext)]"
          >
            Datenschutz
          </Link>
        </li>
        <li>
          <Link href="/https://www.instagram.com">
            <Image
              src="/icon-instagram-50-white.png"
              alt="Icon Instagram"
              width={30}
              height={30}
              loading="eager"
              className="h-auto w-auto"
            />
          </Link>
        </li>
      </ul>
    </footer>
  );
}

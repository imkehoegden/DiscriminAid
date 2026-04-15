import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

export default function Section({
  children,
  className = "",
  innerClassName = "",
}: SectionProps) {
  return (
    <section className={`w-full py-16 px-6 md:px-16 ${className}`}>
      <div className={`max-w-6xl mx-auto ${innerClassName}`}>{children}</div>
    </section>
  );
}

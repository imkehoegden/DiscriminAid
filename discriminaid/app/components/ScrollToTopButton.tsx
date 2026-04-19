"use client";

export default function ScrollToTopButton() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="w-full py-16 flex justify-center items-center">
      <button
        onClick={scrollToTop}
        className="scrollToTopButton flex items-center gap-2"
      >
        Nach oben <span className="text-xl">›</span>
      </button>
    </section>
  );
}

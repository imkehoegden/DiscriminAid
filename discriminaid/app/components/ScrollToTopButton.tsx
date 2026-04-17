"use client";

export default function ScrollToTopButton() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className="w-full py-16 flex justify-center">
      <button onClick={scrollToTop} className="scrollToTopButton">
        Nach oben ▲
      </button>
    </section>
  );
}

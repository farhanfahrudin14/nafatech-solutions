"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 transition-all
        bg-blue-600 text-white p-3 rounded-full shadow-lg
        hover:bg-blue-700
        ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}
      `}
      aria-label="Scroll to top"
    >
      <ChevronUp size={22} />
    </button>
  );
}

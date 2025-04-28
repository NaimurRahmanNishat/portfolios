"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isBrowser = typeof window !== "undefined";
  const checkScrollPosition = () => {
    if (!isBrowser) return;
    const scrollThreshold = 50;
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(currentScrollPos > scrollThreshold);
  };
  const scrollToTop = () => {
    if (!isBrowser) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!isBrowser) return;
    window.addEventListener("scroll", checkScrollPosition);
    checkScrollPosition();
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, [isBrowser]);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-5 right-5 z-50 p-3 rounded-full bg-lightGreen text-primary-foreground shadow-lg transition-all duration-300",
        "hover:bg-lightGreen/80 cursor-pointer focus:outline-none",
        "md:bottom-16 md:right-12 md:p-4",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
    </button>
  );
}
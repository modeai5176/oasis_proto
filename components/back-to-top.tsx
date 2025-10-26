"use client";

import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackToTopProps {
  className?: string;
  threshold?: number;
}

export function BackToTop({ className, threshold = 300 }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToTop();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "bg-[#2D8C7E] hover:bg-[#2D8C7E]/90 text-[#F9F7F2]",
        "w-12 h-12 rounded-full shadow-lg hover:shadow-xl",
        "flex items-center justify-center",
        "transition-all duration-300 ease-in-out",
        "hover:scale-110 focus:scale-110",
        "focus:outline-none focus:ring-4 focus:ring-[#2D8C7E]/30",
        "group",
        className
      )}
      aria-label="Back to top"
      title="Back to top"
    >
      <ChevronUp
        className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-0.5"
        aria-hidden="true"
      />
      <span className="sr-only">Back to top</span>
    </button>
  );
}

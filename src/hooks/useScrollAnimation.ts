import { useEffect, useRef } from "react";

export const useScrollAnimation = <
  T extends HTMLElement = HTMLElement
>(
  threshold: number = 0.1
) => {
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !element.classList.contains("animate-in")) {
          element.classList.add("animate-in");
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return elementRef;
};
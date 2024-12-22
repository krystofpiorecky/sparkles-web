import { RefObject, useEffect, useRef, useState } from "react";

export const goToContact = () => {
  document.querySelector("section.contact")!.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
};

export const useScrollReveal = (delay: number = 0) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const apply = (e: Element) => {
      e.classList.toggle("revealed", revealed);
    };

    let revealed = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        revealed = revealed || entry.isIntersecting;
        if (delay === 0) apply(entry.target);
        else setTimeout(() => apply(entry.target), delay);
      },
      { rootMargin: "-100px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return ref;
};
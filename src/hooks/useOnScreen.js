import { useState, useEffect } from "react";

/**
 * This hook allows you to easily detect when an element is visible on
 * the screen as well as specify how much of the element should be visible
 * before being considered on screen.
 * https://usehooks.com/useOnScreen/
 */

export default (ref, threshold = 0.25) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );
    if (element) {
      setTimeout(() => observer.observe(element), 3500);
    }
    return () => {
      observer.unobserve(element);
    };
  }, [ref, threshold]);
  return isIntersecting;
};

import { useState, useLayoutEffect, useEffect, useRef } from "react";

export function useElementRect(ref, delay = 500) {
  const [rect, setRect] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    right: 0,
    bottom: 0,
  });

  const timeoutRef = useRef(null);

  const updateRect = () => {
    // if (!ref.current) return;

    // if (timeoutRef.current) return;

    timeoutRef.current = setTimeout(() => {
      if (ref.current) {
        const bounds = ref.current.getBoundingClientRect();
        setRect({
          top: bounds.top,
          left: bounds.left,
          right: bounds.right,
          bottom: bounds.bottom,
          width: bounds.width,
          height: bounds.height,
        });
      }
      timeoutRef.current = null;
    }, delay);
  };

  // ✅ measure AFTER the DOM is painted
  useEffect(() => {
    updateRect();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect);

    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return rect;
}

import { useCallback, useEffect, useRef, useState } from "react";

function useElementWidth() {
  const observerRef = useRef(null);
  const [element, setElement] = useState(null);
  const [width, setWidth] = useState(0);

  const ref = useCallback((node) => {
    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) {
      setWidth(0);
      return undefined;
    }

    const updateWidth = () => {
      const nextWidth = Math.round(element.getBoundingClientRect().width);

      setWidth((currentWidth) =>
        currentWidth === nextWidth ? currentWidth : nextWidth,
      );
    };

    updateWidth();

    if (typeof ResizeObserver === "function") {
      observerRef.current = new ResizeObserver(updateWidth);
      observerRef.current.observe(element);

      return () => {
        observerRef.current?.disconnect();
        observerRef.current = null;
      };
    }

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [element]);

  return { ref, width };
}

export default useElementWidth;

import { useEffect, useState } from "react";

export default function SizeWindow() {
  let width: number;
  let height: number;

  const [sizeWindow, setSizeWindow] = useState({
    width: 800,
    height: 800,
  });

  useEffect(() => {
    function windowNotUndefined() {
      const windowNotUndefined = typeof window !== undefined;

      if (windowNotUndefined) {
        window.addEventListener("resize", () => {
          width = window.innerWidth;
          height = window.innerHeight;

          return { width, height };
        });
      }
    }

    function ChangeSize() {
      windowNotUndefined();
      setSizeWindow({ width, height });
    }

    window.addEventListener("resize", ChangeSize);

    return () => {
      window.removeEventListener("resize", ChangeSize);
    };
  }, []);

  function between(min: number, max: number) {
    return sizeWindow.width >= min && sizeWindow.width < max;
  }

  const widths = {
    xsm: between(0, 640),
    sm: between(640, 768),
    md: between(768, 1024),
    lg: between(1024, 1280),
    xl: between(1280, 1536),
    xl2: between(1536, Number.MAX_VALUE),
  };

  const sizeTrue = Object.entries(widths).filter((el) => el[1]);

  return sizeTrue[0]?.[0];
}

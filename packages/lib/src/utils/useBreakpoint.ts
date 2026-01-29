import { useEffect, useState } from "react";
import { responsiveSizes } from "../common/variables";

export const useBreakpoint = (breakpoint: keyof typeof responsiveSizes): boolean | undefined => {
  const query = `(max-width: ${responsiveSizes[breakpoint]}rem)`;

  const [matches, setMatches] = useState<boolean | undefined>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return undefined;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    const handler = () => setMatches(media.matches);

    setMatches(media.matches);

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

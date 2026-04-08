import { useEffect, useState } from "react";
import { responsiveSizes } from "../common/variables";

export const useBreakpoint = (breakpoint: keyof typeof responsiveSizes) => {
  const query = `(max-width: ${responsiveSizes[breakpoint]}rem)`;
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handler = () => setMatches(media.matches);

    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

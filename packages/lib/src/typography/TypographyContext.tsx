import { createContext } from "react";
import { TypographyContextProps } from "./types";

export default createContext<TypographyContextProps>({
  as: "span",
  color: "var(--color-fg-neutral-dark)",
  display: "inline",
  fontFamily: "var(--typography-font-family)",
  fontSize: "var(--typography-body-m)",
  fontStyle: "normal",
  fontWeight: "var(--typography-body-regular)",
  letterSpacing: "var(--spacing-gap-none)",
  lineHeight: "var(--height-s)",
  textAlign: "left",
  textDecoration: "none",
  textOverflow: "unset",
  whiteSpace: "normal",
});

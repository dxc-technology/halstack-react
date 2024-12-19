import { createContext } from "react";
import { TypographyContextProps } from "./types";

export default createContext<TypographyContextProps>({
  as: "span",
  color: "#000000",
  display: "inline",
  fontFamily: "Open Sans, sans-serif",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: "400",
  letterSpacing: "0em",
  lineHeight: "1.5em",
  textAlign: "left",
  textDecoration: "none",
  textOverflow: "unset",
  whiteSpace: "normal",
});

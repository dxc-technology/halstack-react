type As = keyof HTMLElementTagNameMap;

type FontSize = "3.75rem" | "3rem" | "2rem" | "1.5rem" | "1.25rem" | "1rem" | "0.875rem" | "0.75rem";

type LetterSpacing = "-0.025em" | "-0.0125em" | "0em" | "0.025em" | "0.05em" | "0.1em";

type LineHeight = "1em" | "1.25em" | "1.365em" | "1.5em" | "1.715em" | "2em";
type FontWeight = "300" | "400" | "600" | "700";

type TextDecoration = "none" | "underline" | "line-through";

type Props = {
  as?: As;
  display?: "inline" | "block";
  fontFamily?: "Open Sans, sans-serif" | "Source Code Pro, monospace";
  fontSize?: FontSize;
  fontStyle?: "italic" | "normal";
  fontWeight?: FontWeight;
  letterSpacing?: LetterSpacing;
  lineHeight?: LineHeight;
  textAlign?: "left" | "center" | "right";
  color?: string;
  textDecoration?: TextDecoration;
  textOverflow?: "clip" | "ellipsis" | "unset";
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
  children: React.ReactNode;
};

export default Props;

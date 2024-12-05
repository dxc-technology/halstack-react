export type Props = {
  as?: "a" | "blockquote" | "cite" | "code" | "div" | "em" | "figcaption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "pre" | "small" | "span" | "strong";
  children: React.ReactNode;
  color?: string;
  display?: "inline" | "block";
  fontFamily?: "Open Sans, sans-serif" | "Source Code Pro, monospace";
  fontSize?: "0.75rem" | "0.875rem" | "1rem" | "1.25rem" | "1.5rem" | "2rem" | "3rem" | "3.75rem";
  fontStyle?: "italic" | "normal";
  fontWeight?: "300" | "400" | "600" | "700";
  letterSpacing?: "-0.025em" | "-0.0125em" | "0em" | "0.025em" | "0.05em" | "0.1em";
  lineHeight?: "1em" | "1.25em" | "1.365em" | "1.5em" | "1.715em" | "2em";
  textAlign?: "left" | "center" | "right";
  textDecoration?: "none" | "underline" | "line-through";
  textOverflow?: "clip" | "ellipsis" | "unset";
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
};

export default Props;

export type TypographyContextProps = Omit<Props, "children">;

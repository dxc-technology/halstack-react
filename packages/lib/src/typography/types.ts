import { ReactNode } from "react";

export type Props = {
  as?:
    | "a"
    | "blockquote"
    | "cite"
    | "code"
    | "div"
    | "em"
    | "figcaption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "pre"
    | "small"
    | "span"
    | "strong";
  children: ReactNode;
  color?: string;
  display?: "inline" | "block";
  fontFamily?: string;
  fontSize?: string;
  fontStyle?: "italic" | "normal";
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
  textAlign?: "left" | "center" | "right";
  textDecoration?: "none" | "underline" | "line-through";
  textOverflow?: "clip" | "ellipsis" | "unset";
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
};

export type TypographyContextProps = Required<Omit<Props, "children">>;

export default Props;

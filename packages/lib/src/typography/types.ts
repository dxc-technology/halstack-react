export type TypographyContextProps = {
  as?: keyof HTMLElementTagNameMap;
  display?: string;
  fontFamily?: string;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
  textAlign?: string;
  color?: string;
  textDecoration?: string;
  textOverflow?: string;
  whiteSpace?: string;
};

type Props = TypographyContextProps & {
  children: React.ReactNode;
};

export default Props;

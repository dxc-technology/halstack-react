import { createContext, useContext, useMemo } from "react";
import styled from "styled-components";
import TypographyPropsTypes, { TypographyContextProps } from "./types";

const Typography = styled.span<TypographyPropsTypes>`
  margin: 0px;
  display: ${({ display }) => display};
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  text-align: ${({ textAlign }) => textAlign};
  line-height: ${({ lineHeight }) => lineHeight};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-overflow: ${({ textOverflow }) => textOverflow};
  white-space: ${({ whiteSpace, textOverflow }) =>
    whiteSpace !== "normal" ? whiteSpace : textOverflow !== "unset" ? "nowrap" : "normal"};
  overflow: ${({ textOverflow }) => (textOverflow !== "unset" ? "hidden" : "visible")};
`;

const TypographyContext = createContext<TypographyContextProps | null>(null);

export default function DxcTypography({
  as,
  color,
  children,
  display,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textDecoration,
  textOverflow,
  whiteSpace,
}: TypographyPropsTypes) {
  const componentContext = useContext(TypographyContext);

  const contextValue = useMemo(
    () => ({
      as: as ?? componentContext?.as ?? "span",
      display: display ?? componentContext?.display ?? "inline",
      fontFamily: fontFamily ?? componentContext?.fontFamily ?? "Open Sans, sans-serif",
      fontSize: fontSize ?? componentContext?.fontSize ?? "1rem",
      fontStyle: fontStyle ?? componentContext?.fontStyle ?? "normal",
      fontWeight: fontWeight ?? componentContext?.fontWeight ?? "400",
      letterSpacing: letterSpacing ?? componentContext?.letterSpacing ?? "0em",
      lineHeight: lineHeight ?? componentContext?.lineHeight ?? "1.5em",
      textAlign: textAlign ?? componentContext?.textAlign ?? "left",
      color: color ?? componentContext?.color ?? "#000000",
      textDecoration: textDecoration ?? componentContext?.textDecoration ?? "none",
      textOverflow: textOverflow ?? componentContext?.textOverflow ?? "unset",
      whiteSpace: whiteSpace ?? componentContext?.whiteSpace ?? "normal",
    }),
    [
      as,
      color,
      display,
      fontFamily,
      fontSize,
      fontStyle,
      fontWeight,
      letterSpacing,
      lineHeight,
      textAlign,
      textDecoration,
      textOverflow,
      whiteSpace,
    ]
  );

  return (
    <TypographyContext.Provider value={contextValue}>
      <Typography {...contextValue}>{children}</Typography>
    </TypographyContext.Provider>
  );
}

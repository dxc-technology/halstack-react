import React, { useContext, useMemo } from "react";
import styled from "styled-components";

type TypographyContextProps = {
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

const TypographyContext = React.createContext<TypographyContextProps | null>(null);

type BaseTypographyProps = TypographyContextProps & {
  children: React.ReactNode;
};

const BaseTypography = ({
  as,
  display,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  color,
  textDecoration,
  textOverflow,
  whiteSpace,
  children,
}: BaseTypographyProps): JSX.Element => {
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
      display,
      fontFamily,
      fontSize,
      fontStyle,
      fontWeight,
      letterSpacing,
      lineHeight,
      textAlign,
      color,
      textDecoration,
      textOverflow,
      whiteSpace,
    ]
  );

  return (
    <TypographyContext.Provider value={contextValue}>
      <StyledTypography {...contextValue}>{children}</StyledTypography>
    </TypographyContext.Provider>
  );
};

const StyledTypography = styled.span<BaseTypographyProps>`
  display: ${({ display }) => display};
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize};
  font-style: ${({ fontStyle }) => fontStyle};
  font-weight: ${({ fontWeight }) => fontWeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: ${({ textDecoration }) => textDecoration};
  text-overflow: ${({ textOverflow }) => textOverflow};
  white-space: ${({ whiteSpace }) => whiteSpace};
  overflow: ${({ textOverflow }) => (textOverflow !== "unset" ? "hidden" : "visible")};
  margin: 0;
`;

export default BaseTypography;

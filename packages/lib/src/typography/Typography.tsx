import React, { useContext } from "react";
import styled from "styled-components";
import TypographyPropsTypes from "./types";
import TypographyContextPropTypes from "./types";

const TypographyContext = React.createContext<TypographyContextPropTypes | null>(null);

const DxcTypography = ({
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
}: TypographyPropsTypes): JSX.Element => {
  const componentContext = useContext(TypographyContext);
  const asValue = as ?? (componentContext?.as || "span");
  const displayValue = display ?? (componentContext?.display || "inline");
  const fontFamilyValue = fontFamily ?? (componentContext?.fontFamily || "Open Sans, sans-serif");
  const fontSizeValue = fontSize ?? (componentContext?.fontSize || "1rem");
  const fontStyleValue = fontStyle ?? (componentContext?.fontStyle || "normal");
  const fontWeightValue = fontWeight ?? (componentContext?.fontWeight || "400");
  const letterSpacingValue = letterSpacing ?? (componentContext?.letterSpacing || "0em");
  const lineHeightValue = lineHeight ?? (componentContext?.lineHeight || "1.5em");
  const textAlignValue = textAlign ?? (componentContext?.textAlign || "left");
  const colorValue = color ?? (componentContext?.color || "#000000");
  const textDecorationValue = textDecoration ?? (componentContext?.textDecoration || "none");
  const textOverflowValue = textOverflow ?? (componentContext?.textOverflow || "unset");
  const whiteSpaceValue = whiteSpace ?? (componentContext?.whiteSpace || "normal");
  const childrenValue = children || undefined;
  return (
    <TypographyContext.Provider
      value={{
        as: asValue,
        display: displayValue,
        fontFamily: fontFamilyValue,
        fontSize: fontSizeValue,
        fontStyle: fontStyleValue,
        fontWeight: fontWeightValue,
        letterSpacing: letterSpacingValue,
        lineHeight: lineHeightValue,
        textAlign: textAlignValue,
        color: colorValue,
        textDecoration: textDecorationValue,
        textOverflow: textOverflowValue,
        whiteSpace: whiteSpaceValue,
        children: childrenValue,
      }}
    >
      <StyledTypography
        as={asValue}
        display={displayValue}
        fontFamily={fontFamilyValue}
        fontSize={fontSizeValue}
        fontStyle={fontStyleValue}
        fontWeight={fontWeightValue}
        letterSpacing={letterSpacingValue}
        lineHeight={lineHeightValue}
        textAlign={textAlignValue}
        color={colorValue}
        textDecoration={textDecorationValue}
        textOverflow={textOverflowValue}
        whiteSpace={whiteSpaceValue}
      >
        {children}
      </StyledTypography>
    </TypographyContext.Provider>
  );
};
const StyledTypography = styled.span<TypographyPropsTypes>`
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
export default DxcTypography;

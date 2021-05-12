import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";

const DxcHeading = ({ level = 1, text = "", weight = "", margin }) => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.heading}>
      <HeadingContainer margin={margin}>
        {level === 1 ? (
          <HeadingLevel1 weight={weight}>{text}</HeadingLevel1>
        ) : level === 2 ? (
          <HeadingLevel2 weight={weight}>{text}</HeadingLevel2>
        ) : level === 3 ? (
          <HeadingLevel3 weight={weight}>{text}</HeadingLevel3>
        ) : level === 4 ? (
          <HeadingLevel4 weight={weight}>{text}</HeadingLevel4>
        ) : (
          <HeadingLevel5 weight={weight}>{text}</HeadingLevel5>
        )}
      </HeadingContainer>
    </ThemeProvider>
  );
};

const HeadingContainer = styled.div`
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  font-family: ${(props) => props.theme.fontFamilyBase};
  color: ${(props) => props.theme.fontColorBase};
`;

const HeadingLevel1 = styled.h1`
  font-family: ${(props) => props.theme.level1FontFamily};
  font-style: ${(props) => props.theme.level1FontStyle};
  font-size: ${(props) => props.theme.level1FontSize};
  line-height: ${(props) => props.theme.level1LineHeight};
  font-weight: ${(props) =>
    props.weight === "normal" || props.weight === ""
      ? props.theme.level1NormalFontWeight
      : props.weight === "light"
      ? props.theme.level1LightFontWeight
      : props.theme.level1BoldFontWeight};
  letter-spacing: ${(props) => props.theme.level1LetterSpacing};
  color: ${(props) => props.theme.level1FontColor};
  margin: 0;
`;

const HeadingLevel2 = styled.h2`
  font-family: ${(props) => props.theme.level2FontFamily};
  font-style: ${(props) => props.theme.level2FontStyle};
  font-size: ${(props) => props.theme.level2FontSize};
  line-height: ${(props) => props.theme.level2LineHeight};
  font-weight: ${(props) =>
    props.weight === "normal" || props.weight === ""
      ? props.theme.level2NormalFontWeight
      : props.weight === "light"
      ? props.theme.level2LightFontWeight
      : props.theme.level2BoldFontWeight};
  letter-spacing: ${(props) => props.theme.level2LetterSpacing};
  color: ${(props) => props.theme.level2FontColor};
  margin: 0;
`;

const HeadingLevel3 = styled.h3`
  font-family: ${(props) => props.theme.level3FontFamily};
  font-style: ${(props) => props.theme.level3FontStyle};
  font-size: ${(props) => props.theme.level3FontSize};
  line-height: ${(props) => props.theme.level3LineHeight};
  font-weight: ${(props) =>
    props.weight === "normal" || props.weight === ""
      ? props.theme.level3NormalFontWeight
      : props.weight === "light"
      ? props.theme.level3LightFontWeight
      : props.theme.level3BoldFontWeight};
  letter-spacing: ${(props) => props.theme.level3LetterSpacing};
  color: ${(props) => props.theme.level3FontColor};
  margin: 0;
`;

const HeadingLevel4 = styled.h4`
  font-family: ${(props) => props.theme.level4FontFamily};
  font-style: ${(props) => props.theme.level4FontStyle};
  font-size: ${(props) => props.theme.level4FontSize};
  line-height: ${(props) => props.theme.level4LineHeight};
  font-weight: ${(props) =>
    props.weight === "normal" || props.weight === ""
      ? props.theme.level4NormalFontWeight
      : props.weight === "light"
      ? props.theme.level4LightFontWeight
      : props.theme.level4BoldFontWeight};
  letter-spacing: ${(props) => props.theme.level4LetterSpacing};
  color: ${(props) => props.theme.level4FontColor};
  margin: 0;
`;

const HeadingLevel5 = styled.h5`
  font-family: ${(props) => props.theme.level5FontFamily};
  font-style: ${(props) => props.theme.level5FontStyle};
  font-size: ${(props) => props.theme.level5FontSize};
  line-height: ${(props) => props.theme.level5LineHeight};
  font-weight: ${(props) =>
    props.weight === "normal" || props.weight === ""
      ? props.theme.level5NormalFontWeight
      : props.weight === "light"
      ? props.theme.level5LightFontWeight
      : props.theme.level5BoldFontWeight};
  letter-spacing: ${(props) => props.theme.level5LetterSpacing};
  color: ${(props) => props.theme.level5FontColor};
  margin: 0;
`;

DxcHeading.propTypes = {
  level: PropTypes.number,
  text: PropTypes.string,
  weight: PropTypes.oneOf(["light", "normal", "bold", ""]),
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
};

export default DxcHeading;

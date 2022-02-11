import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";
import HeadingPropsType from "./types";

const DxcHeading = ({ level = 1, text = "", as, weight, margin }: HeadingPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  const checkValidAs = () => {
    if (as === "h1" || as === "h2" || as === "h3" || as === "h4" || as === "h5") return as;
  };

  return (
    <ThemeProvider theme={colorsTheme.heading}>
      <HeadingContainer margin={margin}>
        {level === 1 ? (
          <HeadingLevel1 as={checkValidAs()} weight={weight}>
            {text}
          </HeadingLevel1>
        ) : level === 2 ? (
          <HeadingLevel2 as={checkValidAs()} weight={weight}>
            {text}
          </HeadingLevel2>
        ) : level === 3 ? (
          <HeadingLevel3 as={checkValidAs()} weight={weight}>
            {text}
          </HeadingLevel3>
        ) : level === 4 ? (
          <HeadingLevel4 as={checkValidAs()} weight={weight}>
            {text}
          </HeadingLevel4>
        ) : (
          <HeadingLevel5 as={checkValidAs()} weight={weight}>
            {text}
          </HeadingLevel5>
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
`;

const HeadingLevel1 = styled.h1`
  font-family: ${(props) => props.theme.level1FontFamily};
  font-style: ${(props) => props.theme.level1FontStyle};
  font-size: ${(props) => props.theme.level1FontSize};
  line-height: ${(props) => props.theme.level1LineHeight};
  font-weight: ${(props) =>
    props.weight === "normal"
      ? "400"
      : props.weight === "light"
      ? "300"
      : props.weight === "bold"
      ? "600"
      : props.theme.level1FontWeight};
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
    props.weight === "normal"
      ? "400"
      : props.weight === "light"
      ? "300"
      : props.weight === "bold"
      ? "600"
      : props.theme.level2FontWeight};
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
    props.weight === "normal"
      ? "400"
      : props.weight === "light"
      ? "300"
      : props.weight === "bold"
      ? "600"
      : props.theme.level3FontWeight};
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
    props.weight === "normal"
      ? "400"
      : props.weight === "light"
      ? "300"
      : props.weight === "bold"
      ? "600"
      : props.theme.level4FontWeight};
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
    props.weight === "normal"
      ? "400"
      : props.weight === "light"
      ? "300"
      : props.weight === "bold"
      ? "600"
      : props.theme.level5FontWeight};
  letter-spacing: ${(props) => props.theme.level5LetterSpacing};
  color: ${(props) => props.theme.level5FontColor};
  margin: 0;
`;

export default DxcHeading;

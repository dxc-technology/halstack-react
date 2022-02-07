import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";

import { spaces } from "../common/variables.js";
import useTheme from "../useTheme.js";
import BackgroundColorContext from "../BackgroundColorContext.js";
import SpinnerPropsType from "./types";

const DxcSpinner = ({
  label = "",
  value,
  showValue = false,
  mode = "large",
  margin,
}: SpinnerPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);

  return (
    <ThemeProvider theme={colorsTheme.spinner}>
      <DXCSpinner margin={margin} mode={mode}>
        <SpinnerContainer backgroundType={backgroundType} mode={mode}>
          {mode === "overlay" && <BackOverlay></BackOverlay>}
          <BackgroundSpinner mode={mode}>
            {mode !== "small" && (
              <SVGBackground viewBox="0 0 140 140">
                <CircleBackground cx="70" cy="70" r="65" mode={mode}></CircleBackground>
              </SVGBackground>
            )}
            {mode === "small" && (
              <SVGBackground viewBox="0 0 16 16">
                <CircleBackground cx="8" cy="8" r="6" mode={mode}></CircleBackground>
              </SVGBackground>
            )}
          </BackgroundSpinner>

          {value >= 0 && value <= 100 ? (
            <Spinner role="progressbar" mode={mode}>
              {mode !== "small" && (
                <SVGSpinner viewBox="0 0 140 140" isDeterminated={true}>
                  <CircleSpinner
                    cx="70"
                    cy="70"
                    r="65"
                    backgroundType={backgroundType}
                    mode={mode}
                    isDeterminated={true}
                    value={value}
                  ></CircleSpinner>
                </SVGSpinner>
              )}
              {mode === "small" && (
                <SVGSpinner viewBox="0 0 16 16" isDeterminated={true}>
                  <CircleSpinner
                    cx="8"
                    cy="8"
                    r="6"
                    backgroundType={backgroundType}
                    mode={mode}
                    isDeterminated={true}
                    value={value}
                  ></CircleSpinner>
                </SVGSpinner>
              )}
            </Spinner>
          ) : (
            <Spinner role="progressbar" mode={mode}>
              {mode !== "small" && (
                <SVGSpinner viewBox="0 0 140 140" isDeterminated={false}>
                  <CircleSpinner
                    cx="70"
                    cy="70"
                    r="65"
                    backgroundType={backgroundType}
                    mode={mode}
                    isDeterminated={false}
                  ></CircleSpinner>
                </SVGSpinner>
              )}
              {mode === "small" && (
                <SVGSpinner viewBox="0 0 16 16" isDeterminated={false}>
                  <CircleSpinner
                    cx="8"
                    cy="8"
                    r="6"
                    backgroundType={backgroundType}
                    mode={mode}
                    isDeterminated={false}
                  ></CircleSpinner>
                </SVGSpinner>
              )}
            </Spinner>
          )}
          {mode !== "small" && (
            <LabelsContainer label={label} value={value} showValue={showValue}>
              <SpinnerLabel backgroundType={backgroundType} mode={mode}>
                {label}
              </SpinnerLabel>
              {(value || value === 0) && showValue && (
                <SpinnerProgress backgroundType={backgroundType} mode={mode} showValue={showValue}>
                  {value}%
                </SpinnerProgress>
              )}
            </LabelsContainer>
          )}
        </SpinnerContainer>
      </DXCSpinner>
    </ThemeProvider>
  );
};

const determinatedValue = (props, strokeDashArray) => {
  let val = 0;
  if (props.value >= 0 && props.value <= 100) {
    val = strokeDashArray * (1 - props.value / 100);
  }
  return val;
};
const DXCSpinner = styled.div`
  height: ${(props) => (props.mode === "overlay" ? "100vh" : "")};
  width: ${(props) => (props.mode === "overlay" ? "100vw" : "")};
  display: ${(props) => (props.mode === "overlay" ? "flex" : "")};
  position: ${(props) => (props.mode === "overlay" ? "fixed" : "")};
  top: ${(props) => (props.mode === "overlay" ? 0 : "")};
  left: ${(props) => (props.mode === "overlay" ? 0 : "")};
  justify-content: ${(props) => (props.mode === "overlay" ? "center" : "")};
  align-items: ${(props) => (props.mode === "overlay" ? "center" : "")};
  z-index: ${(props) => (props.mode === "overlay" ? 1300 : "")};

  margin: ${(props) =>
    props.mode != "overlay" ? (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px") : ""};
  margin-top: ${(props) =>
    props.mode != "overlay"
      ? props.margin && typeof props.margin === "object" && props.margin.top
        ? spaces[props.margin.top]
        : ""
      : ""};
  margin-right: ${(props) =>
    props.mode != "overlay"
      ? props.margin && typeof props.margin === "object" && props.margin.right
        ? spaces[props.margin.right]
        : ""
      : ""};
  margin-bottom: ${(props) =>
    props.mode != "overlay"
      ? props.margin && typeof props.margin === "object" && props.margin.bottom
        ? spaces[props.margin.bottom]
        : ""
      : ""};
  margin-left: ${(props) =>
    props.mode != "overlay"
      ? props.margin && typeof props.margin === "object" && props.margin.left
        ? spaces[props.margin.left]
        : ""
      : ""};
`;

const SpinnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: ${(props) => (props.mode === "small" ? "16px" : "140px")};
  width: ${(props) => (props.mode === "small" ? "16px" : "140px")};
  justify-content: center;
  position: relative;
  background-color: transparent;

  @keyframes spinner-svg {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
  @keyframes svg-circle-large {
    0% {
      stroke-dashoffset: 400;
      transform: rotate(0);
    }

    50% {
      stroke-dashoffset: 75;
      transform: rotate(45deg);
    }

    100% {
      stroke-dashoffset: 400;
      transform: rotate(360deg);
    }
  }
  @keyframes svg-circle-small {
    0% {
      stroke-dashoffset: 35;
      transform: rotate(0);
    }

    50% {
      stroke-dashoffset: 8;
      transform: rotate(45deg);
    }

    100% {
      stroke-dashoffset: 35;
      transform: rotate(360deg);
    }
  }
`;

const BackOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 1;
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => `${props.theme.overlayBackgroundColor}`};
  opacity: ${(props) => `${props.theme.overlayOpacity}`};
`;

const BackgroundSpinner = styled.div`
  height: inherit;
  width: inherit;
  position: absolute;
  z-index: 1;
`;

const SVGBackground = styled.svg`
  height: inherit;
  width: inherit;
`;

const CircleBackground = styled.circle`
  animation: none;
  fill: transparent;
  stroke: ${(props) => `${props.theme.totalCircleColor}`};
  stroke-dasharray: ${(props) => (props.mode !== "small" ? "409" : "38")};
  stroke-linecap: initial;
  stroke-width: ${(props) => (props.mode !== "small" ? "8.5px" : "2px")};
  transform-origin: 50% 50%;
  vector-effect: non-scaling-stroke;
`;

const Spinner = styled.div`
  height: inherit;
  width: inherit;
  position: relative;
  z-index: 2;
`;

const SVGSpinner = styled.svg`
  height: inherit;
  width: inherit;
  transform: rotate(-90deg);
  top: 0;
  left: 0;
  transform-origin: center;
  overflow: visible;
  animation: ${(props) => (!props.isDeterminated ? "1.4s linear infinite both spinner-svg" : "")};
`;

const CircleSpinner = styled.circle`
  fill: transparent;
  stroke-linecap: initial;
  vector-effect: non-scaling-stroke;
  animation: ${(props) =>
    props.isDeterminated
      ? "none"
      : props.mode !== "small"
      ? "1.4s ease-in-out infinite both svg-circle-large"
      : "1.4s ease-in-out infinite both svg-circle-small"};
  stroke: ${(props) =>
    props.backgroundType === "dark" ? props.theme.trackCircleColorOnDark : props.theme.trackCircleColor};
  transform-origin: ${(props) => (!props.isDeterminated ? "50% 50%" : "")};
  stroke-dasharray: ${(props) => (props.mode !== "small" ? "409" : "38")};
  stroke-width: ${(props) => (props.mode !== "small" ? "8.5px" : "2px")};
  stroke-dashoffset: ${(props) =>
    props.isDeterminated
      ? props.mode !== "small"
        ? determinatedValue(props, 409)
        : determinatedValue(props, 38)
      : ""};
`;

const LabelsContainer = styled.div`
  display: block;
  margin: 0 auto;
  position: absolute;
  text-align: center;
  width: 110px;
`;

const SpinnerLabel = styled.p`
  margin: 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayLabelFontFamily : props.theme.labelFontFamily};
  font-weight: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayLabelFontWeight : props.theme.labelFontWeight};
  font-size: ${(props) => (props.mode === "overlay" ? props.theme.overlayLabelFontSize : props.theme.labelFontSize)};
  font-style: ${(props) => (props.mode === "overlay" ? props.theme.overlayLabelFontStyle : props.theme.labelFontStyle)};
  color: ${(props) =>
    props.mode === "overlay"
      ? props.theme.overlayLabelFontColor
      : props.backgroundType === "dark"
      ? props.theme.labelFontColorOnDark
      : props.theme.labelFontColor};
  text-align: ${(props) => (props.mode === "overlay" ? props.theme.overlayLabelTextAlign : props.theme.labelTextAlign)};
  letter-spacing: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayLabelLetterSpacing : props.theme.labelLetterSpacing};
`;

const SpinnerProgress = styled.p`
  margin: 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: ${(props) => (props.value !== "" && props.showValue === true && "block") || "none"};
  font-family: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayProgressValueFontFamily : props.theme.progressValueFontFamily};
  font-weight: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayProgressValueFontWeight : props.theme.progressValueFontWeight};
  font-size: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayProgressValueFontSize : props.theme.progressValueFontSize};
  font-style: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayProgressValueFontStyle : props.theme.progressValueFontStyle};
  color: ${(props) =>
    props.mode === "overlay"
      ? props.theme.overlayProgressValueFontColor
      : props.backgroundType === "dark"
      ? props.theme.progressValueFontColorOnDark
      : props.theme.progressValueFontColor};
  text-align: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayProgressValueTextAlign : props.theme.progressValueTextAlign};
  letter-spacing: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayProgressValueLetterSpacing : props.theme.progressValueLetterSpacing};
`;

export default DxcSpinner;

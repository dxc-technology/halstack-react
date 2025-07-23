import { useContext, useId, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import HalstackContext from "../HalstackContext";
import SpinnerPropsType from "./types";

const DxcSpinner = ({
  label,
  value,
  showValue = false,
  mode = "large",
  margin,
  ariaLabel = "Spinner",
}: SpinnerPropsType): JSX.Element => {
  const labelId = useId();
  const colorsTheme = useContext(HalstackContext);
  const determinated = useMemo(() => value != null && value >= 0 && value <= 100, [value]);

  return (
    <ThemeProvider theme={colorsTheme.spinner}>
      <DXCSpinner margin={margin} mode={mode}>
        <SpinnerContainer mode={mode}>
          {mode === "overlay" && <BackOverlay />}
          <BackgroundSpinner>
            {mode === "small" ? (
              <SVGBackground viewBox="0 0 16 16">
                <CircleBackground cx="8" cy="8" r="6" mode={mode} />
              </SVGBackground>
            ) : (
              <SVGBackground viewBox="0 0 140 140">
                <CircleBackground cx="70" cy="70" r="65" mode={mode} />
              </SVGBackground>
            )}
          </BackgroundSpinner>
          <Spinner
            role="progressbar"
            aria-valuenow={determinated && showValue ? value : undefined}
            aria-valuemin={determinated ? 0 : undefined}
            aria-valuemax={determinated ? 100 : undefined}
            aria-labelledby={label && mode !== "small" ? labelId : undefined}
            aria-label={!label ? ariaLabel : mode === "small" ? ariaLabel : undefined}
          >
            {mode === "small" ? (
              <SVGSpinner viewBox="0 0 16 16" determinated={determinated}>
                <CircleSpinner cx="8" cy="8" r="6" mode={mode} determinated={determinated} value={value} />
              </SVGSpinner>
            ) : (
              <SVGSpinner viewBox="0 0 140 140" determinated={determinated}>
                <CircleSpinner cx="70" cy="70" r="65" mode={mode} determinated={determinated} value={value} />
              </SVGSpinner>
            )}
          </Spinner>
          {mode !== "small" && (
            <LabelsContainer>
              {label && (
                <SpinnerLabel id={labelId} mode={mode}>
                  {label}
                </SpinnerLabel>
              )}
              {(value || value === 0) && showValue && (
                <SpinnerProgress value={value} mode={mode} showValue={showValue}>
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

const determinateValue = (value: SpinnerPropsType["value"], strokeDashArray: number) => {
  let val = 0;
  if (value != null && value >= 0 && value <= 100) {
    val = strokeDashArray * (1 - value / 100);
  }
  return val;
};

const DXCSpinner = styled.div<{
  mode: SpinnerPropsType["mode"];
  margin: SpinnerPropsType["margin"];
}>`
  height: ${(props) => (props.mode === "overlay" ? "100vh" : "")};
  width: ${(props) => (props.mode === "overlay" ? "100vw" : "")};
  display: ${(props) => (props.mode === "overlay" ? "flex" : "")};
  position: ${(props) => (props.mode === "overlay" ? "fixed" : "")};
  top: ${(props) => (props.mode === "overlay" ? 0 : "")};
  left: ${(props) => (props.mode === "overlay" ? 0 : "")};
  justify-content: ${(props) => (props.mode === "overlay" ? "center" : "")};
  align-items: ${(props) => (props.mode === "overlay" ? "center" : "")};
  z-index: ${(props) => (props.mode === "overlay" ? 400 : "")};

  margin: ${(props) =>
    props.mode !== "overlay" ? (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px") : ""};
  margin-top: ${(props) =>
    props.mode !== "overlay"
      ? props.margin && typeof props.margin === "object" && props.margin.top
        ? spaces[props.margin.top]
        : ""
      : ""};
  margin-right: ${(props) =>
    props.mode !== "overlay"
      ? props.margin && typeof props.margin === "object" && props.margin.right
        ? spaces[props.margin.right]
        : ""
      : ""};
  margin-bottom: ${(props) =>
    props.mode !== "overlay"
      ? props.margin && typeof props.margin === "object" && props.margin.bottom
        ? spaces[props.margin.bottom]
        : ""
      : ""};
  margin-left: ${(props) =>
    props.mode !== "overlay"
      ? props.margin && typeof props.margin === "object" && props.margin.left
        ? spaces[props.margin.left]
        : ""
      : ""};
`;

const SpinnerContainer = styled.div<{ mode: SpinnerPropsType["mode"] }>`
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
`;

const SVGBackground = styled.svg`
  height: inherit;
  width: inherit;
`;

const CircleBackground = styled.circle<{ mode: SpinnerPropsType["mode"] }>`
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
`;

const SVGSpinner = styled.svg<{ determinated: boolean }>`
  height: inherit;
  width: inherit;
  transform: rotate(-90deg);
  top: 0;
  left: 0;
  transform-origin: center;
  overflow: visible;
  animation: ${(props) => (!props.determinated ? "1.4s linear infinite both spinner-svg" : "")};
`;

const CircleSpinner = styled.circle<{
  value: SpinnerPropsType["value"];
  determinated: boolean;
}>`
  fill: transparent;
  stroke-linecap: initial;
  vector-effect: non-scaling-stroke;
  animation: ${(props) =>
    props.determinated
      ? "none"
      : props.mode !== "small"
        ? "1.4s ease-in-out infinite both svg-circle-large"
        : "1.4s ease-in-out infinite both svg-circle-small"};
  stroke: ${(props) => (props.mode === "overlay" ? props.theme.trackCircleColorOverlay : props.theme.trackCircleColor)};
  transform-origin: ${(props) => (!props.determinated ? "50% 50%" : "")};
  stroke-dasharray: ${(props) => (props.mode !== "small" ? "409" : "38")};
  stroke-width: ${(props) => (props.mode !== "small" ? "8.5px" : "2px")};
  stroke-dashoffset: ${(props) =>
    props.determinated
      ? props.mode !== "small"
        ? determinateValue(props.value, 409)
        : determinateValue(props.value, 38)
      : ""};
`;

const LabelsContainer = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 110px;
  text-align: center;
`;

const SpinnerLabel = styled.p<{ mode: SpinnerPropsType["mode"] }>`
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
  color: ${(props) => (props.mode === "overlay" ? props.theme.overlayLabelFontColor : props.theme.labelFontColor)};
  text-align: ${(props) => (props.mode === "overlay" ? props.theme.overlayLabelTextAlign : props.theme.labelTextAlign)};
  letter-spacing: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayLabelLetterSpacing : props.theme.labelLetterSpacing};
`;

const SpinnerProgress = styled.p<{
  value: SpinnerPropsType["value"];
  showValue: SpinnerPropsType["showValue"];
  mode: SpinnerPropsType["mode"];
}>`
  margin: 0;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: ${(props) => (props.value && props.showValue === true && "block") || "none"};
  font-family: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayProgressValueFontFamily : props.theme.progressValueFontFamily};
  font-weight: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayProgressValueFontWeight : props.theme.progressValueFontWeight};
  font-size: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayProgressValueFontSize : props.theme.progressValueFontSize};
  font-style: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayProgressValueFontStyle : props.theme.progressValueFontStyle};
  color: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayProgressValueFontColor : props.theme.progressValueFontColor};
  text-align: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayProgressValueTextAlign : props.theme.progressValueTextAlign};
  letter-spacing: ${(props) =>
    props.mode === "overlay" ? props.theme.overlayProgressValueLetterSpacing : props.theme.progressValueLetterSpacing};
`;

export default DxcSpinner;

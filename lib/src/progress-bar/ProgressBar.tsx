import React, { useContext, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import useTheme from "../useTheme";
import BackgroundColorContext, { BackgroundColors } from "../BackgroundColorContext";
import ProgressBarPropsType from "./types";

const DxcProgressBar = ({
  label = "",
  helperText = "",
  overlay = false,
  value,
  showValue = false,
  margin,
}: ProgressBarPropsType): JSX.Element => {
  const colorsTheme = useTheme();
  const backgroundType = useContext(BackgroundColorContext);
  const [valueProgressBar, setValueProgressBar] = useState(0);

  useEffect(() => {
    setValueProgressBar(
      value === null || value === undefined || value < 0 ? 0 : value >= 0 && value <= 100 ? value : 100
    );
  }, [value]);

  return (
    <ThemeProvider theme={colorsTheme.progressBar}>
      <ProgressBarModal overlay={overlay}>
        {overlay === true && <OverlayContainer overlay={overlay} />}
        <ProgressBarContainer margin={margin} overlay={overlay}>
          <InfoProgressBar>
            <ProgressBarLabel overlay={overlay} backgroundType={backgroundType} aria-label={label || undefined}>
              {label}
            </ProgressBarLabel>
            <ProgressBarProgress
              overlay={overlay}
              showValue={showValue}
              backgroundType={backgroundType}
              value={valueProgressBar}
            >
              {valueProgressBar} %
            </ProgressBarProgress>
          </InfoProgressBar>
          <LinearProgress
            role="progressbar"
            helperText={helperText}
            aria-valuenow={showValue ? valueProgressBar : undefined}
          >
            <LinearProgressBar
              backgroundType={backgroundType}
              variant={value === null || value === undefined ? "indeterminate" : "determinate"}
              container="first"
              value={valueProgressBar}
            ></LinearProgressBar>
          </LinearProgress>
          {helperText && (
            <HelperText overlay={overlay} backgroundType={backgroundType}>
              {helperText}
            </HelperText>
          )}
        </ProgressBarContainer>
      </ProgressBarModal>
    </ThemeProvider>
  );
};

const ProgressBarModal = styled.div<{
  overlay: ProgressBarPropsType["overlay"];
}>`
  width: ${(props) => (props.overlay === true && "100%") || ""};
  height: ${(props) => (props.overlay === true && "100%") || ""};
  justify-content: ${(props) => (props.overlay === true ? "center" : "")};
  align-items: ${(props) => (props.overlay === true ? "center" : "")};
  inset: ${(props) => (props.overlay === true ? "0" : "")};
  position: ${(props) => (props.overlay === true ? "fixed" : "")};
  display: ${(props) => (props.overlay === true ? "flex" : "")};
`;

const OverlayContainer = styled.div<{
  overlay: ProgressBarPropsType["overlay"];
}>`
  background-color: ${(props) => props.theme.overlayColor};
  position: fixed;
  inset: 0;
`;

const ProgressBarContainer = styled.div<{
  overlay: ProgressBarPropsType["overlay"];
  margin: ProgressBarPropsType["margin"];
}>`
  z-index: ${(props) => (props.overlay === true && "100") || "0"};
  width: ${(props) => (props.overlay === true ? "80%" : "100%")};
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

const InfoProgressBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 685px;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 8px;
  align-items: baseline;
  justify-content: space-between;
`;

const ProgressBarLabel = styled.div<{ backgroundType: BackgroundColors; overlay: ProgressBarPropsType["overlay"] }>`
  font-family: ${(props) => props.theme.labelFontFamily};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-size: ${(props) => props.theme.labelFontSize};
  font-weight: ${(props) => props.theme.labelFontWeight};
  text-transform: ${(props) => props.theme.labelFontTextTransform};
  color: ${(props) =>
    props.backgroundType === "dark"
      ? props.theme.labelFontColorOnDark
      : props.overlay === true
      ? props.theme.overlayFontColor
      : props.theme.labelFontColor};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ProgressBarProgress = styled.div<{
  backgroundType: BackgroundColors;
  overlay: ProgressBarPropsType["overlay"];
  showValue: ProgressBarPropsType["showValue"];
  value: ProgressBarPropsType["value"];
}>`
  font-family: ${(props) => props.theme.valueFontFamily};
  font-style: ${(props) => props.theme.valueFontStyle};
  font-size: ${(props) => props.theme.valueFontSize};
  font-weight: ${(props) => props.theme.valueFontWeight};
  text-transform: ${(props) => props.theme.valueFontTextTransform};
  color: ${(props) =>
    props.backgroundType === "dark"
      ? props.theme.valueFontColorOnDark
      : props.overlay === true
      ? props.theme.overlayFontColor
      : props.theme.valueFontColor};
  display: ${(props) =>
    (props.value !== undefined && props.value !== null && props.showValue === true && "block") || "none"};
  flex-shrink: 0;
`;

const HelperText = styled.span<{ backgroundType: BackgroundColors; overlay: ProgressBarPropsType["overlay"] }>`
  color: ${(props) =>
    props.backgroundType === "dark"
      ? props.theme.helperTextFontColorOnDark
      : props.overlay === true
      ? props.theme.overlayFontColor
      : props.theme.helperTextFontColor};
  font-family: ${(props) => props.theme.helperTextFontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: 1.5em;
`;

const LinearProgress = styled.div<{ helperText: ProgressBarPropsType["helperText"] }>`
  height: ${(props) => props.theme.thickness};
  background-color: ${(props) => props.theme.totalLineColor};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: ${(props) => props.helperText !== "" && "8px"};
  overflow: hidden;
  position: relative;
`;

const LinearProgressBar = styled.span<{
  backgroundType: BackgroundColors;
  variant: "determinate" | "indeterminate";
  value: ProgressBarPropsType["value"];
  container: string;
}>`
  background-color: ${(props) =>
    props.backgroundType === "dark" ? props.theme.trackLineColorOnDark : props.theme.trackLineColor};
  transform: ${(props) => `translateX(-${props.variant === "determinate" ? 100 - props.value : 0}%)`};
  top: 0;
  left: 0;
  width: 100%;
  bottom: 0;
  position: absolute;
  transition: ${(props) => (props.variant === "determinate" ? "transform .4s linear" : "transform 0.2s linear")};
  transform-origin: left;
  ${(props) => props.variant === "indeterminate" && "width: auto;"};
  ${(props) =>
    props.variant === "indeterminate"
      ? props.container === "first"
        ? "animation: keyframes-indeterminate-first 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;"
        : "animation: keyframes-indeterminate-second 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;"
      : ""};

  @keyframes keyframes-indeterminate-first {
    0% {
      left: -35%;
      right: 100%;
    }
    60% {
      left: 100%;
      right: -90%;
    }
    100% {
      left: 100%;
      right: -90%;
    }
  }

  @keyframes keyframes-indeterminate-second {
    0% {
      left: -200%;
      right: 100%;
    }
    60% {
      left: 107%;
      right: -8%;
    }
    100% {
      left: 107%;
      right: -8%;
    }
  }
`;

export default DxcProgressBar;

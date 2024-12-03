import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import useTheme from "../useTheme";
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
  const [valueProgressBar, setValueProgressBar] = useState(0);

  useEffect(() => {
    setValueProgressBar(
      value === null || value === undefined || value < 0 ? 0 : value >= 0 && value <= 100 ? value : 100
    );
  }, [value]);

  return (
    <ThemeProvider theme={colorsTheme?.progressBar}>
      <BackgroundProgressBar overlay={overlay}>
        <ProgressBarContainer overlay={overlay} margin={margin}>
          <InfoProgressBar>
            <ProgressBarLabel overlay={overlay}>{label}</ProgressBarLabel>
            <ProgressBarProgress overlay={overlay} showValue={showValue} value={valueProgressBar}>
              {valueProgressBar} %
            </ProgressBarProgress>
          </InfoProgressBar>
          <LinearProgress
            role="progressbar"
            helperText={helperText}
            aria-valuenow={showValue ? valueProgressBar : undefined}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={label || "Progress Bar"}
          >
            <LinearProgressBar
              variant={value === null || value === undefined ? "indeterminate" : "determinate"}
              container="first"
              value={valueProgressBar}
            ></LinearProgressBar>
          </LinearProgress>
          {helperText && <HelperText overlay={overlay}>{helperText}</HelperText>}
        </ProgressBarContainer>
      </BackgroundProgressBar>
    </ThemeProvider>
  );
};

const BackgroundProgressBar = styled.div<{
  overlay: ProgressBarPropsType["overlay"];
}>`
  ${({ overlay, theme }) =>
    overlay
      ? `background-color: ${theme.overlayColor};
      width: 100%;
      justify-content: center;
      height: 100vh;
      align-items: center;
      max-width: 100%;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1300;`
      : `background-color: "transparent";`}
  display: flex;
  flex-wrap: wrap;
  min-width: 100px;
  width: 100%;
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

const ProgressBarLabel = styled.div<{
  overlay: ProgressBarPropsType["overlay"];
}>`
  font-family: ${(props) => props.theme.labelFontFamily};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-size: ${(props) => props.theme.labelFontSize};
  font-weight: ${(props) => props.theme.labelFontWeight};
  text-transform: ${(props) => props.theme.labelFontTextTransform};
  color: ${(props) => (props.overlay === true ? props.theme.overlayFontColor : props.theme.labelFontColor)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ProgressBarProgress = styled.div<{
  overlay: ProgressBarPropsType["overlay"];
  showValue: ProgressBarPropsType["showValue"];
  value: ProgressBarPropsType["value"];
}>`
  font-family: ${(props) => props.theme.valueFontFamily};
  font-style: ${(props) => props.theme.valueFontStyle};
  font-size: ${(props) => props.theme.valueFontSize};
  font-weight: ${(props) => props.theme.valueFontWeight};
  text-transform: ${(props) => props.theme.valueFontTextTransform};
  color: ${(props) => (props.overlay === true ? props.theme.overlayFontColor : props.theme.valueFontColor)};
  display: ${(props) =>
    (props.value !== undefined && props.value !== null && props.showValue === true && "block") || "none"};
  flex-shrink: 0;
`;

const HelperText = styled.span<{ overlay: ProgressBarPropsType["overlay"] }>`
  color: ${(props) => (props.overlay === true ? props.theme.overlayFontColor : props.theme.helperTextFontColor)};
  font-family: ${(props) => props.theme.helperTextFontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: 1.5em;
`;

const LinearProgress = styled.div<{
  helperText: ProgressBarPropsType["helperText"];
}>`
  height: ${(props) => props.theme.thickness};
  background-color: ${(props) => props.theme.totalLineColor};
  border-radius: ${(props) => props.theme.borderRadius};
  margin-bottom: ${(props) => props.helperText !== "" && "8px"};
  overflow: hidden;
  position: relative;
`;

const LinearProgressBar = styled.span<{
  variant: "determinate" | "indeterminate";
  value: ProgressBarPropsType["value"];
  container: string;
}>`
  background-color: ${(props) => props.theme.trackLineColor};
  transform: ${(props) => `translateX(-${props.variant === "determinate" ? 100 - (props.value ?? 0) : 0}%)`};
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

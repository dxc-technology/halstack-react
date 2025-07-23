import { useContext, useEffect, useId, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import HalstackContext from "../HalstackContext";
import ProgressBarPropsType from "./types";
import DxcFlex from "../flex/Flex";

const Overlay = styled.div<{
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
      z-index: 410;`
      : `background-color: transparent;`}
  display: flex;
  flex-wrap: wrap;
  min-width: 100px;
  width: 100%;
`;

const MainContainer = styled.div<{
  overlay: ProgressBarPropsType["overlay"];
  margin: ProgressBarPropsType["margin"];
}>`
  width: ${(props) => (props.overlay ? "80%" : "100%")};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: ${(props) => (props.overlay ? "1" : "0")};
`;

const ProgressBarLabel = styled.div<{
  overlay: ProgressBarPropsType["overlay"];
}>`
  font-family: ${(props) => props.theme.labelFontFamily};
  font-style: ${(props) => props.theme.labelFontStyle};
  font-size: ${(props) => props.theme.labelFontSize};
  font-weight: ${(props) => props.theme.labelFontWeight};
  text-transform: ${(props) => props.theme.labelFontTextTransform};
  color: ${(props) => (props.overlay ? props.theme.overlayFontColor : props.theme.labelFontColor)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ProgressBarProgress = styled.div<{
  overlay: ProgressBarPropsType["overlay"];
}>`
  flex-shrink: 0;
  color: ${(props) => (props.overlay ? props.theme.overlayFontColor : props.theme.valueFontColor)};
  font-family: ${(props) => props.theme.valueFontFamily};
  font-style: ${(props) => props.theme.valueFontStyle};
  font-size: ${(props) => props.theme.valueFontSize};
  font-weight: ${(props) => props.theme.valueFontWeight};
  text-transform: ${(props) => props.theme.valueFontTextTransform};
`;

const HelperText = styled.span<{ overlay: ProgressBarPropsType["overlay"] }>`
  color: ${(props) => (props.overlay ? props.theme.overlayFontColor : props.theme.helperTextFontColor)};
  font-family: ${(props) => props.theme.helperTextFontFamily};
  font-size: ${(props) => props.theme.helperTextFontSize};
  font-style: ${(props) => props.theme.helperTextFontStyle};
  font-weight: ${(props) => props.theme.helperTextFontWeight};
  line-height: 1.5em;
`;

const LinearProgress = styled.div<{
  helperText: ProgressBarPropsType["helperText"];
}>`
  position: relative;
  border-radius: ${(props) => props.theme.borderRadius};
  height: ${(props) => props.theme.thickness};
  background-color: ${(props) => props.theme.totalLineColor};
  overflow: hidden;
`;

const LinearProgressBar = styled.span<{
  variant: "determinate" | "indeterminate";
  value: ProgressBarPropsType["value"];
}>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: ${(props) => (props.variant === "indeterminate" ? "auto" : "100%")};
  transform: ${(props) => `translateX(-${props.variant === "determinate" ? 100 - (props.value ?? 0) : 0}%)`};
  transition: ${(props) => (props.variant === "determinate" ? "transform .4s linear" : "transform 0.2s linear")};
  transform-origin: left;
  background-color: ${(props) => props.theme.trackLineColor};
  ${(props) =>
    props.variant === "indeterminate"
      ? "animation: keyframes-indeterminate-first 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;"
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

const DxcProgressBar = ({
  label,
  helperText,
  overlay,
  value,
  showValue,
  margin,
  ariaLabel = "Progress bar",
}: ProgressBarPropsType): JSX.Element => {
  const colorsTheme = useContext(HalstackContext);
  const labelId = `label-${useId()}`;
  const [innerValue, setInnerValue] = useState<number | undefined>();

  useEffect(() => {
    if (value != null) setInnerValue(value < 0 ? 0 : value > 100 ? 100 : value);
  }, [value]);

  return (
    <ThemeProvider theme={colorsTheme.progressBar}>
      <Overlay overlay={overlay}>
        <MainContainer overlay={overlay} margin={margin}>
          <DxcFlex justifyContent="space-between" gap="0.5rem">
            {label && (
              <ProgressBarLabel id={labelId} overlay={overlay}>
                {label}
              </ProgressBarLabel>
            )}
            {innerValue != null && showValue && (
              <ProgressBarProgress overlay={overlay}>{innerValue} %</ProgressBarProgress>
            )}
          </DxcFlex>
          <LinearProgress
            role="progressbar"
            helperText={helperText}
            aria-label={label ? undefined : ariaLabel}
            aria-labelledby={label ? labelId : undefined}
            aria-valuenow={innerValue}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <LinearProgressBar variant={innerValue == null ? "indeterminate" : "determinate"} value={innerValue} />
          </LinearProgress>
          {helperText && <HelperText overlay={overlay}>{helperText}</HelperText>}
        </MainContainer>
      </Overlay>
    </ThemeProvider>
  );
};

export default DxcProgressBar;

import { useEffect, useId, useState } from "react";
import styled from "styled-components";
import { spaces } from "../common/variables";
import ProgressBarPropsType from "./types";
import DxcFlex from "../flex/Flex";
import { auxTextStyles, labelTextStyles, textColorStyles } from "./utils";

const ProgressBarContainer = styled.div<{
  overlay: ProgressBarPropsType["overlay"];
}>`
  display: flex;
  flex-wrap: wrap;
  min-width: 100px;
  width: 100%;
  ${({ overlay }) =>
    overlay &&
    `
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      z-index: 1300;
    `}
`;

const Overlay = styled.div`
  background-color: var(--color-bg-alpha-medium);
  height: 100%;
  inset: 0;
  position: fixed;
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
  z-index: ${(props) => (props.overlay ? "100" : "0")};
  gap: var(--spacing-gap-s);
`;

const ProgressBarLabel = styled.div<{
  overlay: ProgressBarPropsType["overlay"];
}>`
  ${labelTextStyles};
  ${(props) => textColorStyles(props.overlay)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ProgressBarProgress = styled.div<{
  overlay: ProgressBarPropsType["overlay"];
}>`
  ${auxTextStyles};
  ${(props) => textColorStyles(props.overlay)};
  flex-shrink: 0;
`;

const HelperText = styled.span<{ overlay: ProgressBarPropsType["overlay"] }>`
  ${(props) => textColorStyles(props.overlay)};
  ${auxTextStyles};
`;

const LinearProgress = styled.div<{
  helperText: ProgressBarPropsType["helperText"];
  overlay: ProgressBarPropsType["overlay"];
}>`
  position: relative;
  border-radius: var(--border-radius-m);
  height: 8px;
  background-color: ${(props) => (props.overlay ? "var(--color-bg-neutral-lighter)" : "var(--color-bg-neutral-light)")};
  overflow: hidden;
`;

const LinearProgressBar = styled.span<{
  overlay: ProgressBarPropsType["overlay"];
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
  background-color: ${(props) => (props.overlay ? "var(--color-fg-primary-medium)" : "var(--color-fg-primary-strong)")};
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
  const labelId = `label-${useId()}`;
  const [innerValue, setInnerValue] = useState<number | undefined>();

  useEffect(() => {
    if (value != null) setInnerValue(value < 0 ? 0 : value > 100 ? 100 : value);
  }, [value]);

  return (
    <ProgressBarContainer overlay={overlay}>
      {overlay && <Overlay />}
      <MainContainer overlay={overlay} margin={margin}>
        <DxcFlex justifyContent="space-between">
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
          aria-label={label ? undefined : ariaLabel}
          aria-labelledby={label ? labelId : undefined}
          aria-valuenow={innerValue}
          aria-valuemin={0}
          aria-valuemax={100}
          helperText={helperText}
          role="progressbar"
          overlay={overlay}
        >
          <LinearProgressBar
            overlay={overlay}
            variant={innerValue == null ? "indeterminate" : "determinate"}
            value={innerValue}
          />
        </LinearProgress>
        {helperText && <HelperText overlay={overlay}>{helperText}</HelperText>}
      </MainContainer>
    </ProgressBarContainer>
  );
};

export default DxcProgressBar;

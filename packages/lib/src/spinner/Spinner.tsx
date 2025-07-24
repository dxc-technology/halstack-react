import { useEffect, useId, useState } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { spaces } from "../common/variables";
import SpinnerPropsType from "./types";

// Keyframes for indeterminate spinner rotation
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Calculate stroke dash offset for determinate progress
const getStrokeDashOffset = (progress: number, circumference: number) => {
  return circumference - (progress / 100) * circumference;
};

// Size configuration based on Figma design
const getSizeConfig = (size: Required<SpinnerPropsType>["size"]) => {
  switch (size) {
    case "small":
      return {
        diameter: 16,
        strokeWidth: 2,
        fontSize: "var(--typography-body-s)",
        containerSize: "20px",
      };
    case "medium":
      return {
        diameter: 140,
        strokeWidth: 8,
        fontSize: "var(--typography-body-m)",
        containerSize: "140px",
      };
    case "large":
      return {
        diameter: 180,
        strokeWidth: 10,
        fontSize: "var(--typography-body-l)",
        containerSize: "180px",
      };
  }
};

const SpinnerContainer = styled.div<{
  overlay: SpinnerPropsType["overlay"];
  margin: SpinnerPropsType["margin"];
}>`
  display: ${({ overlay }) => (overlay ? "flex" : "inline-flex")};
  align-items: center;
  justify-content: center;
  ${({ overlay }) =>
    overlay &&
    `
      position: fixed;
      inset: 0;
      height: 100%;
      z-index: var(--z-spinner-overlay);
    `}
  ${({ margin }) =>
    margin &&
    (typeof margin !== "object"
      ? `margin: ${spaces[margin]};`
      : `
          ${margin.top ? `margin-top: ${spaces[margin.top]};` : ""}
          ${margin.right ? `margin-right: ${spaces[margin.right]};` : ""}
          ${margin.bottom ? `margin-bottom: ${spaces[margin.bottom]};` : ""}
          ${margin.left ? `margin-left: ${spaces[margin.left]};` : ""}
        `)}
`;

const Overlay = styled.div`
  background-color: var(--color-bg-alpha-medium);
  height: 100%;
  inset: 0;
  position: fixed;
`;

const SpinnerWrapper = styled.div<{
  size: Required<SpinnerPropsType>["size"];
  overlay: SpinnerPropsType["overlay"];
}>`
  position: relative;
  width: ${({ size }) => getSizeConfig(size).containerSize};
  height: ${({ size }) => getSizeConfig(size).containerSize};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ size }) => (size === "small" ? "0" : "var(--spacing-gap-xs)")};
  ${({ overlay, size }) =>
    overlay && size !== "small"
      ? `
          background-color: var(--color-bg-neutral-lightest);
          border-radius: var(--border-radius-l);
          padding: var(--spacing-padding-m);
          box-shadow: var(--shadow-depth-2);
        `
      : ""}
`;

const CircularProgress = styled.svg<{
  size: Required<SpinnerPropsType>["size"];
  mode: Required<SpinnerPropsType>["mode"];
}>`
  width: ${({ size }) => getSizeConfig(size).containerSize};
  height: ${({ size }) => getSizeConfig(size).containerSize};
  transform: rotate(-90deg);
`;

const Track = styled.circle<{
  size: Required<SpinnerPropsType>["size"];
  overlay: SpinnerPropsType["overlay"];
}>`
  fill: none;
  stroke: ${({ overlay }) =>
    overlay ? "var(--color-bg-neutral-medium)" : "var(--color-bg-neutral-light)"};
  stroke-width: ${({ size }) => getSizeConfig(size).strokeWidth};
`;

const Progress = styled.circle<{
  size: Required<SpinnerPropsType>["size"];
  mode: Required<SpinnerPropsType>["mode"];
  overlay: SpinnerPropsType["overlay"];
  circumference: number;
  progress: number;
}>`
  fill: none;
  stroke: ${({ overlay }) =>
    overlay ? "var(--color-fg-primary-medium)" : "var(--color-fg-primary-strong)"};
  stroke-width: ${({ size }) => getSizeConfig(size).strokeWidth};
  stroke-linecap: round;
  stroke-dasharray: ${({ circumference }) => circumference};
  stroke-dashoffset: ${({ progress, circumference, mode }) =>
    mode === "determinate" ? getStrokeDashOffset(progress, circumference) : 0};
  
  ${({ mode, circumference }) =>
    mode === "indeterminate"
      ? `
          stroke-dasharray: ${circumference * 0.25} ${circumference * 0.75};
          animation: ${spin} 2s linear infinite;
          transform-origin: center;
        `
      : `
          transition: stroke-dashoffset 0.3s ease-in-out;
        `}
`;

const ContentContainer = styled.div<{
  size: Required<SpinnerPropsType>["size"];
  overlay: SpinnerPropsType["overlay"];
}>`
  ${({ size }) => (size === "small" ? "display: none;" : "")}
  position: ${({ size }) => (size === "small" ? "absolute" : "static")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--spacing-gap-xs);
  width: ${({ size }) => (size === "small" ? "100%" : "auto")};
  color: ${({ overlay }) =>
    overlay ? "var(--color-fg-neutral-bright)" : "var(--color-fg-neutral-dark)"};
`;

const Label = styled.span<{
  size: Required<SpinnerPropsType>["size"];
  overlay: SpinnerPropsType["overlay"];
}>`
  font-family: var(--typography-font-family);
  font-size: ${({ size }) => getSizeConfig(size).fontSize};
  font-weight: var(--typography-body-regular);
  line-height: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 116px;
`;

const Value = styled.span<{
  size: Required<SpinnerPropsType>["size"];
  overlay: SpinnerPropsType["overlay"];
}>`
  font-family: var(--typography-font-family);
  font-size: ${({ size }) => getSizeConfig(size).fontSize};
  font-weight: var(--typography-body-semibold);
  line-height: 1;
`;

const DxcSpinner = ({
  label = "Loading...",
  showValue = false,
  value,
  size = "medium",
  mode = value !== undefined ? "determinate" : "indeterminate",
  overlay = false,
  margin,
  ariaLabel,
  ...props
}: SpinnerPropsType) => {
  const sizeConfig = getSizeConfig(size);
  const radius = (sizeConfig.diameter - sizeConfig.strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressValue = value !== undefined ? Math.min(Math.max(value, 0), 100) : 0;
  const id = useId();

  return (
    <SpinnerContainer overlay={overlay} margin={margin}>
      {overlay && <Overlay />}
      <SpinnerWrapper size={size} overlay={overlay}>
        <CircularProgress
          size={size}
          mode={mode}
          role="progressbar"
          aria-label={ariaLabel || (mode === "determinate" ? `Loading ${progressValue}%` : "Loading")}
          aria-valuenow={mode === "determinate" ? progressValue : undefined}
          aria-valuemin={mode === "determinate" ? 0 : undefined}
          aria-valuemax={mode === "determinate" ? 100 : undefined}
          aria-describedby={label ? `${id}-label` : undefined}
        >
          <Track
            cx={sizeConfig.diameter / 2}
            cy={sizeConfig.diameter / 2}
            r={radius}
            size={size}
            overlay={overlay}
          />
          <Progress
            cx={sizeConfig.diameter / 2}
            cy={sizeConfig.diameter / 2}
            r={radius}
            size={size}
            mode={mode}
            overlay={overlay}
            circumference={circumference}
            progress={progressValue}
          />
        </CircularProgress>
        
        {size !== "small" && (
          <ContentContainer size={size} overlay={overlay}>
            {label && (
              <Label id={`${id}-label`} size={size} overlay={overlay}>
                {label}
              </Label>
            )}
            {showValue && mode === "determinate" && (
              <Value size={size} overlay={overlay}>
                {progressValue}%
              </Value>
            )}
          </ContentContainer>
        )}
      </SpinnerWrapper>
    </SpinnerContainer>
  );
};

export default DxcSpinner;

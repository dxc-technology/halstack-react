import { useContext, useId, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables";
import HalstackContext from "../HalstackContext";
import SpinnerPropsType from "./types";

const SpinnerContainer = styled.div<{
  mode: SpinnerPropsType["mode"];
  margin: SpinnerPropsType["margin"];
}>`
  ${({ mode }) =>
    mode === "overlay" &&
    `
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      z-index: 2147483647;
    `};

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

const MainContainer = styled.div<{ mode: SpinnerPropsType["mode"] }>`
  position: relative;
  display: grid;
  place-items: center;
  height: ${({ mode }) => (mode === "small" ? "16px" : "140px")};
  width: ${({ mode }) => (mode === "small" ? "16px" : "140px")};

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

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  height: 100%;
  background-color: var(--color-bg-alpha-medium);
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
  stroke: var(--color-bg-neutral-lightest);
  stroke-dasharray: ${(props) => (props.mode !== "small" ? "409" : "38")};
  stroke-linecap: initial;
  stroke-width: ${(props) => (props.mode !== "small" ? "8.5px" : "2px")};
  transform-origin: 50% 50%;
  vector-effect: non-scaling-stroke;
`;

const Spinner = styled.div`
  position: relative;
  height: inherit;
  width: inherit;
`;

const SVGSpinner = styled.svg<{ determined: boolean }>`
  height: inherit;
  width: inherit;
  transform: rotate(-90deg);
  top: 0;
  left: 0;
  transform-origin: center;
  overflow: visible;
  animation: ${({ determined }) => !determined && "1.4s linear infinite both spinner-svg"};
`;

const determinateValue = (value: SpinnerPropsType["value"], strokeDashArray: number) =>
  value != null && value >= 0 && value <= 100 ? strokeDashArray * (1 - value / 100) : 0;

const CircleSpinner = styled.circle<{
  value: SpinnerPropsType["value"];
  determined: boolean;
}>`
  fill: transparent;
  stroke-linecap: initial;
  vector-effect: non-scaling-stroke;
  animation: ${(props) =>
    props.determined
      ? "none"
      : props.mode !== "small"
        ? "1.4s ease-in-out infinite both svg-circle-large"
        : "1.4s ease-in-out infinite both svg-circle-small"};
  stroke: ${({ mode }) => (mode === "overlay" ? "var(--color-fg-primary-medium)" : "var(--color-fg-primary-strong)")};
  transform-origin: ${({ determined }) => (!determined ? "50% 50%" : "")};
  stroke-dasharray: ${({ mode }) => (mode !== "small" ? "409" : "38")};
  stroke-width: ${({ mode }) => (mode !== "small" ? "8.5px" : "2px")};
  stroke-dashoffset: ${({ determined, mode, value }) =>
    determined ? (mode !== "small" ? determinateValue(value, 409) : determinateValue(value, 38)) : ""};
`;

const Labels = styled.div<{ mode: SpinnerPropsType["mode"] }>`
  position: absolute;
  display: grid;
  gap: var(--spacing-gap-none, 0px);
  place-items: center;
  width: 116px;

  color: ${({ mode }) => (mode === "overlay" ? "var(--color-absolutes-white)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-m);
  font-weight: var(--typography-helper-text-regular);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  > strong {
    font-weight: var(--typography-helper-text-semibold);
  }
`;

const DxcSpinner = ({ ariaLabel = "Spinner", label, margin, mode = "large", showValue, value }: SpinnerPropsType) => {
  const labelId = useId();
  const colorsTheme = useContext(HalstackContext);
  const determined = useMemo(() => value != null && value >= 0 && value <= 100, [value]);

  return (
    <SpinnerContainer margin={margin} mode={mode}>
      <MainContainer mode={mode}>
        {mode === "overlay" && <Overlay />}
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
          aria-valuenow={determined && showValue ? value : undefined}
          aria-valuemin={determined ? 0 : undefined}
          aria-valuemax={determined ? 100 : undefined}
          aria-labelledby={label && mode !== "small" ? labelId : undefined}
          aria-label={!label ? ariaLabel : mode === "small" ? ariaLabel : undefined}
          role="progressbar"
        >
          {mode === "small" ? (
            <SVGSpinner viewBox="0 0 16 16" determined={determined}>
              <CircleSpinner cx="8" cy="8" r="6" mode={mode} determined={determined} value={value} />
            </SVGSpinner>
          ) : (
            <SVGSpinner viewBox="0 0 140 140" determined={determined}>
              <CircleSpinner cx="70" cy="70" r="65" mode={mode} determined={determined} value={value} />
            </SVGSpinner>
          )}
        </Spinner>
        {mode !== "small" && (
          <Labels mode={mode}>
            {label && <span id={labelId}>{label}</span>}
            {(value || value === 0) && showValue && <strong>{value}%</strong>}
          </Labels>
        )}
      </MainContainer>
    </SpinnerContainer>
  );
};

export default DxcSpinner;

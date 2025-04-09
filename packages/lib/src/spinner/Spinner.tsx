import { MouseEvent, useId, useMemo, useState } from "react";
import styled from "styled-components";
import { spaces } from "../common/variables";
import SpinnerPropsType from "./types";
import { TooltipWrapper } from "../tooltip/Tooltip";

const SpinnerContainer = styled.div<{
  margin: SpinnerPropsType["margin"];
  mode: SpinnerPropsType["mode"];
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

const SVGTotalTrack = styled.svg`
  position: absolute;
  height: inherit;
  width: inherit;
`;

const TotalTrack = styled.circle<{ mode: SpinnerPropsType["mode"] }>`
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
  determined: boolean;
  inheritColor: SpinnerPropsType["inheritColor"];
  value: SpinnerPropsType["value"];
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
  stroke: ${({ inheritColor, mode }) =>
    inheritColor
      ? "currentColor"
      : mode === "overlay"
        ? "var(--color-fg-primary-medium)"
        : "var(--color-fg-primary-strong)"};
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
  color: ${({ mode }) => (mode === "overlay" ? "var(--color-fg-neutral-bright)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-m);
  font-weight: var(--typography-helper-text-regular);

  > span {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > strong {
    font-weight: var(--typography-helper-text-semibold);
  }
`;

const DxcSpinner = ({
  ariaLabel = "Spinner",
  inheritColor = false,
  label,
  margin,
  mode = "large",
  showValue,
  value,
}: SpinnerPropsType) => {
  const labelId = useId();
  const determined = useMemo(() => value != null && value >= 0 && value <= 100, [value]);
  const [hasTooltip, setHasTooltip] = useState(false);

  const handleLabelOnMouseEnter = (event: MouseEvent<HTMLSpanElement>) => {
    const text = event.currentTarget;
    setHasTooltip(text.scrollWidth > text.clientWidth);
  };

  return (
    <SpinnerContainer margin={margin} mode={mode}>
      <MainContainer mode={mode}>
        {mode === "overlay" && <Overlay />}
        <SVGTotalTrack viewBox={mode === "small" ? "0 0 16 16" : "0 0 140 140"}>
          <TotalTrack
            cx={mode === "small" ? "8" : "70"}
            cy={mode === "small" ? "8" : "70"}
            mode={mode}
            r={mode === "small" ? "6" : "65"}
          />
        </SVGTotalTrack>
        <Spinner
          aria-label={!label || mode === "small" ? ariaLabel : undefined}
          aria-labelledby={label && mode !== "small" ? labelId : undefined}
          aria-valuemax={determined ? 100 : undefined}
          aria-valuemin={determined ? 0 : undefined}
          aria-valuenow={determined && showValue ? value : undefined}
          role={determined ? "progressbar" : "status"}
        >
          <SVGSpinner determined={determined} viewBox={mode === "small" ? "0 0 16 16" : "0 0 140 140"}>
            <CircleSpinner
              cx={mode === "small" ? "8" : "70"}
              cy={mode === "small" ? "8" : "70"}
              determined={determined}
              inheritColor={inheritColor}
              mode={mode}
              r={mode === "small" ? "6" : "65"}
              value={value}
            />
          </SVGSpinner>
        </Spinner>
        {mode !== "small" && (
          <TooltipWrapper condition={hasTooltip} label={label}>
            <Labels mode={mode}>
              {label && (
                <span id={labelId} onMouseEnter={handleLabelOnMouseEnter}>
                  {label}
                </span>
              )}
              {(value || value === 0) && showValue && <strong>{value}%</strong>}
            </Labels>
          </TooltipWrapper>
        )}
      </MainContainer>
    </SpinnerContainer>
  );
};

export default DxcSpinner;

import { ChangeEvent, forwardRef, MouseEvent, useId, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import DxcTextInput from "../text-input/TextInput";
import { spaces } from "../common/variables";
import SliderPropsType, { RefType } from "./types";
import { getMargin } from "../common/utils";

const sizes = {
  medium: "360px",
  large: "480px",
  fillParent: "100%",
};

const calculateWidth = (margin: SliderPropsType["margin"], size: SliderPropsType["size"]) =>
  size === "fillParent"
    ? `calc(${sizes[size]} - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`
    : size && sizes[size];

const SliderContainer = styled.div<{
  margin: SliderPropsType["margin"];
  size: SliderPropsType["size"];
}>`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  width: ${(props) => calculateWidth(props.margin, props.size)};
`;

const Label = styled.label<{ disabled: SliderPropsType["disabled"] }>`
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-semibold);
`;

const HelperText = styled.span<{ disabled: SliderPropsType["disabled"] }>`
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-stronger)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);
`;

const MainContainer = styled.div<{ showInput: SliderPropsType["showInput"] }>`
  display: grid;
  gap: var(--spacing-gap-l);
  ${({ showInput }) => showInput && "grid-template-columns: 1fr 64px;"};
  height: var(--height-xxl);
  place-items: center;
`;

const LimitsValueGrid = styled.div<{ showLimitsValues: SliderPropsType["showLimitsValues"] }>`
  display: grid;
  align-items: center;
  gap: var(--spacing-gap-ml);
  ${({ showLimitsValues }) => showLimitsValues && "grid-template-columns: auto 1fr auto;"}
  width: 100%;
`;

const LimitLabel = styled.span<{
  disabled: SliderPropsType["disabled"];
}>`
  color: ${({ disabled }) => (disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-regular);
`;

const SliderInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: var(--height-xxxs);
`;

const thumbStyles = (disabled: SliderPropsType["disabled"]) => css`
  -webkit-appearance: none;
  width: 12px;
  height: var(--height-xxxs);
  background: ${disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-secondary-medium)"};
  border-radius: 50%;
  transition:
    width 0.2s ease,
    height 0.2s ease;
  &:active {
    ${!disabled && `background-color: var(--color-fg-secondary-stronger);`}
  }
  &:hover {
    ${!disabled &&
    `height: var(--height-xxs);
     width: 16px;
     background-color: var(--color-fg-secondary-strong);`}
  }
`;
const thumbFocusStyles = css`
  outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
  outline-offset: 2px;
`;
const SliderInput = styled.input<{
  disabled: SliderPropsType["disabled"];
  min: SliderPropsType["minValue"];
  max: SliderPropsType["maxValue"];
  value: SliderPropsType["value"];
}>`
  -webkit-appearance: none;
  margin: 0;
  width: 100%;
  height: 2px;
  background-color: ${({ disabled }) =>
    disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-lighter)"};
  background-image: ${({ disabled }) =>
    disabled
      ? "linear-gradient(var(--color-fg-neutral-medium), var(--color-fg-neutral-medium))"
      : "linear-gradient(var(--color-fg-secondary-medium), var(--color-fg-secondary-medium))"};
  background-repeat: no-repeat;
  background-size: ${(props) =>
    props.value != null &&
    props.min != null &&
    props.max != null &&
    `${((props.value - props.min) * 100) / (props.max - props.min)}% 100%`};
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &::-webkit-slider-thumb {
    ${({ disabled }) => thumbStyles(disabled)}
  }
  &::-moz-range-thumb {
    ${({ disabled }) => thumbStyles(disabled)}
  }
  &:focus {
    outline: none;
    ::-webkit-slider-thumb {
      ${thumbFocusStyles}
    }
    ::-moz-range-thumb {
      ${thumbFocusStyles}
    }
  }
`;

const TicksContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  pointer-events: none;
`;

const Tick = styled.span<{
  disabled: SliderPropsType["disabled"];
  stepPosition: number;
  stepValue: SliderPropsType["value"];
}>`
  background-color: ${({ disabled }) =>
    disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-secondary-medium)"};
  border-radius: 50%;
  height: 6px;
  width: 6px;
  z-index: ${(props) => props.stepValue != null && (props.stepPosition <= props.stepValue ? "-1" : "0")};
`;

const DxcSlider = forwardRef<RefType, SliderPropsType>(
  (
    {
      ariaLabel = "Slider",
      defaultValue,
      disabled,
      helperText,
      label,
      labelFormatCallback,
      margin,
      marks,
      maxValue = 100,
      minValue = 0,
      name,
      onChange,
      onDragEnd,
      showLimitsValues,
      showInput,
      size = "fillParent",
      step = 1,
      value,
    },
    ref
  ): JSX.Element => {
    const labelId = `label-${useId()}`;
    const [dragging, setDragging] = useState(false);
    const [innerValue, setInnerValue] = useState(defaultValue ?? 0);
    const minLabel = useMemo(() => labelFormatCallback?.(minValue) ?? minValue, [labelFormatCallback, minValue]);
    const maxLabel = useMemo(() => labelFormatCallback?.(maxValue) ?? maxValue, [labelFormatCallback, maxValue]);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const intValue = parseInt(event.target.value, 10);
      if (intValue !== value || intValue !== innerValue) setInnerValue(intValue);
      onChange?.(intValue);
    };

    const handleOnMouseDown = () => {
      setDragging(true);
    };

    const handleOnMouseUp = (event: MouseEvent<HTMLInputElement>) => {
      const intValue = parseInt((event.target as HTMLInputElement).value, 10);
      if (dragging) {
        setDragging(false);
        onDragEnd?.(intValue);
      }
    };

    const handlerTextInputOnChange = ({ value }: { value: string; error?: string }) => {
      const intValue = parseInt(value, 10);
      if (!Number.isNaN(intValue)) {
        if (value == null) setInnerValue(intValue > maxValue ? maxValue : intValue);
        onChange?.(intValue > maxValue ? maxValue : intValue);
      }
    };

    return (
      <SliderContainer margin={margin} size={size} ref={ref}>
        {label && (
          <Label id={labelId} disabled={disabled}>
            {label}
          </Label>
        )}
        {helperText && <HelperText disabled={disabled}>{helperText}</HelperText>}
        <MainContainer showInput={showInput}>
          <LimitsValueGrid showLimitsValues={showLimitsValues}>
            {showLimitsValues && <LimitLabel disabled={disabled}>{minLabel}</LimitLabel>}
            <SliderInputContainer>
              <SliderInput
                aria-label={label ? undefined : ariaLabel}
                aria-labelledby={label ? labelId : undefined}
                aria-orientation="horizontal"
                aria-valuemax={maxValue}
                aria-valuemin={minValue}
                aria-valuenow={value != null && value >= 0 ? value : innerValue}
                disabled={disabled}
                max={maxValue}
                min={minValue}
                onChange={handleOnChange}
                onMouseUp={handleOnMouseUp}
                onMouseDown={handleOnMouseDown}
                role="slider"
                step={step}
                type="range"
                value={value != null && value >= 0 ? value : innerValue}
              />
              {marks && (
                <TicksContainer>
                  {Array.from({ length: Math.floor((maxValue - minValue) / step) + 1 }, (_, index) => (
                    <Tick
                      disabled={disabled}
                      key={`tickmark-${index}`}
                      stepPosition={(step * index) / (maxValue - minValue)}
                      stepValue={(value ?? innerValue) / maxValue}
                    />
                  ))}
                </TicksContainer>
              )}
            </SliderInputContainer>
            {showLimitsValues && <LimitLabel disabled={disabled}>{maxLabel}</LimitLabel>}
          </LimitsValueGrid>
          {showInput && (
            <DxcTextInput
              disabled={disabled}
              name={name}
              onChange={handlerTextInputOnChange}
              size="fillParent"
              value={value != null && value >= 0 ? value.toString() : innerValue.toString()}
            />
          )}
        </MainContainer>
      </SliderContainer>
    );
  }
);

export default DxcSlider;

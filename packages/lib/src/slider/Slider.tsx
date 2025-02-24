import { ChangeEvent, forwardRef, MouseEvent, useId, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import DxcTextInput from "../text-input/TextInput";
import { spaces } from "../common/variables";
import SliderPropsType, { RefType } from "./types";
import { calculateWidth, roundUp } from "./utils";

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
  min-width: 184px;
`;

const thumbStyles = (disabled: SliderPropsType["disabled"]) => css`
  -webkit-appearance: none;
  width: 12px;
  height: var(--height-xxxs);
  background-color: ${disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-secondary-medium)"};
  border: none;
  border-radius: 50%;
  transition:
    width 0.2s ease,
    height 0.2s ease;
  &:active {
    ${!disabled && `background-color: var(--color-fg-secondary-stronger);`}
  }
  &:hover {
    ${!disabled &&
    `background-color: var(--color-fg-secondary-strong);
     height: var(--height-xxs);
     width: 16px;`}
  }
`;
const thumbFocusStyles = css`
  outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
  outline-offset: 2px;
`;
const SliderInput = styled.input<{
  disabled: SliderPropsType["disabled"];
  min: Required<SliderPropsType>["minValue"];
  max: Required<SliderPropsType>["maxValue"];
  roundedUpValue: number;
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
  ${({ min, max, roundedUpValue }) => {
    const base10 = ((roundedUpValue - min) / (max - min)) * 100;
    return `background-size: ${base10}% 100%;`;
  }}
  border-radius: var(--border-radius-m);
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
  currentTick: boolean;
}>`
  background-color: ${({ disabled }) =>
    disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-secondary-medium)"};
  border-radius: 50%;
  height: 4px;
  width: 4px;
  ${({ currentTick }) => currentTick && "visibility: hidden;"};
`;

const DxcSlider = forwardRef<RefType, SliderPropsType>(
  (
    {
      ariaLabel = "Slider",
      defaultValue = 0,
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
    const [innerValue, setInnerValue] = useState(defaultValue);
    const roundedUpValue = useMemo(
      () => roundUp(value ?? innerValue, step, minValue, maxValue),
      [innerValue, maxValue, minValue, step, value]
    );
    const minLabel = useMemo(() => labelFormatCallback?.(minValue) ?? minValue, [labelFormatCallback, minValue]);
    const maxLabel = useMemo(() => labelFormatCallback?.(maxValue) ?? maxValue, [labelFormatCallback, maxValue]);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const sliderIntegerValue = Number(event.target.value);
      if (value == null) setInnerValue(sliderIntegerValue);
      onChange?.(sliderIntegerValue);
    };

    const handleOnMouseUp = (event: MouseEvent<HTMLInputElement>) => {
      const sliderIntegerValue = Number((event.target as HTMLInputElement).value);
      onDragEnd?.(sliderIntegerValue);
    };

    const handlerTextInputOnChange = (event: { value: string; error?: string }) => {
      const textInputIntegerValue = Number(event.value ?? 0);
      if (!Number.isNaN(textInputIntegerValue)) {
        if (value == null) setInnerValue(textInputIntegerValue);
        onChange?.(textInputIntegerValue);
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
                aria-valuenow={value ?? innerValue}
                disabled={disabled}
                max={maxValue}
                min={minValue}
                onChange={handleOnChange}
                onMouseUp={handleOnMouseUp}
                role="slider"
                roundedUpValue={roundedUpValue}
                step={step}
                type="range"
                value={value ?? innerValue}
              />
              {marks && (
                <TicksContainer>
                  {Array.from({ length: Math.floor((maxValue - minValue) / step) + 1 }, (_, index) => (
                    <Tick
                      currentTick={roundedUpValue === minValue + index * step}
                      disabled={disabled}
                      key={`tickmark-${index}`}
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
              value={(value ?? innerValue).toString()}
            />
          )}
        </MainContainer>
      </SliderContainer>
    );
  }
);

export default DxcSlider;

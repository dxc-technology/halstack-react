import { KeyboardEvent, useId, useState } from "react";
import styled from "styled-components";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import ToggleGroupPropsType from "./types";
import DxcGrid from "../grid/Grid";

const ToggleGroupContainer = styled.div<{ margin: ToggleGroupPropsType["margin"] }>`
  display: grid;
  gap: var(--spacing-gap-xs);
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

const Label = styled.label`
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: var(--typography-label-semibold);
`;

const HelperText = styled.span`
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-helper-text-s);
  font-weight: var(--typography-helper-text-regular);
`;

const ToggleGroup = styled.div`
  display: flex;
  width: fit-content;
  padding: var(--spacing-padding-xxs);
  gap: var(--spacing-gap-xs);
  border-radius: var(--border-radius-m);
  border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-strong);
`;

const ToggleButton = styled.button<{
  selected: boolean;
  onlyIcon: boolean;
}>`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  height: var(--height-xl);
  padding: ${({ onlyIcon }) =>
    onlyIcon ? "var(--spacing-padding-xs)" : "var(--spacing-padding-none) var(--spacing-padding-m)"};
  border: none;
  border-radius: var(--border-radius-s);
  background-color: ${({ selected }) =>
    selected ? "var(--color-bg-primary-strong);" : "var(--color-bg-neutral-medium)"};
  color: ${({ selected }) => (selected ? "var(--color-fg-neutral-bright)" : "var(--color-fg-neutral-dark)")};
  cursor: pointer;

  &:hover:enabled {
    background-color: ${({ selected }) =>
      selected ? "var(--color-bg-neutral-medium)" : "var(--color-bg-neutral-strong)"};
    ${({ selected }) => selected && "color: var(--color-fg-neutral-dark);"}
  }
  &:active:enabled {
    background-color: ${({ selected }) =>
      selected ? "var(--color-bg-primary-strongest);" : "var(--color-bg-primary-strong);"};
    color: var(--color-fg-neutral-bright);
  }
  &:focus:enabled {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: -2px;
  }
  &:disabled {
    background-color: var(--color-bg-neutral-light);
    color: var(--color-fg-neutral-medium);
    cursor: not-allowed;
  }
`;

const ToggleButtonLabel = styled.span`
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-regular);
`;

const IconContainer = styled.div`
  display: flex;
  font-size: var(--height-s);
  svg {
    width: 24px;
    height: var(--height-s);
  }
`;

export default function DxcToggleGroup({
  defaultValue,
  helperText,
  label,
  margin,
  multiple,
  onChange,
  options,
  tabIndex = 0,
  value,
}: ToggleGroupPropsType) {
  const toggleGroupLabelId = `label-toggle-group-${useId()}`;
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? (multiple ? [] : -1));

  const handleOnChange = (selectedOption: number) => {
    let newSelectedOptions: number[] = [];

    if (value == null) {
      if (multiple && Array.isArray(selectedValue)) {
        newSelectedOptions = selectedValue.map((singleValue) => singleValue);
        if (newSelectedOptions.includes(selectedOption)) {
          const index = newSelectedOptions.indexOf(selectedOption);
          newSelectedOptions.splice(index, 1);
        } else {
          newSelectedOptions.push(selectedOption);
        }
        setSelectedValue(newSelectedOptions);
      } else {
        setSelectedValue(selectedOption === selectedValue ? -1 : selectedOption);
      }
    } else if (multiple) {
      newSelectedOptions = Array.isArray(value) ? value.map((v) => v) : [value];
      if (newSelectedOptions.includes(selectedOption)) {
        const index = newSelectedOptions.indexOf(selectedOption);
        newSelectedOptions.splice(index, 1);
      } else {
        newSelectedOptions.push(selectedOption);
      }
    }

    onChange?.((multiple ? newSelectedOptions : selectedOption) as number & number[]);
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLButtonElement>, optionValue: number) => {
    switch (event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        handleOnChange(optionValue);
        break;
      default:
        break;
    }
  };

  return (
    <ToggleGroupContainer margin={margin}>
      <DxcGrid>
        <Label id={toggleGroupLabelId}>{label}</Label>
        <HelperText>{helperText}</HelperText>
      </DxcGrid>
      <ToggleGroup aria-labelledby={toggleGroupLabelId}>
        {options.map((option, i) => (
          <Tooltip label={option.title} key={`toggle-${i}-${option.label}`}>
            <ToggleButton
              aria-label={option.title}
              aria-pressed={
                multiple
                  ? value
                    ? Array.isArray(value) && value.includes(option.value)
                    : Array.isArray(selectedValue) && selectedValue.includes(option.value)
                  : value
                    ? option.value === value
                    : option.value === selectedValue
              }
              disabled={option.disabled}
              onClick={() => {
                handleOnChange(option.value);
              }}
              onKeyDown={(event) => {
                handleOnKeyDown(event, option.value);
              }}
              onlyIcon={!option.label && !!option.icon}
              selected={
                multiple
                  ? value
                    ? Array.isArray(value) && value.includes(option.value)
                    : Array.isArray(selectedValue) && selectedValue.includes(option.value)
                  : value
                    ? option.value === value
                    : option.value === selectedValue
              }
              tabIndex={!option.disabled ? tabIndex : -1}
            >
              {option.icon && (
                <IconContainer>
                  {typeof option.icon === "string" ? <DxcIcon icon={option.icon} /> : option.icon}
                </IconContainer>
              )}
              {option.label && <ToggleButtonLabel>{option.label}</ToggleButtonLabel>}
            </ToggleButton>
          </Tooltip>
        ))}
      </ToggleGroup>
    </ToggleGroupContainer>
  );
}

import { KeyboardEvent, useState } from "react";
import styled from "styled-components";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import ToggleGroupPropsType from "./types";

const ToggleGroup = styled.div<{ margin: ToggleGroupPropsType["margin"] }>`
  display: flex;
  &[aria-orientation="vertical"] {
    flex-direction: column;
  }
  width: fit-content;
  padding: var(--spacing-padding-xxs);
  gap: var(--spacing-gap-xs);
  border-radius: var(--border-radius-m);
  border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-strong);
  margin: ${({ margin }) => (margin && typeof margin !== "object" ? spaces[margin] : "0px")};
  margin-top: ${({ margin }) => (margin && typeof margin === "object" && margin.top ? spaces[margin.top] : "")};
  margin-right: ${({ margin }) => (margin && typeof margin === "object" && margin.right ? spaces[margin.right] : "")};
  margin-bottom: ${({ margin }) =>
    margin && typeof margin === "object" && margin.bottom ? spaces[margin.bottom] : ""};
  margin-left: ${({ margin }) => (margin && typeof margin === "object" && margin.left ? spaces[margin.left] : "")};
`;

const ToggleButton = styled.button<{
  onlyIcon: boolean;
  selected: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
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
      selected ? "var(--color-bg-primary-stronger)" : "var(--color-bg-neutral-strong)"};
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

const Label = styled.span`
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

const isToggleButtonSelected = (
  multiple: ToggleGroupPropsType["multiple"],
  optionValue: number,
  value: ToggleGroupPropsType["value"]
) => (multiple ? Array.isArray(value) && value.includes(optionValue) : optionValue === value);

export default function DxcToggleGroup({
  defaultValue,
  margin,
  multiple,
  onChange,
  options,
  tabIndex = 0,
  value,
  orientation = "horizontal",
}: ToggleGroupPropsType) {
  const [selectedValue, setSelectedValue] = useState(defaultValue ?? (multiple ? [] : -1));

  const handleOnChange = (selectedOption: number) => {
    let newSelectedOptions: number[] = [];
    if (value == null) {
      if (multiple && Array.isArray(selectedValue)) {
        newSelectedOptions = selectedValue.map((singleValue) => singleValue);
        if (newSelectedOptions.includes(selectedOption)) {
          const index = newSelectedOptions.indexOf(selectedOption);
          newSelectedOptions.splice(index, 1);
        } else newSelectedOptions.push(selectedOption);
        setSelectedValue(newSelectedOptions);
      } else setSelectedValue(selectedOption === selectedValue ? -1 : selectedOption);
    } else if (multiple) {
      newSelectedOptions = Array.isArray(value) ? value.map((v) => v) : [value];
      if (newSelectedOptions.includes(selectedOption)) {
        const index = newSelectedOptions.indexOf(selectedOption);
        newSelectedOptions.splice(index, 1);
      } else newSelectedOptions.push(selectedOption);
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
    <ToggleGroup aria-orientation={orientation} margin={margin} role="group">
      {options.map((option, i) => {
        const selected = isToggleButtonSelected(multiple, option.value, value ?? selectedValue);
        return (
          <Tooltip label={option.title} key={`toggle-${i}-${option.label}`}>
            <ToggleButton
              aria-label={option.title}
              aria-pressed={selected}
              disabled={option.disabled}
              onClick={() => {
                handleOnChange(option.value);
              }}
              onKeyDown={(event) => {
                handleOnKeyDown(event, option.value);
              }}
              onlyIcon={!option.label && !!option.icon}
              selected={selected}
              tabIndex={!option.disabled ? tabIndex : -1}
            >
              {option.icon && (
                <IconContainer>
                  {typeof option.icon === "string" ? <DxcIcon icon={option.icon} /> : option.icon}
                </IconContainer>
              )}
              {option.label && <Label>{option.label}</Label>}
            </ToggleButton>
          </Tooltip>
        );
      })}
    </ToggleGroup>
  );
}

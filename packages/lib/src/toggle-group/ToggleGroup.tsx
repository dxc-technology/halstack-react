import { KeyboardEvent, useState } from "react";
import styled from "@emotion/styled";
import { spaces } from "../common/variables";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";
import ToggleGroupPropsType from "./types";
import { getButtonStyles, getHeight } from "../button/utils";

const ToggleGroup = styled.div<{ margin: ToggleGroupPropsType["margin"] }>`
  display: flex;
  &[aria-orientation="vertical"] {
    flex-direction: column;
  }
  gap: var(--spacing-gap-xs);
  padding: var(--spacing-padding-xxs);
  height: fit-content;
  width: fit-content;
  border: var(--border-width-s) var(--border-style-default) var(--border-color-neutral-strong);
  border-radius: var(--border-radius-m);
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-gap-s);
  height: ${getHeight("large")};
  padding: var(--spacing-padding-none)
    ${({ onlyIcon }) => (onlyIcon ? "var(--spacing-padding-xs)" : "var(--spacing-padding-m)")};
  cursor: pointer;
  ${({ selected }) =>
    getButtonStyles("primary", selected ? "selected" : "unselected", { height: "large", width: "fitContent" })};
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
  orientation = "horizontal",
  tabIndex = 0,
  value,
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
    // TODO: Fix types
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
    <ToggleGroup aria-orientation={orientation} margin={margin} role="toolbar">
      {options.map((option, i) => {
        const selected = !option.disabled && isToggleButtonSelected(multiple, option.value, value ?? selectedValue);
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
              {option.label && <span>{option.label}</span>}
            </ToggleButton>
          </Tooltip>
        );
      })}
    </ToggleGroup>
  );
}

import styled from "styled-components";
import { OptionProps } from "./types";
import DxcCheckbox from "../checkbox/Checkbox";
import DxcIcon from "../icon/Icon";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { TooltipWrapper } from "../tooltip/Tooltip";

const OptionItem = styled.li<{
  visualFocused: OptionProps["visualFocused"];
  selected: OptionProps["isSelected"];
}>`
  ${({ selected }) => selected && "background-color: var(--color-bg-secondary-lighter);"};
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  cursor: pointer;

  &:hover {
    background-color: var(
      ${({ selected }) => (selected ? "--color-bg-secondary-lighter" : "--color-bg-neutral-light")}
    );
  }
  &:active {
    background-color: var(${({ selected }) => (selected ? "--color-bg-secondary-medium" : "--color-bg-neutral-light")});
  }
  ${({ visualFocused }) =>
    visualFocused &&
    "outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium); outline-offset: -2px;"}
`;

const StyledOption = styled.span<{
  grouped: OptionProps["isGroupedOption"];
  last: OptionProps["isLastOption"];
  selected: OptionProps["isSelected"];
  visualFocused: OptionProps["visualFocused"];
}>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  height: var(--height-m);
  ${({ grouped }) => grouped && "padding-left: var(--spacing-padding-xs);"}
  ${(props) =>
    `border-bottom: var(--border-width-s) var(--border-style-default) 
    ${props.last || props.visualFocused || props.selected ? "transparent" : "var(--border-color-neutral-lighter)"};`};
`;

const OptionIcon = styled.span`
  display: grid;
  place-items: center;
  color: var(--color-fg-neutral-dark);
  font-size: var(--height-xxs);

  svg {
    height: var(--height-xxs);
    width: 16px;
  }
`;

const OptionContent = styled.span`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  justify-content: space-between;
  width: 100%;
  overflow: hidden;

  /* Option selected icon */
  > span[role="img"] {
    color: var(--color-fg-neutral-dark);
    font-size: var(--height-xxs);
  }
`;

const OptionLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ListOption = ({
  id,
  isGroupedOption = false,
  isLastOption,
  isSelected,
  multiple,
  onClick,
  option,
  visualFocused,
}: OptionProps): JSX.Element => {
  const [hasTooltip, setHasTooltip] = useState(false);
  const checkboxRef = useRef<HTMLDivElement>(null);

  const handleOnMouseEnter = (event: MouseEvent<HTMLSpanElement>) => {
    const text = event.currentTarget;
    setHasTooltip(text.scrollWidth > text.clientWidth);
  };

  useEffect(() => {
    if (checkboxRef.current) checkboxRef.current.style.pointerEvents = "none";
  }, []);

  return (
    <TooltipWrapper condition={hasTooltip} label={option.label}>
      <OptionItem
        aria-selected={!multiple ? isSelected : undefined}
        id={id}
        onClick={() => {
          onClick(option);
        }}
        role="option"
        selected={isSelected}
        visualFocused={visualFocused}
      >
        <StyledOption grouped={isGroupedOption} selected={isSelected} visualFocused={visualFocused} last={isLastOption}>
          {multiple && <DxcCheckbox checked={isSelected} tabIndex={-1} ref={checkboxRef} />}
          {option.icon && (
            <OptionIcon>{typeof option.icon === "string" ? <DxcIcon icon={option.icon} /> : option.icon}</OptionIcon>
          )}
          <OptionContent>
            <OptionLabel onMouseEnter={handleOnMouseEnter}>{option.label}</OptionLabel>
            {!multiple && isSelected && <DxcIcon icon="done" />}
          </OptionContent>
        </StyledOption>
      </OptionItem>
    </TooltipWrapper>
  );
};

export default ListOption;

import React from "react";
import styled from "styled-components";
import { OptionProps } from "../select/types";
import DxcCheckbox from "../checkbox/Checkbox";
import selectIcons from "./Icons";

const Option = ({
  id,
  option,
  onClick,
  multiple,
  visualFocused,
  isGroupedOption = false,
  isLastOption,
  isSelected,
}: OptionProps): JSX.Element => (
  <OptionItem
    id={id}
    onClick={() => {
      onClick(option);
    }}
    visualFocused={visualFocused}
    selected={isSelected}
    role="option"
    aria-selected={isSelected}
  >
    <StyledOption
      visualFocused={visualFocused}
      selected={isSelected}
      last={isLastOption}
      grouped={isGroupedOption}
      multiple={multiple}
    >
      {multiple && <DxcCheckbox checked={isSelected} tabIndex={-1} />}
      {option.icon && (
        <OptionIcon
          grouped={isGroupedOption}
          multiple={multiple}
          role={!(typeof option.icon === "string") ? "img" : undefined}
        >
          {typeof option.icon === "string" ? <img src={option.icon} /> : option.icon}
        </OptionIcon>
      )}
      <OptionContent grouped={isGroupedOption} hasIcon={option.icon ? true : false} multiple={multiple}>
        <OptionLabel>{option.label}</OptionLabel>
        {!multiple && isSelected && <OptionSelectedIndicator>{selectIcons.selected}</OptionSelectedIndicator>}
      </OptionContent>
    </StyledOption>
  </OptionItem>
);

type OptionItemProps = {
  visualFocused: boolean;
  selected: boolean;
};
const OptionItem = styled.li<OptionItemProps>`
  padding: 0 0.5rem;
  box-shadow: inset 0 0 0 2px transparent;
  ${(props) => props.visualFocused && `box-shadow: inset 0 0 0 2px ${props.theme.focusListOptionBorderColor};`}
  ${(props) => props.selected && `background-color: ${props.theme.selectedListOptionBackgroundColor}`};
  line-height: 1.715em;
  cursor: pointer;

  &:hover {
    ${(props) =>
      props.selected
        ? `background-color: ${props.theme.selectedHoverListOptionBackgroundColor};`
        : `background-color: ${props.theme.unselectedHoverListOptionBackgroundColor};`};
  }
  &:active {
    ${(props) =>
      props.selected
        ? `background-color: ${props.theme.selectedActiveListOptionBackgroundColor};`
        : `background-color: ${props.theme.unselectedActiveListOptionBackgroundColor};`};
  }
`;

type StyledOptionProps = {
  grouped: boolean;
  multiple: boolean;
  visualFocused: boolean;
  selected: boolean;
  last: boolean;
};
const StyledOption = styled.span<StyledOptionProps>`
  display: flex;
  padding: 0.25rem 0.5rem 0.188rem 0;
  min-height: 24px;
  ${(props) => props.grouped && props.multiple && `padding-left: 16px;`}
  ${(props) =>
    props.last || props.visualFocused || props.selected
      ? `border-bottom: 1px solid transparent`
      : `border-bottom: 1px solid ${props.theme.listOptionDividerColor}`};
`;

type OptionIconProps = {
  grouped: boolean;
  multiple: boolean;
};
const OptionIcon = styled.span<OptionIconProps>`
  display: flex;
  padding: 0.125rem;
  margin-left: ${(props) => (props.grouped && !props.multiple ? "16px" : "8px")};
  color: ${(props) => props.theme.listOptionIconColor};

  svg,
  img {
    height: 20px;
    width: 20px;
  }
`;

type OptionContentProps = {
  grouped: boolean;
  multiple: boolean;
  hasIcon: boolean;
};
const OptionContent = styled.span<OptionContentProps>`
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
  width: 100%;
  overflow: hidden;
  margin-left: ${(props) => (props.grouped && !props.multiple && !props.hasIcon ? "16px" : "8px")};
`;

const OptionLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const OptionSelectedIndicator = styled.span`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.selectedListOptionIconColor};

  svg {
    width: 16px;
    height: 16px;
  }
`;

export default React.memo(Option);

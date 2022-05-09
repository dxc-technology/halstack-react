// @ts-nocheck
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { OptionProps } from "../select/types";
import useTheme from "../useTheme";
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
}: OptionProps): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.select}>
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
              {typeof option.icon === "string" ? <OptionIconImg src={option.icon}></OptionIconImg> : option.icon}
            </OptionIcon>
          )}
          <OptionContent grouped={isGroupedOption} hasIcon={option.icon ? true : false} multiple={multiple}>
            <OptionLabel>{option.label}</OptionLabel>
            {!multiple && isSelected && <OptionSelectedIndicator>{selectIcons.selected}</OptionSelectedIndicator>}
          </OptionContent>
        </StyledOption>
      </OptionItem>
    </ThemeProvider>
  );
};

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
  flex-wrap: wrap;
  align-content: center;
  height: 24px;
  width: 24px;
  ${(props) => (props.grouped && !props.multiple ? "padding-left: 16px;" : "padding-left: 8px;")}
  color: ${(props) => props.theme.listOptionIconColor};
`;

type OptionContentProps = {
  grouped: boolean;
  multiple: boolean;
  hasIcon: boolean;
};
const OptionContent = styled.span<OptionContentProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  ${(props) => (props.grouped && !props.multiple && !props.hasIcon ? "padding-left: 16px;" : "padding-left: 8px;")}
`;

const OptionIconImg = styled.img`
  width: 16px;
  height: 16px;
`;

const OptionLabel = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const OptionSelectedIndicator = styled.span`
  display: flex;
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: ${(props) => props.theme.selectedListOptionIconColor};
`;

export default React.memo(Option);

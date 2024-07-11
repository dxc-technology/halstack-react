import styled from "styled-components";
import { OptionProps } from "./types";
import DxcCheckbox from "../checkbox/Checkbox";
import DxcIcon from "../icon/Icon";

const ListOption = ({
  id,
  option,
  onClick,
  multiple,
  visualFocused,
  isGroupedOption = false,
  isLastOption,
  isSelected,
}: OptionProps): JSX.Element => {
  const handleOnMouseEnter = (event: React.MouseEvent) => {
    const label = event.currentTarget;
    const optionElement = document.getElementById(id);
    if (optionElement.title === "" && label.scrollWidth > label.clientWidth) optionElement.title = option.label;
  };

  return (
    <OptionItem
      id={id}
      onClick={() => {
        onClick(option);
      }}
      visualFocused={visualFocused}
      selected={isSelected}
      role="option"
      aria-selected={!multiple ? isSelected : undefined}
    >
      <StyledOption
        visualFocused={visualFocused}
        selected={isSelected}
        last={isLastOption}
        grouped={isGroupedOption}
        multiple={multiple}
      >
        {multiple && (
          <div style={{ display: "flex", pointerEvents: "none" }}>
            <DxcCheckbox checked={isSelected} tabIndex={-1} />
          </div>
        )}
        {option.icon && (
          <OptionIcon grouped={isGroupedOption} multiple={multiple}>
            {typeof option.icon === "string" ? <DxcIcon icon={option.icon} /> : option.icon}
          </OptionIcon>
        )}
        <OptionContent grouped={isGroupedOption} hasIcon={option.icon ? true : false} multiple={multiple}>
          <OptionLabel onMouseEnter={handleOnMouseEnter}>{option.label}</OptionLabel>
          {!multiple && isSelected && (
            <OptionSelectedIndicator>
              <DxcIcon icon="done" />
            </OptionSelectedIndicator>
          )}
        </OptionContent>
      </StyledOption>
    </OptionItem>
  );
};

const OptionItem = styled.li<{ visualFocused: OptionProps["visualFocused"]; selected: OptionProps["isSelected"] }>`
  padding: 0 0.5rem;
  box-shadow: inset 0 0 0 2px transparent;
  ${(props) => props.visualFocused && `box-shadow: inset 0 0 0 2px ${props.theme.focusListOptionBorderColor};`}
  ${(props) => props.selected && `background-color: ${props.theme.selectedListOptionBackgroundColor}`};
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

const StyledOption = styled.span<{
  grouped: OptionProps["isGroupedOption"];
  multiple: OptionProps["multiple"];
  visualFocused: OptionProps["visualFocused"];
  selected: OptionProps["isSelected"];
  last: OptionProps["isLastOption"];
}>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 32px;
  padding: 4px 8px 4px 0;
  ${(props) => props.grouped && props.multiple && `padding-left: 16px;`}
  ${(props) =>
    props.last || props.visualFocused || props.selected
      ? `border-bottom: 1px solid transparent`
      : `border-bottom: 1px solid ${props.theme.listOptionDividerColor}`};
`;

const OptionIcon = styled.span<{ grouped: OptionProps["isGroupedOption"]; multiple: OptionProps["multiple"] }>`
  margin-left: ${(props) => (props.grouped && !props.multiple ? "16px" : "8px")};
  display: grid;
  place-items: center;
  color: ${(props) => props.theme.listOptionIconColor};
  font-size: 24px;
  svg {
    height: 24px;
    width: 24px;
  }
`;

const OptionContent = styled.span<{
  grouped: OptionProps["isGroupedOption"];
  multiple: OptionProps["multiple"];
  hasIcon: boolean;
}>`
  margin-left: ${(props) => (props.grouped && !props.multiple && !props.hasIcon ? "16px" : "8px")};
  display: flex;
  justify-content: space-between;
  gap: 0.25rem;
  width: 100%;
  overflow: hidden;
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
  font-size: 16px;
`;

export default ListOption;

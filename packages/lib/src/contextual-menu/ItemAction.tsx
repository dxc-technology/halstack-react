import { cloneElement, MouseEvent, useState } from "react";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import { ItemActionProps } from "./types";
import DxcIcon from "../icon/Icon";
import { TooltipWrapper } from "../tooltip/Tooltip";

const ItemAction = ({ badge, collapseIcon, icon, label, depthLevel, ...props }: ItemActionProps) => {
  const [hasTooltip, setHasTooltip] = useState(false);
  const modifiedBadge = badge && cloneElement(badge, { size: "small" });

  return (
    <TooltipWrapper condition={hasTooltip} label={label}>
      <Action depthLevel={depthLevel} {...props}>
        <Label>
          {collapseIcon && <Icon>{collapseIcon}</Icon>}
          {icon && depthLevel === 0 && <Icon>{typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}</Icon>}
          <Text
            selected={props.selected}
            onMouseEnter={(event: MouseEvent<HTMLSpanElement>) => {
              const text = event.currentTarget;
              setHasTooltip(text.scrollWidth > text.clientWidth);
            }}
          >
            {label}
          </Text>
        </Label>
        {modifiedBadge}
      </Action>
    </TooltipWrapper>
  );
};

const Action = styled.button<{
  depthLevel: ItemActionProps["depthLevel"];
  selected: ItemActionProps["selected"];
}>`
  border: none;
  border-radius: 4px;
  padding: ${(props) =>
    `${CoreTokens.spacing_4} ${CoreTokens.spacing_8} ${CoreTokens.spacing_4} ${`
    calc(${CoreTokens.spacing_8} + (${CoreTokens.spacing_24} * ${props.depthLevel}))
  `};`};
  box-shadow: inset 0 0 0 2px transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${CoreTokens.spacing_16};
  ${({ selected, theme }) =>
    selected
      ? `background-color: ${theme.selectedMenuItemBackgroundColor};`
      : `background-color: ${CoreTokens.color_transparent}`};
  cursor: pointer;
  overflow: hidden;

  &:hover {
    ${({ selected, theme }) =>
      selected
        ? `background-color: ${theme.hoverSelectedMenuItemBackgroundColor};`
        : `background-color: ${theme.hoverMenuItemBackgroundColor};`};
  }
  &:active {
    ${({ selected, theme }) =>
      selected
        ? `background-color: ${theme.activeSelectedMenuItemBackgroundColor};`
        : `background-color: ${theme.activeMenuItemBackgroundColor};`};
  }
  &:focus {
    outline: 2px solid ${CoreTokens.color_blue_600};
    outline-offset: -1px;
  }
`;

const Icon = styled.span`
  display: flex;
  font-size: ${({ theme }) => theme.iconSize};
  color: ${({ theme }) => theme.iconColor};

  svg {
    height: ${({ theme }) => theme.iconSize};
    width: ${({ theme }) => theme.iconSize};
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: ${CoreTokens.spacing_8};
  overflow: hidden;
`;

const Text = styled.span<{ selected: ItemActionProps["selected"] }>`
  color: ${({ theme }) => theme.menuItemFontColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.menuItemFontSize};
  font-style: ${({ theme }) => theme.menuItemFontStyle};
  font-weight: ${({ selected, theme }) => (selected ? theme.selectedMenuItemFontWeight : theme.menuItemFontWeight)};
  line-height: ${({ theme }) => theme.menuItemLineHeight};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export default ItemAction;

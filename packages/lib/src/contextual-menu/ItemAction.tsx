import { cloneElement, memo, MouseEvent, useContext, useState } from "react";
import styled from "@emotion/styled";
import { ItemActionProps } from "./types";
import DxcIcon from "../icon/Icon";
import { TooltipWrapper } from "../tooltip/Tooltip";
import ContextualMenuContext from "./ContextualMenuContext";

const Action = styled.button<{
  depthLevel: ItemActionProps["depthLevel"];
  selected: ItemActionProps["selected"];
  displayGroupsLine: boolean;
}>`
  box-sizing: content-box;
  border: none;
  border-radius: var(--border-radius-s);
  ${({ displayGroupsLine, depthLevel }) => `
    padding: var(--spacing-padding-xxs) var(--spacing-padding-xxs) var(--spacing-padding-xxs) calc(var(--spacing-padding-xs) + ${!displayGroupsLine ? depthLevel : 0} * var(--spacing-padding-l));
    ${displayGroupsLine && depthLevel > 0 ? "margin-left: var(--spacing-padding-xs);" : ""}
  `}
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-m);
  justify-content: space-between;
  background-color: ${({ selected }) => (selected ? "var(--color-bg-primary-lighter)" : "transparent")};
  height: var(--height-s);
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: ${({ selected }) =>
      selected ? "var(--color-bg-primary-medium)" : "var(--color-bg-neutral-light)"};
  }
  &:active {
    background-color: ${({ selected }) =>
      selected ? "var(--color-bg-primary-medium)" : "var(--color-bg-neutral-light)"};
  }
  &:focus {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: -2px;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  overflow: hidden;
`;

const Icon = styled.span`
  display: flex;
  color: var(--color-fg-neutral-dark);
  font-size: var(--height-xxs);
  svg {
    height: var(--height-xxs);
    width: 16px;
  }
`;

const Text = styled.span<{ selected: ItemActionProps["selected"] }>`
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-weight: ${({ selected }) => (selected ? "var(--typography-label-semibold)" : "var(--typography-label-regular)")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Control = styled.span`
  display: flex;
  align-items: center;
  padding: var(--spacing-padding-none);
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-gap-s);
`;

const ItemAction = memo(({ badge, collapseIcon, depthLevel, icon, label, ...props }: ItemActionProps) => {
  const [hasTooltip, setHasTooltip] = useState(false);
  const modifiedBadge = badge && cloneElement(badge, { size: "small" });
  const { displayControlsAfter } = useContext(ContextualMenuContext) ?? {};

  return (
    <TooltipWrapper condition={hasTooltip} label={label}>
      <Action depthLevel={depthLevel} displayGroupsLine={!!displayControlsAfter} {...props}>
        <Label>
          {!displayControlsAfter && <Control>{collapseIcon && <Icon>{collapseIcon}</Icon>}</Control>}
          {icon && <Icon>{typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}</Icon>}
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
        <Control>
          {modifiedBadge}
          {displayControlsAfter && collapseIcon && <Icon>{collapseIcon}</Icon>}
        </Control>
      </Action>
    </TooltipWrapper>
  );
});

ItemAction.displayName = "ItemAction";

export default ItemAction;

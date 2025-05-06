import { cloneElement, memo, MouseEvent, useState } from "react";
import styled from "styled-components";
import { ItemActionProps } from "./types";
import DxcIcon from "../icon/Icon";
import { TooltipWrapper } from "../tooltip/Tooltip";

const Action = styled.button<{
  depthLevel: ItemActionProps["depthLevel"];
  selected: ItemActionProps["selected"];
}>`
  box-sizing: content-box;
  border: none;
  border-radius: var(--border-radius-s);
  padding: var(--spacing-padding-xxs) var(--spacing-padding-xxs) var(--spacing-padding-xxs)
    ${({ depthLevel }) => `calc(var(--spacing-padding-xs) + ${depthLevel} * var(--spacing-padding-l))`};
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

const ItemAction = memo(({ badge, collapseIcon, depthLevel, icon, label, ...props }: ItemActionProps) => {
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
});

ItemAction.displayName = "ItemAction";

export default ItemAction;

import { cloneElement, memo, MouseEvent, useState } from "react";
import styled from "@emotion/styled";
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
  padding: var(--spacing-padding-xxs) var(--spacing-padding-xxs) var(--spacing-padding-xxs) var(--spacing-padding-xs);
  margin-left: ${({ depthLevel }) => (depthLevel > 0 ? "var(--spacing-padding-xs)" : "var(--spacing-padding-none)")};
  /* ${({ depthLevel }) => `calc(var(--spacing-padding-xs) + ${depthLevel} * var(--spacing-padding-l))`}; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ selected }) => (selected ? "var(--color-bg-primary-lighter)" : "transparent")};
  height: var(--height-s);
  cursor: pointer;
  overflow: hidden;

  /* ${({ depthLevel }) => depthLevel > 0 && `border-left: 1px solid grey;`} */

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
  padding-right: var(--spacing-padding-m);
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

  return (
    <TooltipWrapper condition={hasTooltip} label={label}>
      <Action depthLevel={depthLevel} {...props}>
        <Label>
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
        <Control>
          {modifiedBadge}
          {collapseIcon && <Icon>{collapseIcon}</Icon>}
        </Control>
      </Action>
    </TooltipWrapper>
  );
});

ItemAction.displayName = "ItemAction";

export default ItemAction;

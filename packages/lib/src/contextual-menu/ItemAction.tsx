import { cloneElement, MouseEvent, useState } from "react";
import styled from "styled-components";
import { ItemActionProps } from "./types";
import DxcIcon from "../icon/Icon";
import { TooltipWrapper } from "../tooltip/Tooltip";

const Action = styled.button<{
  depthLevel: ItemActionProps["depthLevel"];
  selected: ItemActionProps["selected"];
}>`
  border: none;
  border-radius: var(--border-radius-s);
  padding: var(--spacing-padding-xxs) var(--spacing-padding-xxs) var(--spacing-padding-xxs) var(--spacing-padding-xs);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ selected }) => (selected ? "var(--color-bg-primary-lighter)" : "transparent")};
  cursor: pointer;
  overflow: hidden;

  &:hover {
    background-color: ${({ selected }) =>
      selected ? "var(--color-bg-primary-medium)" : "var(--color-bg-neutral-light)"};
  }
  &:active,
  &:focus {
    outline: var(--border-width-m) solid var(--border-color-secondary-medium);
    outline-offset: -1px;
  }
  &:active {
    background-color: ${({ selected }) =>
      selected ? "var(--color-bg-primary-medium)" : "var(--color-bg-neutral-light)"};
  }
  &:focus {
    ${({ selected }) => selected && `background-color: var(--color-bg-primary-lighter);`};
  }
`;

const Icon = styled.span`
  display: flex;
  font-size: var(--height-xxs);
  color: var(--color-fg-neutral-dark);

  svg {
    height: var(--height-xxs);
    width: 16px;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-s);
  overflow: hidden;
`;

const Text = styled.span<{ selected: ItemActionProps["selected"] }>`
  color: var(--color-fg-neutral-dark);
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-m);
  font-style: normal;
  font-weight: ${({ selected }) => (selected ? "var(--typography-label-semibold)" : "var(--typography-label-regular)")};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

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

export default ItemAction;

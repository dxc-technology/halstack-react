import { memo } from "react";
import styled from "styled-components";
import { DropdownMenuItemProps } from "./types";
import DxcIcon from "../icon/Icon";

const DropdownMenuItemContainer = styled.li<{ visuallyFocused: DropdownMenuItemProps["visuallyFocused"] }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-xs);
  min-height: 36px;
  padding: 0px var(--spacing-padding-xs);
  cursor: pointer;

  ${(props) =>
    props.visuallyFocused &&
    `
  outline: var(--border-width-m) solid var(--border-color-secondary-medium); 
  outline-offset: calc(-1 * var(--border-width-m));
`}
  &:first-child {
    border-top-left-radius: var(--border-radius-s);
    border-top-right-radius: var(--border-radius-s);
  }

  &:last-child {
    border-bottom-left-radius: var(--border-radius-s);
    border-bottom-right-radius: var(--border-radius-s);
  }
  &:hover {
    background-color: var(--color-bg-neutral-light);
  }
  &:active {
    background-color: var(--color-bg-neutral-light);
  }
`;

const DropdownMenuItemLabel = styled.span`
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-regular);
  color: var(--color-fg-neutral-dark);
  white-space: nowrap;
`;

const DropdownMenuItemIcon = styled.div`
  display: flex;
  color: var(--color-fg-neutral-dark);
  font-size: var(--typography-label-xl);

  svg {
    width: 20px;
    height: var(--height-xs);
  }
`;

const DropdownMenuItem = ({
  id,
  visuallyFocused,
  iconPosition,
  onClick,
  option,
}: DropdownMenuItemProps): JSX.Element => (
  <DropdownMenuItemContainer
    visuallyFocused={visuallyFocused}
    onClick={() => {
      onClick(option.value);
    }}
    id={id}
    role="menuitem"
    tabIndex={-1}
  >
    {iconPosition === "after" && <DropdownMenuItemLabel>{option.label}</DropdownMenuItemLabel>}
    {option.icon && (
      <DropdownMenuItemIcon role={typeof option.icon === "string" ? undefined : "img"} aria-hidden>
        {typeof option.icon === "string" ? <DxcIcon icon={option.icon} /> : option.icon}
      </DropdownMenuItemIcon>
    )}
    {iconPosition === "before" && <DropdownMenuItemLabel>{option.label}</DropdownMenuItemLabel>}
  </DropdownMenuItemContainer>
);

export default memo(DropdownMenuItem);

import { memo } from "react";
import styled from "@emotion/styled";
import { DropdownMenuItemProps } from "./types";
import DxcIcon from "../icon/Icon";

const DropdownMenuItemContainer = styled.li<{
  visuallyFocused: DropdownMenuItemProps["visuallyFocused"];
  iconPosition: DropdownMenuItemProps["iconPosition"];
}>`
  box-sizing: border-box;
  color: var(--color-fg-neutral-dark);
  display: flex;
  align-items: center;
  gap: var(--spacing-gap-xs);
  height: var(--height-m);
  padding: var(--spacing-padding-none) var(--spacing-padding-xs);
  cursor: pointer;

  ${({ iconPosition }) => (iconPosition === "after" ? "flex-direction: row-reverse;" : "flex-direction: row;")}

  ${(props) =>
    props.visuallyFocused &&
    `
  outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium); 
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
  &:hover,
  &:active {
    background-color: var(--color-bg-neutral-light);
  }
`;

const DropdownMenuItemLabel = styled.span`
  font-family: var(--typography-font-family);
  font-size: var(--typography-label-l);
  font-weight: var(--typography-label-regular);
  white-space: nowrap;
`;

const DropdownMenuItemIcon = styled.div`
  display: flex;
  font-size: var(--height-xs);

  svg {
    width: 20px;
    height: var(--height-xs);
  }
`;

const DropdownMenuItem = ({ id, visuallyFocused, iconPosition, onClick, option }: DropdownMenuItemProps) => (
  <DropdownMenuItemContainer
    iconPosition={iconPosition}
    visuallyFocused={visuallyFocused}
    onClick={() => {
      onClick(option.value);
    }}
    id={id}
    role="menuitem"
    tabIndex={-1}
  >
    {option.icon && (
      <DropdownMenuItemIcon role={typeof option.icon === "string" ? undefined : "img"} aria-hidden>
        {typeof option.icon === "string" ? <DxcIcon icon={option.icon} /> : option.icon}
      </DropdownMenuItemIcon>
    )}
    <DropdownMenuItemLabel>{option.label}</DropdownMenuItemLabel>
  </DropdownMenuItemContainer>
);

export default memo(DropdownMenuItem);

import { forwardRef } from "react";
import ActionIconPropsTypes, { RefType } from "./types";
import styled from "styled-components";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";

const ActionIcon = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: var(--border-radius-xs);
  height: var(--height-s);
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: pointer;`)}
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};

  ${(props) =>
    !props.disabled &&
    `
      &:focus,
      &:focus-visible {
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
        color: var(--color-fg-neutral-dark);        
      }
      &:hover {
        background-color: var(--color-bg-alpha-light);
        color: var(--color-fg-neutral-dark);
      }
      &:active {
        background-color: var(--color-bg-alpha-light);
        color: var(--color-fg-neutral-dark);
      }
    `}
  font-size: var(--height-xxs);
  > svg {
    height: var(--height-xxs);
  }
`;

export default forwardRef<RefType, ActionIconPropsTypes>(
  ({ disabled = false, title, icon, onClick, tabIndex }, ref) => (
    <Tooltip label={title}>
      <ActionIcon
        aria-label={title}
        disabled={disabled}
        onClick={onClick}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
        tabIndex={tabIndex}
        type="button"
        ref={ref}
      >
        {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
      </ActionIcon>
    </Tooltip>
  )
);

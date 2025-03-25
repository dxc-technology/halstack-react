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
  width: 24px;
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: pointer;`)}
  color: ${(props) => (props.disabled ? "var(--color-fg-neutral-medium)" : "var(--color-fg-neutral-dark)")};

  ${(props) =>
    !props.disabled &&
    `
      &:focus,
      &:focus-visible {
        outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
      }
      &:hover {
        background-color: var(--color-bg-alpha-light);
      }
    `}
  font-size: var(--height-xxs);
  > svg {
    height: var(--height-xxs);
    width: 16px;
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

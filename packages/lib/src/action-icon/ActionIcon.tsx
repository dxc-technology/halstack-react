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
  width: var(--height-s);
  height: var(--height-s);
  border: var(--border-width-m) var(--border_solid) var(--color_transparent);
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: pointer;`)}
  background-color: var(--color_transparent);
  color: ${(props) => (props.disabled ? "var(--color_grey_500)" : "var(--color_grey_900)")};

  ${(props) =>
    !props.disabled &&
    `
      &:focus,
      &:focus-visible {
        outline: none;
        border: var(--border-width-m) var(--border_solid) var(--border-color-secondary-medium);
        color: var(--color_grey_900);
      }
      &:hover {
        background-color: var(--color-bg-alpha-light);
        color: var(--color_grey_900);
      }
      &:active {
        background-color: var(--color-bg-alpha-light);
        color: var(--color_grey_900);
      }
    `}

  font-size: 16px;
  > svg {
    width: 16px;
    height: 16px;
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

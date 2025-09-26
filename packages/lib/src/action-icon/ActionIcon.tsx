import { forwardRef } from "react";
import ActionIconPropsTypes, { RefType } from "./types";
import styled from "@emotion/styled";
import DxcIcon from "../icon/Icon";
import { Tooltip } from "../tooltip/Tooltip";

const ActionIcon = styled.button`
  all: unset;
  display: grid;
  place-items: center;
  border-radius: var(--border-radius-xs);
  height: var(--height-s);
  width: 24px;
  color: var(--color-fg-neutral-dark);
  cursor: pointer;

  /* Icon sizing */
  font-size: var(--height-xxs);
  > svg {
    height: var(--height-xxs);
    width: 16px;
  }

  &:disabled {
    color: var(--color-fg-neutral-medium);
    cursor: not-allowed;
  }
  &:focus:enabled,
  &:focus-visible:enabled {
    outline: var(--border-width-m) var(--border-style-default) var(--border-color-secondary-medium);
    outline-offset: -2px;
  }
  &:hover:enabled {
    background-color: var(--color-bg-alpha-light);
  }
`;

const ForwardedActionIcon = forwardRef<RefType, ActionIconPropsTypes>(
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

ForwardedActionIcon.displayName = "ActionIcon";

export default ForwardedActionIcon;

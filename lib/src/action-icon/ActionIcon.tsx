import React from "react";
import ActionIconProps, { RefType } from "./types";
import styled from "styled-components";

const DxcActionIcon = React.forwardRef<RefType, ActionIconProps>(
  ({ disabled = false, title, icon, onClick, tabIndex }, ref): JSX.Element => {
    return (
      <ActionIcon
        aria-label={title}
        disabled={disabled}
        onClick={onClick}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
        tabIndex={tabIndex}
        title={title}
        type="button"
        ref={ref}
      >
        {typeof icon === "string" ? <img src={icon} /> : icon}
      </ActionIcon>
    );
  }
);

const ActionIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: none;
  border-radius: 2px;
  width: 24px;
  height: 24px;
  padding: 3px;
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: pointer;`)}

  box-shadow: 0 0 0 2px transparent;
  background-color: ${(props) =>
    props.disabled ? props.theme.disabledActionBackgroundColor : props.theme.actionBackgroundColor};
  color: ${(props) => (props.disabled ? props.theme.disabledActionIconColor : props.theme.actionIconColor)};

  ${(props) =>
    !props.disabled &&
    `
      &:focus,
      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px ${props.theme.focusActionBorderColor};
        color: ${props.theme.focusActionIconColor};
      }
      &:hover {
        background-color: ${props.theme.hoverActionBackgroundColor};
        color: ${props.theme.hoverActionIconColor};
      }
      &:active {
        background-color: ${props.theme.activeActionBackgroundColor};
        color: ${props.theme.activeActionIconColor};
      }
    `}

  img, svg {
    width: 16px;
    height: 16px;
  }
`;

export default DxcActionIcon;

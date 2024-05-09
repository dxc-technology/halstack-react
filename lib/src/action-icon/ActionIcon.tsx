import React from "react";
import ActionIconPropsTypes, { RefType } from "./types";
import styled from "styled-components";
import CoreTokens from "../common/coreTokens";
import DxcIcon from "../icon/Icon";
import DxcTooltip from "../tooltip/Tooltip";

const DxcActionIcon = React.forwardRef<RefType, ActionIconPropsTypes>(
  ({ disabled = false, title, icon, onClick, tabIndex }, ref): JSX.Element => {
    return (
      <DxcTooltip label={title}>
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
      </DxcTooltip>
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
  font-size: 16px;
  padding: 0px;
  ${(props) => (props.disabled ? `cursor: not-allowed;` : `cursor: pointer;`)}

  box-shadow: 0 0 0 2px transparent;
  background-color: ${(props) =>
    props.disabled
      ? props.theme.disabledActionBackgroundColor ?? CoreTokens.color_transparent
      : props.theme.actionBackgroundColor ?? CoreTokens.color_transparent};
  color: ${(props) =>
    props.disabled
      ? props.theme.disabledActionIconColor ?? CoreTokens.color_grey_500
      : props.theme.actionIconColor ?? CoreTokens.color_black};

  ${(props) =>
    !props.disabled &&
    `
      &:focus,
      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px ${props.theme.focusActionBorderColor ?? CoreTokens.color_blue_600};
        color: ${props.theme.focusActionIconColor ?? CoreTokens.color_black};
      }
      &:hover {
        background-color: ${props.theme.hoverActionBackgroundColor ?? CoreTokens.color_grey_100};
        color: ${props.theme.hoverActionIconColor ?? CoreTokens.color_black};
      }
      &:active {
        background-color: ${props.theme.activeActionBackgroundColor ?? CoreTokens.color_grey_300};
        color: ${props.theme.activeActionIconColor ?? CoreTokens.color_black};
      }
    `}

  svg {
    width: 16px;
    height: 16px;
  }
`;

export default DxcActionIcon;
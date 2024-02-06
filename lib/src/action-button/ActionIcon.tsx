import CoreTokens from "../common/coreTokens";
import ActionIconProps from "./types";
import styled from "styled-components";

const DxcActionIcon = ({ disabled = false, title, icon, onClick, margin, tabIndex }: ActionIconProps): JSX.Element => {
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
      margin={margin}
      type="button"
    >
      {typeof icon === "string" ? <img src={icon} /> : icon}
    </ActionIcon>
  );
};

const ActionIcon = styled.button<{ margin: ActionIconProps["margin"] }>`
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
  background-color: ${CoreTokens.color_transparent};
  // color: ${(props) => (props.disabled ? CoreTokens.color_grey_500 : CoreTokens.color_black)};
  color: ${(props) => (props.disabled ? CoreTokens.color_grey_500 : CoreTokens.color_purple_700)};

  ${(props) =>
    !props.disabled &&
    `
      &:focus, 
      &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 2px ${CoreTokens.color_blue_600};
        color: ${CoreTokens.color_purple_700};
      }
      &:hover {
        background-color: ${CoreTokens.color_grey_100};
        color: ${CoreTokens.color_purple_700};
      }
      &:active {
        background-color: ${CoreTokens.color_grey_300};
        color: ${CoreTokens.color_purple_700};
      }
    `}

  img, svg {
    width: 16px;
    height: 16px;
  }
`;

export default DxcActionIcon;

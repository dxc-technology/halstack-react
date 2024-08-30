import styled from "styled-components";
import ToastPropsType from "./types";
import CoreTokens from "../common/coreTokens";
import DxcButton from "../button/Button";
import DxcActionIcon from "../action-icon/ActionIcon";
import DxcIcon from "../icon/Icon";
import DxcFlex from "../flex/Flex";
import DxcSpinner from "../spinner/Spinner";

const getSemantic = (semantic: ToastPropsType["semantic"]) => {
  switch (semantic) {
    case "info":
      return {
        primaryColor: CoreTokens.color_blue_700,
        secondaryColor: CoreTokens.color_blue_100,
        icon: "filled_info",
      };
    case "warning":
      return {
        primaryColor: CoreTokens.color_yellow_700,
        secondaryColor: CoreTokens.color_yellow_100,
        icon: "filled_warning",
      };
    case "success":
      return {
        primaryColor: CoreTokens.color_green_700,
        secondaryColor: CoreTokens.color_green_100,
        icon: "filled_check_circle",
      };
    default:
      return { primaryColor: CoreTokens.color_purple_700, secondaryColor: CoreTokens.color_purple_100, icon: "" };
  }
};

const DxcToast = ({ action, icon, loading, message, onClear, semantic, showSemanticIcon = true }: ToastPropsType) => (
  <Toast semantic={semantic} role="status">
    <DxcFlex alignItems="center" gap="0.5rem">
      {semantic !== "default" && showSemanticIcon && <DxcIcon icon={getSemantic(semantic).icon} />}
      {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
      {loading && <DxcSpinner mode="small" />}
      <Message>{message}</Message>
    </DxcFlex>
    <DxcFlex alignItems="center" gap="0.25rem">
      {action && (
        <DxcButton
          semantic={semantic}
          mode="tertiary"
          size={{ height: "small" }}
          label={action.label}
          icon={action.icon}
          onClick={action.onClick}
        />
      )}
      <DxcActionIcon icon="clear" title="Clear toast" onClick={onClear} />
    </DxcFlex>
  </Toast>
);

const Toast = styled.output<{ semantic: ToastPropsType["semantic"] }>`
  min-width: 200px;
  max-width: 600px;
  border-radius: 4px;
  border-left: 2px solid ${({ semantic }) => getSemantic(semantic).primaryColor};
  box-shadow: 0px 2px 2px 0px rgba(181, 181, 181, 0.4);
  display: inline-flex;
  justify-content: space-between;
  gap: 24px;
  padding: 8px 12px;
  background-color: ${({ semantic }) => getSemantic(semantic).secondaryColor};

  color: ${({ semantic }) => getSemantic(semantic).primaryColor};
  font-size: 24px;
  svg {
    width: 24px;
    height: 24px;
  }
`;

const Message = styled.span`
  color: ${CoreTokens.color_black};
  font-family: "Open Sans";
  font-size: ${CoreTokens.type_scale_02};
  font-weight: ${CoreTokens.type_semibold};
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default DxcToast;

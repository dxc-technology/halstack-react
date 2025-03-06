import { memo } from "react";
import { DxcSpinner, HalstackProvider } from "..";
import DxcIcon from "../icon/Icon";
import ToastPropsType from "./types";
import { getSemantic } from "./utils";

const spinnerTheme = {
  spinner: {
    accentColor: getSemantic("info").primaryColor,
  },
};

const ToastIcon = memo(
  ({
    icon,
    hideSemanticIcon,
    loading,
    semantic,
  }: Pick<ToastPropsType, "icon" | "hideSemanticIcon" | "loading" | "semantic">) => {
    if (semantic === "default") return typeof icon === "string" ? <DxcIcon icon={icon} /> : icon;
    else if (semantic === "info" && loading)
      return (
        <HalstackProvider theme={spinnerTheme}>
          <DxcSpinner mode="small" />
        </HalstackProvider>
      );
    else return !hideSemanticIcon && <DxcIcon icon={getSemantic(semantic).icon} />;
  }
);

export default ToastIcon;

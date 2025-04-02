import { memo } from "react";
import { DxcSpinner } from "..";
import DxcIcon from "../icon/Icon";
import ToastPropsType from "./types";
import getSemantic from "./utils";

const ToastIcon = memo(
  ({
    icon,
    hideSemanticIcon,
    loading,
    semantic,
  }: Pick<ToastPropsType, "icon" | "hideSemanticIcon" | "loading" | "semantic">) => {
    if (semantic === "default") return typeof icon === "string" ? <DxcIcon icon={icon} /> : icon;
    else if (semantic === "info" && loading) return <DxcSpinner inheritColor mode="small" />;
    else return !hideSemanticIcon && <DxcIcon icon={getSemantic(semantic).icon} />;
  }
);

export default ToastIcon;

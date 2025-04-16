import { memo } from "react";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import AlertPropsType from "./types";

const Actions = memo(
  ({
    mode,
    primaryAction,
    secondaryAction,
    semantic,
  }: Pick<AlertPropsType, "mode" | "primaryAction" | "secondaryAction" | "semantic">) =>
    (primaryAction != null || secondaryAction != null) && (
      <DxcFlex gap="var(--spacing-gap-s)" alignSelf={mode === "inline" || mode === "modal" ? "flex-end" : undefined}>
        {secondaryAction?.onClick && (
          <DxcButton
            icon={secondaryAction.icon}
            label={secondaryAction.label}
            mode="secondary"
            semantic={semantic}
            size={{ height: mode === "modal" ? "medium" : "small" }}
            onClick={secondaryAction.onClick}
          />
        )}
        {primaryAction?.onClick && (
          <DxcButton
            icon={primaryAction.icon}
            label={primaryAction.label}
            semantic={semantic}
            size={{ height: mode === "modal" ? "medium" : "small" }}
            onClick={primaryAction.onClick}
          />
        )}
      </DxcFlex>
    )
);

export default Actions;

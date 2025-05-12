// packages/lib/src/components/badge/DxcBadge.tsx
import BadgePropsType from "./types";
import { Tooltip } from "../tooltip/Tooltip";
import DxcIcon from "../icon/Icon";
import { badge } from "../../styled-system/recipes";
import { css } from "../../styled-system/css";

const DxcBadge = ({
  label,
  title,
  mode = "contextual",
  color = "grey",
  icon,
  notificationLimit = 99,
  size = "medium",
}: BadgePropsType): JSX.Element => {
  const labelled = !!label;

  return (
    <Tooltip label={title}>
      <div
        className={badge({
          size: size,
          colorScheme: mode === "contextual" ? color : undefined,
          mode: mode,
          labelled: labelled,
        })}
        aria-label={title}
      >
        {mode === "contextual" && icon && (
          <span
            className={css({
              display: "flex",
              fontSize: `var(--height-${size === "small" ? "xxxs" : size === "medium" ? "xxs" : "s"})`,
              // svg: {
              //   height: `var(--height-${size === "small" ? "xxxs" : size === "medium" ? "xxs" : "s"})`,
              //   width: `var(--height-${size === "small" ? "xxxs" : size === "medium" ? "xxs" : "s"})`,
              // },
            })}
          >
            {typeof icon === "string" ? <DxcIcon icon={icon} /> : icon}
          </span>
        )}
        {label && (
          <span
            className={css({
              px: mode === "contextual" ? "var(--spacing-padding-xs)" : labelled ? "var(--spacing-padding-xxs)" : "0",
            })}
          >
            {typeof label === "number" && mode === "notification"
              ? label > notificationLimit
                ? `+${notificationLimit}`
                : label
              : label}
          </span>
        )}
      </div>
    </Tooltip>
  );
};

export default DxcBadge;

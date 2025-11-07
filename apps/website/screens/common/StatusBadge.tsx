import { DxcBadge } from "@dxc-technology/halstack-react";
import { ComponentStatus } from "./pagesList";

type StatusBadgeProps = {
  hasTitle?: boolean;
  status: ComponentStatus | "required";
  // reduced?: boolean;
};

const getBadgeColor = (status: StatusBadgeProps["status"]) => {
  switch (status) {
    case "required":
      return "warning";
    case "experimental":
      return "secondary";
    case "new":
      return "primary";
    case "stable":
      return "success";
    case "legacy":
      return "tertiary";
    default:
      return "neutral";
  }
};

const getBadgeTitle = (status: StatusBadgeProps["status"]) => {
  switch (status) {
    case "experimental":
      return "This component is ready for preliminary usage.";
    case "new":
      return "This component has reached a level of maturity and completeness that the Halstack team is happy and confident with.";
    case "stable":
      return "This component is significantly mature and usage is strongly encouraged, with long-term support expected.";
    case "legacy":
      return "This component is stable but there are plans to replace its functionality with a new component or a combination of new components.";
    case "deprecated":
      return "This component will be removed in the near future.";
    default:
      return "";
  }
};

// TODO: enable icon when the status badge supports reduced version
// const getBadgeIcon = (status: StatusBadgeProps["status"]) => {
//   switch (status) {
//     case "required":
//       return "warning_amber";
//     case "experimental":
//       return "science";
//     case "new":
//       return "new_releases";
//     case "stable":
//       return "check_circle";
//     case "legacy":
//       return "history";
//     case "deprecated":
//       return "highlight_off";
//     default:
//       return "";
//   }
// };

const StatusBadge = ({ hasTitle = false, status }: StatusBadgeProps) => {
  return (
    <DxcBadge
      label={status[0]?.toUpperCase() + status.slice(1)}
      color={getBadgeColor(status)}
      title={hasTitle ? getBadgeTitle(status) : undefined}
      size="small"
      // icon={reduced ? getBadgeIcon(status) : undefined}
    />
  );
};

export default StatusBadge;

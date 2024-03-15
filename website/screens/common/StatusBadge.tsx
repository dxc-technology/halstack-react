import { DxcBadge } from "@dxc-technology/halstack-react";

type StatusBadgeProps = {
  label: string;
  status: "Deprecated" | "Experimental" | "Information" | "Ready" | "Required";
};

const getBadgeColor = (status: StatusBadgeProps["status"]) => {
  switch (status) {
    case "Deprecated":
      return "yellow";
    case "Experimental":
      return "purple";
    case "Information":
      return "blue";
    case "Ready":
      return "green";
    case "Required":
      return "orange";
    default:
      return "grey";
  }
};

const StatusBadge = ({ label, status }: StatusBadgeProps) => (
  <DxcBadge label={label} color={getBadgeColor(status)} size="small" />
);

export default StatusBadge;

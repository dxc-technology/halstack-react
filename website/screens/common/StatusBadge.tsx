import { DxcBadge } from "@dxc-technology/halstack-react";

type InfoStatus = {
  status: "information";
  label: string;
};

type NoInfoStatus = {
  status: "deprecated" | "experimental" | "ready" | "required";
  label?: never;
};

type Props = InfoStatus | NoInfoStatus;

const getBadgeColor = (status: Props["status"]) => {
  switch (status) {
    case "deprecated":
      return "yellow";
    case "experimental":
      return "purple";
    case "information":
      return "blue";
    case "ready":
      return "green";
    case "required":
      return "orange";
    default:
      return "grey";
  }
};

const getStatusLabel = (label: Props["label"], status: Props["status"]) => {
  return label ? label : status.charAt(0).toUpperCase() + status.slice(1);
};

const StatusBadge = ({ label, status }: Props) => (
  <DxcBadge
    label={getStatusLabel(label, status)}
    color={getBadgeColor(status)}
    size="small"
  />
);

export default StatusBadge;

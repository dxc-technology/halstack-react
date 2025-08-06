import { DxcInset, DxcBadge, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  const icon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M11 17H13V11H11V17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 9H13V7H11V9Z" />
      <path d="M11 7H13V9H11V7ZM11 11H13V17H11V11Z" />
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" />
    </svg>
  );

  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-xl)" wrap="wrap">
        <DxcBadge label="Authorized" icon={icon} />
        <DxcBadge label="Reserved" color="blue" icon={icon} />
        <DxcBadge label="Ready" color="green" icon={icon} />
        <DxcBadge label="Pending" color="orange" icon={icon} />
        <DxcBadge label="Unfulfilled" color="red" icon="error" />
        <DxcBadge label="Paid" color="yellow" icon="euro" />
        <DxcBadge label="Restocked" color="purple" icon="refresh" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcBadge,
  DxcFlex,
  Placeholder,
};

export default { code, scope };

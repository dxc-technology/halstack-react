import { DxcInset, DxcBadge, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-xl)" wrap="wrap">
        <DxcBadge label="Authorized" />
        <DxcBadge label="Reserved" color="secondary" />
        <DxcBadge label="Ready" color="success" />
        <DxcBadge label="Pending" color="warning" />
        <DxcBadge label="Unfulfilled" color="error" />
        <DxcBadge label="Paid" color="tertiary" />
        <DxcBadge label="Restocked" color="primary" />
      </DxcFlex>
    </DxcInset>
  );
};`;

const scope = {
  DxcInset,
  DxcBadge,
  DxcFlex,
  Placeholder,
};

export default { code, scope };

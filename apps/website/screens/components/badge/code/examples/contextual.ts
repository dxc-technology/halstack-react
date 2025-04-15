import { DxcInset, DxcBadge, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="var(--spacing-gap-xl)" wrap="wrap">
        <DxcBadge label="Authorized" />
        <DxcBadge label="Reserved" color="blue" />
        <DxcBadge label="Ready" color="green" />
        <DxcBadge label="Pending" color="orange" />
        <DxcBadge label="Unfulfilled" color="red" />
        <DxcBadge label="Paid" color="yellow" />
        <DxcBadge label="Restocked" color="purple" />
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

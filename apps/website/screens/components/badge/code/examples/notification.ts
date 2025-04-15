import { DxcInset, DxcBadge, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="var(--spacing-gap-xl)">
        <DxcBadge mode="notification" />
        <DxcBadge label={10} mode="notification" />
        <DxcBadge label={100} mode="notification" />
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

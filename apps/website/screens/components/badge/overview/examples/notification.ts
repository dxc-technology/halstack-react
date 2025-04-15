import { DxcInset, DxcBadge, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="var(--spacing-gap-xl)">
        <DxcBadge label={100} mode="notification" size="large"/>
        <DxcBadge mode="notification" size="large" />
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

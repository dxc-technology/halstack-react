import { DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" gap="var(--spacing-padding-xl)">
        <Placeholder height="var(--height-xxl)" />
        <DxcInset space="var(--spacing-padding-m)">
          <Placeholder height="var(--height-xxl)" />
        </DxcInset>
        <Placeholder height="var(--height-xxl)" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcInset,
  DxcFlex,
  Placeholder,
};

export default { code, scope };

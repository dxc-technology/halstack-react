import { DxcBleed, DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" gap="var(--spacing-padding-xl)">
        <Placeholder height="var(--height-xxl)" />
        <DxcBleed top="var(--spacing-padding-xs)" right="var(--spacing-padding-m)" bottom="var(--spacing-padding-l)" left="var(--spacing-padding-l)">
          <Placeholder height="var(--height-xxl)" />
        </DxcBleed>
        <Placeholder height="var(--height-xxl)" />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcBleed,
  DxcInset,
  DxcFlex,
  Placeholder,
};

export default { code, scope };

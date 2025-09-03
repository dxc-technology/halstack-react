import { DxcInset, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex direction="column" gap="var(--spacing-padding-xl)">
        <Placeholder height="var(--height-xxl)" />
        <DxcInset
          top="var(--spacing-padding-xxs)"
          right="var(--spacing-padding-xs)"
          bottom="var(--spacing-padding-m)"
          left="var(--spacing-padding-l)"
        >
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

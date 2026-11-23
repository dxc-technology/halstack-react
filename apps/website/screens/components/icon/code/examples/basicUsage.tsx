import { DxcInset, DxcIcon, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => (
  <DxcInset space="var(--spacing-padding-xl)">
    <DxcFlex gap="var(--spacing-gap-xl)" alignItems="center">
      <DxcIcon icon="home" />
      <DxcIcon icon="filled_home" size="var(--typography-label-l)" color="var(--color-fg-primary-medium)" />
      <DxcIcon icon="favorite" size="var(--typography-heading-xl)" color="var(--color-fg-error-medium)" />
    </DxcFlex>
  </DxcInset>
)`;

const scope = {
  DxcInset,
  DxcIcon,
  DxcFlex,
  Placeholder,
};

export default { code, scope };

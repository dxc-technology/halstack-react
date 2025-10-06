import { DxcInset, DxcBadge, DxcFlex } from "@dxc-technology/halstack-react";
import Placeholder from "@/common/Placeholder";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcFlex gap="var(--spacing-gap-xl)" direction="column">
        <DxcFlex gap="var(--spacing-gap-xl)" justifyContent="space-evenly">
          <DxcBadge label="Label" color="success" icon="info" />
          <DxcBadge label="Label" color="info" icon="info" />
          <DxcBadge label="Label" color="error" icon="info" />
          <DxcBadge label="Label" color="warning" icon="info" />
          <DxcBadge label="Label" color="tertiary" icon="info" />
          <DxcBadge label="Label" color="primary" icon="info" />
          <DxcBadge label="Label" icon="info" />
        </DxcFlex>
        <DxcFlex gap="var(--spacing-gap-xl)" justifyContent="space-evenly">
          <DxcBadge label="Label" color="success" />
          <DxcBadge label="Label" color="info" />
          <DxcBadge label="Label" color="error" />
          <DxcBadge label="Label" color="warning" />
          <DxcBadge label="Label" color="tertiary" />
          <DxcBadge label="Label" color="primary" />
          <DxcBadge label="Label" />
        </DxcFlex>
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

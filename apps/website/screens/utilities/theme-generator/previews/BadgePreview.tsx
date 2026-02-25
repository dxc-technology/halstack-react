import { DxcBadge, DxcFlex } from "@dxc-technology/halstack-react";

const BadgePreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-m)">
      <DxcBadge label="Label" color="success" icon="info" />
      <DxcBadge label="Label" color="info" icon="info" />
      <DxcBadge label="Label" color="error" icon="info" />
      <DxcBadge label="Label" color="warning" icon="info" />
      <DxcBadge label="Label" color="tertiary" icon="info" />
      <DxcBadge label="Label" color="primary" icon="info" />
      <DxcBadge label="Label" icon="info" />
      <DxcBadge label={100} mode="notification" />
      <DxcBadge mode="notification" />
    </DxcFlex>
  );
};

export default BadgePreview;

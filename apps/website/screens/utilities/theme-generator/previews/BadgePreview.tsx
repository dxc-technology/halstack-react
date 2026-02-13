import { DxcBadge, DxcFlex } from "@dxc-technology/halstack-react";
const BadgePreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-s)" direction="column">
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcBadge label="Label" color="success" icon="info" />
        <DxcBadge label="Label" color="info" icon="info" />
        <DxcBadge label="Label" color="error" icon="info" />
        <DxcBadge label="Label" color="warning" icon="info" />
        <DxcBadge label="Label" color="tertiary" icon="info" />
        <DxcBadge label="Label" color="primary" icon="info" />
        <DxcBadge label="Label" icon="info" />
      </DxcFlex>
      <DxcFlex gap="var(--spacing-gap-m)">
        <DxcBadge label="Label" color="success" />
        <DxcBadge label="Label" color="info" />
        <DxcBadge label="Label" color="error" />
        <DxcBadge label="Label" color="warning" />
        <DxcBadge label="Label" color="tertiary" />
        <DxcBadge label="Label" color="primary" />
        <DxcBadge label="Label" />
        <DxcBadge label={100} mode="notification" size="large" />
        <DxcBadge mode="notification" size="large" />
      </DxcFlex>
    </DxcFlex>
  );
};

export default BadgePreview;

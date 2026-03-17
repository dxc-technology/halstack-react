import { DxcBadge, DxcFlex } from "@dxc-technology/halstack-react";

const BadgePreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-m)" wrap="wrap">
      <DxcBadge label="Completed" color="success" icon="check_circle" />
      <DxcBadge label="Information" color="info" icon="info" />
      <DxcBadge label="Failed" color="error" icon="error" />
      <DxcBadge label="Pending review" color="warning" icon="warning" />
      <DxcBadge label="Beta feature" color="tertiary" icon="science" />
      <DxcBadge label="New update" color="primary" icon="new_releases" />
      <DxcBadge label="General" icon="label" />
      <DxcBadge label={12} mode="notification" />
      <DxcBadge mode="notification" />
    </DxcFlex>
  );
};

export default BadgePreview;

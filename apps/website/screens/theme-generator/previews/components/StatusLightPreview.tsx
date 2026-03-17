import { DxcStatusLight, DxcFlex } from "@dxc-technology/halstack-react";

const StatusLightPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)" wrap="wrap">
      <DxcStatusLight label="Active" mode="success" />
      <DxcStatusLight label="Pending" mode="warning" />
      <DxcStatusLight label="Failed" mode="error" />
      <DxcStatusLight label="Information" mode="info" />
    </DxcFlex>
  );
};

export default StatusLightPreview;

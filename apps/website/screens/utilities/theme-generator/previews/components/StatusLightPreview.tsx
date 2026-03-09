import { DxcStatusLight, DxcFlex } from "@dxc-technology/halstack-react";

const StatusLightPreview = () => {
  return (
    <DxcFlex gap="var(--spacing-gap-ml)" wrap="wrap">
      <DxcStatusLight label="StatusLight" mode="success" />
      <DxcStatusLight label="StatusLight" mode="warning" />
      <DxcStatusLight label="StatusLight" mode="error" />
      <DxcStatusLight label="StatusLight" mode="info" />
    </DxcFlex>
  );
};

export default StatusLightPreview;

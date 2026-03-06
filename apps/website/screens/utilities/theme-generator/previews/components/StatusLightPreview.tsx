import { DxcStatusLight, DxcFlex } from "@dxc-technology/halstack-react";

const StatusLightPreview = () => {
  return (
    <DxcFlex gap="1rem" wrap="wrap">
      <DxcStatusLight label="StatusLight" mode="success" />
      <DxcStatusLight label="StatusLight" mode="warning" />
      <DxcStatusLight label="StatusLight" mode="error" />
      <DxcStatusLight label="StatusLight" mode="info" />
    </DxcFlex>
  );
};

export default StatusLightPreview;

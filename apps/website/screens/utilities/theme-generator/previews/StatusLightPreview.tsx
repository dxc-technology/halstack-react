import { DxcStatusLight, DxcFlex, DxcInset, DxcHeading } from "@dxc-technology/halstack-react";

const StatusLightPreview = () => {
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Status Light" />
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcFlex gap="2rem" wrap="wrap">
          <DxcStatusLight label="StatusLight" mode="success" />
          <DxcStatusLight label="StatusLight" mode="warning" />
          <DxcStatusLight label="StatusLight" mode="error" />
          <DxcStatusLight label="StatusLight" mode="info" />
        </DxcFlex>
      </DxcInset>
    </DxcFlex>
  );
};

export default StatusLightPreview;

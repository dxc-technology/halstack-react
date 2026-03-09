import { DxcSwitch, DxcFlex } from "@dxc-technology/halstack-react";

const SwitchPreview = () => {
  return (
    <DxcFlex direction="row" gap="var(--spacing-gap-ml)">
      <DxcSwitch label="Enable notifications" defaultChecked />
      <DxcSwitch label="Enable automatic updates (disabled)" disabled />
    </DxcFlex>
  );
};

export default SwitchPreview;

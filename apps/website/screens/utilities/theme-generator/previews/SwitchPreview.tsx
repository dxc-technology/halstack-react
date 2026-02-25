import { DxcSwitch, DxcFlex } from "@dxc-technology/halstack-react";

const SwitchPreview = () => {
  return (
    <DxcFlex direction="row" gap="1rem">
      <DxcSwitch label="Switch 1" defaultChecked />
      <DxcSwitch label="Switch 2" disabled />
    </DxcFlex>
  );
};

export default SwitchPreview;

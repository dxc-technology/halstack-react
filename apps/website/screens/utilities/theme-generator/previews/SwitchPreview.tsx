import { DxcSwitch, DxcFlex, DxcInset, DxcHeading } from "@dxc-technology/halstack-react";

const SwitchPreview = () => {
  return (
    <DxcFlex direction="column" gap="1rem">
      <DxcHeading level={5} text="Switch" />
      <DxcInset space="var(--spacing-padding-xl)">
        <DxcFlex direction="column" gap="1rem">
          <DxcSwitch label="Dark mode" defaultChecked />
          <DxcSwitch label="Disabled" disabled />
        </DxcFlex>
      </DxcInset>
    </DxcFlex>
  );
};

export default SwitchPreview;

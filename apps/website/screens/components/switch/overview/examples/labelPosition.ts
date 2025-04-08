import { DxcSwitch, DxcInset, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex justifyContent="center" gap="3rem">
        <DxcFlex direction="column">
          <DxcHeading level={5} text="Before" />
          <DxcSwitch label="Show all" />
        </DxcFlex>
        <DxcFlex direction="column">
          <DxcHeading level={5} text="After" />
          <DxcSwitch label="Off" labelPosition="after" />
        </DxcFlex>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcSwitch,
  DxcInset,
  DxcFlex,
  DxcHeading,
};

export default { code, scope };

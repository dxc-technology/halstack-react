import { DxcSwitch, DxcInset, DxcFlex, DxcHeading } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex gap="2rem" justifyContent="center">
        <DxcFlex direction="column" gap="0.125rem">
          <DxcHeading level={5} text="Vertical" />
          <DxcSwitch label="Option 01" />
          <DxcSwitch label="Option 02" />
          <DxcSwitch label="Option 03" />
        </DxcFlex>
        <DxcFlex direction="column" gap="0.125rem">
          <DxcHeading level={5} text="Horizontal" />
          <DxcFlex gap="1.5rem">
            <DxcSwitch label="Option 01" />
            <DxcSwitch label="Option 02" />
            <DxcSwitch label="Option 03" />
          </DxcFlex>
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

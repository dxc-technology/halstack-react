import {
  DxcSwitch,
  DxcInset,
  DxcRow,
  DxcFlex,
  DxcHeading,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcRow gutter="large" justify="center">
        <DxcFlex direction="column" gap="0.125rem">
          <DxcHeading level={4} text="Vertical"></DxcHeading>
          <DxcSwitch label="Option 01" />
          <DxcSwitch label="Option 02" />
          <DxcSwitch label="Option 03" />
        </DxcFlex>
        <DxcFlex direction="column" gap="0.125rem">
          <DxcHeading level={4} text="Horizontal"></DxcHeading>
          <DxcRow gutter="medium">
            <DxcSwitch label="Option 01" />
            <DxcSwitch label="Option 02" />
            <DxcSwitch label="Option 03" />
          </DxcRow>
        </DxcFlex>
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcSwitch,
  DxcInset,
  DxcRow,
  DxcFlex,
  DxcHeading,
};

export default { code, scope };

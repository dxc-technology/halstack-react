import {
  DxcSwitch,
  DxcInset,
  DxcRow,
  DxcStack,
  DxcHeading,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcRow gutter="large" justify="center">
        <DxcStack gutter="xxxsmall">
          <DxcHeading level={4} text="Vertical"></DxcHeading>
          <DxcSwitch label="Option 01" />
          <DxcSwitch label="Option 02" />
          <DxcSwitch label="Option 03" />
        </DxcStack>
        <DxcStack gutter="xxxsmall">
          <DxcHeading level={4} text="Horizontal"></DxcHeading>
          <DxcRow gutter="medium">
            <DxcSwitch label="Option 01" />
            <DxcSwitch label="Option 02" />
            <DxcSwitch label="Option 03" />
          </DxcRow>
        </DxcStack>
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcSwitch,
  DxcInset,
  DxcRow,
  DxcStack,
  DxcHeading,
};

export default { code, scope };

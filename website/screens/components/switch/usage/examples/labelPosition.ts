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
      <DxcRow justify="center" gutter="xlarge">
        <DxcStack>
          <DxcHeading level={4} text="Before"></DxcHeading>
          <DxcSwitch label="Show all" />
        </DxcStack>
        <DxcStack>
          <DxcHeading level={4} text="After"></DxcHeading>
          <DxcSwitch label="Off" labelPosition="after" />
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

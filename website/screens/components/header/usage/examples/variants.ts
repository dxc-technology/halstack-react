import {
  DxcHeader,
  DxcInset,
  DxcStack,
  DxcHeading,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcStack gutter="2rem">
        <DxcHeading level={4} text="Default"></DxcHeading>
        <DxcHeader />
        <DxcHeading level={4} text="Underlined"></DxcHeading>
        <DxcHeader underlined="true"/>
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcHeader,
  DxcInset,
  DxcStack,
  DxcHeading,
};

export default { code, scope };

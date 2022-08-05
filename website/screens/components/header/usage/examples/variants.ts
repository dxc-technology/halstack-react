import {
  DxcHeader,
  DxcInset,
  DxcFlex,
  DxcHeading,
} from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex direction="column" gap="2rem">
        <DxcHeading level={4} text="Default"></DxcHeading>
        <DxcHeader />
        <DxcHeading level={4} text="Underlined"></DxcHeading>
        <DxcHeader underlined="true"/>
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcHeader,
  DxcInset,
  DxcFlex,
  DxcHeading,
};

export default { code, scope };

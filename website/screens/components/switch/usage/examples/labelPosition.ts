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
      <DxcRow justify="center" gutter="xlarge">
        <DxcFlex direction="column">
          <DxcHeading level={4} text="Before"></DxcHeading>
          <DxcSwitch label="Show all" />
        </DxcFlex>
        <DxcFlex direction="column">
          <DxcHeading level={4} text="After"></DxcHeading>
          <DxcSwitch label="Off" labelPosition="after" />
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

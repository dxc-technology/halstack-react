import { DxcSwitch, DxcInset, DxcFlex, DxcHeading } from "@repo/ui";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcFlex justifyContent="center" gap="3rem">
        <DxcFlex direction="column">
          <DxcHeading level={4} text="Before"></DxcHeading>
          <DxcSwitch label="Show all" />
        </DxcFlex>
        <DxcFlex direction="column">
          <DxcHeading level={4} text="After"></DxcHeading>
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

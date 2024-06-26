import { DxcHeading, DxcInset } from "@repo/ui";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcHeading level={2} text="Introduction" />
    </DxcInset>
  );
}`;

const scope = {
  DxcHeading,
  DxcInset,
};

export default { code, scope };

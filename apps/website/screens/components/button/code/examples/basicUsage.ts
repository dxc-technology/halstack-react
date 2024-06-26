import { DxcButton, DxcInset } from "@repo/ui";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcButton label="Submit" />
    </DxcInset>
  );
}`;

const scope = {
  DxcButton,
  DxcInset,
};

export default { code, scope };

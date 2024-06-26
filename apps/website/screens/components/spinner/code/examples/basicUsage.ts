import { DxcSpinner, DxcInset } from "@repo/ui";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcSpinner />
    </DxcInset>
  );
}`;

const scope = {
  DxcSpinner,
  DxcInset,
};

export default { code, scope };

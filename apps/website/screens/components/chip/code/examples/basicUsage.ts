import { DxcChip, DxcInset } from "@repo/ui";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcChip label="Experimental" />
    </DxcInset>
  );
}`;

const scope = {
  DxcChip,
  DxcInset,
};

export default { code, scope };

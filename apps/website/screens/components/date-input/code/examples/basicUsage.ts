import { DxcDateInput, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcDateInput label="Start date" />
    </DxcInset>
  );
}`;

const scope = {
  DxcDateInput,
  DxcInset,
};

export default { code, scope };

import { DxcDateInput, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcDateInput label="Start date" />
    </DxcInset>
  );
}`;

const scope = {
  DxcDateInput,
  DxcInset,
};

export default { code, scope };

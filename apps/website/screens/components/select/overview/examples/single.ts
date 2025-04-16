import { DxcSelect, DxcFlex, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
  ];

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcFlex direction="column" gap="var(--spacing-gap-xl)" alignItems="center">
        <DxcSelect
          label="Single selection"
          helperText="Select an option"
          defaultValue="1"
          options={options}
        />
      </DxcFlex>
    </DxcInset>
  );
}`;

const scope = {
  DxcSelect,
  DxcFlex,
  DxcInset,
};

export default { code, scope };

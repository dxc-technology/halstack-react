import { DxcSelect, DxcStack, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const options = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
  ];

  return (
    <DxcInset space="2rem">
      <DxcStack gutter="2rem" alignX="center">
        <DxcSelect
          label="Single selection"
          helperText="Select an option"
          defaultValue="1"
          options={options}
        />
        <DxcSelect
          label="Multiple selection"
          helperText="Select one or more options"
          defaultValue={["1", "2"]}
          options={options}
          multiple
        />
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcSelect,
  DxcStack,
  DxcInset,
};

export default { code, scope };

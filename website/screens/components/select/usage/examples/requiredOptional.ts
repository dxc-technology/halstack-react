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
          label="Required"
          helperText="By default, the select is required"
          placeholder="Select an option"
          options={options}
          error="This field is required. Please, enter a value."
        />
        <DxcSelect
          label="Label"
          helperText="When a select is optional, it is not required to fill it in, so it won't pass the required error"
          placeholder="Choose an option"
          options={options}
          optional
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

import { DxcSelect, DxcStack, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const options = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
  ];

  return (
    <DxcStack>
      <DxcInset top="large" right="large" left="large">
        <DxcSelect
          label="Required"
          helperText="By default, the select is required"
          placeholder="Select an option"
          options={options}
          error="This field is required. Please, enter a value."
          size="fillParent"
        />
      </DxcInset>
      <DxcInset space="large">
        <DxcSelect
          label="Label"
          helperText="When a select is optional, it is not required to fill it in, so it won't pass the required error"
          placeholder="Choose an option"
          options={options}
          optional
          size="fillParent"
        />
      </DxcInset>
    </DxcStack>
  );
}`;

const scope = {
  DxcSelect,
  DxcStack,
  DxcInset,
  useState,
};

export default { code, scope };

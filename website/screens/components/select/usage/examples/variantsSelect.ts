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
    <DxcInset space="large">
      <DxcStack gutter="large">
        <DxcSelect
          label="Single selection"
          helperText="Select an option"
          defaultValue="1"
          options={options}
          size="fillParent"
        />
        <DxcSelect
          label="Multiple selection"
          helperText="Select one or more options"
          defaultValue={["1", "2"]}
          options={options}
          multiple
          size="fillParent"
        />
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcSelect,
  DxcStack,
  DxcInset,
  useState,
};

export default { code, scope };

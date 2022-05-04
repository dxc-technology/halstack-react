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
          label="Default"
          placeholder="Choose an option"
          options={options}
          size="fillParent"
        />
        <DxcSelect
          label="Error"
          placeholder="Choose an option"
          options={options}
          error="Error message"
          size="fillParent"
        />
        <DxcSelect
          label="Disabled"
          placeholder="Choose an option"
          options={options}
          disabled
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

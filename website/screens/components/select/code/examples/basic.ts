import { DxcSelect, DxcStack, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const options = [
    { label: "Madrid", value: "madrid" },
    { label: "Melbourne", value: "melbourne" },
    { label: "London", value: "london" },
    { label: "Roma", value: "roma" },
  ];

  return (
    <DxcInset space="large">
      <DxcStack gutter="large">
        <DxcSelect
          label="Select your favorite city"
          placeholder="Choose a city"
          options={options}
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

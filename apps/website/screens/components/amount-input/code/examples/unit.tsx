import { DxcAmountInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const config = {
    unitsConfig: {
      unit: "kilogram",
      unitDisplay: "short",
    },
  };
  
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcAmountInput
        label="Enter your weight"
        config={config}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcAmountInput,
  DxcInset,
  useState,
};

export default { code, scope };

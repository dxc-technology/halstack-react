import { DxcAmountInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const config = {
    currencyConfig: {
      currency: "USD",
    },
  };
  
  return (
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcAmountInput
        label="Enter your income"
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

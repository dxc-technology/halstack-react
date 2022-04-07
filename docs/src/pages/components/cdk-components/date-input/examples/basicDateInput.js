import { DxcDateInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const options = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
  ];

  return (
    <div style={{ display: "flex" }}>
      <DxcDateInput
        label="Default"
        placeholder="Placeholder"
        margin="medium"
      />
      <DxcDateInput
        label="Error"
        placeholder="Placeholder"
        error="Error message"
        margin="medium"
      />
      <DxcDateInput
        label="Disabled"
        placeholder="Placeholder"
        disabled
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcDateInput,
  useState,
};

export default { code, scope };

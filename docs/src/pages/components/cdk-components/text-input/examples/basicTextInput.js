import { DxcTextInput } from "@dxc-technology/halstack-react";
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
      <DxcTextInput
        label="Default"
        placeholder="Placeholder"
        margin="medium"
      />
      <DxcTextInput
        label="Error"
        placeholder="Placeholder"
        error="Error message"
        margin="medium"
      />
      <DxcTextInput
        label="Disabled"
        placeholder="Placeholder"
        disabled
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcTextInput,
  useState,
};

export default { code, scope };

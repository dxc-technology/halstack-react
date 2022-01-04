import { DxcSelect } from "@dxc-technology/halstack-react";
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
      <DxcSelect
        label="Default"
        placeholder="Choose an option"
        options={options}
        margin="medium"
      />
      <DxcSelect
        label="Error"
        placeholder="Choose an option"
        options={options}
        error="Error message"
        margin="medium"
      />
      <DxcSelect
        label="Disabled"
        placeholder="Choose an option"
        options={options}
        disabled
        margin="medium"
      />
    </div>
  );
}`;

const scope = {
  DxcSelect,
  useState,
};

export default { code, scope };

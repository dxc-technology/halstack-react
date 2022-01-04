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
    <DxcSelect
      label="Label"
      placeholder="Choose options"
      options={options}
      multiple
      margin="medium"
    />
  );
}`;

const scope = {
  DxcSelect,
  useState,
};

export default { code, scope };

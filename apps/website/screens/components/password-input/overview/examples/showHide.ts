import { DxcInset, DxcPasswordInput, DxcButton } from "@dxc-technology/halstack-react";
import { useState, useRef } from "react";

const code = `() => {
  const [value, setValue] = useState("J.Smith1961");
  const onChange = ({ value }) => {
    setValue(value);
  };

  return (
    <DxcInset space="2rem">
      <DxcPasswordInput
        label="Password"
        helperText="Enter your personal password"
        onChange={onChange}
        value={value}
      />
    </DxcInset>
  );
}`;

const scope = {
  useState,
  useRef,
  DxcPasswordInput,
  DxcButton,
  DxcInset,
};

export default { code, scope };

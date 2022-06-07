import { DxcNumberInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");

  const onChange = ({ value }) => {
    setValue(value);
  };
  const onBlur = ({ value }) => {
    setValue(value);
  };

  return (
    <DxcInset space="large">
      <DxcNumberInput
        label="Controlled"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcNumberInput,
  DxcInset,
  useState,
};

export default { code, scope };

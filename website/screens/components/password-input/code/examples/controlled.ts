import { DxcInset, DxcPasswordInput } from "@dxc-technology/halstack-react";
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
      <DxcPasswordInput
        value={value}
        label="Controlled"
        onChange={onChange}
        onBlur={onBlur}
      />
    </DxcInset>
  );
}`;

const scope = {
  useState,
  DxcPasswordInput,
  DxcInset,
};

export default { code, scope };

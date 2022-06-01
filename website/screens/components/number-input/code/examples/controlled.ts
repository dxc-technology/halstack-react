import {
  DxcNumberInput,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";
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
        label="Default"
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
  DxcStack,
  useState,
};

export default { code, scope };

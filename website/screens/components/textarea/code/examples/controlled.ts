import {
  DxcTextarea,
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
      <DxcTextarea
        label="Description"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        size="fillParent"
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcTextarea,
  DxcInset,
  DxcStack,
  useState,
};

export default { code, scope };

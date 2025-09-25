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
    <DxcInset space="var(--spacing-padding-xl)">
      <DxcPasswordInput
        label="Password"
        value={value}
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

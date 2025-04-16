import { DxcDateInput, DxcInset } from "@dxc-technology/halstack-react";
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
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcDateInput
        label="Start date"
        helperText="Please enter the start date."
        placeholder
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        clearable
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcDateInput,
  DxcInset,
  useState,
};

export default { code, scope };

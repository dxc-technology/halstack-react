import { DxcNumberInput, DxcInset } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const onChange = ({ value, error }) => {
    setValue(value);
    setErrorMessage(error == undefined ? "" : "Error onChange");
  };
  const onBlur = ({ value, error }) => {
    setValue(value);
    setErrorMessage(error == undefined ? "" : "Error onBlur");
  };

  return (
    <DxcInset space="var(--spacing-gap-xl)">
      <DxcNumberInput
        label="Enter your age"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={errorMessage}
        min={5}
        max={20}
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

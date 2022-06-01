import {
  DxcNumberInput,
  DxcButton,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const onChange = ({ value, error }) => {
    setValue(value);
    setErrorMessage(error);
  };

  return (
    <DxcInset space="large">
      <DxcStack gutter="large">
        <DxcNumberInput
          label="Custom range error"
          value={value}
          onChange={onChange}
          error={errorMessage == undefined ? "" : "Invalid number."}
          min={5}
          max={20}
        />
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcNumberInput,
  DxcButton,
  DxcInset,
  DxcStack,
  useState,
};

export default { code, scope };

import { DxcTextarea, DxcInset } from "@repo/ui";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [customPatternError, setCustomPatternError] = useState();
  const onChange = ({ value, error }) => {
    setValue(value);
    setCustomPatternError(
      error == undefined
        ? ""
        : "Error onChange: value does not comply the allowed format"
    );
  };
  const onBlur = ({ value, error }) => {
    setValue(value);
    setCustomPatternError(
      error == undefined
        ? ""
        : "Error onBlur: value does not comply the allowed format"
    );
  };

  return (
    <DxcInset space="2rem">
      <DxcTextarea
        label="Comments"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        pattern='^.*(?=.*[a-zA-Z])(?=.*)(?=.*[!&$%&? "]).*$'
        error={customPatternError}
      />
    </DxcInset>
  );
}`;

const scope = {
  DxcTextarea,
  DxcInset,
  useState,
};

export default { code, scope };

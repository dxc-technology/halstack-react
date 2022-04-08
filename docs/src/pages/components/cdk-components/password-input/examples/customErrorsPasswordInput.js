import { DxcPasswordInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [firstValue, setFirstValue] = useState("");
  const [customLengthError, setCustomLengthError] = useState("");
  const onChangeFirst = ({ value, error }) => {
    setFirstValue(value);
    setCustomLengthError(error);
  };

  const [secondValue, setSecondValue] = useState("");
  const [customPatternError, setCustomPatternError] = useState("");
  const onChangeSecond = ({ value }) => {
    setSecondValue(value);
  };
  const onBlur = ({ value, error }) => {
    setSecondValue(value);
    setCustomPatternError(error);
  };

  return (
    <div style={{ display: "flex" }}>
      <DxcPasswordInput
        label="Custom length error"
        helperText="Using onChange event for handling errors"
        value={firstValue}
        onChange={onChangeFirst}
        minLength={5}
        maxLength={10}
        error={customLengthError == undefined ? "" : "The password does not have the right length."}
        margin="medium"
        clearable
      />
      <DxcPasswordInput
        label="Custom pattern error"
        helperText="Using onBlur event for handling errors"
        value={secondValue}
        onChange={onChangeSecond}
        onBlur={onBlur}
        pattern='^.*(?=.*[a-zA-Z])(?=.*)(?=.*[!&$%&? "]).*$'
        error={customPatternError == undefined ? "" : "The password does not comply the allowed format."}
        margin="medium"
        clearable
      />
    </div>
  );
}`;

const scope = {
  DxcPasswordInput,
  useState,
};

export default { code, scope };

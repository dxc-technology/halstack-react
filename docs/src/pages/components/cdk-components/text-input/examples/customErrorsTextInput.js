import { DxcTextInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [firstValue, setFirstValue] = useState("");
  const [customLengthError, setCustomLengthError] = useState();
  const onChangeFirst = ({ value, error }) => {
    setFirstValue(value);
    setCustomLengthError(error);
  };

  const [secondValue, setSecondValue] = useState("");
  const [customPatternError, setCustomPatternError] = useState();
  const onChangeSecond = ({ value }) => {
    setSecondValue(value);
  };
  const onBlur = ({ value, error }) => {
    setSecondValue(value);
    setCustomPatternError(error);
  };

  return (
    <div style={{ display: "flex" }}>
      <DxcTextInput
        label="Custom length error"
        helperText="Using onChange event for handling errors"
        value={firstValue}
        onChange={onChangeFirst}
        minLength={5}
        maxLength={10}
        error={customLengthError == undefined ? "" : "The text input value does not have the right length."}
        margin="medium"
        clearable
        optional
      />
      <DxcTextInput
        label="Custom pattern error"
        helperText="Using onBlur event for handling errors"
        value={secondValue}
        onChange={onChangeSecond}
        onBlur={onBlur}
        pattern='^.*(?=.*[a-zA-Z])(?=.*)(?=.*[!&$%&? "]).*$'
        error={customPatternError == undefined ? "" : "The text input value does not comply the allowed format."}
        margin="medium"
        clearable
        optional
      />
    </div>
  );
}`;

const scope = {
  DxcTextInput,
  useState,
};

export default { code, scope };

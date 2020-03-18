import { DxcDate } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [inputValue, changeInput] = useState("1995/12/03");
  const [isInvalid, changeIsInvalid] = useState(false);

  const onChange = newValue => {
    changeInput(newValue);
    if (!newValue.dateValue) {
      changeIsInvalid(!isInvalid);
    }
  };

  return (
    <DxcDate
      label="Input label"
      value={inputValue}
      margin="medium"
      assistiveText="assistive text"
      onInputChange={onChange}
      invalid={isInvalid}
    />
  );
}`;

const scope = {
  DxcDate,
  useState
};

export default { code, scope };

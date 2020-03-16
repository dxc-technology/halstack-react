import { DxcDate } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState("01/01/2001");
  const [isValid, changeIsValid] = useState(false);

  const onChange = newValue => {
    changeValue(newValue);
    if (!newValue.dateValue) {
      changeIsValid(true);
    }
  };

  return (
    <DxcDate
      label="Date of birth"
      format="dd-MM-yyyy"
      value={value}
      margin="medium"
      onInputChange={onChange}
    />
  );
}`;
const scope = {
  DxcDate,
  useState
};

export default { code, scope };

import { DxcDate } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState("01/01/2001");
  const onChange = ({ stringValue, dateValue }) => {
    changeValue(stringValue);
  };

  return (
    <DxcDate
    label="Input label"
    value={value}
    assistiveText="assistive text"
    onChange={onChange}
    margin="xxsmall"
    size="medium"
    placeholder
    format="MM-dd-yyyy"
  />

  );
}`;
const scope = {
  DxcDate,
  useState
};

export default { code, scope };

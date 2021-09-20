import { DxcNumber } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onChange = (value) => {
    console.log(value);
  };

  const onBlur = ({ value }) => {
    console.log(value);
  };

  return (
    <DxcNumber
      label="Number"
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNumber,
  useState,
};

export default { code, scope };

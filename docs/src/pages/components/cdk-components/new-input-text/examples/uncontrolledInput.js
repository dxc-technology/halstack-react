import { DxcNewInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onChange = (info) => {
    console.log(info.value);
  };

  const onBlur = (info) => {
    console.log(info.value);
  };

  return (
    <DxcNewInputText
     label="Uncontrolled"
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
      clearable
    />
  );
}`;

const scope = {
  DxcNewInputText,
  useState,
};

export default { code, scope };

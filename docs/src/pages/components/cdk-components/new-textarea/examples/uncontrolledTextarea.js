import { DxcNewTextarea } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <DxcNewTextarea
      label="Uncontrolled"
      onChange={onChange}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewTextarea,
  useState,
};

export default { code, scope };
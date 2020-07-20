import { DxcTextarea } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };

  return (
    <DxcTextarea
      label="Textarea label"
      assistiveText={"assistive text"}
      onChange={onChange}
      size="fillParent"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcTextarea,
  useState,
};

export default { code, scope };

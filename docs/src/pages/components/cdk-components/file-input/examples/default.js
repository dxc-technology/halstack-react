import { DxcFileInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcFileInput
      label="File Input"
      helperText="Please select files"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcFileInput,
  useState,
};

export default { code, scope };

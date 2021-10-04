import { DxcNewTextarea } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcNewTextarea
      label="Vertical grow"
      helperText="'none'"
      verticalGrow="none"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewTextarea,
  useState,
};

export default { code, scope };

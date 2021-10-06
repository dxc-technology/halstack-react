import { DxcNewTextarea } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcNewTextarea
      label="Invalid"
      error="Error message."
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewTextarea,
  useState,
};

export default { code, scope };

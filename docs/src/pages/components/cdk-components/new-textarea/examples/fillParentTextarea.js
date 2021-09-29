import { DxcNewTextarea } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <DxcNewTextarea
      label="Fill parent"
      size="fillParent"
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewTextarea,
  useState,
};

export default { code, scope };

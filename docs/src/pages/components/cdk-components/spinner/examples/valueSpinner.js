import { DxcSpinner } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return <DxcSpinner margin="medium" showValue value={50} label="Loading..." />;
}`;

const scope = {
  DxcSpinner,
  useState
};

export default { code, scope };

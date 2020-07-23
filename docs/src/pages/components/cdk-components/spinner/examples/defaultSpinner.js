import { DxcSpinner } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return <DxcSpinner margin="medium" label="Loading..." />;
}`;

const scope = {
  DxcSpinner,
  useState
};

export default { code, scope };

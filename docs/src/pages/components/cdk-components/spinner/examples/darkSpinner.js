import { DxcSpinner } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <div style={{ background: "#000000"}}>
      <DxcSpinner theme="dark" margin="medium" label="Loading..." />
    </div>
  );
}`;

const scope = {
  DxcSpinner,
  useState
};

export default { code, scope };

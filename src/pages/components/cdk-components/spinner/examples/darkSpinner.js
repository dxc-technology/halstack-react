import { DxcSpinner } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  return (
    <div
      style={{ background: "#000000", display: "inline-flex", width: "100%" }}
    >
      <DxcSpinner theme="dark" label="Loading..." />;
    </div>
  );
}`;

const scope = {
  DxcSpinner,
  useState
};

export default { code, scope };

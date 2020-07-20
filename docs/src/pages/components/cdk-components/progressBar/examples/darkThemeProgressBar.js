import { DxcProgressBar } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  return (
    <div style={{ background: "#000000" }}>
      <DxcProgressBar margin="medium" label="Loading" theme="dark" overlay={false} />
    </div>
  );
}`;

const scope = {
  DxcProgressBar,
  useState
};

export default { code, scope };

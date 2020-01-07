import { DxcProgressBar } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  return (
    <div>
      <DxcProgressBar margin="medium" label="Loading" overlay={false} showValue value={45} />
    </div>
  );
}`;

const scope = {
  DxcProgressBar,
  useState
};

export default { code, scope };

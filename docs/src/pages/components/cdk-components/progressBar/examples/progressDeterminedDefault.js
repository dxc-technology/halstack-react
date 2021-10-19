import { DxcProgressBar } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  return (
    <div>
      <DxcProgressBar margin="medium" label="Loading" helperText="Helper text" overlay={false} showValue value={45} />
    </div>
  );
}`;

const scope = {
  DxcProgressBar,
  useState,
};

export default { code, scope };

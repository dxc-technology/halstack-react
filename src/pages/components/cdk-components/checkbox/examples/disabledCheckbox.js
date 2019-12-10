import { DxcCheckbox } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
    return (
      <DxcCheckbox
      label="Checkbox"
      disabled={true}
      />
    );
  }`;

const scope = {
  DxcCheckbox,
  useState
};

export default { code, scope };

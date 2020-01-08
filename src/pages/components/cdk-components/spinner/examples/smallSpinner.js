import { DxcSpinner } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  return <DxcSpinner margin="medium" mode="small" />;
}`;

const scope = {
  DxcSpinner,
  useState
};

export default { code, scope };

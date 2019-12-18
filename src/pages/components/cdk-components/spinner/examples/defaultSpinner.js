import { DxcSpinner } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  return <DxcSpinner label="Loading..."/>;
}`;

const scope = {
  DxcSpinner,
  useState
};

export default { code, scope };

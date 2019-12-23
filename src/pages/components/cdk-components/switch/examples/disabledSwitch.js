import { DxcSwitch } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  return <DxcSwitch label="Switch" disabled={true} />;
}`;

const scope = {
  DxcSwitch,
  useState
};

export default { code, scope };

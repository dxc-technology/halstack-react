import { DxcInput } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  return <DxcInput label="Input label" assistiveText={"assistive text"}/>;
}`;

const scope = {
  DxcInput,
  useState
};

export default { code, scope };

import { DxcCard } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  return (
    <DxcCard mode="alternative">
      <h1>Content</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipiscing elit, cras potenti.
      </p>
    </DxcCard>
  );
}`;

const scope = {
  DxcCard,
  useState
};

export default { code, scope };

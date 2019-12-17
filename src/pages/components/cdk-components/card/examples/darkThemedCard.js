import { DxcCard } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  return (
    <div style={{ display: "flex", background: "#000000" }}>
      <DxcCard theme="dark">
        <h1>Default Card</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipiscing elit, cras potenti.
        </p>
      </DxcCard>
      <DxcCard mode="alternative" theme="dark">
        <h1>Alternative Card</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipiscing elit, cras potenti.
        </p>
      </DxcCard>
    </div>
  );
}`;

const scope = {
  DxcCard,
  useState
};

export default { code, scope };

import { DxcCard } from "@diaas/dxc-react-cdk";
import { useState } from "react";
import lighthousePath from "./images/pwa-lighthouse.png";

const code = `() => {
  return (
    <DxcCard imageSrc={lighthousePath}>
      <h1>Content</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipiscing elit, cras potenti.
      </p>
    </DxcCard>
  );
}`;

const scope = {
  DxcCard,
  useState,
  lighthousePath
};

export default { code, scope };

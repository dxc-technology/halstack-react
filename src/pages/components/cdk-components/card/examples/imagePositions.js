import { DxcCard } from "@diaas/dxc-react-cdk";
import { useState } from "react";
import lighthousePath from "./images/pwa-lighthouse.png";
import verticalImgPath from "./images/kevin-mueller.jpg";

const code = `() => {
  return (
    <div style={{ display: "flex" }}>
      <DxcCard imageSrc={lighthousePath} imagePosition="above">
        <h1>Content</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipiscing elit, cras potenti.
        </p>
      </DxcCard>
      <DxcCard imageSrc={verticalImgPath} imagePosition="after">
        <h1>Content</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipiscing elit, cras potenti.
        </p>
      </DxcCard>
    </div>
  );
}`;

const scope = {
  DxcCard,
  useState,
  lighthousePath,
  verticalImgPath
};

export default { code, scope };

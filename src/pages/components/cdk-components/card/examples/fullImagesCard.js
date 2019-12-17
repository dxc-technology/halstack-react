import { DxcCard } from "@diaas/dxc-react-cdk";
import { useState } from "react";
import horizontalImgPath from "./images/dylan-ferreira.jpg";
import verticalImgPath from "./images/kevin-mueller.jpg";

const code = `() => {
  return (
    <div style={{ display: "flex" }}>
      <DxcCard imageSrc={horizontalImgPath}>
      </DxcCard>
      <DxcCard imageSrc={verticalImgPath}>
      </DxcCard>
    </div>
  );
}`;

const scope = {
  DxcCard,
  useState,
  horizontalImgPath,
  verticalImgPath
};

export default { code, scope };
import { DxcCard } from "@diaas/dxc-react-cdk";
import { useState } from "react";
import iceCreamImagePath from "./images/ice-cream.jpg";

const code = `() => {
  return (
    <div>
    <DxcCard imageSrc={iceCreamImagePath} imageCover={true} margin="small">
      Lorem Ipsum
    </DxcCard>
    <DxcCard theme="medium" imageSrc={iceCreamImagePath} imageCover={true} margin="small">
      Lorem Ipsum
    </DxcCard>
    <DxcCard theme="dark" imageSrc={iceCreamImagePath} imageCover={true} margin="small">
      Lorem Ipsum
    </DxcCard>
  </div>
  );
}`;

const scope = {
  DxcCard,
  iceCreamImagePath,
  useState
};

export default { code, scope };

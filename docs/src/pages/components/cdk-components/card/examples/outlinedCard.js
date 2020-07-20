import { DxcCard } from "@diaas/dxc-react-cdk";
import { useState } from "react";
import iceCreamImagePath from "./images/ice-cream.jpg";

const code = `() => {
  return (
    <DxcCard outlined={true} imageSrc={iceCreamImagePath} imageCover={true} margin="small">
      Lorem Ipsum
    </DxcCard>
  );
}`;

const scope = {
  DxcCard,
  iceCreamImagePath,
  useState
};

export default { code, scope };

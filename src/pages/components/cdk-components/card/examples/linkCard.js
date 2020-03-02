import { DxcCard } from "@diaas/dxc-react-cdk";
import { useState } from "react";
import iceCreamImagePath from "./images/ice-cream.jpg";

const code = `() => {
  return (
    <DxcCard 
      linkHref="https://www.dxc.com"
      imageSrc={iceCreamImagePath} 
      imageCover={true} 
      margin="small"
    >
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

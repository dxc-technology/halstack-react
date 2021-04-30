import { DxcCard } from "@dxc-technology/halstack-react";
import { useState } from "react";
import iceCreamImagePath from "./images/ice-cream.jpg";

const code = `() => {
  return (
    <DxcCard 
      linkHref="https://www.dxc.com"
      imageSrc={iceCreamImagePath} 
      imageCover={true} 
      margin="small"
      contentPadding="xsmall"
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

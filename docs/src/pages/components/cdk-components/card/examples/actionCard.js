import { DxcCard } from "@dxc-technology/halstack-react";
import { useState } from "react";
import iceCreamImagePath from "./images/ice-cream.jpg";

const code = `() => {
  return (
    <DxcCard 
      onClick={() => {
        console.log("click");
      }}
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

import React from "react";
import { DxcBox } from "@diaas/dxc-react-cdk";

function App() {
  return (
    <div>
      <DxcBox margin="medium" padding="medium" shadowDepth={1} display="block" size ="medium">
        Hola que tal
      </DxcBox>
      <DxcBox margin="medium" padding="medium" shadowDepth={1} display="block" size ="large">
        Hola que tal
      </DxcBox>
      <DxcBox margin="medium" padding="medium" shadowDepth={1} display="block" size ="small">
        Hola que tal
      </DxcBox>
      <div style={{width: "250px"}}>
        <DxcBox margin="medium" padding="medium" shadowDepth={1} display="block" size ="fillParent">
          Hola que tal
        </DxcBox>
      </div>
    </div>
  );
}

export default App;

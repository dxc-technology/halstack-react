import React from "react";
import { useState } from "react";
import { DxcSidenav, DxcHeader } from "@diaas/dxc-react-cdk";

function App() {
  return (
    <div>
      <DxcSidenav
        padding="xlarge"
        mode="push"
        navContent={<div>Ejemplo de sidenav</div>}
        pageContent={
          <div>
            <p>This is the content in the main area</p>
          </div>
        }
        arrowDistance="20px"
      ></DxcSidenav>
    </div>
  );
}

export default App;

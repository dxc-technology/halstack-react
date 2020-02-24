import React from "react";
import { useState } from "react";
import { DxcSidenav, DxcHeader } from "@diaas/dxc-react-cdk";

function App() {
  return (
    <div>
      <DxcSidenav padding="xlarge" mode="push">
        <div>
          <h3>Example header</h3> <p>Line 1</p> <p>Line 2</p> <p>Line 3</p>
        </div>
      </DxcSidenav>
      <div>
        <p>This is the content in the main area</p>
      </div>
    </div>
  );
}

export default App;

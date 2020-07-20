import React from "react";
import { DxcUpload } from "@diaas/dxc-react-cdk";

function App() {
  async function callbackFunc() {
    const result = await new Promise((resolve) => setTimeout(resolve, 1000));
    return result;
  }

  return <DxcUpload margin="small" callbackUpload={callbackFunc} />;
}

export default App;

import React from "react";
import { DxcUpload } from "@dxc-technology/halstack-react";

function App() {
  async function callbackFunc() {
    const result = await new Promise((resolve) => setTimeout(resolve, 1000));
    return result;
  }

  return <DxcUpload margin="small" callbackUpload={callbackFunc} />;
}

export default App;

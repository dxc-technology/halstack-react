import React from "react";
import { V3DxcUpload } from "@dxc-technology/halstack-react";

function App() {
  async function callbackFunc() {
    const result = await new Promise((resolve) => setTimeout(resolve, 1000));
    return result;
  }

  return <V3DxcUpload margin="small" callbackUpload={callbackFunc} />;
}

export default App;

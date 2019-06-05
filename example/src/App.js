import React from "react";

import { DxcButton } from "@diaas/dxc-react-cdk";

function App() {
  const handleOnClick = event => {
    console.log("Button clicked");
  };

  return (
    <div>
      <DxcButton
        label="Basic"
        mode="basic"
        disabled={false}
        theme="light"
        disableRipple={false}
        iconPosition="after"
        iconSrc="/images/run_icon.png"
        onClick={handleOnClick}
      />
    </div>
  );
}

export default App;

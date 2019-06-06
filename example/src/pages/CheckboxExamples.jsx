import React from "react";

import { DxcButton } from "@diaas/dxc-react-cdk";

function CheckBoxExamples() {
  const handleOnClick = event => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>Checkbox Component</h1>
      <h2>Basic Example</h2>
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

export default CheckBoxExamples;

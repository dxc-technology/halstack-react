import React from "react";

import styled from "styled-components";

import { DxcButton } from "@diaas/dxc-react-cdk";

function ButtonExamples() {
  const handleOnClick = event => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>Button Component</h1>
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

export default ButtonExamples;

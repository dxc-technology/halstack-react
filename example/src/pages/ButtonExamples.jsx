import React from "react";

import styled from "styled-components";

import { DxcButton } from "@diaas/dxc-react-cdk";

function ButtonExamples() {
  const handleOnClick = event => {
    console.log("Button clicked");
  };

  return (
    <div>
    <div>
      <h1>Button Component</h1>
      <h2>Basic Example - Light Theme</h2>
      <DxcButton
        label="Basic"
        mode="basic"
        disabled={false}
        theme="light"
        disableRipple={false}
        iconPosition="before"
        iconSrc="/images/thumbs-up.svg"
        onClick={handleOnClick}
      />
      <DxcButton
        label="Outlined"
        mode="outlined"
        disabled={false}
        theme="light"
        disableRipple={false}
        iconPosition="before"
        iconSrc="/images/run_icon.png"
        onClick={handleOnClick}
      />
      <DxcButton
        label="Flat"
        mode="flat"
        disabled={false}
        theme="light"
        disableRipple={false}
        iconPosition="before"
        iconSrc="/images/run_icon.png"
        onClick={handleOnClick}
      />
      <DxcButton
        label="Raised"
        mode="raised"
        disabled={false}
        theme="light"
        disableRipple={false}
        iconPosition="before"
        iconSrc="/images/run_icon.png"
        onClick={handleOnClick}
      />
    </div>
    <DarkDiv>
      <h1>Button Component</h1>
      <h2>Basic Example - Dark Theme</h2>
      <DxcButton
        label="Basic"
        mode="basic"
        disabled={false}
        theme="dark"
        disableRipple={true}
        iconPosition="after"
        iconSrc="/images/run_icon.png"
        onClick={handleOnClick}
      />
      <DxcButton
        label="Outlined"
        mode="outlined"
        disabled={false}
        theme="dark"
        disableRipple={false}
        iconPosition="after"
        iconSrc="/images/run_icon.png"
        onClick={handleOnClick}
      />
      <DxcButton
        label="Flat"
        mode="flat"
        disabled={false}
        theme="dark"
        disableRipple={false}
        iconPosition="after"
        iconSrc="/images/run_icon.png"
        onClick={handleOnClick}
      />
      <DxcButton
        label="Raised"
        mode="raised"
        disabled={false}
        theme="dark"
        disableRipple={false}
        iconPosition="after"
        iconSrc="/images/run_icon.png"
        onClick={handleOnClick}
      />
    </DarkDiv>
    </div>
  );
}
const DarkDiv = styled.div`
  background-color: black;
`;

export default ButtonExamples;

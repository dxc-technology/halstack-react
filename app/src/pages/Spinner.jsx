import React, { useState } from "react";
import { DxcSpinner, DxcButton } from "@diaas/dxc-react-cdk";

function App() {
  const [isVisible, changeIsVisible] = useState(false);
  const handleVisibility = () => {
    changeIsVisible(!isVisible);
  };
  return (
    <div>
      <h3>Light theme</h3>
      <div
        style={{
          display: "flex",
          width: "1440px",
          height: "204px",
          justifyContent: "space-around"
        }}
      >
        <div
          style={{
            display: "flex",
            width: "1440px",
            height: "170px",
            justifyContent: "space-around"
          }}
        >
          <DxcSpinner margin="xxlarge" theme="light" />
          <DxcSpinner margin="xxlarge" theme="light" label="Loading..." />
          <DxcSpinner margin="xxlarge" theme="light" showValue value={12} />
          <DxcSpinner margin="xxlarge" theme="light" label="Loading..." showValue value={34} />
          <div
            style={{
            }}
          >
            <DxcSpinner margin="xxlarge" theme="light" mode="small" />
          </div>
        </div>
      </div>
      <h3>Dark theme</h3>
      <div
        style={{
          display: "flex",
          backgroundColor: "black",
          width: "1440px",
          height: "204px",
          justifyContent: "space-around"
        }}
      >
        <div
          style={{
            marginTop: "34px",
            display: "flex",
            backgroundColor: "black",
            width: "1440px",
            height: "170px",
            justifyContent: "space-around"
          }}
        >
          <DxcSpinner theme="dark" label="" />
          <DxcSpinner theme="dark" label="Loading..." />
          <DxcSpinner theme="dark" showValue value={32} />
          <DxcSpinner theme="dark" label="Loading..." showValue value={34} />
          <div
            style={{
              marginTop: "46px"
            }}
          >
            <DxcSpinner theme="dark" mode="small" />
          </div>
        </div>
      </div>
      <h3>Overlay</h3>
      <div>
        <DxcButton
          mode="basic"
          theme="light"
          label="Overlay Spinner"
          onClick={handleVisibility}
        />
        {isVisible && (
          <div onClick={handleVisibility}>
            <DxcSpinner theme="light" label="Loading..." mode="overlay" />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

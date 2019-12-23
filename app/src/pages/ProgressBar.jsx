import React, { useState } from "react";
import { DxcProgressBar, DxcButton } from "@diaas/dxc-react-cdk";

function App() {
  const [isVisible, changeIsVisible] = useState(false);
  const handleVisibility = () => {
    changeIsVisible(!isVisible);
  };
  return (
    <div>
      <div>
        <h3>Determined and undetermined progress bar</h3>
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "15px"
              }}
            >
              <DxcProgressBar
                label="Loading..."
                theme="light"
                overlay={false}
                showValue
                value={0}
              />
              <DxcProgressBar
                label="Loading..."
                theme="light"
                overlay={false}
                showValue
                value={15}
              />
              <DxcProgressBar
                label="Loading..."
                theme="light"
                overlay={false}
                showValue
                value={52}
              />
              <DxcProgressBar
                label="Loading..."
                theme="light"
                overlay={false}
                showValue
                value={80}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "15px"
              }}
            >
              <DxcProgressBar
                label="Loading..."
                theme="light"
                overlay={false}
                value={0}
              />
              <DxcProgressBar
                label="Loading..."
                theme="light"
                overlay={false}
                value={15}
              />
              <DxcProgressBar
                label="Loading..."
                theme="light"
                overlay={false}
                value={52}
              />
              <DxcProgressBar
                label="Loading..."
                theme="light"
                overlay={false}
                value={80}
              />
            </div>
          </div>
        </div>
      </div>
      <h3>Dark</h3>
      <div
        style={{ display: "flex", flexDirection: "row", background: "black" }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", margin: "15px" }}
        >
          <DxcProgressBar
            label="Loading..."
            theme="dark"
            overlay={false}
            showValue
            value={0}
          />
          <DxcProgressBar
            label="Loading..."
            theme="dark"
            overlay={false}
            showValue
            value={15}
          />
          <DxcProgressBar
            label="Loading..."
            theme="dark"
            overlay={false}
            showValue
            value={52}
          />
          <DxcProgressBar
            label="Loading..."
            theme="dark"
            overlay={false}
            showValue
            value={80}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", margin: "15px" }}
        >
          <DxcProgressBar
            label="Loading..."
            theme="dark"
            overlay={false}
            value={0}
          />
          <DxcProgressBar
            label="Loading..."
            theme="dark"
            overlay={false}
            value={15}
          />
          <DxcProgressBar
            label="Loading..."
            theme="dark"
            overlay={false}
            value={52}
          />
          <DxcProgressBar
            label="Loading..."
            theme="dark"
            overlay={false}
            value={80}
          />
        </div>
      </div>
      <div>
        <h3>Simplified</h3>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "15px" }}
          >
            <DxcProgressBar theme="light" overlay={false} />
            <DxcProgressBar theme="light" overlay={false} />
            <DxcProgressBar theme="light" overlay={false} />
            <DxcProgressBar theme="light" overlay={false} />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", margin: "15px" }}
          >
            <DxcProgressBar theme="light" overlay={false} showValue value={0} />
            <DxcProgressBar
              theme="light"
              overlay={false}
              showValue
              value={20}
            />
            <DxcProgressBar
              theme="light"
              overlay={false}
              showValue
              value={30}
            />
            <DxcProgressBar
              theme="light"
              overlay={false}
              showValue
              value={50}
            />
          </div>
        </div>
      </div>
      <div>
        <h3>Overlay</h3>
        <div>
          <DxcButton
            mode="basic"
            theme="light"
            label="Overlay Progress Bar"
            onClick={handleVisibility}
          />
          {isVisible && (
            <div
              onClick={handleVisibility}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1000
              }}
            >
              <DxcProgressBar
                theme="light"
                label="Loading..."
                overlay
                showValue
                value={33}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { DxcButton } from "@diaas/dxc-react-cdk";

function App() {
  const onClick = () => {};

  return (
    <div>
      <h3>Light</h3>
      <div>
        <DxcButton
          mode="basic"
          theme="light"
          label="Basic Button"
          margin="medium"
          onClick={onClick}
          size="medium"
        />
        <DxcButton
          mode="raised"
          theme="light"
          label="Raised Button"
          margin={{ right: "medium", bottom: "medium" }}
          onClick={onClick}
          size="medium"
        />
        <DxcButton
          mode="flat"
          theme="light"
          label="Flat Button"
          margin={{ right: "medium", bottom: "medium" }}
          onClick={onClick}
          size="medium"
        />
        <DxcButton
          mode="outlined"
          theme="light"
          label="Outlined Button"
          margin={{ right: "medium", bottom: "medium" }}
          onClick={onClick}
          size="large"
        />
      </div>
      <div>
        <DxcButton
          disabled
          mode="basic"
          theme="light"
          label="Basic Button"
          margin="medium"
          onClick={onClick}
          size="medium"
        />
        <DxcButton
          disabled
          mode="raised"
          theme="light"
          label="Raised Button"
          margin={{ right: "medium", bottom: "medium" }}
          onClick={onClick}
          size="medium"
        />
        <DxcButton
          disabled
          mode="flat"
          theme="light"
          label="Flat Button"
          margin={{ right: "medium", bottom: "medium" }}
          onClick={onClick}
          size="medium"
        />
        <DxcButton
          disabled
          mode="outlined"
          theme="light"
          label="Outlined Button"
          margin={{ right: "medium", bottom: "medium" }}
          onClick={onClick}
          size="large"
        />
      </div>
      <h3>Dark</h3>
      <div style={{ background: "black" }}>
        <div>
          <DxcButton
            mode="basic"
            theme="dark"
            label="Basic Button"
            margin="medium"
            onClick={onClick}
            size="medium"
          />
          <DxcButton
            mode="raised"
            theme="dark"
            label="Raised Button"
            margin={{ right: "medium", bottom: "medium" }}
            onClick={onClick}
            size="medium"
          />
          <DxcButton
            mode="flat"
            theme="dark"
            label="Flat Button"
            margin={{ right: "medium", bottom: "medium" }}
            onClick={onClick}
            size="medium"
          />
          <DxcButton
            mode="outlined"
            theme="dark"
            label="Outlined Button"
            margin={{ right: "medium", bottom: "medium" }}
            onClick={onClick}
            size="large"
          />
        </div>
        <div>
          <DxcButton
            disabled
            mode="basic"
            theme="dark"
            label="Basic Button"
            margin="medium"
            onClick={onClick}
            size="fitContent"
          />
          <DxcButton
            disabled
            mode="raised"
            theme="dark"
            label="Raised Button"
            margin={{ right: "medium", bottom: "medium" }}
            onClick={onClick}
            size="fitContent"
          />
          <DxcButton
            disabled
            mode="flat"
            theme="dark"
            label="Flat Button"
            margin={{ right: "medium", bottom: "medium" }}
            onClick={onClick}
            size="medium"
          />
          <DxcButton
            disabled
            mode="outlined"
            theme="dark"
            label="Outlined Button"
            margin={{ right: "medium", bottom: "medium" }}
            onClick={onClick}
            size="large"
          />
        </div>
      </div>
      <div style={{width: "300px"}}>
        <DxcButton
          mode="basic"
          label="Fill Parent Button"
          margin={{
            right: "medium",
            bottom: "medium",
            top: "large",
            left: "medium"
          }}
          onClick={onClick}
          size="fillParent"
        />
      </div>
    </div>
  );
}

export default App;

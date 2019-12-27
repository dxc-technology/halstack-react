import React, { useState } from "react";
import { DxcSwitch } from "@diaas/dxc-react-cdk";

function App() {
  const [checked, changeChecked] = useState(false);
  const onChange = newValue => {
    changeChecked(newValue);
  };
  return (
    <div>
      <div
        style={{ width: "100%", display: "inline-flex", alignItems: "center" }}
      >
        <DxcSwitch
          margin="medium"
          checked={checked}
          labelPosition="after"
          label="Controlled"
          onChange={onChange}
        />
        <DxcSwitch margin="medium" label="Uncontrolled" />
      </div>

      <div
        style={{
          width: "100%",
          display: "inline-flex",
          alignItems: "center",
          background: "#000000"
        }}
      >
        <DxcSwitch
          theme="dark"
          checked={checked}
          label="Controlled"
          margin="medium"
        />
        <DxcSwitch theme="dark" label="Uncontrolled" margin="medium" />
      </div>
    </div>
  );
}

export default App;

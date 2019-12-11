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
        <DxcSwitch checked={checked} labelPosition="after" label="Controlled" onChange={onChange} />
        <DxcSwitch label="Uncontrolled" />
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
        />
        <DxcSwitch theme="dark" label="Uncontrolled" />
      </div>
    </div>
  );
}

export default App;

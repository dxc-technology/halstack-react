import React, { useState } from "react";
import { DxcCheckbox } from "@diaas/dxc-react-cdk";

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
        <DxcCheckbox checked={checked} label="Controlled" onChange={onChange} />
        <DxcCheckbox label="Uncontrolled" />
      </div>

      <div
        style={{
          width: "100%",
          display: "inline-flex",
          alignItems: "center",
          background: "#666666"
        }}
      >
        <DxcCheckbox
          theme="dark"
          checked={checked}
          label="Controlled"
          onChange={onChange}
        />
        <DxcCheckbox theme="dark" label="Uncontrolled" />
      </div>
    </div>
  );
}

export default App;

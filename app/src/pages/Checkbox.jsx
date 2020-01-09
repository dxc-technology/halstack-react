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
        <DxcCheckbox
          checked={checked}
          label="checkbox"
          onChange={onChange}
          margin="medium"
          size="small"
        />
        <DxcCheckbox margin="medium" label="checkbox" size="small"/>
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
          margin="medium"
          theme="dark"
          checked={checked}
          label="checkbox"
          onChange={onChange}
          size="small"
        />
        <DxcCheckbox margin="medium" theme="dark" label="checkbox" size="small"/>
      </div>

      <div
        style={{ width: "250px", display: "inline-flex", alignItems: "center" }}
      >
        <DxcCheckbox
          checked={checked}
          label="checkbox"
          onChange={onChange}
          margin={{left: "medium"}}
          size="fillParent"
          labelPosition="after"
        />
      </div>
    </div>
  );
}

export default App;

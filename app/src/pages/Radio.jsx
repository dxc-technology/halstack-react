import React, { useState } from "react";
import { DxcRadio } from "@diaas/dxc-react-cdk";

function App() {
  const [checked, changeChecked] = useState(false);
  const [checked1, changeCheckedOption1] = useState(true);
  const [checked2, changeCheckedOption2] = useState(false);
  const [checked3, changeCheckedOption3] = useState(false);

  const onClick = newValue => {
    changeChecked(newValue);
  };
  const onClickUncontrolled = newValue => {
    console.log("Uncontrolled Checked");
  };

  const onSelect = selectFunction => {
    changeCheckedOption1(false);
    changeCheckedOption2(false);
    changeCheckedOption3(false);
    selectFunction(true);
  };

  return (
    <div>
      <div
        style={{ width: "100%", display: "inline-flex", alignItems: "center" }}
      >
        <DxcRadio
          margin="medium"
          checked={checked}
          label="Controlled"
          onClick={onClick}
        />
        <DxcRadio
          margin="medium"
          label="Uncontrolled"
          onClick={onClickUncontrolled}
        />
        <DxcRadio margin="medium" label="Disabled Radio" disabled={true} />
        <DxcRadio
          margin="medium"
          label="Required Radio"
          checked={checked}
          required={true}
          onClick={onClick}
        />
        <DxcRadio
          margin="medium"
          label="Label before"
          checked={checked}
          labelPosition="before"
          onClick={onClick}
        />
      </div>
      <div>
        <h4>Radio Group</h4>
        <DxcRadio
          margin="medium"
          checked={checked1}
          label="Option1"
          onClick={() => {
            onSelect(changeCheckedOption1);
          }}
        />
        <DxcRadio
          margin="medium"
          checked={checked2}
          label="Option2"
          onClick={() => {
            onSelect(changeCheckedOption2);
          }}
        />
        <DxcRadio
          margin="medium"
          checked={checked3}
          label="Option3"
          onClick={() => {
            onSelect(changeCheckedOption3);
          }}
        />
      </div>
      <h3>Dark</h3>
      <div style={{ background: "black" }}>
        <DxcRadio
          margin="medium"
          checked={checked}
          theme="dark"
          label="Controlled"
          onClick={onClick}
        />
        <DxcRadio
          margin="medium"
          label="Uncontrolled"
          theme="dark"
          onClick={onClickUncontrolled}
        />
        <DxcRadio
          margin="medium"
          label="Disabled Radio"
          theme="dark"
          disabled={true}
        />
        <DxcRadio
          margin="medium"
          label="Required Radio"
          checked={checked}
          required={true}
          theme="dark"
          onClick={onClick}
        />
        <DxcRadio
          margin="medium"
          label="Label before"
          checked={checked}
          labelPosition="before"
          theme="dark"
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default App;

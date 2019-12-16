import React, { useState } from "react";
import { DxcRadio } from "@diaas/dxc-react-cdk";

function App() {
  const [checked, changeChecked] = useState(false);
  const [checked1, changeCheckedOption1] = useState(true);
  const [checked2, changeCheckedOption2] = useState(false);
  const [checked3, changeCheckedOption3] = useState(false);

  const onChange = newValue => {
    changeChecked(newValue);
  };
  const onChangeUncontrolled = newValue => {
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
        <DxcRadio checked={checked} label="Controlled" onChange={onChange} />
        <DxcRadio label="Uncontrolled" onChange={onChangeUncontrolled} />
        <DxcRadio label="Disabled Radio" disabled={true} />
        <DxcRadio
          label="Required Radio"
          checked={checked}
          required={true}
          onChange={onChange}
        />
        <DxcRadio
          label="Label before"
          checked={checked}
          labelPosition="before"
          onChange={onChange}
        />
      </div>
      <div>
        <h4>Radio Group</h4>
        <DxcRadio
          checked={checked1}
          label="Option1"
          onChange={() => {
            onSelect(changeCheckedOption1);
          }}
        />
        <DxcRadio
          checked={checked2}
          label="Option2"
          onChange={() => {
            onSelect(changeCheckedOption2);
          }}
        />
        <DxcRadio
          checked={checked3}
          label="Option3"
          onChange={() => {
            onSelect(changeCheckedOption3);
          }}
        />
      </div>
      <h3>Dark</h3>
      <div style={{ background: "black" }}>
        <DxcRadio checked={checked} theme="dark" label="Controlled" onChange={onChange} />
        <DxcRadio label="Uncontrolled" theme="dark" onChange={onChangeUncontrolled} />
        <DxcRadio label="Disabled Radio"theme="dark" disabled={true} />
        <DxcRadio
          label="Required Radio"
          checked={checked}
          required={true}
          theme="dark"
          onChange={onChange}
        />
        <DxcRadio
          label="Label before"
          checked={checked}
          labelPosition="before"
          theme="dark"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default App;

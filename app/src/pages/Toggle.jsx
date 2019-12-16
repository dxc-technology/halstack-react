import React from "react";
import { DxcToggle } from "@diaas/dxc-react-cdk";
import { useState } from "react";
import facebookPath from "../images/facebook.svg";

function App() {
  const [selected, changeSelected] = useState(true);
  const [selected2, changeSelected2] = useState(false);
  const [selected3, changeSelected3] = useState(true);
  const [selected4, changeSelected4] = useState(true);

  const onClick = newValue => {
    changeSelected(newValue);
  };
  const onClick3 = newValue => {
    changeSelected3(newValue);
  };
  const onClick4 = newValue => {
    changeSelected4(newValue);
  };

  return (
    <div>
      <DxcToggle
        label="Default toggle"
        selected={selected}
        onClick={onClick}
      ></DxcToggle>
      <DxcToggle
        label="Disabled toggle"
        selected={selected2}
        disabled={true}
        onClick={onClick}
      ></DxcToggle>
      <DxcToggle
        iconSrc={facebookPath}
        selected={selected3}
        onClick={onClick3}
      ></DxcToggle>
      <DxcToggle
        label="Outlined toggle"
        selected={selected4}
        mode="outlined"
        onClick={onClick4}
      ></DxcToggle>
    </div>
  );
}

export default App;

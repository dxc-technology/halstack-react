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
      <div>
        <h4>Light theme</h4>
        <div>
          <DxcToggle
            label="Toggle"
            selected={selected}
            onClick={onClick}
          ></DxcToggle>
        </div>
      </div>

      <div>
        <h4>Dark theme</h4>
        <div style={{ background: "#000000" }}>
          <DxcToggle
            label="Toggle"
            selected={selected}
            theme="dark"
            onClick={onClick}
          ></DxcToggle>
        </div>
      </div>
    </div>
    // <div>
    //   <DxcToggle
    //     label="Default toggle"
    //     selected={selected}
    //     onClick={onClick}
    //     margin="medium"
    //     size="large"
    //   ></DxcToggle>
    //   <DxcToggle
    //     label="Disabled toggle"
    //     selected={selected2}
    //     disabled={true}
    //     onClick={onClick}
    //     margin="medium"
    //     size="medium"
    //   ></DxcToggle>
    //   <DxcToggle
    //     iconSrc={facebookPath}
    //     selected={selected3}
    //     onClick={onClick3}
    //     margin="medium"
    //     size="small"
    //   ></DxcToggle>
    //   <div style={{width: "200px"}}>
    //     <DxcToggle
    //       label="Outlined toggle"
    //       selected={selected4}
    //       mode="outlined"
    //       onClick={onClick4}
    //       margin="medium"
    //     ></DxcToggle>
    //   </div>
    // </div>
  );
}

export default App;

import React from "react";
import { DxcHeader, DxcDropdown, DxcSwitch } from "@diaas/dxc-react-cdk";

function App() {
  const selectOption = option => {
    console.log(option);
  };

  const onClick = () => {};

  const optionsWithoutIcon = [
    {
      value: 1,
      label: "Amazon"
    },
    {
      value: 2,
      label: "Ebay"
    },
    {
      value: 3,
      label: "Apple"
    }
  ];
  return (
    <div style={{ background: "lightgrey" }}>
      <div>
        <div style={{ marginBottom: "20px" }}>
          <DxcHeader theme="light" underlined={false} onClick={onClick}>
            <DxcDropdown
              theme={"light"}
              onSelectOption={selectOption}
              label={"Dropdown"}
              options={optionsWithoutIcon}
            />
          </DxcHeader>
        </div>
        <div>
          <DxcHeader theme="light" underlined={true} onClick={onClick}>
            <DxcDropdown
              theme={"light"}
              onSelectOption={selectOption}
              label={"Dropdown"}
              options={optionsWithoutIcon}
              mode="outlined"
            />
          </DxcHeader>
        </div>
      </div>
      <div style={{ paddingTop: "20px", height: "200px" }}>
        <div>
          <DxcHeader theme="dark" underlined={false}>
            <DxcDropdown
              theme={"dark"}
              onSelectOption={selectOption}
              label={"Dropdown"}
              options={optionsWithoutIcon}
              mode="basic"
            />
          </DxcHeader>
        </div>
        <div style={{ marginTop: "20px" }}>
          <DxcHeader theme="dark" underlined={true}>
            <DxcDropdown
              theme={"dark"}
              onSelectOption={selectOption}
              label={"Dropdown"}
              options={optionsWithoutIcon}
              mode="outlined"
            />
          </DxcHeader>
        </div>
      </div>
    </div>
  );
}

export default App;

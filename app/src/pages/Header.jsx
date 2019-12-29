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
        <div>
          <DxcHeader margin="large" padding={{left:"large", right:"xlarge"}} theme="light" underlined={false} onClick={onClick}>
            <DxcDropdown
              theme={"light"}
              onSelectOption={selectOption}
              label={"Dropdown"}
              options={optionsWithoutIcon}
            />
          </DxcHeader>
        </div>
        <div>
          <DxcHeader margin="large" padding={{left:"large", right:"xlarge"}} theme="light" underlined={true} onClick={onClick}>
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
      <div style={{ height: "200px" }}>
        <div>
          <DxcHeader margin="large" padding={{left:"large", right:"xlarge"}} theme="dark" underlined={false}>
            <DxcDropdown
              theme={"dark"}
              onSelectOption={selectOption}
              label={"Dropdown"}
              options={optionsWithoutIcon}
              mode="basic"
            />
          </DxcHeader>
        </div>
        <div>
          <DxcHeader margin="large" padding={{left:"large", right:"xlarge"}} theme="dark" underlined={true}>
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

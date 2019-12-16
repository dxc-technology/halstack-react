import React, { useState } from "react";
import { DxcSelect } from "@diaas/dxc-react-cdk";

function App() {
  const [inputValue, changeInput] = useState(1);
  const onChange = newValue => {
    changeInput(newValue);
  };

  const [inputMultipleValue, changeMultipleInput] = useState([1, 2]);
  const onChangeMultiple = newValue => {
    changeMultipleInput(newValue);
  };

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
    },
    {
      value: 4,
      label: "Google"
    }
  ];
  return (
    <div>
      <DxcSelect
        onChange={onChange}
        value={inputValue}
        label={"Controlled Select"}
        options={optionsWithoutIcon}
      ></DxcSelect>

      <DxcSelect
        onChange={onChangeMultiple}
        value={inputMultipleValue}
        label={"Controlled Select"}
        options={optionsWithoutIcon}
        multiple={true}
      ></DxcSelect>
    </div>
  );
}

export default App;

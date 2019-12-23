import React, { useState } from "react";
import { DxcSelect } from "@diaas/dxc-react-cdk";
import homePath from "../images/home.svg";

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

  const optionsWithIcon = [
    {
      value: 1,
      iconSrc: homePath
    },
    {
      value: 2,
      iconSrc: homePath
    },
    {
      value: 3,
      iconSrc: homePath
    }
  ];

  const optionsWithIconAndLabels = [
    {
      value: 1,
      iconSrc: homePath,
      label: "Home"
    },
    {
      value: 2,
      iconSrc: homePath,
      label: "House"
    },
    {
      value: 3,
      iconSrc: homePath,
      label: "Habitat"
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

      <DxcSelect
        label={"Controlled Select"}
        options={optionsWithIcon}
        multiple={true}
      ></DxcSelect>

      <DxcSelect
        label={"Controlled Select"}
        options={optionsWithIconAndLabels}
        multiple={true}
        iconPosition={"before"}
      ></DxcSelect>
    </div>
  );
}

export default App;

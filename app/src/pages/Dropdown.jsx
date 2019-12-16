import React from "react";
import { DxcDropdown } from "@diaas/dxc-react-cdk";
import facebookPath from "../images/facebook.svg";
import linkedinPath from "../images/linkedin.svg";
import twitterPath from "../images/twitter.svg";

function App() {
  const selectOption = () => {
    console.log("selected");
  };

  const optionsWithoutIcon = [
    {
      value: 1,
      label: "Facebook"
    },
    {
      value: 2,
      label: "Twitter"
    },
    {
      value: 3,
      label: "Linkedin"
    }
  ];
  const optionsWithIcon = [
    {
      value: 1,
      label: "Facebook",
      iconSrc: facebookPath
    },
    {
      value: 2,
      label: "Linkedin",
      iconSrc: linkedinPath
    },
    {
      value: 3,
      label: "Twitter",
      iconSrc: twitterPath
    }
  ];

  return (
    <div>
      <div style={{ height: "200px", display: "flex", flexWrap: "wrap" }}>
        <DxcDropdown
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          label="Basic dropdown"
        ></DxcDropdown>
        <DxcDropdown
          options={optionsWithIcon}
          onSelectOption={selectOption}
          label="Basic dropdown"
        ></DxcDropdown>
        <DxcDropdown
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          label="Outlined dropdown"
          mode={"outlined"}
        ></DxcDropdown>
      </div>
      <div
        style={{
          background: "black",
          display: "flex",
          height: "250px",
          flexWrap: "wrap"
        }}
      >
        <DxcDropdown
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          label="Basic dropdown"
          theme="dark"
        ></DxcDropdown>
        <DxcDropdown
          options={optionsWithIcon}
          onSelectOption={selectOption}
          label="Basic dropdown"
          theme="dark"
        ></DxcDropdown>
        <DxcDropdown
          options={optionsWithoutIcon}
          onSelectOption={selectOption}
          label="Outlined dropdown"
          mode={"outlined"}
          theme="dark"
        ></DxcDropdown>
      </div>
    </div>
  );
}

export default App;

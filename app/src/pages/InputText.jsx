import React, { useState } from "react";
import { DxcInput } from "@diaas/dxc-react-cdk";
import iconSrcPath from "../images/home.svg";

function App() {
  const [inputValue, changeInput] = useState("");
  const onChange = newValue => {
    changeInput(newValue);
  };
  const onSuffixClick = () => {
    changeInput("suffix Clicked");
  };

  const onPrefixClick = () => {
    changeInput("prefix Clicked");
  };

  return (
    <div>
      <div>
        <DxcInput
          prefix={"pr"}
          assistiveText={"assistive text"}
          label={"label"}
          suffix={"suf"}
          onChange={onChange}
          value={inputValue}
          required={true}
          onClickSuffix={onSuffixClick}
          onClickPrefix={onPrefixClick}
        ></DxcInput>
        <DxcInput
          prefix={"pr"}
          assistiveText={"assistive text"}
          label={"label"}
          suffix={"suf"}
        ></DxcInput>
      </div>
      <div>
        <DxcInput
          assistiveText={"assistive text"}
          label={"label"}
          suffix={"suf"}
          onChange={onChange}
          required={true}
          value={inputValue}
          onClickSuffix={onSuffixClick}
          onClickPrefix={onPrefixClick}
        ></DxcInput>
        <DxcInput
          assistiveText={"assistive text"}
          label={"label"}
          onChange={onChange}
          value={inputValue}
          suffixIconSrc={iconSrcPath}
          prefixIconSrc={iconSrcPath}
          onClickSuffix={onSuffixClick}
          onClickPrefix={onPrefixClick}
        ></DxcInput>
      </div>
    </div>
  );
}

export default App;

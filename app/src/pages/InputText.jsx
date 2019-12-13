import React, { useState } from "react";
import { DxcInput } from "@diaas/dxc-react-cdk";
import iconSrcPath from "./house24px.svg";

function App() {
  const [inputValue, changeInput] = useState("");
  const onChange = newValue => {
    changeInput(newValue);
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
        ></DxcInput>
        <DxcInput
          assistiveText={"assistive text"}
          label={"label"}
          onChange={onChange}
          value={inputValue}
          suffixIconSrc={iconSrcPath}
          prefixIconSrc={iconSrcPath}
        ></DxcInput>
      </div>
    </div>
  );
}

export default App;

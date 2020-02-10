import React, { useState } from "react";
import { DxcDate } from "@diaas/dxc-react-cdk";

function App() {
  const [inputValue, changeInput] = useState(new Date("1995/12/03"));
  const onChange = (newValue, event) => {
    console.log('String-> ' + event);
    changeInput(newValue);
  };
  const test = value => {
      changeInput(inputValue);
  };
  return (
    <div>
      <div>
        <DxcDate margin="medium" format="dd-mm-yy" label="Date of birth" onInputChange={onChange} ></DxcDate>
        <DxcDate margin="medium" label="Date of birth" value={inputValue} onInputChange={test}></DxcDate>
      </div>
      <div>
        <DxcDate margin="medium" label="Date of birth" value={inputValue} onInputChange={onChange}></DxcDate>
        <DxcDate margin="medium" label="Date of birth"></DxcDate>
      </div>
    </div>
  );
}

export default App;

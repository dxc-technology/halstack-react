import React, { useState } from "react";
import { DxcDate } from "@diaas/dxc-react-cdk";

function App() {
  const [inputValue, changeInput] = useState(new Date("1995/12/03"));
  const onChange = newValue => {
    changeInput(newValue);
  };
  const test = value => {
      changeInput(inputValue);
  };
  return (
    <div>
      <div>
        <DxcDate margin="medium" value={inputValue} onChange={onChange}></DxcDate>
        <DxcDate margin="medium" value={inputValue} onChange={test}></DxcDate>
      </div>
      <div>
        <DxcDate margin="medium" value={inputValue} onChange={onChange}></DxcDate>
        <DxcDate margin="medium"></DxcDate>
      </div>
    </div>
  );
}

export default App;

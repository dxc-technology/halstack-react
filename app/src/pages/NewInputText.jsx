import React, { useState } from "react";
import { DxcNewInputText } from "@dxc-technology/halstack-react";

function App() {
  const [value, setValue] = useState("Sample text");
  const onChange = (newValue) => {
    setValue(newValue);
  };
  const action = {
    onClick: () => {
      console.log("Warning dude!");
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 24 24"
        fill="#FFD806"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
      </svg>
    ),
  };

  return (
    <>
      <p>
        <DxcNewInputText value={value} onChange={onChange} margin="medium" />
      </p>
      <p>
        <DxcNewInputText
          value={value}
          onChange={onChange}
          margin="medium"
          clearable
        />
      </p>
      <p>
        <DxcNewInputText
          label="Example label"
          optional
          prefix="+34"
          suffix="USD"
          helperText="Help please"
          placeholder="Placeholder"
          margin="medium"
          value={value}
          onChange={onChange}
        />
      </p>
      <p>
        <DxcNewInputText
          label="Example label"
          optional
          prefix="+34"
          helperText="Help please"
          placeholder="Placeholder"
          margin="medium"
          action={action}
        />
      </p>
    </>
  );
}

export default App;

import React, { useState } from "react";
import { DxcNewSelect } from "@dxc-technology/halstack-react";
import styled from "styled-components";

function App() {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onBlur = ({ value, error }) => {
    setValue(value);
    error ? setErrorMessage("Custom error.") : setErrorMessage(null);
    console.log("blur!")
  };
  const onChange = (value) => {
    setValue(value);
    console.log(value);
  };

  const single_options = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
  ];

  return (
    <>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Default</h4>
        <DxcNewSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          placeholder="Choose an option"
          margin="medium"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Controlled</h4>
        <DxcNewSelect
          label="Label"
          value={value}
          helperText="Helper text"
          options={single_options}
          placeholder="Choose an option"
          onBlur={onBlur}
          onChange={onChange}
          error={errorMessage}
          searchable
          margin="medium"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Default</h4>
        <DxcNewSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          placeholder="Choose an option"
          searchable
          margin="medium"
        />
      </p>
    </>
  );
}

const DarkMode = ({ children }) => {
  return (
    <ModeContainer>
      <PreviewsContainer>{children}</PreviewsContainer>
    </ModeContainer>
  );
};

const ModeContainer = styled.div`
  background-color: #000000;
  display: flex;
  flex-flow: row wrap;
`;

const PreviewsContainer = styled.div`
  flex: 100%;
`;

export default App;

import React, { useState } from "react";
import {
  DxcNewDate,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";
import styled from "styled-components";

function App() {
  const [value, setValue] = useState("01-01-1995");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = ({ string, inputError, date }) => {
    setValue(string);
    inputError ? setErrorMessage("Input error") : setErrorMessage(null);
  };

  const onBlur = ({ string, error, date }) => {
    setValue(string);
    error ? setErrorMessage("Fecha inválida.") : setErrorMessage(null);
  };

  return (
    <>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Default</h4>
        <DxcNewDate margin={{ left: "medium", right: "medium" }} />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Sizes</h4>
        <DxcNewDate
          label="Medium"
          margin={{ left: "medium", right: "medium" }}
          clearable
        />
        <DxcNewDate
          label="Large"
          margin={{ left: "medium", right: "medium" }}
          size="large"
          clearable
        />
        <DxcNewDate
          label="Fill parent"
          margin={{ left: "medium", right: "medium" }}
          size="fillParent"
          clearable
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Margins</h4>
        <DxcNewDate margin="xxsmall" />
        <DxcNewDate margin="xsmall" />
        <DxcNewDate margin="small" />
        <DxcNewDate margin="medium" />
        <DxcNewDate margin="large" />
        <DxcNewDate margin="xlarge" />
        <DxcNewDate margin="xxlarge" />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Controlled</h4>
        <DxcNewDate
          value={value}
          onChange={onChange}
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewDate
          label="With label + placerholder"
          placeholder
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewDate
          label="With helper text"
          helperText="Some sample text"
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewDate
          label="Disabled"
          disabled
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewDate
          label="Optional"
          optional
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Formats</h4>
        <DxcNewDate
          label="With format dd/MM/yy"
          margin={{ left: "medium", right: "medium" }}
          format="dd/MM/yy"
        />
        <DxcNewDate
          label="With format MM/dd/yyyy"
          margin={{ left: "medium", right: "medium" }}
          format="MM/dd/yyyy"
        />
        <DxcNewDate
          label="With format MM-dd-yyyy"
          margin={{ left: "medium", right: "medium" }}
          format="MM-dd-yyyy"
        />
      </p>
      <p>
        <DxcNewDate
          label="With onBlur event"
          onBlur={onBlur}
          error={errorMessage}
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <DxcNewDate
          label="With error"
          error="An error was catched"
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <BackgroundColorProvider color="#000000">
        <DarkMode>
          <DxcNewDate
            label="Dark date input"
            helperText="Some sample text"
            margin={{
              left: "medium",
              bottom: "small",
              top: "small",
              right: "medium",
            }}
          />
        </DarkMode>
      </BackgroundColorProvider>
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

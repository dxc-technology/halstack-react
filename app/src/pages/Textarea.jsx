import React, { useRef, useState } from "react";
import {
  DxcTextarea,
  DxcButton,
} from "@dxc-technology/halstack-react";
import styled from "styled-components";

function App() {
  const ref = useRef(null);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const onChange = ({ value }) => {
    setValue(value);
  };
  const onBlur = ({ value, error }) => {
    setValue(value);
    error ? setError(error) : setError(null);
  };

  const [customValue, setCustomValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const onChangeCustom = ({ value }) => {
    setCustomValue(value);
  };
  const onBlurCustom = ({ value, error }) => {
    setCustomValue(value);
    error ? setErrorMessage("Custom length error.") : setErrorMessage(null);
  };

  const [customPatternValue, setCustomPatternValue] = useState("");
  const [customPatternError, setCustomPatternError] = useState("");
  const onChangeCustomPattern = ({ value, error }) => {
    setCustomPatternValue(value);
    error
      ? setCustomPatternError("Custom pattern error.")
      : setCustomPatternError(null);
  };

  const [disabledInput, setDisabledInput] = useState(false);

  return (
    <>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Sizes</h4>
        <DxcTextarea
          label="Small"
          margin={{ left: "medium", right: "medium" }}
          size="small"
        />
        <DxcTextarea
          label="Medium"
          margin={{ left: "medium", right: "medium" }}
        />
        <DxcTextarea
          label="Large"
          margin={{ left: "medium", right: "medium" }}
          size="large"
        />
        <DxcTextarea
          label="Fill parent"
          margin={{ left: "medium", right: "medium" }}
          size="fillParent"
        />
      </div>
      <div>
        <DxcTextarea
          label="Default"
          helperText="Sample text"
          placeholder="Enter your text here..."
          optional
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <DxcTextarea
        label="With 'on' autocomplete"
        margin={{ left: "medium", right: "medium" }}
        autocomplete="on"
      />
      <div>
        <DxcTextarea
          label="Disabled"
          helperText="Sample text"
          placeholder="Enter your text here..."
          disabled
          verticalGrow="manual"
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcTextarea
          label="Controlled"
          helperText="Sample text"
          placeholder="Enter your text here..."
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcTextarea
          label="Pattern"
          helperText="The value should have at least one letter, one number and one special
          character"
          placeholder="Enter your text here..."
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcTextarea
          label="Length"
          helperText="The value should be 5 < value < 10"
          placeholder="Enter your text here..."
          minLength={5}
          maxLength={10}
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcTextarea
          label="Custom length error"
          helperText="The value should be 5 < value < 10"
          placeholder="Enter your text here..."
          value={customValue}
          error={errorMessage}
          onChange={onChangeCustom}
          onBlur={onBlurCustom}
          minLength={5}
          maxLength={10}
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcTextarea
          label="Custom pattern error"
          helperText="The value should have at least one letter, one number and one special
          character"
          placeholder="Enter your text here..."
          value={customPatternValue}
          error={customPatternError}
          onChange={onChangeCustomPattern}
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcTextarea
          label="Vertical grow 'none'"
          placeholder="Enter your text here..."
          verticalGrow="none"
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcTextarea
          label="Vertical grow 'manual'"
          placeholder="Enter your text here..."
          verticalGrow="manual"
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcTextarea
          label="Vertical grow 'auto' with long initial value"
          helperText="Initially should also be changed"
          placeholder="Enter your text here..."
          value="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcTextarea
          label="With rows"
          placeholder="Enter your text here..."
          rows={10}
          verticalGrow="manual"
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcTextarea
          label="Error"
          placeholder="Enter your text here..."
          error="Custom and very long error."
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcTextarea
          label="Ref"
          placeholder="Enter your text here..."
          margin={{ left: "medium", right: "medium" }}
          ref={ref}
          disabled={disabledInput}
        />
        <DxcButton
          onClick={() => {
            setDisabledInput((disabled) => !disabled);
          }}
          label="Change disable"
          margin={{ left: "medium" }}
        ></DxcButton>
      </div>
    </>
  );
}

const Mode = ({ mode, children }) => {
  return (
    <ModeContainer mode={mode}>
      <PreviewsContainer>{children}</PreviewsContainer>
    </ModeContainer>
  );
};

const ModeContainer = styled.div`
  background-color: ${(props) =>
    props.mode === "dark" ? "#000000" : "transparent"};

  display: flex;
  flex-flow: row wrap;
`;

const PreviewsContainer = styled.div`
  flex: 100%;
`;

export default App;

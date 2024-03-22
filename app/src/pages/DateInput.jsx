import React, { useRef, useState } from "react";
import { DxcDateInput, DxcButton } from "@dxc-technology/halstack-react";

function App() {
  const ref = useRef(null);
  const [inputValue, setInputValue] = useState("01-01-1995");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = ({ value, error, date }) => {
    setInputValue(value);
    console.log(error);
    console.log(date);
  };

  const onBlur = ({ value, error, date }) => {
    setInputValue(value);
    error ? setErrorMessage(error) : setErrorMessage(null);
    console.log(date);
  };

  return (
    <>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Default</h4>
        <DxcDateInput margin={{ left: "medium", right: "medium" }} />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Sizes</h4>
        <DxcDateInput
          label="Medium"
          margin={{ left: "medium", right: "medium" }}
        />
        <DxcDateInput
          label="Large"
          margin={{ left: "medium", right: "medium" }}
          size="large"
        />
        <DxcDateInput
          label="Fill parent"
          margin={{ left: "medium", right: "medium" }}
          size="fillParent"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Margins</h4>
        <DxcDateInput margin="xxsmall" />
        <DxcDateInput margin="xsmall" />
        <DxcDateInput margin="small" />
        <DxcDateInput margin="medium" />
        <DxcDateInput margin="large" />
        <DxcDateInput margin="xlarge" />
        <DxcDateInput margin="xxlarge" />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Controlled</h4>
        <DxcDateInput
          value={inputValue}
          onChange={onChange}
          onBlur={onBlur}
          error={errorMessage}
          margin={{ left: "medium", right: "medium" }}
          clearable
        />
      </div>
      <div>
        <DxcDateInput
          label="With label + placerholder"
          placeholder
          margin={{ left: "medium", right: "medium" }}
          clearable
        />
      </div>
      <div>
        <DxcDateInput
          label="With helper text"
          helperText="Some sample text"
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcDateInput
          label="With 'on' autocomplete"
          autocomplete="on"
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcDateInput
          label="Disabled"
          disabled
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcDateInput
          label="Optional"
          optional
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Formats</h4>
        <DxcDateInput
          label="With new format"
          margin={{ left: "medium", right: "medium" }}
          format="dd/MM/yy"
          placeholder
        />
        <DxcDateInput
          label="With new format"
          margin={{ left: "medium", right: "medium" }}
          format="MM/dd/yyyy"
          placeholder
        />
        <DxcDateInput
          label="With new format"
          margin={{ left: "medium", right: "medium" }}
          format="MM-dd-yyyy"
          placeholder
        />
      </div>
      <div>
        <DxcDateInput
          label="With onBlur & onChange events"
          value={inputValue}
          onChange={onChange}
          onBlur={onBlur}
          error={errorMessage}
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcDateInput
          label="With error"
          error="An error was catched."
          margin={{ left: "medium", right: "medium" }}
        />
      </div>
      <div>
        <DxcDateInput
          label="With ref"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin={{ left: "medium", right: "medium" }}
          ref={ref}
        />
        <DxcButton
          onClick={() => {
            const date = ref.current.getElementsByTagName("button")[0];
            date.focus();
          }}
          label="Focus!"
          margin={{ left: "medium" }}
        ></DxcButton>
      </div>
    </>
  );
}

export default App;

import React, { useState, useRef } from "react";
import { DxcPasswordInput, DxcButton } from "@dxc-technology/halstack-react";

function App() {
  const ref = useRef(null);
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = ({ value, error }) => {
    setValue(value);
    console.log(error);
  };

  const onBlur = ({ value, error }) => {
    setValue(value);
    error ? setErrorMessage("Custom error.") : setErrorMessage(null);
  };

  return (
    <>
      <p>
        <DxcPasswordInput
          value={value}
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcPasswordInput
          value={value}
          label="Password input"
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcPasswordInput
          value={value}
          label="Non clearable password input"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcPasswordInput
          value={value}
          label="Help password input"
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          helperText="Help message"
        />
      </p>
      <p>
        <DxcPasswordInput
          label="With 'on' autocomplete"
          clearable
          autocomplete="on"
          margin="medium"
        />
      </p>
      <p>
        <DxcPasswordInput
          value={value}
          label="Error password input"
          error="Error message."
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcPasswordInput
          value={value}
          label="Large size password input"
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          size="large"
        />
      </p>
      <p>
        <DxcPasswordInput
          value={value}
          label="Fill parent password input"
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          size="fillParent"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With pattern (At least one letter, one number and one special
          character) - Strict
        </h4>
        <DxcPasswordInput
          value={value}
          clearable
          onChange={onChange}
          onBlur={onBlur}
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          margin={{ left: "medium", right: "medium" }}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With min length 5 and max length 10 - Strict
        </h4>
        <DxcPasswordInput
          value={value}
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          minLength={5}
          maxLength={10}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With pattern (At least one letter, one number and one special
          character) and minimum length 5 and maximum length 10 - Strict
        </h4>
        <DxcPasswordInput
          value={value}
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          minLength={5}
          maxLength={10}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With pattern (At least one letter, one number and one special
          character) - Non strict
        </h4>
        <DxcPasswordInput
          value={value}
          clearable
          onChange={onChange}
          onBlur={onBlur}
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          margin={{ left: "medium", right: "medium" }}
          error={errorMessage}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With min length 5 and max length 10 - Non strict
        </h4>
        <DxcPasswordInput
          value={value}
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          minLength={5}
          maxLength={10}
          error={errorMessage}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With pattern (At least one letter, one number and one special
          character) and minimum length 5 and maximum length 10 - Non strict
        </h4>
        <DxcPasswordInput
          value={value}
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          minLength={5}
          maxLength={10}
          error={errorMessage}
        />
      </p>
      <p>
        <DxcPasswordInput
          label="With ref"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin={{ left: "medium", right: "medium" }}
          ref={ref}
        />
        <DxcButton
          onClick={() => {
            const passwordInput = ref.current.getElementsByTagName("button")[0];
            passwordInput.focus();
          }}
          label="Focus!"
          margin={{ left: "medium" }}
        ></DxcButton>
      </p>
    </>
  );
}

export default App;

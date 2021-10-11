import React, { useState, useRef } from "react";
import { DxcPassword, DxcButton } from "@dxc-technology/halstack-react";

function App() {
  const ref = useRef(null);
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (value) => {
    setValue(value);
  };

  const onBlur = ({ value, error }) => {
    setValue(value);
    error ? setErrorMessage("Custom error.") : setErrorMessage(null);
  };

  return (
    <>
      <p>
        <DxcPassword
          value={value}
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcPassword
          value={value}
          label="Password"
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcPassword
          value={value}
          label="Non clearable password"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcPassword
          value={value}
          label="Help password"
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          helperText="Help message"
        />
      </p>
      <p>
        <DxcPassword
          value={value}
          label="Error password"
          error="Error message."
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcPassword
          value={value}
          label="Large size password"
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          size="large"
        />
      </p>
      <p>
        <DxcPassword
          value={value}
          label="Fill parent password"
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
        <DxcPassword
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
        <DxcPassword
          value={value}
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          length={{ min: 5, max: 10 }}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With pattern (At least one letter, one number and one special
          character) and minimum length 5 and maximum length 10 - Strict
        </h4>
        <DxcPassword
          value={value}
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          length={{ min: 5, max: 10 }}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With pattern (At least one letter, one number and one special
          character) - Non strict
        </h4>
        <DxcPassword
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
        <DxcPassword
          value={value}
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          length={{ min: 5, max: 10 }}
          error={errorMessage}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>
          With pattern (At least one letter, one number and one special
          character) and minimum length 5 and maximum length 10 - Non strict
        </h4>
        <DxcPassword
          value={value}
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin={{ left: "medium", right: "medium" }}
          pattern='^.*(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$'
          length={{ min: 5, max: 10 }}
          error={errorMessage}
        />
      </p>
      <p>
        <DxcPassword
          label="With ref"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin={{ left: "medium", right: "medium" }}
          ref={ref}
        />
        <DxcButton
          onClick={() => {
            const password = ref.current.getElementsByTagName("button")[0];
            password.focus();
          }}
          label="Focus!"
          margin={{ left: "medium" }}
        ></DxcButton>
      </p>
    </>
  );
}

export default App;

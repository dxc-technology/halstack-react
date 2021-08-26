import React, { useState } from "react";
import { DxcPassword } from "@dxc-technology/halstack-react";

function App() {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = (newValue, error) => {
    setValue(newValue);
    if (error && error !== "") {
      setErrorMessage("CHANGE error");
    } else {
      setErrorMessage(null);
    }
  };

  const onBlur = (newValue, error) => {
    setValue(newValue);
    if (error && error !== "") {
      setErrorMessage("BLUR error");
    }
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
          error="Error message"
          clearable
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
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
          length={{ min: "5", max: "10" }}
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
          length={{ min: "5", max: "10" }}
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
          strict={false}
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
          length={{ min: "5", max: "10" }}
          strict={false}
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
          length={{ min: "5", max: "10" }}
          strict={false}
          error={errorMessage}
        />
      </p>
    </>
  );
}

export default App;

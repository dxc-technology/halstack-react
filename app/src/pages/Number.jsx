import React, { useState } from "react";
import { DxcNumber } from "@dxc-technology/halstack-react";

function App() {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onChange = ({ value }) => {
    setValue(value);
  };

  const onBlur = ({ value, error }) => {
    setValue(value);
    error ? setErrorMessage("Custom error") : setErrorMessage(null);
  };

  return (
    <>
      <h4 style={{ "margin-left": "36px" }}>Controlled</h4>
      <p>
        <DxcNumber
          value={value}
          label="Number"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Number"
          helperText="Helper Text"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Number"
          placeholder="Placeholder"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Number"
          disabled
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Number"
          optional
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Prefix"
          prefix="+34"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Suffix"
          suffix="EUR"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Min 5"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          min={5}
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Max 10"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          max={10}
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Min 5, max 10"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          min={5}
          max={10}
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Step 5"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          step={5}
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Min 5, step 5"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          min={5}
          step={5}
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Max 20, step 5"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          max={20}
          step={5}
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Min 5, max 20, step 5"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          min={5}
          max={20}
          step={5}
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Invalid"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          error="Error message"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Custom error messages</h4>
        <DxcNumber
          value={value}
          label="Min 5, max 20, step 5"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          min={5}
          max={20}
          step={5}
          error={errorMessage}
        />
      </p>
      <p>
        <DxcNumber
          value={value}
          label="Fill parent size"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          size="fillParent"
        />
      </p>
      <h4 style={{ "margin-left": "36px" }}>Uncontrolled</h4>
      <p>
        <DxcNumber label="Number" margin="medium" />
      </p>
      <p>
        <DxcNumber label="Min 5" margin="medium" min={5} />
      </p>
      <p>
        <DxcNumber label="Max 10" margin="medium" max={10} />
      </p>
      <p>
        <DxcNumber label="Min 5, max 10" margin="medium" min={5} max={10} />
      </p>
      <p>
        <DxcNumber label="Step 5" margin="medium" step={5} />
      </p>
      <p>
        <DxcNumber label="Min 5, step 5" margin="medium" min={5} step={5} />
      </p>
      <p>
        <DxcNumber label="Max 20, step 5" margin="medium" max={20} step={5} />
      </p>
      <p>
        <DxcNumber
          label="Min 5, max 20, step 5"
          margin="medium"
          min={5}
          max={20}
          step={5}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Custom error messages</h4>
        <DxcNumber
          label="Min 5, max 20, step 5"
          margin="medium"
          min={5}
          max={20}
          step={5}
          error={errorMessage}
        />
      </p>
    </>
  );
}

export default App;

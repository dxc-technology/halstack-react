import React, { useRef, useState } from "react";
import { DxcNumberInput, DxcButton } from "@dxc-technology/halstack-react";

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
      <h4 style={{ "margin-left": "36px" }}>Controlled</h4>
      <p>
        <DxcNumberInput
          value={value}
          label="Number Input"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumberInput
          value={value}
          label="Number Input"
          helperText="Helper Text"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumberInput
          value={value}
          label="Number Input"
          placeholder="Placeholder"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumberInput
          value={value}
          label="Number Input"
          disabled
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumberInput
          value={value}
          label="Number Input"
          optional
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumberInput
          value={value}
          label="Prefix"
          prefix="+34"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumberInput
          value={value}
          label="Suffix"
          suffix="EUR"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
        />
      </p>
      <p>
        <DxcNumberInput
          value={value}
          label="Min 5"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          min={5}
        />
      </p>
      <p>
        <DxcNumberInput
          value={value}
          label="Max 10"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          max={10}
        />
      </p>
      <p>
        <DxcNumberInput
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
        <DxcNumberInput
          value={value}
          label="Step 5"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          step={5}
        />
      </p>
      <p>
        <DxcNumberInput
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
        <DxcNumberInput
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
        <DxcNumberInput
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
        <DxcNumberInput
          value={value}
          label="Invalid"
          onChange={onChange}
          onBlur={onBlur}
          margin="medium"
          error="Error message."
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Custom error messages</h4>
        <DxcNumberInput
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
        <DxcNumberInput
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
        <DxcNumberInput label="Number Input" margin="medium" />
      </p>
      <p>
        <DxcNumberInput label="Min 5" margin="medium" min={5} />
      </p>
      <p>
        <DxcNumberInput label="Max 10" margin="medium" max={10} />
      </p>
      <p>
        <DxcNumberInput
          label="Min 5, max 10"
          margin="medium"
          min={5}
          max={10}
        />
      </p>
      <p>
        <DxcNumberInput label="Step 5" margin="medium" step={5} />
      </p>
      <p>
        <DxcNumberInput
          label="Min 5, step 5"
          margin="medium"
          min={5}
          step={5}
        />
      </p>
      <p>
        <DxcNumberInput
          label="Max 20, step 5"
          margin="medium"
          max={20}
          step={5}
        />
      </p>
      <p>
        <DxcNumberInput
          label="Min 5, max 20, step 5"
          margin="medium"
          min={5}
          max={20}
          step={5}
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Custom error messages</h4>
        <DxcNumberInput
          label="Min 5, max 20, step 5"
          margin="medium"
          min={5}
          max={20}
          step={5}
          error={errorMessage}
        />
      </p>
      <p>
        <DxcNumberInput
          label="With 'on' autocomplete"
          placeholder="Placeholder"
          margin={{ left: "medium", right: "medium" }}
          autocomplete="on"
        />
      </p>
      <p>
        <DxcNumberInput
          label="With ref"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin={{ left: "medium", right: "medium" }}
          ref={ref}
        />
        <DxcButton
          onClick={() => {
            const number = ref.current.getElementsByTagName("button")[1];
            number.focus();
          }}
          label="Focus!"
          margin={{ left: "medium" }}
        ></DxcButton>
      </p>
    </>
  );
}

export default App;

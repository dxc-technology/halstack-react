import React, { useState } from "react";
import { DxcNewSelect } from "@dxc-technology/halstack-react";
import styled from "styled-components";

function App() {
  const [value, setValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorOptional, setErrorOptional] = useState("");
  const onBlur = ({ value, error }) => {
    setValue(value);
    error ? setErrorMessage(error) : setErrorMessage(null);
    console.log("blur!");
  };
  const onChange = ({ value, error }) => {
    setValue(value);
    console.log("change!");
  };

  const single_options = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    {
      label: "Option 00000000000000000000000000000000000000000000000000000",
      value: "4",
    },
  ];
  const grouped_options = [
    {
      label: "Group 1",
      options: [
        { label: "Option 01", value: "1" },
        { label: "Option 02", value: "2" },
        { label: "Option 03", value: "3" },
      ],
    },
    {
      label: "Group 2",
      options: [
        { label: "Option 04", value: "4" },
        { label: "Option 05", value: "5" },
        { label: "Option 06", value: "6" },
      ],
    },
  ];

  return (
    <>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Default (uncontrolled)</h4>
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
          margin="medium"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Searchable</h4>
        <DxcNewSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          placeholder="Choose an option"
          searchable
          margin="medium"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Grouped</h4>
        <DxcNewSelect
          label="Label"
          helperText="Helper text"
          options={grouped_options}
          placeholder="Choose an option"
          searchable
          margin="medium"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Disabled</h4>
        <DxcNewSelect
          label="Label"
          helperText="Helper text"
          value={"1"}
          options={single_options}
          placeholder="Choose an option"
          margin="medium"
          disabled
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Optional</h4>
        <DxcNewSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          error={errorOptional}
          onBlur={({ value, error }) => {
            error ? setErrorOptional(error) : setErrorOptional(null);
          }}
          placeholder="Choose an option"
          margin="medium"
          searchable
          optional
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Optional without placeholder</h4>
        <DxcNewSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          margin="medium"
          searchable
          optional
        />
      </p>
      {/* <p>
        <h4 style={{ "margin-left": "36px" }}>Error</h4>
        <DxcNewSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          placeholder="Choose an option"
          margin="medium"
          error="Error message"
        />
      </p> */}
      <p>
        <h4 style={{ "margin-left": "36px" }}>Sizes</h4>
        <DxcNewSelect
          label="Small"
          options={grouped_options}
          margin={{ left: "medium", right: "medium" }}
          size="small"
        />
        <DxcNewSelect
          label="Medium"
          options={grouped_options}
          margin={{ left: "medium", right: "medium" }}
          size="medium"
        />
        <DxcNewSelect
          label="Large"
          options={grouped_options}
          margin={{ left: "medium", right: "medium" }}
          size="large"
        />
        <DxcNewSelect
          label="Fill parent"
          options={grouped_options}
          margin={{ left: "medium", right: "medium" }}
          size="fillParent"
          searchable
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Empty options</h4>
        <DxcNewSelect
          label="Label"
          helperText="Helper text"
          options={[]}
          placeholder="Choose an option"
          margin="medium"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Empty grouped options</h4>
        <DxcNewSelect
          label="Label"
          helperText="Helper text"
          options={[
            {
              label: "Group 1",
              options: [],
            },
          ]}
          placeholder="Choose an option"
          margin="medium"
        />
      </p>
    </>
  );
}

export default App;

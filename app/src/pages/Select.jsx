import React, { useState } from "react";
import { DxcSelect } from "@dxc-technology/halstack-react";

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
        { label: "Option 001", value: "1" },
        { label: "Option 002", value: "2" },
        { label: "Option 003", value: "3" },
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
    {
      label: "Group 3",
      options: [
        { label: "Option 07", value: "7" },
        { label: "Option 08", value: "8" },
        { label: "Option 09", value: "9" },
      ],
    },
  ];

  const icon_options = [
    {
      label: "3G Mobile",
      value: "1",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <g>
            <path d="M0,0h24v24H0V0z" fill="none" />
          </g>
          <g>
            <g>
              <path d="M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z" />
            </g>
          </g>
        </svg>
      ),
    },
    {
      label: "Ethernet",
      value: "2",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" />
        </svg>
      ),
    },
    {
      label: "Wi-fi",
      value: "3",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
        </svg>
      ),
    },
    {
      label: "Settings backup restore (just for previous configuration)",
      value: "4",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Default (uncontrolled)</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          placeholder="Choose an option"
          margin="medium"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Controlled</h4>
        <DxcSelect
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
        <DxcSelect
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
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={grouped_options}
          placeholder="Choose an option"
          searchable
          margin="medium"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Icons</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={icon_options}
          placeholder="Choose an option"
          searchable
          margin="medium"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Disabled</h4>
        <DxcSelect
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
        <DxcSelect
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
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          margin="medium"
          searchable
          optional
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Error</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          placeholder="Choose an option"
          margin="medium"
          error="Error message"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Sizes</h4>
        <DxcSelect
          label="Small"
          options={grouped_options}
          margin={{ left: "medium", right: "medium" }}
          size="small"
        />
        <DxcSelect
          label="Medium"
          options={grouped_options}
          margin={{ left: "medium", right: "medium" }}
          size="medium"
        />
        <DxcSelect
          label="Large"
          options={grouped_options}
          margin={{ left: "medium", right: "medium" }}
          size="large"
        />
        <DxcSelect
          label="Fill parent"
          options={grouped_options}
          margin={{ left: "medium", right: "medium" }}
          size="fillParent"
          searchable
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Empty options</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={[]}
          placeholder="Choose an option"
          margin="medium"
        />
      </p>
      <p>
        <h4 style={{ "margin-left": "36px" }}>Empty grouped options</h4>
        <DxcSelect
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
      <p>
        <h4 style={{ "margin-left": "36px" }}>Undefined groups</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={[
            {
              label: "Group 1",
              options: undefined,
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

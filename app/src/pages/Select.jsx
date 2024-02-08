import React, { useState, useRef } from "react";
import { DxcSelect, DxcButton } from "@dxc-technology/halstack-react";

function App() {
  const ref = useRef(null);
  const [value, setValue] = useState("");
  const [valueMultiple, setValueMultiple] = useState([]);
  const [errorMultiple, setErrorMultiple] = useState("");
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
  const onChangeMultiple = ({ value, error }) => {
    setValueMultiple(value);
    setErrorMultiple(error);
  };

  const single_options = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
  ];
  const single_options_long = [
    { label: "Option 01", value: "1" },
    { label: "Option 02", value: "2" },
    { label: "Option 03", value: "3" },
    { label: "Option 04", value: "4" },
    { label: "Option 05", value: "5" },
    { label: "Option 06", value: "6" },
    { label: "Option 07", value: "7" },
    { label: "Option 08", value: "8" },
    { label: "Option 09", value: "9" },
    { label: "Option 10", value: "10" },
    { label: "Option 11", value: "11" },
    { label: "Option 12", value: "12" },
    { label: "Option 13", value: "13" },
    { label: "Option 14", value: "14" },
    { label: "Option 15", value: "15" },
    { label: "Option 16", value: "16" },
    { label: "Option 17", value: "17" },
    { label: "Option 18", value: "18" },
    { label: "Option 19", value: "19" },
    { label: "Option 20", value: "20" },
    { label: "Option 21", value: "21" },
    { label: "Option 22", value: "22" },
    { label: "Option 23", value: "23" },
    { label: "Option 24", value: "24" },
    { label: "Option 25", value: "25" },
    { label: "Option 26", value: "26" },
    { label: "Option 27", value: "27" },
    { label: "Option 28", value: "28" },
    { label: "Option 29", value: "29" },
    { label: "Option 30", value: "30" },
  ];
  const group_options = [
    {
      label: "Group 001",
      options: [
        { label: "Option 001", value: "1" },
        { label: "Option 002", value: "2" },
        { label: "Option 003", value: "3" },
      ],
    },
    {
      label: "Group 002",
      options: [
        { label: "Option 004", value: "4" },
        { label: "Option 005", value: "5" },
        { label: "Option 006", value: "6" },
      ],
    },
    {
      label: "Group 003",
      options: [
        { label: "Option 007", value: "7" },
        { label: "Option 008", value: "8" },
        { label: "Option 009", value: "9" },
      ],
    },
    {
      label: "Group 004",
      options: [
        { label: "Option 010", value: "10" },
        { label: "Option 011", value: "11" },
        { label: "Option 012", value: "12" },
      ],
    },
    {
      label: "Group 005",
      options: [
        { label: "Option 013", value: "13" },
        { label: "Option 014", value: "14" },
        { label: "Option 015", value: "15" },
      ],
    },
  ];
  const group_options_long = [
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
        { label: "Option 0004", value: "4" },
        { label: "Option with a very long label to test the ellipsis 0005", value: "5" },
        { label: "Option 006", value: "6" },
      ],
    },
    {
      label: "Group 3",
      options: [
        { label: "Option 0007", value: "7" },
        { label: "Option 008", value: "8" },
        { label: "Option 9", value: "9" },
      ],
    },
    {
      label: "Group 4",
      options: [
        { label: "Option 10", value: "10" },
        { label: "Option 11", value: "11" },
        { label: "Option 12", value: "12" },
      ],
    },
    {
      label: "Group 5",
      options: [
        { label: "Option x", value: "x" },
        { label: "Option y", value: "y" },
        { label: "Option z", value: "z" },
      ],
    },
    {
      label: "Group 6",
      options: [
        { label: "Option 016", value: "16" },
        { label: "Option 017", value: "17" },
        { label: "Option 018", value: "18" },
      ],
    },
    {
      label: "Group 7",
      options: [
        { label: "Option xx", value: "xx" },
        { label: "Option yy", value: "yy" },
        { label: "Option zz", value: "zz" },
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
  const grouped_icon_options = [
    {
      label: "Social Media",
      options: [
        {
          label: "Instagram",
          value: "1",
          icon: "https://cdn.icon-icons.com/icons2/2518/PNG/512/brand_instagram_icon_151534.png",
        },
        {
          label: "LinkedIn",
          value: "2",
          icon: "https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png",
        },
        {
          label: "Facebook",
          value: "3",
          icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
        },
        {
          label: "Pinterest",
          value: "4",
          icon: "https://cdn-icons-png.flaticon.com/512/145/145808.png",
        },
      ],
    },
    {
      label: "Group 2",
      options: [
        { label: "Option 4", value: "5" },
        { label: "Option 5", value: "6" },
        { label: "Option 6", value: "7" },
      ],
    },
    {
      label: "Group 3",
      options: [
        { label: "Option 7", value: "8" },
        { label: "Option 8", value: "9" },
        { label: "Option 9", value: "10" },
      ],
    },
  ];

  return (
    <>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Default (uncontrolled)</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          placeholder="Choose an option"
          margin="medium"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Controlled</h4>
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
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Multiple</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          placeholder="Choose options"
          multiple
          margin="medium"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Controlled multiple</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          value={valueMultiple}
          error={errorMultiple}
          onChange={onChangeMultiple}
          options={single_options_long}
          placeholder="Choose options"
          multiple
          margin="medium"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Controlled multiple inmutable</h4>
        <DxcSelect
          label="Label"
          value={["2", "4"]}
          helperText="Helper text"
          options={single_options_long}
          placeholder="Choose an option"
          multiple
          margin="medium"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Searchable</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={single_options_long}
          placeholder="Choose an option"
          searchable
          margin="medium"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Searchable & Multiple</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={single_options_long}
          placeholder="Choose an option"
          searchable
          multiple
          margin="medium"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Grouped</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={group_options_long}
          placeholder="Choose an option"
          searchable
          margin="medium"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Grouped & Multiple</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={group_options_long}
          placeholder="Choose an option"
          searchable
          multiple
          margin="medium"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Icons</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={icon_options}
          placeholder="Choose an option"
          searchable
          margin="medium"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Icons & Multiple</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={icon_options}
          placeholder="Choose an option"
          searchable
          multiple
          margin="medium"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Icons & Multiple & Grouped</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={grouped_icon_options}
          placeholder="Choose an option"
          searchable
          multiple
          margin="medium"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Disabled</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          value={"1"}
          options={single_options}
          placeholder="Choose an option"
          margin="medium"
          disabled
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Disabled & Multiple</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          value={["1", "3"]}
          options={single_options}
          placeholder="Choose an option"
          margin="medium"
          disabled
          multiple
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Optional</h4>
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
          optional
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Optional & Multiple</h4>
        <DxcSelect
          label="Label"
          helperText="Multiple shouldn't alow optional to add a new option, this is exclusive from single selection"
          options={single_options}
          error={errorOptional}
          onBlur={({ value, error }) => {
            error ? setErrorOptional(error) : setErrorOptional(null);
          }}
          placeholder="Choose an option"
          margin="medium"
          optional
          multiple
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>
          Optional & Grouped & Searchable & Multiple
        </h4>
        <DxcSelect
          label="Label"
          helperText="Multiple shouldn't alow optional to add a new option, this is exclusive from single selection, no matter if it is grouped or not"
          options={group_options}
          error={errorOptional}
          onBlur={({ value, error }) => {
            error ? setErrorOptional(error) : setErrorOptional(null);
          }}
          placeholder="Choose an option"
          searchable
          multiple
          margin="medium"
          optional
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Optional grouped</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={group_options}
          error={errorOptional}
          onBlur={({ value, error }) => {
            error ? setErrorOptional(error) : setErrorOptional(null);
          }}
          placeholder="Choose an option"
          margin="medium"
          optional
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Optional grouped searchable</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={group_options}
          error={errorOptional}
          onBlur={({ value, error }) => {
            error ? setErrorOptional(error) : setErrorOptional(null);
          }}
          placeholder="Choose an option"
          searchable
          margin="medium"
          optional
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Optional without placeholder</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          margin="medium"
          searchable
          optional
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Error</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={single_options}
          placeholder="Choose an option"
          margin="medium"
          error="Error message"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Sizes</h4>
        <DxcSelect
          label="Small"
          options={group_options_long}
          margin={{ left: "medium", right: "medium" }}
          size="small"
        />
        <DxcSelect
          label="Medium"
          options={group_options_long}
          margin={{ left: "medium", right: "medium" }}
          size="medium"
        />
        <DxcSelect
          label="Large"
          options={group_options_long}
          margin={{ left: "medium", right: "medium" }}
          size="large"
        />
        <DxcSelect
          label="Fill parent"
          options={group_options_long}
          margin={{ left: "medium", right: "medium" }}
          size="fillParent"
          searchable
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Undefined options</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          placeholder="Choose an option"
          margin="medium"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Empty options</h4>
        <DxcSelect
          label="Label"
          helperText="Helper text"
          options={[]}
          placeholder="Choose an option"
          margin="medium"
        />
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Empty grouped options</h4>
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
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Undefined groups</h4>
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
      </div>
      <div>
        <h4 style={{ marginLeft: "36px" }}>Using ref prop</h4>
        <DxcSelect
          label="Select with ref"
          helperText="Example of helper text"
          placeholder="Placeholder"
          options={single_options}
          searchable
          margin={{ left: "medium", right: "medium" }}
          ref={ref}
        />
        <DxcButton
          onClick={() => {
            const select = ref.current.getElementsByTagName("div")[0];
            select.focus();
          }}
          label="Focus!"
          margin="medium"
        ></DxcButton>
      </div>
    </>
  );
}

export default App;

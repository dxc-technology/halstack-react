import React, { useState } from "react";
import { DxcNewInputText } from "@dxc-technology/halstack-react";
import icon from "../images/home.svg";

function App() {
  const [value, setValue] = useState("Sample text");
  const [suggestionsValue, setSuggestionsValue] = useState("");
  const onChange = (newValue) => {
    setValue(newValue);
  };
  const onChangeSuggestions = (newValue) => {
    setSuggestionsValue(newValue);
  };
  const action = {
    onClick: () => {
      console.log("Warning dude!");
    },
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="currentColor"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
      </svg>
    ),
  };
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands, The",
    "Central African Republic",
    "Chad",
    "Democratic Republic of the Congo",
    "Dominican Republic",
    "Dominica",
    "Denmark",
    "Djibouti",
  ];
  const callbackFunc = (newValue) => {
    const result = new Promise((resolve) =>
      setTimeout(() => {
        resolve(
          newValue
            ? countries.filter((option) =>
                option.toUpperCase().includes(newValue.toUpperCase())
              )
            : countries
        );
      }, 1500)
    );
    return result;
  }

  return (
    <>
      <p>
        <DxcNewInputText value={value} onChange={onChange} margin="medium" />
      </p>
      <p>
        <DxcNewInputText
          value={value}
          onChange={onChange}
          margin="medium"
          clearable
        />
      </p>
      <p>
        <DxcNewInputText
          label="Example label"
          optional
          prefix="+34"
          suffix="USD"
          helperText="Help please"
          placeholder="Placeholder"
          margin="medium"
        />
      </p>
      <p>
        <DxcNewInputText
          label="Warning label"
          prefix="€"
          helperText="More help please"
          placeholder="Placeholder"
          margin="medium"
          action={action}
        />
      </p>
      <p>
        <DxcNewInputText
          label="Error input"
          prefix="€"
          helperText="This time i really need help, please"
          placeholder="Placeholder"
          margin="medium"
          action={action}
          error="Error message"
          clearable
        />
      </p>
      <p>
        <DxcNewInputText
          label="Disabled input"
          placeholder="Placeholder"
          margin="medium"
          disabled
        />
      </p>
      <p>
        <DxcNewInputText
          label="Input with suggestions"
          helperText="This one has a lot of help"
          placeholder="Placeholder"
          margin="medium"
          value={suggestionsValue}
          onChange={onChangeSuggestions}
          suggestions={countries}
          clearable
        />
      </p>
      <p>
        <DxcNewInputText
          label="Input with suggestions function"
          helperText="Asynchronous help"
          placeholder="Placeholder"
          margin="medium"
          value={suggestionsValue}
          onChange={onChangeSuggestions}
          suggestions={callbackFunc}
          clearable
        />
      </p>
    </>
  );
}

export default App;

import React, { useState } from "react";
import styled from "styled-components";
import {
  DxcNewInputText,
  DxcHeading,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";

import Mode from "../Mode";

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

const NewInputText = () => {
  const [value, setValue] = useState("Example text");
  const [suggestionsValue, setSuggestionsValue] = useState("");

  const onChange = (value) => {
    setValue(value);
  };

  const onBlur = ({ value }) => {
    setValue(value);
  };

  const onChangeSuggestions = (value) => {
    setSuggestionsValue(value);
  };

  const action = {
    onClick: () => {
      console.log("Copy that!");
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

  const [suggestionsFValue, setSuggestionsFValue] = useState("");

  const onChangeFSuggestions = ({ value }) => {
    setSuggestionsFValue(value);
  };

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
  };

  return (
    <TextFieldContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <DxcNewInputText
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          margin="small"
        />
      </Mode>
      <Mode text="Disabled">
        <DxcNewInputText
          label="Disabled input"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="small"
          disabled
        />
      </Mode>
      <Mode text="Required">
        <DxcNewInputText
          label="Example label"
          optional
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="small"
        />
      </Mode>
      <Mode text="Invalid">
        <DxcNewInputText
          label="Error input"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="small"
          margin="small"
          error="Error message."
          action={action}
          clearable
        />
      </Mode>
      <Mode text="Autosuggest">
        <DxcNewInputText
          label="Suggestions"
          placeholder="Placeholder"
          value={suggestionsValue}
          onChange={onChangeSuggestions}
          margin="small"
          action={action}
          suggestions={countries}
          clearable
        />
      </Mode>
      <Mode text="Asynchronous autosuggest">
        <DxcNewInputText
          label="Input with suggestions function"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin="small"
          value={suggestionsFValue}
          onChange={onChangeFSuggestions}
          suggestions={callbackFunc}
          clearable
        />
      </Mode>
      <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "small", bottom: "xsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <DxcNewInputText
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            margin={{ left: "medium", right: "medium" }}
          />
        </Mode>
        <Mode mode="dark" text="Disabled">
          <DxcNewInputText
            label="Disabled input"
            helperText="Example of helper text"
            placeholder="Placeholder"
            margin="medium"
            disabled
          />
        </Mode>
        <Mode mode="dark" text="Required">
          <DxcNewInputText
            label="Example label"
            optional
            helperText="Example of helper text"
            placeholder="Placeholder"
            margin="medium"
          />
        </Mode>
        <Mode mode="dark" text="Invalid">
          <DxcNewInputText
            label="Error input"
            helperText="Example of helper text"
            placeholder="Emojis"
            margin={{ left: "medium", bottom: "small", right: "medium" }}
            error="Error message."
            action={action}
            clearable
          />
        </Mode>
        <Mode mode="dark" text="Autosuggest">
          <DxcNewInputText
            label="Suggestions"
            placeholder="Placeholder"
            value={suggestionsValue}
            onChange={onChangeSuggestions}
            margin={{ left: "medium", bottom: "small", right: "medium" }}
            action={action}
            suggestions={countries}
            clearable
          />
          <DxcNewInputText
            label="Input with suggestions function"
            helperText="Example of helper text"
            placeholder="Placeholder"
            margin="medium"
            value={suggestionsFValue}
            onChange={onChangeFSuggestions}
            suggestions={callbackFunc}
            clearable
          />
        </Mode>
      </BackgroundColorProvider>
    </TextFieldContainer>
  );
};

const TextFieldContainer = styled.div``;

export default NewInputText;

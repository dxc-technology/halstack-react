import React, { useState } from "react";
import styled from "styled-components";
import { DxcNewInputText, DxcHeading } from "@dxc-technology/halstack-react";
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
  const onChange = ({ value }) => {
    setValue(value);
  };
  const onBlur = ({ value }) => {
    setValue(value);
  };
  const onChangeSuggestions = ({ value }) => {
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

  const errorCallbackFunc = () => {
    const result = new Promise((resolve, reject) =>
      setTimeout(() => {
        reject("err");
      }, 3000)
    );
    return result;
  };

  return (
    <NewInputTextContainer>
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
          margin={{ top: "xsmall" }}
          clearable
        />
      </Mode>
      <Mode text="Disabled">
        <DxcNewInputText
          label="Disabled input"
          helperText="Example of helper text"
          value="Example text"
          margin={{ top: "xsmall" }}
          action={action}
          prefix="Pre"
          suffix="Suf"
          disabled
        />
      </Mode>
      <Mode text="Invalid">
        <DxcNewInputText
          label="Invalid input"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin={{ top: "xsmall", bottom: "xxsmall" }}
          error="Error message."
          clearable
        />
      </Mode>
      <Mode text="Action & Optional">
        <DxcNewInputText
          label="Input with action and optional"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin={{ top: "xsmall", bottom: "xxsmall" }}
          action={action}
          optional
          clearable
        />
      </Mode>
      <Mode text="Prefix & Suffix">
        <DxcNewInputText
          label="Prefix and suffix text input"
          prefix="+34"
          suffix="USD"
          helperText="Example of helper text"
          placeholder="Placeholder"
          margin={{ top: "xsmall" }}
        />
      </Mode>
      <Mode text="Suggestions">
        <DxcNewInputText
          label="Suggestions input"
          placeholder="Placeholder"
          value={suggestionsValue}
          onChange={onChangeSuggestions}
          margin={{ top: "xsmall" }}
          suggestions={countries}
          clearable
        />
        <DxcNewInputText
          label="Suggestions error input"
          placeholder="Placeholder"
          margin={{ top: "xsmall", left: "large" }}
          suggestions={errorCallbackFunc}
          clearable
        />
      </Mode>
      {/* <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xsmall" }}
      />
      <div style={{ marginBottom: "25px" }}>
        <BackgroundColorProvider color="#000000">
          <Mode mode="dark" text="Default">
            <DxcNewInputText
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              margin={{ top: "xsmall" }}
              clearable
            />
          </Mode>
          <Mode mode="dark" text="Disabled">
            <DxcNewInputText
              label="Disabled input"
              helperText="Example of helper text"
              value="Example text"
              margin={{ top: "xsmall" }}
              action={action}
              prefix="Pre"
              suffix="Suf"
              disabled
            />
          </Mode>
          <Mode mode="dark" text="Invalid">
            <DxcNewInputText
              label="Invalid input"
              helperText="Example of helper text"
              placeholder="Placeholder"
              margin={{ top: "xsmall", bottom: "xxsmall" }}
              error="Error message."
              clearable
            />
          </Mode>
          <Mode mode="dark" text="Action & Optional">
            <DxcNewInputText
              label="Input with action and optional"
              helperText="Example of helper text"
              placeholder="Placeholder"
              margin={{ top: "xsmall", bottom: "xxsmall" }}
              action={action}
              optional
              clearable
            />
          </Mode>
          <Mode mode="dark" text="Prefix & Suffix">
            <DxcNewInputText
              label="Prefix and suffix text input"
              prefix="+34"
              suffix="USD"
              helperText="Example of helper text"
              placeholder="Placeholder"
              margin={{ top: "xsmall" }}
            />
          </Mode>
          <Mode mode="dark" text="Suggestions">
            <DxcNewInputText
              label="Suggestions input"
              placeholder="Placeholder"
              value={suggestionsValue}
              onChange={onChangeSuggestions}
              margin={{ top: "xsmall" }}
              action={action}
              suggestions={countries}
              clearable
            />
            <DxcNewInputText
              label="Suggestions error input"
              placeholder="Placeholder"
              margin={{ top: "xsmall", left: "large" }}
              suggestions={errorCallbackFunc}
              clearable
            />
          </Mode>
        </BackgroundColorProvider> 
      </div>*/}
    </NewInputTextContainer>
  );
};

const NewInputTextContainer = styled.div``;

export default NewInputText;

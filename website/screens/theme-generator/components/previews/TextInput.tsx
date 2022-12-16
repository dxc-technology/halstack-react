import React from "react";
import { DxcTextInput } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import ExamplesContainer from "./ExamplesContainer";

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

const TextInput = () => {
  const errorCallbackFunc: (value: string) => Promise<string[]> = (): Promise<
    string[]
  > => {
    const result = new Promise<string[]>((resolve, reject) =>
      setTimeout(() => {
        reject("err");
      }, 3000)
    );
    return result;
  };

  return (
    <ExamplesContainer>
      <Mode text="Default">
        <DxcTextInput clearable />
      </Mode>
      <Mode text="Disabled">
        <DxcTextInput
          label="Disabled text input"
          helperText="Example of helper text"
          value="Example text"
          action={action}
          prefix="Pre"
          suffix="Suf"
          disabled
        />
      </Mode>
      <Mode text="Invalid">
        <DxcTextInput
          label="Invalid text input"
          helperText="Example of helper text"
          placeholder="Placeholder"
          error="Error message."
          clearable
        />
      </Mode>
      <Mode text="Action & Optional">
        <DxcTextInput
          label="Text input with action and optional"
          helperText="Example of helper text"
          placeholder="Placeholder"
          action={action}
          optional
          clearable
        />
      </Mode>
      <Mode text="Prefix & Suffix">
        <DxcTextInput
          label="Prefix and suffix text input"
          prefix="+34"
          suffix="USD"
          helperText="Example of helper text"
          placeholder="Placeholder"
        />
      </Mode>
      <Mode text="Suggestions">
        <DxcTextInput
          label="Suggestions text input"
          placeholder="Placeholder"
          suggestions={countries}
          clearable
        />
        <DxcTextInput
          label="Suggestions error text input"
          placeholder="Placeholder"
          suggestions={errorCallbackFunc}
          clearable
        />
      </Mode>
    </ExamplesContainer>
  );
};

export default TextInput;

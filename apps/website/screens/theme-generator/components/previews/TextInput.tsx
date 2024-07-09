import { DxcTextInput } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

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
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
  ),
};

const errorCallbackFunc: (_value: string) => Promise<string[]> = (): Promise<string[]> => {
  const result = new Promise<string[]>((resolve, reject) =>
    setTimeout(() => {
      reject("err");
    }, 3000)
  );
  return result;
};

const TextInput = () => (
  <PreviewContainer>
    <Mode text="States">
      <DxcTextInput label="Default" clearable defaultValue="Example text" size="fillParent" />
      <DxcTextInput label="Error" placeholder="Placeholder" error="Error message." clearable size="fillParent" />
      <DxcTextInput label="Read-only" defaultValue="Example text" readOnly size="fillParent" />
    </Mode>
    <Mode text="Disabled">
      <DxcTextInput
        label="Label text"
        helperText="Helper text"
        defaultValue="Example text"
        action={action}
        prefix="Pre"
        disabled
        size="fillParent"
      />
      <DxcTextInput
        label="Label text"
        placeholder="Placeholder"
        helperText="Helper text"
        suffix="Suf"
        disabled
        size="fillParent"
      />
    </Mode>
    <Mode text="Action & Optional">
      <DxcTextInput
        label="Label text"
        helperText="Example of helper text"
        placeholder="Placeholder"
        action={action}
        optional
        clearable
      />
    </Mode>
    <Mode text="Prefix & Suffix">
      <DxcTextInput
        label="Label text"
        prefix="+34"
        suffix="USD"
        helperText="Example of helper text"
        placeholder="Placeholder"
      />
    </Mode>
    <Mode text="Suggestions">
      <DxcTextInput label="Label text" placeholder="Placeholder" suggestions={countries} clearable size="fillParent" />
      <DxcTextInput
        label="Label text"
        placeholder="Placeholder"
        suggestions={errorCallbackFunc}
        clearable
        size="fillParent"
      />
    </Mode>
  </PreviewContainer>
);

export default TextInput;

import React, { useState } from "react";
import styled from "styled-components";
import { V3DxcInputText, DxcHeading } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";

const countries = [
  "Albania",
  "Andorra",
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belarus",
  "Belgium",
  "Bosnia and Herzegovina",
  "Bulgaria",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Georgia",
  "Germany",
];

const InputText = () => {
  const [value, changeValue] = useState("Sample text");
  const onChange = (newValue) => {
    changeValue(newValue);
  };
  const [asynchronousAutocompleteValue, changeAsynchronousAutocompleteValue] =
    useState("");
  const onChangeAsynchronousAutocomplete = (newValue) => {
    changeAsynchronousAutocompleteValue(newValue);
  };
  function callbackFunc(newValue) {
    const result = new Promise((resolve) =>
      setTimeout(() => {
        resolve(
          newValue
            ? countries.filter((option) =>
                option.toUpperCase().includes(newValue.toUpperCase())
              )
            : countries
        );
      }, 3000)
    );
    return result;
  }

  return (
    <TextFieldContainer>
      <DxcHeading
        text="Light Mode"
        level={5}
        margin={{ top: "xsmall", bottom: "xxsmall" }}
      />
      <Mode text="Default">
        <V3DxcInputText
          label="Input label"
          assistiveText={"assistive text"}
          value={value}
          onChange={onChange}
          margin={{ top: "xxsmall", bottom: "xsmall", right: "medium" }}
        />
        <V3DxcInputText
          label="Input label"
          suffixIcon={facebookIcon}
          prefixIcon={facebookIcon}
          assistiveText={"assistive text"}
          margin={{ top: "xxsmall", bottom: "xsmall", right: "medium" }}
        />
        <V3DxcInputText
          label="Input label"
          suffix={"suf"}
          prefix={"pre"}
          assistiveText={"assistive text"}
          margin={{ top: "xxsmall", bottom: "xsmall" }}
        />
      </Mode>
      <Mode text="Disabled">
        <V3DxcInputText
          label="Input label"
          assistiveText={"assistive text"}
          disabled
          margin={{ top: "xxsmall", bottom: "xsmall" }}
        />
      </Mode>
      <Mode text="Required">
        <V3DxcInputText
          label="Input label"
          assistiveText={"assistive text"}
          required
          margin={{ top: "xxsmall", bottom: "xsmall" }}
        />
      </Mode>
      <Mode text="Invalid">
        <V3DxcInputText
          label="Input label"
          assistiveText={"assistive text"}
          invalid
          margin={{ top: "xxsmall", bottom: "xsmall" }}
        />
      </Mode>
      <Mode text="Autocomplete">
        <V3DxcInputText
          label="Autocomplete"
          value={asynchronousAutocompleteValue}
          onChange={onChangeAsynchronousAutocomplete}
          autocompleteOptions={callbackFunc}
          margin={{ top: "xxsmall", bottom: "medium" }}
        />
      </Mode>
      {/* <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "small", bottom: "xsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <V3DxcInputText
            label="Input label"
            assistiveText={"assistive text"}
            value={value}
            onChange={onChange}
            margin={{ right: "small", bottom: "small" }}
          />
          <V3DxcInputText
            label="Input label"
            suffixIcon={facebookIcon}
            prefixIcon={facebookIcon}
            assistiveText={"assistive text"}
            margin={{ right: "small", bottom: "small" }}
          />
          <V3DxcInputText
            label="Input label"
            suffix={"suf"}
            prefix={"pre"}
            assistiveText={"assistive text"}
            margin={{ bottom: "small" }}
          />
        </Mode>
        <Mode mode="dark" text="Disabled">
          <V3DxcInputText
            label="Input label"
            assistiveText={"assistive text"}
            disabled
            margin={{ bottom: "small" }}
          />
        </Mode>
        <Mode mode="dark" text="Required">
          <V3DxcInputText
            label="Input label"
            assistiveText={"assistive text"}
            required
            margin={{ bottom: "small" }}
          />
        </Mode>
        <Mode mode="dark" text="Invalid">
          <V3DxcInputText
            label="Input label"
            assistiveText={"assistive text"}
            invalid
            margin={{ bottom: "small" }}
          />
        </Mode>
        <Mode mode="dark" text="Autocomplete">
          <V3DxcInputText
            label="Autocomplete"
            value={asynchronousAutocompleteValue}
            onChange={onChangeAsynchronousAutocomplete}
            autocompleteOptions={callbackFunc}
            margin={{ bottom: "medium" }}
          />
        </Mode>
      </BackgroundColorProvider> */}
    </TextFieldContainer>
  );
};

const TextFieldContainer = styled.div``;

export default InputText;

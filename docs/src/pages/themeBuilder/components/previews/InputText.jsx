import React, { useState } from "react";
import styled from "styled-components";
import {
  DxcInput,
  DxcHeading,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";

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
      <Mode text="Default">
        <DxcInput
          label="Input label"
          assistiveText={"assistive text"}
          margin={{ right: "small", bottom: "small" }}
        />
        <DxcInput
          label="Input label"
          suffixIcon={facebookIcon}
          prefixIcon={facebookIcon}
          assistiveText={"assistive text"}
          margin={{ right: "small", bottom: "small" }}
        />
        <DxcInput
          label="Input label"
          suffix={"suf"}
          prefix={"pre"}
          assistiveText={"assistive text"}
          margin={{ bottom: "small" }}
        />
      </Mode>
      <Mode text="Disabled">
        <DxcInput
          label="Input label"
          assistiveText={"assistive text"}
          disabled
          margin={{ bottom: "small" }}
        />
      </Mode>
      <Mode text="Required">
        <DxcInput
          label="Input label"
          assistiveText={"assistive text"}
          required
          margin={{ bottom: "small" }}
        />
      </Mode>
      <Mode text="Invalid">
        <DxcInput
          label="Input label"
          assistiveText={"assistive text"}
          invalid
          margin={{ bottom: "small" }}
        />
      </Mode>
      <Mode text="Autocomplete">
        <DxcInput
          label="Autocomplete"
          value={asynchronousAutocompleteValue}
          onChange={onChangeAsynchronousAutocomplete}
          autocompleteOptions={callbackFunc}
          margin={{ bottom: "xlarge" }}
        />
      </Mode>

      <DxcHeading
        text="Dark Mode"
        level={5}
        margin={{ top: "small", bottom: "xsmall" }}
      />
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <DxcInput
            label="Input label"
            assistiveText={"assistive text"}
            margin={{ right: "small", bottom: "small" }}
          />
          <DxcInput
            label="Input label"
            suffixIcon={facebookIcon}
            prefixIcon={facebookIcon}
            assistiveText={"assistive text"}
            margin={{ right: "small", bottom: "small" }}
          />
          <DxcInput
            label="Input label"
            suffix={"suf"}
            prefix={"pre"}
            assistiveText={"assistive text"}
            margin={{ bottom: "small" }}
          />
        </Mode>
        <Mode mode="dark" text="Disabled">
          <DxcInput
            label="Input label"
            assistiveText={"assistive text"}
            disabled
            margin={{ bottom: "small" }}
          />
        </Mode>
        <Mode mode="dark" text="Required">
          <DxcInput
            label="Input label"
            assistiveText={"assistive text"}
            required
            margin={{ bottom: "small" }}
          />
        </Mode>
        <Mode mode="dark" text="Invalid">
          <DxcInput
            label="Input label"
            assistiveText={"assistive text"}
            invalid
            margin={{ bottom: "small" }}
          />
        </Mode>
        <Mode mode="dark" text="Autocomplete">
          <DxcInput
            label="Autocomplete"
            value={asynchronousAutocompleteValue}
            onChange={onChangeAsynchronousAutocomplete}
            autocompleteOptions={callbackFunc}
            margin={{ bottom: "xlarge" }}
          />
        </Mode>
      </BackgroundColorProvider>
    </TextFieldContainer>
  );
};

const TextFieldContainer = styled.div``;

export default InputText;

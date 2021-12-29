import { DxcInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, changeValue] = useState("");
  const onChange = newValue => {
    changeValue(newValue);
  };

  const countries = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Bosnia and Herzegovina",
    
  ];

  return (
    <DxcInputText
      label="Autocomplete"
      value={value}
      onChange={onChange}
      autocompleteOptions={countries}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcInputText,
  useState,
};

export default { code, scope };

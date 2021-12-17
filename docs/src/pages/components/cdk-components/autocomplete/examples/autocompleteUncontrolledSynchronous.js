import { V3DxcInputText } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
 const onChange = newValue => {
    console.log(newValue);
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
    <V3DxcInputText
      label="Autocomplete"
      onChange={onChange}
      autocompleteOptions={countries}
      margin="medium"
    />
  );
}`;

const scope = {
  V3DxcInputText,
  useState,
};

export default { code, scope };

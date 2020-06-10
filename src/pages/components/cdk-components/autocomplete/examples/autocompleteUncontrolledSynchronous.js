import { DxcInput } from "@diaas/dxc-react-cdk";
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
    <DxcInput
          label="Synchronous Uncontrolled Autocomplete"
          onChange={onChange}
          autocompleteOptions={countries}
          margin="medium"
          size="large"
        />
  );
}`;

const scope = {
  DxcInput,
  useState
};

export default { code, scope };

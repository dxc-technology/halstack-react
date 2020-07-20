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
      }, 1000)
    );
    return result;
  }

  return (
    <DxcInput
      label="Autocomplete"
      onChange={onChange}
      autocompleteOptions={callbackFunc}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcInput,
  useState
};

export default { code, scope };

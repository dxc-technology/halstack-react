import { DxcInput } from "@diaas/dxc-react-cdk";
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
    <DxcInput
          label="Synchronous Autocomplete"
          value={value}
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

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

  return (
    <DxcInput
      label="Autocomplete"
      value={value}
      onChange={onChange}
      autocompleteOptions={countries}
      margin="medium"
    />
  );
}`;

const scope = {
  DxcInput,
  useState
};

export default { code, scope };

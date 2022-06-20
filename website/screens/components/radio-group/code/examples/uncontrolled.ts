import {
  DxcRadioGroup,
  DxcInset,
  DxcStack,
} from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
    const [value, setValue] = useState("");
    const onChange = (value) => {
      console.log(value);
    };

    const options = [
      { label: "Orange", value: "orange" },
      { label: "Apple", value: "apple" },
      { label: "Pear", value: "pear" },
    ];
  
    return (
      <DxcInset space="large">
        <DxcRadioGroup
          label="Fruit"
          options={options}
          onChange={onChange}
        />
      </DxcInset>
    );
  }`;

const scope = {
  DxcRadioGroup,
  DxcInset,
  DxcStack,
  useState,
};

export default { code, scope };

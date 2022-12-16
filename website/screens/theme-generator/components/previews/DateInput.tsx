import React from "react";
import { DxcDateInput } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import ExamplesContainer from "./ExamplesContainer";

const DateInput = () => (
  <ExamplesContainer>
    <Mode text="Default">
      <DxcDateInput
        label="Format"
        helperText="Example of helper text"
        format="MM/dd/yyyy"
        placeholder
        clearable
      />
    </Mode>
    <Mode text="Disabled">
      <DxcDateInput
        label="Format"
        helperText="Example of helper text"
        format="MM/dd/yyyy"
        placeholder
        clearable
        disabled
      />
    </Mode>
  </ExamplesContainer>
);

export default DateInput;

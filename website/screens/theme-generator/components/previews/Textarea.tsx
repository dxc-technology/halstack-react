import React from "react";
import { DxcTextarea } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import ExamplesContainer from "./ExamplesContainer";

const Textarea = () => (
  <ExamplesContainer>
    <Mode text="Default">
      <DxcTextarea
        label="Regular textarea"
        helperText="Example of helper text"
        optional
        verticalGrow="manual"
      />
    </Mode>
    <Mode text="Disabled">
      <DxcTextarea
        label="Disabled textarea"
        helperText="Example of helper text"
        placeholder="Placeholder"
        disabled
      />
    </Mode>
    <Mode text="Invalid">
      <DxcTextarea
        label="Invalid textarea"
        helperText="Example of helper text"
        placeholder="Placeholder"
        error="Error message."
      />
    </Mode>
  </ExamplesContainer>
);

export default Textarea;

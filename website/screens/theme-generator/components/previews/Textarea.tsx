import React from "react";
import { DxcTextarea } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const Textarea = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcTextarea
        label="Label text"
        helperText="Example of helper text"
        optional
        verticalGrow="manual"
      />
    </Mode>
    <Mode text="Disabled">
      <DxcTextarea
        label="Label text"
        helperText="Example of helper text"
        placeholder="Placeholder"
        disabled
      />
    </Mode>
    <Mode text="Invalid">
      <DxcTextarea
        label="Label text"
        helperText="Example of helper text"
        placeholder="Placeholder"
        error="Error message."
      />
    </Mode>
    <Mode text="Read-only">
      <DxcTextarea
        label="Label text"
        helperText="Example of helper text"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        placeholder="Placeholder"
        readOnly
      />
    </Mode>
  </PreviewContainer>
);

export default Textarea;

import React from "react";
import { DxcWizard } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";
import PreviewContainer from "./PreviewContainer";

const steps = [
  {
    label: "First step",
    description: "Not validated step",
    valid: false,
  },
  {
    label: "Second step",
    description: "Validated step",
    valid: true,
  },
  {
    label: "Third step",
    description: "Another step description",
  },
  {
    label: "Forth step",
    description: "Disable step",
    disabled: true,
  },
];

const Wizard = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcWizard steps={steps} />
    </Mode>
    <Mode text="Icons">
      <DxcWizard steps={steps} />
    </Mode>
  </PreviewContainer>
);

export default Wizard;

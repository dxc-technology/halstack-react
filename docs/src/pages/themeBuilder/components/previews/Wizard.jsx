import React from "react";
import styled from "styled-components";
import { DxcWizard } from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";

const Wizard = () => {
  return (
    <WizardContainer>
      <Mode text="Default">
        <DxcWizard
          steps={[
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
          ]}
          margin={{ top: "xsmall", bottom: "xxsmall" }}
        ></DxcWizard>
      </Mode>
      <Mode text="Icons">
        <DxcWizard
          steps={[
            {
              label: "First step",
              description: "Not validated step",
              valid: false,
              icon: facebookIcon,
            },
            {
              label: "Second step",
              description: "Validated step",
              valid: true,
              icon: facebookIcon,
            },
            {
              label: "Third step",
              description: "Another step description",
              icon: facebookIcon,
            },
            {
              label: "Forth step",
              description: "Disable step",
              disabled: true,
              icon: facebookIcon,
            },
          ]}
          margin={{ top: "xsmall", bottom: "xxsmall" }}
        ></DxcWizard>
      </Mode>
    </WizardContainer>
  );
};

const WizardContainer = styled.div``;

export default Wizard;

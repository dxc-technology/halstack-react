import React from "react";
import { DxcWizard } from "@dxc-technology/halstack-react";
import homeIcon from "../images/home.svg";

function Wizard() {
  return (
    <div>
      <div className="test-case" id="default-wizard">
        <h4>Default wizard</h4>
        <DxcWizard currentStep={0} steps={[{}, {}, {}, {}, {}]}></DxcWizard>
      </div>
      <div className="test-case" id="labels-wizard">
        <h4>Wizard with labels</h4>
        <DxcWizard
          steps={[
            {
              label: "First step",
            },
            {
              label: "Second step",
            },
            {
              label: "Third step",
            },
          ]}
        ></DxcWizard>
      </div>
      <div className="test-case" id="description-wizard">
        <h4>Wizard with descriptions</h4>
        <DxcWizard
          steps={[
            {
              label: "First step",
              description: "This is the first step",
            },
            {
              label: "Second step",
              description: "This is the second step",
            },
            {
              label: "Third step",
              description: "This is the final step",
              disabled: true,
            },
          ]}
        ></DxcWizard>
      </div>
      <div className="test-case" id="icons-wizard">
        <h4>Wizard with icons</h4>
        <DxcWizard
          steps={[
            {
              label: "First step",
              description: "This is the first step",
              iconSrc: homeIcon,
            },
            {
              label: "Second step",
              iconSrc: homeIcon,
            },
            {
              label: "Third step",
              description: "This is the final step",
              iconSrc: homeIcon,
            },
          ]}
        ></DxcWizard>
      </div>

      <div className="test-case" id="numbers-vertical-wizard">
        <h4>Vertical wizard</h4>
        <DxcWizard mode="vertical" steps={[{}, {}, {}]}></DxcWizard>
      </div>
      <div className="test-case" id="vertical-wizard">
        <h4>Vertical wizard with icons</h4>
        <DxcWizard
          mode="vertical"
          currentStep={1}
          steps={[
            {
              label: "First step",
              description: "This is the first step",
              iconSrc: homeIcon,
              valid: true,
            },
            {
              label: "Second step",
              description: "This is the second step",
              iconSrc: homeIcon,
              valid: false,
            },
            {
              label: "Third step",
              description: "This is the final step",
              iconSrc: homeIcon,
              disabled: true,
            },
          ]}
        ></DxcWizard>
      </div>
    </div>
  );
}

export default Wizard;

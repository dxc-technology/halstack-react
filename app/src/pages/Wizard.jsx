import React from "react";
import { DxcWizard, ThemeProvider } from "@dxc-technology/halstack-react";
import homeIcon from "../images/home.svg";

const homeSVG = () => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor">
      <g id="Bounding_Box">
        <rect fill="none" width="24" height="24" />
      </g>
      <g id="Master">
        <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
      </g>
    </svg>
  );
};
const colors = {
  wizard: {
    baseColor: "#fabada",
    fontColor: "blue",
  },
};

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
              icon: <p>This is a test.</p>,
            },
            {
              label: "Second step",
              icon: (
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <g id="Bounding_Box">
                    <rect fill="none" width="24" height="24" />
                  </g>
                  <g id="Master">
                    <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                  </g>
                </svg>
              ),
            },
            {
              label: "Third step",
              description: "This is the final step",
              icon: <img src={homeIcon} />,
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
              icon: homeSVG,
              valid: true,
            },
            {
              label: "Second step",
              description: "This is the second step",
              icon: homeSVG,
              valid: false,
            },
            {
              label: "Third step",
              description: "This is the final step",
              icon: homeSVG,
              disabled: true,
            },
          ]}
        ></DxcWizard>
      </div>
      <div className="test-case" id="custom-wizard">
        <h4>Custom wizard</h4>
        <ThemeProvider theme={colors}>
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
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Wizard;

import React from "react";
import { DxcWizard } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const userIcon = (
  <svg width="32px" height="32px" viewBox="0 0 32 32" fill="currentColor">
    <path d="M22.56,16.53a9.95,9.95,0,0,1-13.12,0A15,15,0,0,0,1,30a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1A15,15,0,0,0,22.56,16.53Z" />
    <circle cx="16" cy="9" r="8" />
  </svg>
);

const homeIcon = (
  <svg viewBox="0 0 24 24" enableBackground="new 0 0 24 24" fill="currentColor">
    <g id="Bounding_Box">
      <rect fill="none" width="24" height="24" />
    </g>
    <g id="Master">
      <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
    </g>
  </svg>
);

const billingIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    width="20"
    fill="currentColor"
  >
    <path d="M11.5 11q-1.042 0-1.771-.729Q9 9.542 9 8.5q0-1.042.729-1.771Q10.458 6 11.5 6q1.042 0 1.771.729Q14 7.458 14 8.5q0 1.042-.729 1.771Q12.542 11 11.5 11Zm-6 2q-.625 0-1.062-.438Q4 12.125 4 11.5v-6q0-.625.438-1.062Q4.875 4 5.5 4h12q.625 0 1.062.438Q19 4.875 19 5.5v6q0 .625-.438 1.062Q18.125 13 17.5 13ZM7 11.5h9q0-.625.438-1.062Q16.875 10 17.5 10V7q-.625 0-1.062-.438Q16 6.125 16 5.5H7q0 .625-.438 1.062Q6.125 7 5.5 7v3q.625 0 1.062.438Q7 10.875 7 11.5Zm9.5 4.5h-14q-.625 0-1.062-.438Q1 15.125 1 14.5V6h1.5v8.5h14Zm-11-4.5v-6 6Z" />
  </svg>
);

const shoppingCartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    width="20"
    fill="currentColor"
  >
    <path d="M5.5 18q-.625 0-1.062-.438Q4 17.125 4 16.5t.438-1.062Q4.875 15 5.5 15t1.062.438Q7 15.875 7 16.5t-.438 1.062Q6.125 18 5.5 18Zm9 0q-.625 0-1.062-.438Q13 17.125 13 16.5t.438-1.062Q13.875 15 14.5 15t1.062.438Q16 15.875 16 16.5t-.438 1.062Q15.125 18 14.5 18ZM5.271 5.5 7 9.5h6.271l1.708-4ZM4.625 4H16.5q.292 0 .427.229t.031.479l-2.312 5.375q-.188.417-.552.667-.365.25-.823.25H6.604l-.875 1.5H16V14H5.75q-.896 0-1.323-.75-.427-.75.011-1.5l1.083-1.875L2.792 3.5H1V2h2.771ZM7 9.5h6.271Z" />
  </svg>
);

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

const iconSteps = [
  {
    label: "Personal info",
    valid: true,
    icon: userIcon,
  },
  {
    label: "Address",
    valid: true,
    icon: homeIcon,
  },
  {
    label: "Payment",
    icon: billingIcon,
  },
  {
    label: "Confirm details",
    icon: shoppingCartIcon,
  },
];

const Wizard = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcWizard steps={steps} />
    </Mode>
    <Mode text="Icons">
      <DxcWizard defaultCurrentStep={2} steps={iconSteps} mode="vertical" />
    </Mode>
  </PreviewContainer>
);

export default Wizard;

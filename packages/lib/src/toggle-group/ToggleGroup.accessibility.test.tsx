import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper";
import DxcToggleGroup from "./ToggleGroup";

const ethernetSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z" />
  </svg>
);
const gMobileSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <g>
        <path d="M3,7v2h5v2H4v2h4v2H3v2h5c1.1,0,2-0.9,2-2v-1.5c0-0.83-0.67-1.5-1.5-1.5c0.83,0,1.5-0.67,1.5-1.5V9c0-1.1-0.9-2-2-2H3z M21,11v4c0,1.1-0.9,2-2,2h-5c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2h5c1.1,0,2,0.9,2,2h-7v6h5v-2h-2.5v-2H21z" />
      </g>
    </g>
  </svg>
);
const wifiSVG = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
    <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
  </svg>
);

const options = [
  {
    value: 1,
    icon: wifiSVG,
    title: "WiFi connection",
  },
  {
    value: 2,
    icon: ethernetSVG,
    title: "Ethernet connection",
  },
  {
    value: 3,
    icon: gMobileSVG,
    title: "3G Mobile data connection",
  },
];

const disabledOption = [
  {
    value: 1,
    icon: wifiSVG,
    title: "WiFi connection",
    disabled: true,
  },
  {
    value: 2,
    icon: ethernetSVG,
    title: "Ethernet connection",
  },
  {
    value: 3,
    icon: gMobileSVG,
    title: "3G Mobile data connection",
  },
];

describe("Toggle group component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcToggleGroup options={options} margin="medium" defaultValue={[2]} multiple />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    const { container } = render(<DxcToggleGroup options={disabledOption} margin="medium" />);
    const results = await axe(container);
    expect(results.violations).toHaveLength(0);
  });
});

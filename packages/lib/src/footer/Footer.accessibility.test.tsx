import { render } from "@testing-library/react";
import { axe } from "../../test/accessibility/axe-helper.js";
import { disabledRules as rules } from "../../test/accessibility/rules/specific/footer/disabledRules.js";
import DxcFooter from "./Footer";

const disabledRules = {
  rules: rules.reduce((rulesObj, rule) => {
    rulesObj[rule] = { enabled: false };
    return rulesObj;
  }, {}),
};

const social = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    logo: (
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 438.536 438.536" fill="currentColor">
        <g>
          <path
            d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
 C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
 h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
 C438.532,59.576,430.49,40.204,414.41,24.123z M133.618,367.157H67.666V169.016h65.952V367.157z M127.626,132.332
 c-6.851,6.567-15.893,9.851-27.124,9.851h-0.288c-10.848,0-19.648-3.284-26.407-9.851c-6.76-6.567-10.138-14.703-10.138-24.41
 c0-9.897,3.476-18.083,10.421-24.556c6.95-6.471,15.942-9.708,26.98-9.708c11.039,0,19.89,3.237,26.553,9.708
 c6.661,6.473,10.088,14.659,10.277,24.556C137.899,117.625,134.477,125.761,127.626,132.332z M370.873,367.157h-65.952v-105.92
 c0-29.879-11.036-44.823-33.116-44.823c-8.374,0-15.42,2.331-21.128,6.995c-5.715,4.661-9.996,10.324-12.847,16.991
 c-1.335,3.422-1.999,8.75-1.999,15.981v110.775h-65.952c0.571-119.529,0.571-185.579,0-198.142h65.952v27.974
 c13.867-21.681,33.558-32.544,59.101-32.544c22.84,0,41.21,7.52,55.104,22.554c13.895,15.037,20.841,37.214,20.841,66.519v113.64
 H370.873z"
          />
        </g>
      </svg>
    ),
    title: "Linkedin",
  },
  {
    href: "https://x.com/dxctechnology",
    logo: (
      <svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="40" fill="white" />
        <path
          d="M140.192 118.205L187.848 64H176.556L135.158 111.056L102.117 64H64L113.975 135.163L64 192H75.2914L118.982 142.296L153.883 192H192L140.192 118.205ZM124.722 135.787L119.65 128.697L79.3634 72.3294H96.7094L129.232 117.837L134.282 124.927L176.551 184.076H159.205L124.722 135.787Z"
          fill="#0F1419"
        />
      </svg>
    ),
    title: "X",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    logo: (
      <svg
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 438.536 438.536"
        fill="currentColor"
        width="1000px"
        height="500px"
      >
        <g>
          <path
            d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
    C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
    h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
    C438.532,59.576,430.49,40.204,414.41,24.123z M373.155,225.548h-49.963V406.84h-74.802V225.548H210.99V163.02h37.401v-37.402
    c0-26.838,6.283-47.107,18.843-60.813c12.559-13.706,33.304-20.555,62.242-20.555h49.963v62.526h-31.401
    c-10.663,0-17.467,1.853-20.417,5.568c-2.949,3.711-4.428,10.23-4.428,19.558v31.119h56.534L373.155,225.548z"
          />
        </g>
      </svg>
    ),
    title: "Facebook",
  },
];

const bottom = [
  {
    href: "https://www.linkedin.com/company/dxctechnology",
    text: "Linkedin",
  },
  {
    href: "https://x.com/dxctechnology",
    text: "X",
  },
  {
    href: "https://www.facebook.com/DXCTechnology/",
    text: "Facebook",
  },
];

describe("Footer component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcFooter copyright="Copyright" socialLinks={social} bottomLinks={bottom} margin="small" mode="default">
        <div>
          <a href="https://www.linkedin.com/company/dxctechnology">Linkedin</a>
        </div>
      </DxcFooter>
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for reduced mode", async () => {
    const { container } = render(
      <DxcFooter copyright="Copyright" socialLinks={social} bottomLinks={bottom} margin="small" mode="reduced">
        <div>
          <a href="https://www.linkedin.com/company/dxctechnology">Linkedin</a>
        </div>
      </DxcFooter>
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
});

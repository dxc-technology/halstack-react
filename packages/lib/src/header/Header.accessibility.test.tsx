import { render } from "@testing-library/react";
import { axe, formatRules } from "../../test/accessibility/axe-helper";
import DxcHeader from "./Header";
import DxcFlex from "../flex/Flex";
import DxcLink from "../link/Link";
import rules from "../../test/accessibility/rules/specific/header/disabledRules";

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

const disabledRules = {
  rules: formatRules(rules),
};

const iconSVG = (
  <svg viewBox="0 0 24 24" height="24" width="24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const iconUrl = "https://iconape.com/wp-content/files/yd/367773/svg/logo-linkedin-logo-icon-png-svg.png";

const options = [
  {
    value: "1",
    label: "Amazon",
    icon: iconUrl,
  },
  {
    value: "2",
    label: "Ebay",
    icon: iconUrl,
  },
  {
    value: "3",
    label: "Wallapop",
    icon: iconSVG,
  },
  {
    value: "4",
    label: "Aliexpress",
    icon: iconSVG,
  },
];

describe("Header component accessibility tests", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false,
      })),
    });
  });
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcHeader
        content={
          <DxcFlex alignItems="center" gap="4rem">
            <DxcLink>Link 1</DxcLink>
            <DxcLink>Link 2</DxcLink>
            <DxcLink>Link 3</DxcLink>
            <DxcHeader.Dropdown
              options={options}
              label="dropdown-test"
              icon={iconSVG}
              iconPosition="after"
              margin="medium"
              size="medium"
              optionsIconPosition="after"
              onSelectOption={() => {}}
            />
          </DxcFlex>
        }
        margin="medium"
        underlined
      />
    );
    const results = await axe(container, disabledRules);
    expect(results).toHaveNoViolations();
  });
});

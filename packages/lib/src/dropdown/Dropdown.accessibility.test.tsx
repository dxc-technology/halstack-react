import { render } from "@testing-library/react";
import { axe, formatRules } from "../../test/accessibility/axe-helper";
import DxcDropdown from "./Dropdown";

// TODO: REMOVE
import { disabledRules as rules } from "../../test/accessibility/rules/specific/resultset-table/disabledRules";

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

// Mocking DOMRect for Radix Primitive Popover
(global as any).globalThis = global;
(global as any).DOMRect = {
  fromRect: () => ({ top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0 }),
};
(global as any).ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

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

describe("Dropdown component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
      <DxcDropdown
        options={options}
        label="dropdown-test"
        icon={iconSVG}
        iconPosition="before"
        margin="medium"
        size="medium"
        optionsIconPosition="before"
        onSelectOption={() => {}}
      />
    );
    const results = await axe(baseElement, disabledRules);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for disabled mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
      <DxcDropdown
        options={options}
        label="dropdown-test"
        icon={iconSVG}
        iconPosition="before"
        margin="medium"
        size="medium"
        optionsIconPosition="before"
        onSelectOption={() => {}}
        disabled
      />
    );
    const results = await axe(baseElement, disabledRules);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for caret-hidden mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
      <DxcDropdown
        options={options}
        label="dropdown-test"
        icon={iconSVG}
        iconPosition="after"
        margin="medium"
        size="medium"
        optionsIconPosition="after"
        onSelectOption={() => {}}
        caretHidden
      />
    );
    const results = await axe(baseElement, disabledRules);
    expect(results).toHaveNoViolations();
  });
  it("Should not have basic accessibility issues for expand-on-hover mode", async () => {
    // baseElement is needed when using React Portals
    const { baseElement } = render(
      <DxcDropdown
        options={options}
        label="dropdown-test"
        icon={iconSVG}
        iconPosition="after"
        margin="medium"
        size="medium"
        optionsIconPosition="after"
        onSelectOption={() => {}}
        expandOnHover
      />
    );
    const results = await axe(baseElement, disabledRules);
    expect(results).toHaveNoViolations();
  });
});

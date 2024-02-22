import React from "react";
import { render } from "@testing-library/react";
import DxcFooter from "./Footer.tsx";
import { axe, toHaveNoViolations } from "jest-axe";

const social = [
  {
    href: "https://www.test.com/social",
    logo: "https://developer.apple.com/design/human-interface-guidelines/foundations/app-icons/images/icon-and-image-large-icon-settings_2x.png",
    title: "test",
  },
];
const bottom = [
  {
    href: "https://www.test.com/bottom",
    text: "bottom-link-text",
  },
];

describe("Footer component tests", () => {
  test("Footer renders with default logo", () => {
    const { getByTitle } = render(<DxcFooter></DxcFooter>);
    expect(getByTitle("DXC Logo")).toBeTruthy();
  });

  test("Footer renders with social links", () => {
    const { getByRole } = render(<DxcFooter socialLinks={social}></DxcFooter>);
    const socialIcon = getByRole("link");
    expect(socialIcon.getAttribute("href")).toBe("https://www.test.com/social");
  });

  test("Footer renders with bottom links", () => {
    const { getByText } = render(<DxcFooter bottomLinks={bottom}></DxcFooter>);
    const link = getByText("bottom-link-text");
    expect(link.getAttribute("href")).toBe("https://www.test.com/bottom");
  });

  test("Footer renders with copyright text", () => {
    const { getByText } = render(<DxcFooter copyright="test-copyright"></DxcFooter>);
    expect(getByText("test-copyright")).toBeTruthy();
  });

  test("Footer renders with correct children", () => {
    // We need to force the offsetWidth value
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 1024 });
    const { getByText } = render(
      <DxcFooter>
        <p>footer-child-text</p>
      </DxcFooter>
    );
    expect(getByText("footer-child-text")).toBeTruthy();
  });

  test("Footer renders with children in mobile", () => {
    // 425 is mobile width
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 425 });

    const { queryByText } = render(
      <DxcFooter>
        <p>footer-child-text</p>
      </DxcFooter>
    );

    expect(queryByText("footer-child-text")).toBeTruthy();
  });

  test("Footer is fully rendered", () => {
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 1024 });

    const { getAllByRole, getByText } = render(
      <DxcFooter socialLinks={social} bottomLinks={bottom} copyright="test-copyright">
        <p>footer-child-text</p>
      </DxcFooter>
    );
    const socialIcon = getAllByRole("link")[0];
    expect(socialIcon.getAttribute("href")).toBe("https://www.test.com/social");
    expect(socialIcon.getAttribute("aria-label")).toBe("test");
    const bottomLink = getByText("bottom-link-text");
    expect(bottomLink.getAttribute("href")).toBe("https://www.test.com/bottom");
    expect(getByText("test-copyright")).toBeTruthy();
    expect(getByText("footer-child-text")).toBeTruthy();
  });
});

expect.extend(toHaveNoViolations);

it("should not have basic accessibility issues", async () => {
  const { container } = render(<DxcFooter></DxcFooter>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

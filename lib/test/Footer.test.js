import React from "react";
import { render } from "@testing-library/react";
import DxcFooter from "../src/footer/Footer";
import icon from "../../app/src/images/linkedin.svg";

describe("Footer component tests", () => {
  test("Footer renders with default logo", () => {
    const { getByRole } = render(<DxcFooter></DxcFooter>);
    expect(getByRole("img")).toBeTruthy();
  });

  test("Footer renders with logo", () => {
    const { getByRole } = render(<DxcFooter logoSrc={icon}></DxcFooter>);
    expect(getByRole("img")).toBeTruthy();
  });

  test("Footer renders with social links", () => {
    const social = [
      {
        href: "https://www.test.com/test",
        logoSrc: icon,
      },
    ];
    const { getByRole } = render(<DxcFooter socialLinks={social}></DxcFooter>);
    const socialIcon = getByRole("link");
    expect(socialIcon.getAttribute("href")).toBe("https://www.test.com/test");
  });

  test("Footer renders with bottom links", () => {
    const bottom = [
      {
        href: "https://www.test.com/test",
        text: "bottom-link-text",
      },
    ];
    const { getByText } = render(<DxcFooter bottomLinks={bottom}></DxcFooter>);
    const link = getByText("bottom-link-text");
    expect(link.getAttribute("href")).toBe("https://www.test.com/test");
  });

  test("Footer renders with copyright text", () => {
    const { getByText } = render(<DxcFooter copyright="test-copyright"></DxcFooter>);
    expect(getByText("test-copyright")).toBeTruthy();
  });

  test("Footer renders with correct children", () => {
    //We need to force the offsetWidth value
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 1024 });

    const { getByText } = render(
      <DxcFooter>
        <p>footer-child-text</p>
      </DxcFooter>
    );

    expect(getByText("footer-child-text")).toBeTruthy();
  });

  test("Footer renders without children in mobile", () => {
    //425 is mobile width
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 425 });

    const { queryByText } = render(
      <DxcFooter>
        <p>footer-child-text</p>
      </DxcFooter>
    );

    expect(queryByText("footer-child-text")).toBeFalsy();
  });

  test("Footer is fully rendered", () => {
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 1024 });

    const social = [
      {
        href: "https://www.test.com/social",
        logoSrc: icon,
      },
    ];
    const bottom = [
      {
        href: "https://www.test.com/bottom",
        text: "bottom-link-text",
      },
    ];
    const { getAllByRole, getByText } = render(
      <DxcFooter socialLinks={social} bottomLinks={bottom} copyright="test-copyright">
        <p>footer-child-text</p>
      </DxcFooter>
    );
    const socialIcon = getAllByRole("link")[0];
    expect(socialIcon.getAttribute("href")).toBe("https://www.test.com/social");
    const bottomLink = getByText("bottom-link-text");
    expect(bottomLink.getAttribute("href")).toBe("https://www.test.com/bottom");
    expect(getByText("test-copyright")).toBeTruthy();
    expect(getByText("footer-child-text")).toBeTruthy();
  });
});

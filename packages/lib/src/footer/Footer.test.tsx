import { render } from "@testing-library/react";
import DxcFooter from "./Footer";

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
    const { getByTitle } = render(<DxcFooter />);
    expect(getByTitle("DXC Logo")).toBeTruthy();
  });
  test("Footer renders with social links", () => {
    const { getByRole } = render(<DxcFooter socialLinks={social} />);
    const socialIcon = getByRole("link");
    expect(socialIcon.getAttribute("href")).toBe("https://www.test.com/social");
  });
  test("Footer renders with bottom links", () => {
    const { getByText } = render(<DxcFooter bottomLinks={bottom} />);
    const link = getByText("bottom-link-text");
    expect(link.getAttribute("href")).toBe("https://www.test.com/bottom");
  });
  test("Footer renders with copyright text", () => {
    const { getByText } = render(<DxcFooter copyright="test-copyright" />);
    expect(getByText("test-copyright")).toBeTruthy();
  });
  test("Footer renders LeftContent correctly", () => {
    // We need to force the offsetWidth value
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 1024,
    });
    const { getByText } = render(
      <DxcFooter>
        <DxcFooter.LeftContent>
          <p>footer-child-text</p>
        </DxcFooter.LeftContent>
      </DxcFooter>
    );
    expect(getByText("footer-child-text")).toBeTruthy();
  });
  test("Footer renders RightContent correctly", () => {
    // We need to force the offsetWidth value
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 1024,
    });
    const { getByText } = render(
      <DxcFooter>
        <DxcFooter.RightContent>
          <p>footer-child-text</p>
        </DxcFooter.RightContent>
      </DxcFooter>
    );
    expect(getByText("footer-child-text")).toBeTruthy();
  });
  test("Footer renders LeftContent in mobile", () => {
    // 425 is mobile width
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 425,
    });

    const { queryByText } = render(
      <DxcFooter>
        <DxcFooter.LeftContent>
          <p>footer-child-text</p>
        </DxcFooter.LeftContent>
      </DxcFooter>
    );

    expect(queryByText("footer-child-text")).toBeTruthy();
  });
  test("Footer renders RightContent in mobile", () => {
    // 425 is mobile width
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 425,
    });

    const { queryByText } = render(
      <DxcFooter>
        <DxcFooter.RightContent>
          <p>footer-child-text</p>
        </DxcFooter.RightContent>
      </DxcFooter>
    );

    expect(queryByText("footer-child-text")).toBeTruthy();
  });
  test("Footer is fully rendered", () => {
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 1024,
    });

    const { getAllByRole, getByText } = render(
      <DxcFooter socialLinks={social} bottomLinks={bottom} copyright="test-copyright">
        <DxcFooter.LeftContent>
          <p>footer-left-text</p>
        </DxcFooter.LeftContent>
        <DxcFooter.RightContent>
          <p>footer-right-text</p>
        </DxcFooter.RightContent>
      </DxcFooter>
    );
    const socialIcon = getAllByRole("link")[0];
    expect(socialIcon?.getAttribute("href")).toBe("https://www.test.com/social");
    expect(socialIcon?.getAttribute("aria-label")).toBe("test");
    const bottomLink = getByText("bottom-link-text");
    expect(bottomLink.getAttribute("href")).toBe("https://www.test.com/bottom");
    expect(getByText("test-copyright")).toBeTruthy();
    expect(getByText("footer-left-text")).toBeTruthy();
    expect(getByText("footer-right-text")).toBeTruthy();
  });
});

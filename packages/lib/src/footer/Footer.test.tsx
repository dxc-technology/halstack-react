import { render } from "@testing-library/react";
import DxcFooter from "./Footer";
import { getContrastColor } from "./utils";

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

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
    const link = getByText("bottom-link-text").closest("a");
    expect(link?.getAttribute("href")).toBe("https://www.test.com/bottom");
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
    const { getByText } = render(<DxcFooter leftContent={<p>footer-left-text</p>} />);
    expect(getByText("footer-left-text")).toBeTruthy();
  });
  test("Footer renders RightContent correctly", () => {
    // We need to force the offsetWidth value
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 1024,
    });
    const { getByText } = render(<DxcFooter rightContent={<p>footer-right-text</p>} />);
    expect(getByText("footer-right-text")).toBeTruthy();
  });
  test("Footer renders LeftContent in mobile", () => {
    // 425 is mobile width
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 425,
    });

    const { queryByText } = render(<DxcFooter leftContent={<p>footer-left-text</p>} />);

    expect(queryByText("footer-left-text")).toBeTruthy();
  });
  test("Footer renders RightContent in mobile", () => {
    // 425 is mobile width
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 425,
    });

    const { queryByText } = render(<DxcFooter rightContent={<p>footer-right-text</p>} />);

    expect(queryByText("footer-right-text")).toBeTruthy();
  });
  test("Footer is fully rendered", () => {
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
      configurable: true,
      value: 1024,
    });

    const { getAllByRole, getByText } = render(
      <DxcFooter
        socialLinks={social}
        bottomLinks={bottom}
        copyright="test-copyright"
        leftContent={<p>footer-left-text</p>}
        rightContent={<p>footer-right-text</p>}
      />
    );
    const socialIcon = getAllByRole("link")[0];
    expect(socialIcon?.getAttribute("href")).toBe("https://www.test.com/social");
    expect(socialIcon?.getAttribute("aria-label")).toBe("test");
    const bottomLink = getByText("bottom-link-text").closest("a");
    expect(bottomLink?.getAttribute("href")).toBe("https://www.test.com/bottom");
    expect(getByText("test-copyright")).toBeTruthy();
    expect(getByText("footer-left-text")).toBeTruthy();
    expect(getByText("footer-right-text")).toBeTruthy();
  });
});

describe("getContrastColor function", () => {
  test("should return black color for light backgrounds", () => {
    expect(getContrastColor("#FFFFFF")).toBe("var(--color-fg-neutral-dark)");
    expect(getContrastColor("#F5F5F5")).toBe("var(--color-fg-neutral-dark)");
    expect(getContrastColor("rgb(255, 255, 255)")).toBe("var(--color-fg-neutral-dark)");
    expect(getContrastColor("rgb(245, 245, 245)")).toBe("var(--color-fg-neutral-dark)");
  });

  test("should return white color for dark backgrounds", () => {
    expect(getContrastColor("#000000")).toBe("var(--color-fg-neutral-bright)");
    expect(getContrastColor("#333333")).toBe("var(--color-fg-neutral-bright)");
    expect(getContrastColor("rgb(0, 0, 0)")).toBe("var(--color-fg-neutral-bright)");
    expect(getContrastColor("rgb(51, 51, 51)")).toBe("var(--color-fg-neutral-bright)");
  });
});

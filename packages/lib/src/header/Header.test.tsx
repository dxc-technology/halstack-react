import { render } from "@testing-library/react";
import DxcHeader from "./Header";

const defaultHeaderBranding = {
  logo: {
    src: "url-to-dxc-logo",
    alt: "DXC Logo",
  },
};

describe("Header component tests", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: false,
      })),
    });
  });
  test("Header renders with default logo", () => {
    const { getByAltText } = render(<DxcHeader branding={defaultHeaderBranding} />);
    expect(getByAltText("DXC Logo")).toBeTruthy();
  });
});

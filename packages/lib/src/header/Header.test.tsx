import { fireEvent, render } from "@testing-library/react";
import DxcHeader from "./Header";

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
    const { getByTitle } = render(<DxcHeader />);
    expect(getByTitle("DXC Logo")).toBeTruthy();
  });
  test("Call correct function on logo click", () => {
    const onClick = jest.fn();
    const { getByTitle } = render(<DxcHeader onClick={onClick} />);
    const logo = getByTitle("DXC Logo");
    fireEvent.click(logo);
    expect(onClick).toHaveBeenCalled();
  });
  test("Header renders with correct children", () => {
    // We need to force the offsetWidth value
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 1024 });

    const { getByText } = render(<DxcHeader content={<p>header-child-text</p>} />);
    expect(getByText("header-child-text")).toBeTruthy();
  });
  test("Header renders menu button in mobile", () => {
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 425 });
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(() => ({
        matches: true,
      })),
    });
    const { getByText } = render(<DxcHeader responsiveContent={() => <p>header-child-text</p>} />);
    expect(getByText("Menu")).toBeTruthy();
  });
});

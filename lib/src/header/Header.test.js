import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcHeader from "./Header";
import icon from "../../app/src/images/linkedin.svg";

describe("Header component tests", () => {
  test("Header renders with default logo", () => {
    const { getByTitle } = render(<DxcHeader></DxcHeader>);
    expect(getByTitle("DXC Logo")).toBeTruthy();
  });

  test("Call correct function on logo click", () => {
    const onClick = jest.fn();
    const { getByTitle } = render(<DxcHeader onClick={onClick}></DxcHeader>);
    const logo = getByTitle("DXC Logo");
    fireEvent.click(logo);
    expect(onClick).toHaveBeenCalled();
  });

  test("Header renders with correct children", () => {
    // We need to force the offsetWidth value
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 1024 });

    const { getByText } = render(<DxcHeader content={<p>header-child-text</p>}></DxcHeader>);
    expect(getByText("header-child-text")).toBeTruthy();
  });

  test("Header renders menu button in mobile", () => {
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 425 });

    const { getByText } = render(<DxcHeader responsiveContent={(closeMenu) => <p>header-child-text</p>}></DxcHeader>);
    expect(getByText("Menu")).toBeTruthy();
  });
});

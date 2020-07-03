import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcHeader from "../src/header/Header";
import icon from "../../app/src/images/linkedin.svg";

describe("Header component tests", () => {
  test("Header renders with default logo", () => {
    const { getByRole } = render(<DxcHeader></DxcHeader>);
    expect(getByRole("img")).toBeTruthy();
  });

  test("Header renders with logo", () => {
    const { getByRole } = render(<DxcHeader logoSrc={icon}></DxcHeader>);
    expect(getByRole("img")).toBeTruthy();
  });

  test("Call correct function on logo click", () => {
    const onClick = jest.fn();
    const { getByRole } = render(<DxcHeader onClick={onClick}></DxcHeader>);
    const logo = getByRole("img");
    fireEvent.click(logo);
    expect(onClick).toHaveBeenCalled();
  });

  test("Header renders with correct children", () => {
    //We need to force the offsetWidth value
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

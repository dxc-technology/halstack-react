import React from "react";
import { render } from "@testing-library/react";
import DxcSidenav from "../src/sidenav/Sidenav";

const navContent = <p>nav-content-test</p>;

describe("Sidenav component tests", () => {
  test("Sidenav  renders nav  content", () => {
    const { getByText, queryByTestId } = render(<DxcSidenav>{navContent}</DxcSidenav>);
    expect(getByText("nav-content-test")).toBeTruthy();
  });

  test("Sidenav renders nav and page content in mobile version", () => {
    //425 is mobile width
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 425 });
    const { getByText } = render(<DxcSidenav>{navContent}</DxcSidenav>);
    expect(getByText("nav-content-test")).toBeTruthy();
  });
});

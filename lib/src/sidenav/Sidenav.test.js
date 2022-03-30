import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcSidenav from "./Sidenav";

const navContent = <p>nav-content-test</p>;

describe("Sidenav component tests", () => {
  test("Sidenav  renders nav  content", () => {
    const { getByText } = render(<DxcSidenav>{navContent}</DxcSidenav>);
    expect(getByText("nav-content-test")).toBeTruthy();
  });

  test("Sidenav renders nav and page content in mobile version", () => {
    //425 is mobile width
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 425 });
    const { getByText } = render(<DxcSidenav>{navContent}</DxcSidenav>);
    expect(getByText("nav-content-test")).toBeTruthy();
  });

  test("Sidenav renders compound components", () => {
    const { getByText } = render(
      <DxcSidenav>
        <DxcSidenav.Title>test-title</DxcSidenav.Title>
        <DxcSidenav.Subtitle>test-subtitle</DxcSidenav.Subtitle>
        <DxcSidenav.Link href="#">test-link</DxcSidenav.Link>
      </DxcSidenav>
    );
    expect(getByText("test-title")).toBeTruthy();
    expect(getByText("test-subtitle")).toBeTruthy();
    expect(getByText("test-link")).toBeTruthy();
  });

  test("Sidenav link onClick", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <DxcSidenav>
        <DxcSidenav.Link onClick={onClick}>test-link</DxcSidenav.Link>
      </DxcSidenav>
    );

    const link = getByText("test-link");
    fireEvent.click(link);
    expect(onClick).toHaveBeenCalled();
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcSidenav from "../src/sidenav/Sidenav";

const navContent = <p>nav-content-test</p>;
const pageContent = <p>page-content-test</p>;

describe("Sidenav component tests", () => {
  test("Sidenav in overlay mode renders nav and page content, and arrow", () => {
    const { getByText, queryByTestId } = render(
      <DxcSidenav navContent={navContent} pageContent={pageContent}></DxcSidenav>
    );
    expect(getByText("nav-content-test")).toBeTruthy();
    expect(getByText("page-content-test")).toBeTruthy();
    expect(queryByTestId("arrow-to-right")).toBeTruthy();
  });

  test("Sidenav in push mode renders nav and page content, and arrow", () => {
    const { getByText, queryByTestId } = render(
      <DxcSidenav navContent={navContent} pageContent={pageContent} mode="push"></DxcSidenav>
    );
    expect(getByText("nav-content-test")).toBeTruthy();
    expect(getByText("page-content-test")).toBeTruthy();
    expect(queryByTestId("arrow-to-right")).toBeTruthy();
  });

  test("Sidenav in overlay mode renders nav and page content in mobile version", () => {
    //425 is mobile width
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 425 });
    const { getByText } = render(<DxcSidenav navContent={navContent} pageContent={pageContent}></DxcSidenav>);
    expect(getByText("nav-content-test")).toBeTruthy();
    expect(getByText("page-content-test")).toBeTruthy();
  });

  test("Sidenav in push mode renders nav and page content in mobile version", () => {
    //425 is mobile width
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 425 });
    const { getByText } = render(
      <DxcSidenav navContent={navContent} pageContent={pageContent} mode="push"></DxcSidenav>
    );
    expect(getByText("nav-content-test")).toBeTruthy();
    expect(getByText("page-content-test")).toBeTruthy();
  });

  test("Sidenav in overlay mode not renders arrow", () => {
    //We need to force the offsetWidth value to detect that is not responsive
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 1024 });
    const { queryByTestId } = render(
      <DxcSidenav navContent={navContent} pageContent={pageContent} displayArrow={false}></DxcSidenav>
    );
    expect(queryByTestId("arrow-to-right")).toBeNull();
  });

  test("Sidenav in push mode not renders arrow", () => {
    //We need to force the offsetWidth value to detect that is not responsive
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 1024 });
    const { queryByTestId } = render(
      <DxcSidenav navContent={navContent} pageContent={pageContent} displayArrow={false} mode="push"></DxcSidenav>
    );
    expect(queryByTestId("arrow-to-right")).toBeNull();
  });

  test("Sidenav renders arrow with arrow distance", () => {
    const { queryByTestId } = render(
      <DxcSidenav navContent={navContent} pageContent={pageContent} arrowDistance="10px"></DxcSidenav>
    );
    expect(queryByTestId("arrow-to-right")).toBeTruthy();
  });

  test("Sidenav in overlay mode always renders arrow in mobile version", () => {
    //425 is mobile width
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 425 });
    const { queryByTestId } = render(
      <DxcSidenav navContent={navContent} pageContent={pageContent} displayArrow={false}></DxcSidenav>
    );
    expect(queryByTestId("arrow-to-right")).toBeTruthy();
  });

  test("Sidenav in push mode always renders arrow in mobile version", () => {
    //425 is mobile width
    Object.defineProperty(HTMLElement.prototype, "offsetWidth", { configurable: true, value: 425 });
    const { queryByTestId } = render(
      <DxcSidenav navContent={navContent} pageContent={pageContent} displayArrow={false} mode="push"></DxcSidenav>
    );
    expect(queryByTestId("arrow-to-right")).toBeTruthy();
  });
});

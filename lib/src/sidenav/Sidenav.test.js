import React from "react";
import { render } from "@testing-library/react";
import DxcSidenav from "./Sidenav";

describe("Sidenav component tests", () => {
  test("Sidenav renders nav content", () => {
    const { getByText } = render(
      <DxcSidenav>
        <p>nav-content-test</p>
      </DxcSidenav>
    );
    expect(getByText("nav-content-test")).toBeTruthy();
  });

  test("Sidenav renders anchors correctly", () => {
    const { getByText } = render(
      <DxcSidenav>
        <DxcSidenav.Title>Title</DxcSidenav.Title>
        <p>nav-content-test</p>
        <DxcSidenav.Link href="#">Link</DxcSidenav.Link>
      </DxcSidenav>
    );
    const link = getByText("Link");
    expect(link.closest("a").getAttribute("href")).toBe("#");
  });
});

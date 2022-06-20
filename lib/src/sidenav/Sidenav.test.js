import React from "react";
import { render } from "@testing-library/react";
import DxcSidenav from "./Sidenav";

describe("Sidenav component tests", () => {
  test("Sidenav renders anchors and Section correctly", () => {
    const { getByText } = render(
      <DxcSidenav>
        <DxcSidenav.Title>Title</DxcSidenav.Title>
        <DxcSidenav.Section>
          <p>nav-content-test</p>
          <DxcSidenav.Link href="#">Link</DxcSidenav.Link>
        </DxcSidenav.Section>
      </DxcSidenav>
    );
    expect(getByText("nav-content-test")).toBeTruthy();
    const link = getByText("Link");
    expect(link.closest("a").getAttribute("href")).toBe("#");
  });
});

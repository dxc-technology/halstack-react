import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcSidenav from "./Sidenav.tsx";

describe("Sidenav component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcSidenav>
        <DxcSidenav.Section>
          <p>nav-content-test</p>
          <DxcSidenav.Link href="#">Link</DxcSidenav.Link>
        </DxcSidenav.Section>
      </DxcSidenav>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

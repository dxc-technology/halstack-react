import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcNavTabs from "./NavTabs.tsx";

describe("Tabs component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(
      <DxcNavTabs>
        <DxcNavTabs.Tab href="/test1" active>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="/test2" disabled>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="/test3">Tab 3</DxcNavTabs.Tab>
      </DxcNavTabs>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

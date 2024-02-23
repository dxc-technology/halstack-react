import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import DxcTabs from "./Tabs.tsx";

const sampleTabs = [
  {
    label: "Tab-1",
  },
  {
    label: "Tab-2",
  },
  {
    label: "Tab-3",
  },
];

describe("Tabs component accessibility tests", () => {
  it("Should not have basic accessibility issues", async () => {
    const { container } = render(<DxcTabs tabs={sampleTabs}></DxcTabs>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

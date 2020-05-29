import React from "react";
import { render } from "@testing-library/react";
import DxcTabsForSections from "../src/tabs-for-sections/TabsForSections";

const sections = [
  {
    tabLabel: "S1",
    section: () => <div>test-section-1</div>,
  },
  {
    tabLabel: "S2",
    section: () => <div>test-section-2</div>,
  },
  {
    tabLabel: "S3",
    section: () => <div>test-section-3</div>,
  },
];

describe("TabsForSections component tests", () => {
  test("TabsForSections renders with correct sections label", () => {
    const { getByText } = render(<DxcTabsForSections sections={sections}></DxcTabsForSections>);
    expect(getByText("S1")).toBeTruthy();
    expect(getByText("S2")).toBeTruthy();
    expect(getByText("S3")).toBeTruthy();
  });

  test("TabsForSections renders with correct sections content", () => {
    const { getByText } = render(<DxcTabsForSections sections={sections}></DxcTabsForSections>);
    expect(getByText("test-section-1")).toBeTruthy();
    expect(getByText("test-section-2")).toBeTruthy();
    expect(getByText("test-section-3")).toBeTruthy();
  });
});

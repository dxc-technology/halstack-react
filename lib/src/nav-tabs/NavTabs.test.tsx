import React from "react";
import { render } from "@testing-library/react";
import DxcNavTabs from "./NavTabs";

describe("Tabs component tests", () => {
  test("Tabs render with correct labels and attributes", () => {
    const { getByText, getAllByRole, getByRole } = render(
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
    expect(getByRole("tablist")).toBeTruthy();
    expect(getByRole("tablist").getAttribute("aria-label")).toBe("Navigation tabs");
    expect(getByText("Tab 1")).toBeTruthy();
    expect(getByText("Tab 2")).toBeTruthy();
    expect(getByText("Tab 3")).toBeTruthy();
    const tabs = getAllByRole("tab");
    tabs.forEach((tab, index) => {
      expect(tab.getAttribute("aria-selected")).toBe((index === 0).toString());
    });
    const anchors = getAllByRole("tab");
    expect(anchors.length).toBe(3);
    expect(anchors[0].getAttribute("href")).toBe("/test1");
    expect(anchors[1].getAttribute("href")).toBeFalsy();
    expect(anchors[2].getAttribute("href")).toBe("/test3");
    expect(anchors[0].getAttribute("tabindex")).toBe("0");
    expect(anchors[1].getAttribute("tabindex")).toBe("-1");
    expect(anchors[2].getAttribute("tabindex")).toBe("-1");
  });

  test("Tabs render with correct labels, badges and icons", () => {
    const { getByText, queryByText } = render(
      <DxcNavTabs>
        <DxcNavTabs.Tab href="/test1" active notificationNumber={10}>
          Tab 1
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="/test2" disabled notificationNumber={20}>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="/test3" notificationNumber={1000} icon="Settings">
          Tab 3
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    );
    expect(getByText("10")).toBeTruthy();
    expect(queryByText("20")).toBeFalsy();
    expect(getByText("+99")).toBeTruthy();
  });

  test("Tabs render with correct tab index", () => {
    const { getAllByRole } = render(
      <DxcNavTabs tabIndex={3}>
        <DxcNavTabs.Tab href="/test1">Tab 1</DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="/test2" disabled>
          Tab 2
        </DxcNavTabs.Tab>
        <DxcNavTabs.Tab href="/test3" active>
          Tab 3
        </DxcNavTabs.Tab>
      </DxcNavTabs>
    );
    const tabs = getAllByRole("tab");
    expect(tabs[0].getAttribute("tabindex")).toBe("-1");
    expect(tabs[1].getAttribute("tabindex")).toBe("-1");
    expect(tabs[2].getAttribute("tabindex")).toBe("3");
  });
});

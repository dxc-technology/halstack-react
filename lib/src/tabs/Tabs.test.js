import React from "react";
import { render, fireEvent } from "@testing-library/react";
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
const sampleTabsWithBadge = [
  {
    label: "Tab-1",
    notificationNumber: 10,
  },
  {
    label: "Tab-2",
    notificationNumber: 20,
  },
  {
    label: "Tab-3",
    notificationNumber: 101,
  },
];
const sampleTabsMiddleDisabled = [
  {
    label: "Tab-1",
  },
  {
    label: "Tab-2",
    isDisabled: true,
  },
  {
    label: "Tab-3",
  },
];
const sampleTabsLastTabNonDisabled = [
  {
    label: "Tab-1",
    isDisabled: true,
  },
  {
    label: "Tab-2",
    isDisabled: true,
  },
  {
    label: "Tab-3",
  },
];

describe("Tabs component tests", () => {
  test("Tabs render with correct labels", () => {
    const { getByText, getAllByRole } = render(<DxcTabs tabs={sampleTabs}></DxcTabs>);
    const tabs = getAllByRole("tab");
    expect(getByText("Tab-1")).toBeTruthy();
    expect(getByText("Tab-2")).toBeTruthy();
    expect(getByText("Tab-3")).toBeTruthy();
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
  });

  test("Tabs render with correct labels and badges", () => {
    const { getByText } = render(<DxcTabs tabs={sampleTabsWithBadge}></DxcTabs>);
    expect(getByText("10")).toBeTruthy();
    expect(getByText("20")).toBeTruthy();
    expect(getByText("+99")).toBeTruthy();
  });

  test("Tabs render with an initially active tab", () => {
    const { getAllByRole } = render(<DxcTabs defaultActiveTabIndex={2} tabs={sampleTabsWithBadge} />);
    const tabs = getAllByRole("tab");
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("true");
  });

  test("Tabs render with disabled tab", () => {
    const { getAllByRole } = render(
      <DxcTabs
        tabs={[
          {
            label: "Tab-1",
            isDisabled: true,
          },
          {
            label: "Tab-2",
          },
        ]}
      />
    );
    expect(getAllByRole("tab")[0].hasAttribute("disabled")).toBeTruthy();
    expect(getAllByRole("tab")[1].hasAttribute("disabled")).toBeFalsy();
  });

  test("Uncontrolled tabs", () => {
    const onTabClick = jest.fn();
    const { getByText, getAllByRole } = render(<DxcTabs tabs={sampleTabs} onTabClick={onTabClick}></DxcTabs>);
    const tabs = getAllByRole("tab");
    const tab1 = getByText("Tab-1");
    const tab2 = getByText("Tab-2");
    fireEvent.click(tab2);
    expect(onTabClick).toHaveBeenCalledWith(1);
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("true");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    fireEvent.click(tab1);
    expect(onTabClick).toHaveBeenCalledWith(0);
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
  });

  test("Controlled tabs", () => {
    const onTabClick = jest.fn();
    const { getAllByRole } = render(<DxcTabs tabs={sampleTabs} onTabClick={onTabClick} activeTabIndex={0}></DxcTabs>);
    const tabs = getAllByRole("tab");
    fireEvent.click(tabs[1]);
    expect(onTabClick).toHaveBeenCalledWith(1);
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    fireEvent.click(tabs[2]);
    expect(onTabClick).toHaveBeenCalledWith(2);
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
  });

  test("Uncontrolled tabs should have focus in the first non-disabled tab", () => {
    const onTabClick = jest.fn();
    const { getAllByRole } = render(<DxcTabs tabs={sampleTabsLastTabNonDisabled} onTabClick={onTabClick}></DxcTabs>);
    const tabs = getAllByRole("tab");
    expect(tabs[0].hasAttribute("disabled")).toBeTruthy();
    expect(tabs[1].hasAttribute("disabled")).toBeTruthy();
    expect(tabs[2].hasAttribute("disabled")).toBeFalsy();
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("true");
  });

  test("Controlled tabs with active index in disabled tab should not change focus to the first available tab", () => {
    const onTabClick = jest.fn();
    const { getAllByRole } = render(
      <DxcTabs tabs={sampleTabsLastTabNonDisabled} onTabClick={onTabClick} activeTabIndex={0}></DxcTabs>
    );
    const tabs = getAllByRole("tab");
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    expect(tabs[0].hasAttribute("disabled")).toBeTruthy();
    expect(tabs[1].hasAttribute("disabled")).toBeTruthy();
    expect(tabs[2].hasAttribute("disabled")).toBeFalsy();
    fireEvent.click(tabs[2]);
    expect(onTabClick).toHaveBeenCalledWith(2);
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    expect(tabs[0].hasAttribute("disabled")).toBeTruthy();
    expect(tabs[1].hasAttribute("disabled")).toBeTruthy();
    expect(tabs[2].hasAttribute("disabled")).toBeFalsy();
  });

  test("Select tabs with keyboard event arrows", () => {
    const onTabClick = jest.fn();
    const { getByText, getByRole, getAllByRole } = render(
      <DxcTabs tabs={sampleTabs} onTabClick={onTabClick}></DxcTabs>
    );
    const tabList = getByRole("tablist");
    const tab1 = getByText("Tab-1");
    const tabs = getAllByRole("tab");
    fireEvent.click(tab1);
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    expect(onTabClick).toHaveBeenCalledWith(0);
    fireEvent.keyDown(tabList, { key: "ArrowRight" });
    fireEvent.keyDown(tabList, { key: "Enter" });
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("true");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    expect(onTabClick).toHaveBeenCalledWith(1);
    fireEvent.keyDown(tabList, { key: "ArrowRight" });
    fireEvent.keyDown(tabList, { key: "Enter" });
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("true");
    expect(onTabClick).toHaveBeenCalledWith(2);
    fireEvent.keyDown(tabList, { key: "ArrowLeft" });
    fireEvent.keyDown(tabList, { key: "Enter" });
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("true");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    expect(onTabClick).toHaveBeenCalledWith(1);
    fireEvent.keyDown(tabList, { key: "ArrowLeft" });
    fireEvent.keyDown(tabList, { key: "Enter" });
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    expect(onTabClick).toHaveBeenCalledWith(0);
    fireEvent.keyDown(tabList, { key: "ArrowLeft" });
    fireEvent.keyDown(tabList, { key: "Enter" });
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("true");
    expect(onTabClick).toHaveBeenCalledWith(2);
    fireEvent.keyDown(tabList, { key: "ArrowRight" });
    fireEvent.keyDown(tabList, { key: "Enter" });
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    expect(onTabClick).toHaveBeenCalledWith(0);
  });

  test("Skip disabled tab with keyboard event arrows", () => {
    const onTabClick = jest.fn();
    const { getByText, getByRole, getAllByRole } = render(
      <DxcTabs tabs={sampleTabsMiddleDisabled} onTabClick={onTabClick}></DxcTabs>
    );
    const tabList = getByRole("tablist");
    const tab1 = getByText("Tab-1");
    const tabs = getAllByRole("tab");
    fireEvent.click(tab1);
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    expect(onTabClick).toHaveBeenCalledWith(0);
    fireEvent.keyDown(tabList, { key: "ArrowRight" });
    fireEvent.keyDown(tabList, { key: " " });
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("true");
    expect(onTabClick).toHaveBeenCalledWith(2);
  });
});

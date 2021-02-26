import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DxcTabs from "../src/tabs/Tabs";

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
    notificationNumber: "10",
  },
  {
    label: "Tab-2",
    notificationNumber: "20",
  },
  {
    label: "Tab-3",
    notificationNumber: "101",
  },
];

describe("Tabs component tests", () => {
  test("Tabs render with correct labels", () => {
    const { getByText } = render(<DxcTabs tabs={sampleTabs}></DxcTabs>);
    expect(getByText("Tab-1")).toBeTruthy();
    expect(getByText("Tab-2")).toBeTruthy();
    expect(getByText("Tab-3")).toBeTruthy();
  });
  test("Tabs render with correct labels and badges", () => {
    const { getByText } = render(<DxcTabs tabs={sampleTabsWithBadge}></DxcTabs>);
    expect(getByText("10")).toBeTruthy();
    expect(getByText("20")).toBeTruthy();
    expect(getByText("+99")).toBeTruthy();
  });

  test("Tabs render with correct icons", () => {
    const { getAllByRole } = render(
      <DxcTabs
        tabs={[
          {
            label: "Tab-1",
            iconSrc: "/testIcon1.png",
          },
          {
            label: "Tab-2",
            iconSrc: "/testIcon2.png",
          },
          {
            label: "Tab-3",
            iconSrc: "/testIcon3.png",
          },
        ]}
      ></DxcTabs>
    );
    expect(getAllByRole("img")[0].getAttribute("src")).toBe("/testIcon1.png");
    expect(getAllByRole("img")[1].getAttribute("src")).toBe("/testIcon2.png");
    expect(getAllByRole("img")[2].getAttribute("src")).toBe("/testIcon3.png");
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
      ></DxcTabs>
    );
    expect(getAllByRole("tab")[0].hasAttribute("disabled")).toBeTruthy();
    expect(getAllByRole("tab")[1].hasAttribute("disabled")).toBeFalsy();
  });

  test("Uncontrolled tabs", () => {
    const onTabClick = jest.fn();
    const { getByText } = render(<DxcTabs tabs={sampleTabs} onTabClick={onTabClick}></DxcTabs>);
    const tab1 = getByText("Tab-1");
    const tab2 = getByText("Tab-2");
    fireEvent.click(tab2);
    expect(onTabClick).toHaveBeenCalledWith(1);
    fireEvent.click(tab1);
    expect(onTabClick).toHaveBeenCalledWith(0);
  });

  test("Controlled tabs", () => {
    const onTabClick = jest.fn();
    const { getByText } = render(<DxcTabs tabs={sampleTabs} onTabClick={onTabClick} activeTabIndex={0}></DxcTabs>);
    const tab2 = getByText("Tab-2");
    const tab3 = getByText("Tab-3");
    fireEvent.click(tab2);
    expect(onTabClick).toHaveBeenCalledWith(1);
    fireEvent.click(tab3);
    expect(onTabClick).toHaveBeenCalledWith(2);
  });
});

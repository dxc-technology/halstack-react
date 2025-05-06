import { fireEvent, render } from "@testing-library/react";
import DxcTabsLegacy from "./TabsLegacy";

const sampleTabsLegacy = [
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
const sampleTabsWithBadgeLegacy = [
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
const sampleTabsMiddleDisabledLegacy = [
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
const sampleTabsLastTabNonDisabledLegacy = [
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

describe("Tabs component tests (Legacy)", () => {
  test("Tabs render with correct labels", () => {
    const { getByText, getAllByRole } = render(<DxcTabsLegacy tabs={sampleTabsLegacy}></DxcTabsLegacy>);
    const tabs = getAllByRole("tab");
    expect(getByText("Tab-1")).toBeTruthy();
    expect(getByText("Tab-2")).toBeTruthy();
    expect(getByText("Tab-3")).toBeTruthy();
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
  });

  test("Tabs render with correct labels and badges", () => {
    const { getByText } = render(<DxcTabsLegacy tabs={sampleTabsWithBadgeLegacy}></DxcTabsLegacy>);
    expect(getByText("10")).toBeTruthy();
    expect(getByText("20")).toBeTruthy();
    expect(getByText("+99")).toBeTruthy();
  });

  test("Tabs render with an initially active tab", () => {
    const { getAllByRole } = render(<DxcTabsLegacy defaultActiveTabIndex={2} tabs={sampleTabsWithBadgeLegacy} />);
    const tabs = getAllByRole("tab");
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("true");
  });

  test("Tabs render with disabled tab", () => {
    const { getAllByRole } = render(
      <DxcTabsLegacy
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
    const tabs = getAllByRole("tab");
    expect(tabs[0]?.hasAttribute("disabled")).toBeTruthy();
    expect(tabs[1]?.hasAttribute("disabled")).toBeFalsy();
  });

  test("Uncontrolled tabs", () => {
    const onTabClick = jest.fn();
    const { getByText, getAllByRole } = render(
      <DxcTabsLegacy tabs={sampleTabsLegacy} onTabClick={onTabClick}></DxcTabsLegacy>
    );
    const tabs = getAllByRole("tab");
    const tab1 = getByText("Tab-1");
    const tab2 = getByText("Tab-2");
    fireEvent.click(tab2);
    expect(onTabClick).toHaveBeenCalledWith(1);
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    fireEvent.click(tab1);
    expect(onTabClick).toHaveBeenCalledWith(0);
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
  });

  test("Controlled tabs", () => {
    const onTabClick = jest.fn();
    const { getAllByRole } = render(
      <DxcTabsLegacy tabs={sampleTabsLegacy} onTabClick={onTabClick} activeTabIndex={0}></DxcTabsLegacy>
    );
    const tabs = getAllByRole("tab");
    if (tabs[1]) {
      fireEvent.click(tabs[1]);
    }
    expect(onTabClick).toHaveBeenCalledWith(1);
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    if (tabs[2]) {
      fireEvent.click(tabs[2]);
    }
    expect(onTabClick).toHaveBeenCalledWith(2);
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
  });

  test("Uncontrolled tabs should have focus in the first non-disabled tab", () => {
    const onTabClick = jest.fn();
    const { getAllByRole } = render(
      <DxcTabsLegacy tabs={sampleTabsLastTabNonDisabledLegacy} onTabClick={onTabClick}></DxcTabsLegacy>
    );
    const tabs = getAllByRole("tab");
    expect(tabs[0]?.hasAttribute("disabled")).toBeTruthy();
    expect(tabs[1]?.hasAttribute("disabled")).toBeTruthy();
    expect(tabs[2]?.hasAttribute("disabled")).toBeFalsy();
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("true");
  });

  test("Controlled tabs with active index in disabled tab should not change focus to the first available tab", () => {
    const onTabClick = jest.fn();
    const { getAllByRole } = render(
      <DxcTabsLegacy
        tabs={sampleTabsLastTabNonDisabledLegacy}
        onTabClick={onTabClick}
        activeTabIndex={0}
      ></DxcTabsLegacy>
    );
    const tabs = getAllByRole("tab");
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[0]?.hasAttribute("disabled")).toBeTruthy();
    expect(tabs[1]?.hasAttribute("disabled")).toBeTruthy();
    expect(tabs[2]?.hasAttribute("disabled")).toBeFalsy();
    if (tabs[2]) {
      fireEvent.click(tabs[2]);
    }
    expect(onTabClick).toHaveBeenCalledWith(2);
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[0]?.hasAttribute("disabled")).toBeTruthy();
    expect(tabs[1]?.hasAttribute("disabled")).toBeTruthy();
    expect(tabs[2]?.hasAttribute("disabled")).toBeFalsy();
  });

  test("Select tabs with keyboard event arrows", () => {
    const onTabClick = jest.fn();
    const { getByText, getByRole, getAllByRole } = render(
      <DxcTabsLegacy tabs={sampleTabsLegacy} onTabClick={onTabClick}></DxcTabsLegacy>
    );
    const tabList = getByRole("tablist");
    const tab1 = getByText("Tab-1");
    const tabs = getAllByRole("tab");
    fireEvent.click(tab1);
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(onTabClick).toHaveBeenCalledWith(0);
    fireEvent.keyDown(tabList, { key: "ArrowRight" });
    fireEvent.keyDown(tabList, { key: "Enter" });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(onTabClick).toHaveBeenCalledWith(1);
    fireEvent.keyDown(tabList, { key: "ArrowRight" });
    fireEvent.keyDown(tabList, { key: "Enter" });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("true");
    expect(onTabClick).toHaveBeenCalledWith(2);
    fireEvent.keyDown(tabList, { key: "ArrowLeft" });
    fireEvent.keyDown(tabList, { key: "Enter" });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(onTabClick).toHaveBeenCalledWith(1);
    fireEvent.keyDown(tabList, { key: "ArrowLeft" });
    fireEvent.keyDown(tabList, { key: "Enter" });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(onTabClick).toHaveBeenCalledWith(0);
    fireEvent.keyDown(tabList, { key: "ArrowLeft" });
    fireEvent.keyDown(tabList, { key: "Enter" });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("true");
    expect(onTabClick).toHaveBeenCalledWith(2);
    fireEvent.keyDown(tabList, { key: "ArrowRight" });
    fireEvent.keyDown(tabList, { key: "Enter" });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(onTabClick).toHaveBeenCalledWith(0);
  });

  test("Skip disabled tab with keyboard event arrows", () => {
    const onTabClick = jest.fn();
    const { getByText, getByRole, getAllByRole } = render(
      <DxcTabsLegacy tabs={sampleTabsMiddleDisabledLegacy} onTabClick={onTabClick}></DxcTabsLegacy>
    );
    const tabList = getByRole("tablist");
    const tab1 = getByText("Tab-1");
    const tabs = getAllByRole("tab");
    fireEvent.click(tab1);
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(onTabClick).toHaveBeenCalledWith(0);
    fireEvent.keyDown(tabList, { key: "ArrowRight" });
    fireEvent.keyDown(tabList, { key: " " });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("true");
    expect(onTabClick).toHaveBeenCalledWith(2);
  });
});

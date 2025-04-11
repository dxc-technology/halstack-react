import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import DxcTabs from "./Tabs";

(global as any).ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

const sampleTabs = (
  <DxcTabs>
    <DxcTabs.Tab label="Tab-1" notificationNumber={10} defaultActive>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-2" notificationNumber={20}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-3" notificationNumber={30}>
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);
const sampleTabsWithBadge = (
  <DxcTabs>
    <DxcTabs.Tab label="Tab-1" notificationNumber={10}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-2" notificationNumber={20}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-3" notificationNumber={101} defaultActive>
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);

const sampleTabsFirstDisabled = (
  <DxcTabs>
    <DxcTabs.Tab label="Tab-1" disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-2">
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);
const sampleTabsInteraction = (onTabClick: (() => void)[]) => (
  <DxcTabs>
    <DxcTabs.Tab label="Tab-1" onClick={onTabClick[0]} defaultActive>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-2" onClick={onTabClick[1]}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-3" onClick={onTabClick[2]}>
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);
const sampleTabsMiddleDisabled = (onTabClick: (() => void)[]) => (
  <DxcTabs>
    <DxcTabs.Tab label="Tab-1" onClick={onTabClick[0]}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-2" onClick={onTabClick[1]} disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-3" onClick={onTabClick[2]}>
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);

const sampleTabsLastTabNonDisabledFirstActive = (onTabClick: (() => void)[]) => (
  <DxcTabs>
    <DxcTabs.Tab label="Tab-1" onClick={onTabClick[0]} disabled defaultActive>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-2" onClick={onTabClick[1]} disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-3" onClick={onTabClick[2]}>
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);

const sampleControlledTabsInteraction = (onTabClick: (() => void)[]) => (
  <DxcTabs>
    <DxcTabs.Tab label="Tab-1" onClick={onTabClick[0]} active>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-2" onClick={onTabClick[1]}>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-3" onClick={onTabClick[2]}>
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);

describe("Tabs component tests", () => {
  test("Tabs render with correct labels", () => {
    const { getByText, getAllByRole } = render(sampleTabs);
    const tabs = getAllByRole("tab");

    expect(getByText("Tab-1")).toBeTruthy();
    expect(getByText("Tab-2")).toBeTruthy();
    expect(getByText("Tab-3")).toBeTruthy();

    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
  });

  test("Tabs render with correct labels and badges", () => {
    const { getByText } = render(sampleTabsWithBadge);
    expect(getByText("10")).toBeTruthy();
    expect(getByText("20")).toBeTruthy();
    expect(getByText("+99")).toBeTruthy();
  });

  test("Tabs render with an initially active tab", () => {
    const { getAllByRole } = render(sampleTabsWithBadge);
    const tabs = getAllByRole("tab");
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("true");
  });

  test("Tabs render with disabled tab", () => {
    const { getAllByRole } = render(sampleTabsFirstDisabled);
    const tabs = getAllByRole("tab");
    expect(tabs[0]?.hasAttribute("disabled")).toBeTruthy();
    expect(tabs[1]?.hasAttribute("disabled")).toBeFalsy();
  });

  test("Tabs interaction", () => {
    const onTabClick = [jest.fn(), jest.fn(), jest.fn()];
    const { getAllByRole } = render(sampleTabsInteraction(onTabClick));
    const tabs = getAllByRole("tab");
    tabs[0] && fireEvent.click(tabs[0]);
    expect(onTabClick[0]).toHaveBeenCalled();
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    tabs[1] && fireEvent.click(tabs[1]);
    expect(onTabClick[1]).toHaveBeenCalled();
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    tabs[2] && fireEvent.click(tabs[2]);
    expect(onTabClick[2]).toHaveBeenCalled();
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("true");
  });

  test("Tabs with active index in disabled tab should not be selectable", () => {
    const onTabClick = [jest.fn(), jest.fn(), jest.fn()];
    const { getAllByRole } = render(sampleTabsLastTabNonDisabledFirstActive(onTabClick));
    const tabs = getAllByRole("tab");
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[0]?.hasAttribute("disabled")).toBeTruthy();
    expect(tabs[1]?.hasAttribute("disabled")).toBeTruthy();
    expect(tabs[2]?.hasAttribute("disabled")).toBeFalsy();
  });

  test("Select tabs with keyboard event arrows", () => {
    const onTabClick = [jest.fn(), jest.fn(), jest.fn()];
    const { getByText, getByRole, getAllByRole } = render(sampleTabsInteraction(onTabClick));
    const tabList = getByRole("tablist");
    const tab1 = getByText("Tab-1");
    const tabs = getAllByRole("tab");
    fireEvent.click(tab1);
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(onTabClick[0]).toHaveBeenCalled();
    fireEvent.keyDown(tabList, { key: "ArrowRight" });
    expect(tabs[1]).toHaveFocus();
    tabs[1] && fireEvent.keyDown(tabs[1], { key: "Enter" });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(onTabClick[1]).toHaveBeenCalled();
    fireEvent.keyDown(tabList, { key: "ArrowRight" });
    expect(tabs[2]).toHaveFocus();
    tabs[2] && fireEvent.keyDown(tabs[2], { key: "Enter" });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("true");
    expect(onTabClick[2]).toHaveBeenCalled();
    fireEvent.keyDown(tabList, { key: "ArrowLeft" });
    expect(tabs[1]).toHaveFocus();
    tabs[1] && fireEvent.keyDown(tabs[1], { key: "Enter" });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(onTabClick[1]).toHaveBeenCalled();
    fireEvent.keyDown(tabList, { key: "ArrowLeft" });
    expect(tabs[0]).toHaveFocus();
    tabs[0] && fireEvent.keyDown(tabs[0], { key: "Enter" });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(onTabClick[0]).toHaveBeenCalled();
    fireEvent.keyDown(tabList, { key: "ArrowLeft" });
    expect(tabs[2]).toHaveFocus();
    tabs[2] && fireEvent.keyDown(tabs[2], { key: "Enter" });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("true");
    expect(onTabClick[2]).toHaveBeenCalled();
    fireEvent.keyDown(tabList, { key: "ArrowRight" });
    expect(tabs[0]).toHaveFocus();
    tabs[0] && fireEvent.keyDown(tabs[0], { key: "Enter" });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(onTabClick[0]).toHaveBeenCalled();
  });

  test("Skip disabled tab with keyboard event arrows", () => {
    const onTabClick = [jest.fn(), jest.fn(), jest.fn()];
    const { getByText, getByRole, getAllByRole } = render(sampleTabsMiddleDisabled(onTabClick));
    const tabList = getByRole("tablist");
    const tab1 = getByText("Tab-1");
    const tabs = getAllByRole("tab");
    fireEvent.click(tab1);
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    expect(onTabClick[0]).toHaveBeenCalled();
    fireEvent.keyDown(tabList, { key: "ArrowRight" });
    expect(tabs[2]).toHaveFocus();
    tabs[2] && fireEvent.keyDown(tabs[2], { key: " " });
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("true");
    expect(onTabClick[2]).toHaveBeenCalled();
  });
  test("Controlled tabs interaction", () => {
    const onTabClick = [jest.fn(), jest.fn(), jest.fn()];
    const { getAllByRole } = render(sampleControlledTabsInteraction(onTabClick));
    const tabs = getAllByRole("tab");
    tabs[0] && fireEvent.click(tabs[0]);
    expect(onTabClick[0]).toHaveBeenCalled();
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    tabs[1] && fireEvent.click(tabs[1]);
    expect(onTabClick[1]).toHaveBeenCalled();
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
    tabs[2] && fireEvent.click(tabs[2]);
    expect(onTabClick[2]).toHaveBeenCalled();
    expect(tabs[0]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs[1]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs[2]?.getAttribute("aria-selected")).toBe("false");
  });
});

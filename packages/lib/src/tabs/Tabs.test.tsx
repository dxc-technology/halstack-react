import { fireEvent, render } from "@testing-library/react";
import DxcTabs from "./Tabs";

const sampleTabs = (
  <DxcTabs>
    <DxcTabs.Tab label="Tab-1" notificationNumber={10} active>
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
    <DxcTabs.Tab label="Tab-3" notificationNumber={101} active>
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
const sampleTabsUncontrolled = (onTabClick: (() => void)[]) => (
  <DxcTabs>
    <DxcTabs.Tab label="Tab-1" onClick={onTabClick[0]}>
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
const sampleTabsControlled = (onTabClick: (() => void)[]) => (
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
const sampleTabsMiddleDisabled = (
  <DxcTabs>
    <DxcTabs.Tab label="Tab-1">
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-2" disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-3">
      <></>
    </DxcTabs.Tab>
  </DxcTabs>
);

const sampleTabsLastTabNonDisabled = (
  <DxcTabs>
    <DxcTabs.Tab label="Tab-1" disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-2" disabled>
      <></>
    </DxcTabs.Tab>
    <DxcTabs.Tab label="Tab-3">
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

    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
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
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("true");
  });

  test("Tabs render with disabled tab", () => {
    const { getAllByRole } = render(sampleTabsFirstDisabled);
    expect(getAllByRole("tab")[0].hasAttribute("disabled")).toBeTruthy();
    expect(getAllByRole("tab")[1].hasAttribute("disabled")).toBeFalsy();
  });

  test("Uncontrolled tabs", () => {
    const onTabClick = [jest.fn(), jest.fn(), jest.fn()];
    const { getByText, getAllByRole } = render(sampleTabsUncontrolled(onTabClick));
    const tabs = getAllByRole("tab");
    const tab1 = getByText("Tab-1");
    const tab2 = getByText("Tab-2");
    const tab3 = getByText("Tab-3");
    fireEvent.click(tab1);
    expect(onTabClick[0]).toHaveBeenCalled();
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    fireEvent.click(tab2);
    expect(onTabClick[1]).toHaveBeenCalled();
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("true");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    fireEvent.click(tab3);
    expect(onTabClick[2]).toHaveBeenCalled();
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("true");
  });

  test("Controlled tabs", () => {
    const onTabClick = [jest.fn(), jest.fn(), jest.fn()];
    const { getAllByRole } = render(sampleTabsControlled(onTabClick));
    const tabs = getAllByRole("tab");
    fireEvent.click(tabs[0]);
    expect(onTabClick[0]).toHaveBeenCalled();
    expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    fireEvent.click(tabs[1]);
    expect(onTabClick[1]).toHaveBeenCalled();
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("true");
    expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    fireEvent.click(tabs[2]);
    expect(onTabClick[2]).toHaveBeenCalled();
    expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    expect(tabs[2].getAttribute("aria-selected")).toBe("true");
  });

  test("Uncontrolled tabs should have focus in the first non-disabled tab", () => {
    // const onTabClick = jest.fn();
    // const { getAllByRole } = render(
    //   <DxcTabsLegacy tabs={sampleTabsLastTabNonDisabledLegacy} onTabClick={onTabClick}></DxcTabsLegacy>
    // );
    // const tabs = getAllByRole("tab");
    // expect(tabs[0].hasAttribute("disabled")).toBeTruthy();
    // expect(tabs[1].hasAttribute("disabled")).toBeTruthy();
    // expect(tabs[2].hasAttribute("disabled")).toBeFalsy();
    // expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[2].getAttribute("aria-selected")).toBe("true");
  });

  test("Controlled tabs with active index in disabled tab should not change focus to the first available tab", () => {
    // const onTabClick = jest.fn();
    // const { getAllByRole } = render(
    //   <DxcTabsLegacy
    //     tabs={sampleTabsLastTabNonDisabledLegacy}
    //     onTabClick={onTabClick}
    //     activeTabIndex={0}
    //   ></DxcTabsLegacy>
    // );
    // const tabs = getAllByRole("tab");
    // expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    // expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[0].hasAttribute("disabled")).toBeTruthy();
    // expect(tabs[1].hasAttribute("disabled")).toBeTruthy();
    // expect(tabs[2].hasAttribute("disabled")).toBeFalsy();
    // fireEvent.click(tabs[2]);
    // expect(onTabClick).toHaveBeenCalledWith(2);
    // expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    // expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[0].hasAttribute("disabled")).toBeTruthy();
    // expect(tabs[1].hasAttribute("disabled")).toBeTruthy();
    // expect(tabs[2].hasAttribute("disabled")).toBeFalsy();
  });

  test("Select tabs with keyboard event arrows", () => {
    // const onTabClick = jest.fn();
    // const { getByText, getByRole, getAllByRole } = render(
    //   <DxcTabsLegacy tabs={sampleTabsLegacy} onTabClick={onTabClick}></DxcTabsLegacy>
    // );
    // const tabList = getByRole("tablist");
    // const tab1 = getByText("Tab-1");
    // const tabs = getAllByRole("tab");
    // fireEvent.click(tab1);
    // expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    // expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    // expect(onTabClick).toHaveBeenCalledWith(0);
    // fireEvent.keyDown(tabList, { key: "ArrowRight" });
    // fireEvent.keyDown(tabList, { key: "Enter" });
    // expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[1].getAttribute("aria-selected")).toBe("true");
    // expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    // expect(onTabClick).toHaveBeenCalledWith(1);
    // fireEvent.keyDown(tabList, { key: "ArrowRight" });
    // fireEvent.keyDown(tabList, { key: "Enter" });
    // expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[2].getAttribute("aria-selected")).toBe("true");
    // expect(onTabClick).toHaveBeenCalledWith(2);
    // fireEvent.keyDown(tabList, { key: "ArrowLeft" });
    // fireEvent.keyDown(tabList, { key: "Enter" });
    // expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[1].getAttribute("aria-selected")).toBe("true");
    // expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    // expect(onTabClick).toHaveBeenCalledWith(1);
    // fireEvent.keyDown(tabList, { key: "ArrowLeft" });
    // fireEvent.keyDown(tabList, { key: "Enter" });
    // expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    // expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    // expect(onTabClick).toHaveBeenCalledWith(0);
    // fireEvent.keyDown(tabList, { key: "ArrowLeft" });
    // fireEvent.keyDown(tabList, { key: "Enter" });
    // expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[2].getAttribute("aria-selected")).toBe("true");
    // expect(onTabClick).toHaveBeenCalledWith(2);
    // fireEvent.keyDown(tabList, { key: "ArrowRight" });
    // fireEvent.keyDown(tabList, { key: "Enter" });
    // expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    // expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    // expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    // expect(onTabClick).toHaveBeenCalledWith(0);
  });

  test("Skip disabled tab with keyboard event arrows", () => {
    //   const onTabClick = jest.fn();
    //   const { getByText, getByRole, getAllByRole } = render(
    //     <DxcTabsLegacy tabs={sampleTabsMiddleDisabledLegacy} onTabClick={onTabClick}></DxcTabsLegacy>
    //   );
    //   const tabList = getByRole("tablist");
    //   const tab1 = getByText("Tab-1");
    //   const tabs = getAllByRole("tab");
    //   fireEvent.click(tab1);
    //   expect(tabs[0].getAttribute("aria-selected")).toBe("true");
    //   expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    //   expect(tabs[2].getAttribute("aria-selected")).toBe("false");
    //   expect(onTabClick).toHaveBeenCalledWith(0);
    //   fireEvent.keyDown(tabList, { key: "ArrowRight" });
    //   fireEvent.keyDown(tabList, { key: " " });
    //   expect(tabs[0].getAttribute("aria-selected")).toBe("false");
    //   expect(tabs[1].getAttribute("aria-selected")).toBe("false");
    //   expect(tabs[2].getAttribute("aria-selected")).toBe("true");
    //   expect(onTabClick).toHaveBeenCalledWith(2);
  });
});

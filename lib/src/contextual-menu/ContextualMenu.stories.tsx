import React from "react";
import Title from "../../.storybook/components/Title";
import DxcContextualMenu from "./ContextualMenu";
import DxcContainer from "../container/Container";
import MenuItem from "./MenuItem";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Contextual Menu",
  component: DxcContextualMenu,
};

const key_icon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
    <path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z" />
  </svg>
);

const fav_icon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
    <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
  </svg>
);

const items = [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }, { label: "Item 4" }];

const sections = [
  {
    title: "Team repositories",
    items: [{ label: "Approved locations" }, { label: "Approved locations" }, { label: "Approved locations" }],
  },
  {
    items: [{ label: "Approved locations" }, { label: "Approved locations" }, { label: "Approved locations" }],
  },
];

const itemsWithIcon = [
  {
    label: "Item 1",
    icon: key_icon,
  },
  {
    label: "Item 2",
    icon: fav_icon,
  },
];

const itemsWithSlot = [
  {
    label: "Item 1",
    slot: <DxcContextualMenu.Badge color="green" label="New" />,
  },
  {
    label: "Item 2",
    slot: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.6667 10.6667H1.33333V1.33333H6V0H1.33333C0.593333 0 0 0.6 0 1.33333V10.6667C0 11.4 0.593333 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V6H10.6667V10.6667ZM7.33333 0V1.33333H9.72667L3.17333 7.88667L4.11333 8.82667L10.6667 2.27333V4.66667H12V0H7.33333Z"
          fill="#323232"
        />
      </svg>
    ),
  },
];

const sectionsWithScroll = [
  {
    title: "Team repositories",
    items: [{ label: "Approved locations" }, { label: "Approved locations" }, { label: "Approved locations" }],
  },
  {
    items: [
      { label: "Approved locations" },
      { label: "Approved locations" },
      { label: "Approved locations" },
      { label: "Approved locations" },
      { label: "Approved locations" },
      { label: "Approved locations" },
      { label: "Approved locations" },
      { label: "Approved locations" },
      { label: "Approved locations" },
    ],
  },
];

const itemsWithTruncatedText = [
  {
    label: "Item with a very long label that should be truncated",
    slot: <DxcContextualMenu.Badge color="green" label="New" />,
    icon: key_icon,
  },
  {
    label: "Item 2",
    slot: (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.6667 10.6667H1.33333V1.33333H6V0H1.33333C0.593333 0 0 0.6 0 1.33333V10.6667C0 11.4 0.593333 12 1.33333 12H10.6667C11.4 12 12 11.4 12 10.6667V6H10.6667V10.6667ZM7.33333 0V1.33333H9.72667L3.17333 7.88667L4.11333 8.82667L10.6667 2.27333V4.66667H12V0H7.33333Z"
          fill="#323232"
        />
      </svg>
    ),
    icon: fav_icon,
  },
];

export const Chromatic = () => (
  <>
    <Title title="Default" theme="light" level={3} />
    <ExampleContainer>
      <DxcContextualMenu items={items} />
    </ExampleContainer>
    <Title title="With sections" theme="light" level={3} />
    <ExampleContainer>
      <DxcContainer width="300px">
        <DxcContextualMenu items={sections} />
      </DxcContainer>
    </ExampleContainer>
    <Title title="With icons" theme="light" level={3} />
    <ExampleContainer>
      <DxcContainer width="300px">
        <DxcContextualMenu items={itemsWithIcon} defaultSelectedItemIndex={0} />
      </DxcContainer>
    </ExampleContainer>
    <Title title="With slot" theme="light" level={3} />
    <ExampleContainer>
      <DxcContainer width="300px">
        <DxcContextualMenu items={itemsWithSlot} />
      </DxcContainer>
    </ExampleContainer>
    <Title title="With label truncated" theme="light" level={3} />
    <ExampleContainer>
      <DxcContainer width="300px">
        <DxcContextualMenu items={itemsWithTruncatedText} />
      </DxcContainer>
    </ExampleContainer>
    <Title title="With scroll" theme="light" level={3} />
    <ExampleContainer>
      <DxcContainer height="300px" width="300px">
        <DxcContextualMenu items={sectionsWithScroll} />
      </DxcContainer>
    </ExampleContainer>
    <Title title="Width doesn't go below 248px" theme="light" level={3} />
    <ExampleContainer>
      <DxcContainer width="200px">
        <DxcContextualMenu items={items} />
      </DxcContainer>
    </ExampleContainer>
  </>
);

export const MenuItemStates = () => (
  <>
    <Title title="Default" theme="light" level={3} />
    <ExampleContainer>
      <MenuItem {...items[0]} selected={false} />
    </ExampleContainer>
    <Title title="Focus" theme="light" level={3} />
    <ExampleContainer pseudoState="pseudo-focus">
      <MenuItem {...items[0]} selected={false} />
    </ExampleContainer>
    <Title title="Hover" theme="light" level={3} />
    <ExampleContainer pseudoState="pseudo-hover">
      <MenuItem {...items[0]} selected={false} />
    </ExampleContainer>
    <Title title="Active" theme="light" level={3} />
    <ExampleContainer pseudoState="pseudo-active">
      <MenuItem {...items[0]} selected={false} />
    </ExampleContainer>
    <Title title="Selected" theme="light" level={3} />
    <ExampleContainer>
      <MenuItem {...items[0]} selected />
    </ExampleContainer>
    <Title title="Selected hover" theme="light" level={3} />
    <ExampleContainer pseudoState="pseudo-hover">
      <MenuItem {...items[0]} selected />
    </ExampleContainer>
    <Title title="Selected active" theme="light" level={3} />
    <ExampleContainer pseudoState="pseudo-active">
      <MenuItem {...items[0]} selected />
    </ExampleContainer>
  </>
);

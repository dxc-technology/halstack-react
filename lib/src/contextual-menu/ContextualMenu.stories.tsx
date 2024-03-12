import React from "react";
import Title from "../../.storybook/components/Title";
import DxcContextualMenu, { ContextualMenuContext } from "./ContextualMenu";
import DxcContainer from "../container/Container";
import SingleItem from "./SingleItem";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Contextual Menu",
  component: DxcContextualMenu,
};

const keyIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
    <path d="M280-400q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm0 160q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z" />
  </svg>
);

const favIcon = (
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

const groupItems = [
  {
    title: "Section 1",
    items: [
      {
        label: "Grouped Item 1",
        icon: favIcon,
        items: [
          { label: "Item 1" },
          {
            label: "Grouped Item 2",
            items: [
              {
                label: "Item 2",
                badge: <DxcContextualMenu.Badge color="purple" label="Experimental" />,
              },
              { label: "Selected Item 3" },
            ],
          },
        ],
        badge: <DxcContextualMenu.Badge color="green" label="New" />,
      },
      { label: "Item 4", icon: keyIcon },
    ],
  },
  {
    title: "Section 2",
    items: [
      { label: "Item 5" },
      { label: "Grouped Item 6", items: [{ label: "Item 7" }, { label: "Item 8" }] },
      { label: "Item 9" },
    ],
  },
];

const itemsWithIcon = [
  {
    label: "Item 1",
    icon: keyIcon,
  },
  {
    label: "Item 2",
    icon: favIcon,
  },
];

const itemsWithBadge = [
  {
    label: "Item 1",
    badge: <DxcContextualMenu.Badge color="green" label="New" />,
  },
  {
    label: "Item 2",
    badge: <DxcContextualMenu.Badge color="purple" label="Experimental" />,
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
    badge: <DxcContextualMenu.Badge color="green" label="New" />,
    icon: keyIcon,
  },
  {
    label: "Item 2",
    icon: favIcon,
  },
];

const ContextualMenu = () => (
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
    <Title title="With group items" theme="light" level={3} />
    <ExampleContainer>
      <DxcContainer width="300px">
        <DxcContextualMenu items={groupItems} />
      </DxcContainer>
    </ExampleContainer>
    <Title title="With icons" theme="light" level={3} />
    <ExampleContainer>
      <DxcContainer width="300px">
        <DxcContextualMenu items={itemsWithIcon} />
      </DxcContainer>
    </ExampleContainer>
    <Title title="With badge" theme="light" level={3} />
    <ExampleContainer>
      <DxcContainer width="300px">
        <DxcContextualMenu items={itemsWithBadge} />
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

export const Chromatic = ContextualMenu.bind({});
Chromatic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText("Grouped Item 1"));
  await userEvent.click(canvas.getByText("Grouped Item 2"));
  await userEvent.click(canvas.getByText("Selected Item 3"));
};

export const SingleItemStates = () => (
  <DxcContainer width="300px">
    <ContextualMenuContext.Provider value={{ selectedItemId: -1, setSelectedItemId: () => {} }}>
      <Title title="Default" theme="light" level={3} />
      <ExampleContainer>
        <SingleItem {...items[0]} id={0} level={0} />
      </ExampleContainer>
      <Title title="Focus" theme="light" level={3} />
      <ExampleContainer pseudoState="pseudo-focus">
        <SingleItem {...items[0]} id={0} level={0} />
      </ExampleContainer>
      <Title title="Hover" theme="light" level={3} />
      <ExampleContainer pseudoState="pseudo-hover">
        <SingleItem {...items[0]} id={0} level={0} />
      </ExampleContainer>
      <Title title="Active" theme="light" level={3} />
      <ExampleContainer pseudoState="pseudo-active">
        <SingleItem {...items[0]} id={0} level={0} />
      </ExampleContainer>
    </ContextualMenuContext.Provider>
    <ContextualMenuContext.Provider value={{ selectedItemId: 0, setSelectedItemId: () => {} }}>
      <Title title="Selected" theme="light" level={3} />
      <ExampleContainer>
        <SingleItem {...items[0]} id={0} level={0} />
      </ExampleContainer>
      <Title title="Selected hover" theme="light" level={3} />
      <ExampleContainer pseudoState="pseudo-hover">
        <SingleItem {...items[0]} id={0} level={0} />
      </ExampleContainer>
      <Title title="Selected active" theme="light" level={3} />
      <ExampleContainer pseudoState="pseudo-active">
        <SingleItem {...items[0]} id={0} level={0} />
      </ExampleContainer>
    </ContextualMenuContext.Provider>
  </DxcContainer>
);

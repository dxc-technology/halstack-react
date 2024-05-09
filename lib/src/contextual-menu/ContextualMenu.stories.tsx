import React from "react";
import Title from "../../.storybook/components/Title";
import DxcContextualMenu, { ContextualMenuContext } from "./ContextualMenu";
import DxcContainer from "../container/Container";
import SingleItem from "./SingleItem";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcBadge from "../badge/Badge";
import { disabledRules } from "../../test/accessibility/rules/specific/contextual-menu/disabledRules";
import preview from "../../.storybook/preview";
import { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "Contextual Menu",
  component: DxcContextualMenu,
  parameters: {
    // TODO: REMOVE
    a11y: {
      config: {
        rules: [
          ...disabledRules.map((ruleId) => ({ id: ruleId, reviewOnFail: true })),
          ...preview?.parameters?.a11y?.config?.rules,
        ],
      },
    },
  },
};

const items = [{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }, { label: "Item 4" }];

const sections = [
  {
    title: "Section title",
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
        icon: "favorite",
        items: [
          { label: "Item 1" },
          {
            label: "Grouped Item 2",
            items: [
              {
                label: "Item 2",
                icon: "bookmark",
                badge: <DxcBadge color="purple" label="Experimental" />,
              },
              { label: "Selected Item 3", selectedByDefault: true },
            ],
          },
        ],
        badge: <DxcBadge color="green" label="New" />,
      },
      { label: "Item 4", icon: "key" },
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
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
        <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
      </svg>
    ),
  },
  {
    label: "Item 2",
    icon: "star",
  },
];

const itemsWithBadge = [
  {
    label: "Item 1",
    badge: <DxcBadge color="green" label="New" />,
  },
  {
    label: "Item 2",
    badge: <DxcBadge color="purple" label="Experimental" />,
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
      { label: "Approved locations", selectedByDefault: true },
    ],
  },
];

const itemsWithTruncatedText = [
  {
    label: "Item with a very long label that should be truncated",
    badge: <DxcBadge color="green" label="New" />,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="currentColor">
        <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
      </svg>
    ),
  },
  {
    label: "Item 2",
    icon: "favorite",
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
    <Title title="With auto-scroll" theme="light" level={3} />
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

export const SingleItemStates = () => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.contextualMenu}>
      <DxcContainer width="300px">
        <ContextualMenuContext.Provider value={{ selectedItemId: -1, setSelectedItemId: () => {} }}>
          <Title title="Default" theme="light" level={3} />
          <ExampleContainer>
            <SingleItem {...items[0]} id={0} depthLevel={0} />
          </ExampleContainer>
          <Title title="Focus" theme="light" level={3} />
          <ExampleContainer pseudoState="pseudo-focus">
            <SingleItem {...items[0]} id={0} depthLevel={0} />
          </ExampleContainer>
          <Title title="Hover" theme="light" level={3} />
          <ExampleContainer pseudoState="pseudo-hover">
            <SingleItem {...items[0]} id={0} depthLevel={0} />
          </ExampleContainer>
          <Title title="Active" theme="light" level={3} />
          <ExampleContainer pseudoState="pseudo-active">
            <SingleItem {...items[0]} id={0} depthLevel={0} />
          </ExampleContainer>
        </ContextualMenuContext.Provider>
        <ContextualMenuContext.Provider value={{ selectedItemId: 0, setSelectedItemId: () => {} }}>
          <Title title="Selected" theme="light" level={3} />
          <ExampleContainer>
            <SingleItem {...items[0]} id={0} depthLevel={0} />
          </ExampleContainer>
          <Title title="Selected hover" theme="light" level={3} />
          <ExampleContainer pseudoState="pseudo-hover">
            <SingleItem {...items[0]} id={0} depthLevel={0} />
          </ExampleContainer>
          <Title title="Selected active" theme="light" level={3} />
          <ExampleContainer pseudoState="pseudo-active">
            <SingleItem {...items[0]} id={0} depthLevel={0} />
          </ExampleContainer>
        </ContextualMenuContext.Provider>
      </DxcContainer>
    </ThemeProvider>
  );
};

export const ThemeTesting = () => {
  const contextualMenuTokens = {
    contextualMenu: {
      accentColor: "#fabada",
      fontColor: "#333",
      iconColor: "#0095ff",
    },
  };

  return (
    <HalstackProvider theme={contextualMenuTokens}>
      <DxcContainer width="300px">
        <DxcContextualMenu items={groupItems} />
      </DxcContainer>
    </HalstackProvider>
  );
};

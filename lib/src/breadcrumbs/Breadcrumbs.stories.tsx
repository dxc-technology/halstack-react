import React from "react";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcBreadcrumbs from "./Breadcrumbs";
import DxcContainer from "../container/Container";
import { HalstackProvider } from "../HalstackContext";
import { userEvent, within } from "@storybook/testing-library";
import { disabledRules } from "../../test/accessibility/rules/specific/breadcrumbs/disabledRules";
import preview from "../../.storybook/preview";

export default {
  title: "Breadcrumbs",
  component: DxcBreadcrumbs,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...disabledRules.map((ruleId) => ({ id: ruleId, enabled: false })),
          ...preview?.parameters?.a11y?.config?.rules,
        ],
      },
    },
  },
};

const items = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "User Menu",
    href: "",
  },
  {
    label: "Preferences",
    href: "",
  },
  {
    label: "Customization",
    href: "",
  },
  {
    label: "Dark Mode",
    href: "",
  },
];

const Breadcrumbs = () => (
  <>
    <Title title="Breadcrumbs" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Default" theme="light" level={3} />
      <DxcBreadcrumbs
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "User Menu",
            href: "",
          },
          {
            label: "Preferences",
            href: "",
          },
          {
            label: "Dark Mode",
            href: "",
          },
        ]}
      />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Collapsed variant" theme="light" level={3} />
      <DxcBreadcrumbs items={items} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Collapsed variant without root" theme="light" level={3} />
      <DxcBreadcrumbs items={items} showRoot={false} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focus state" theme="light" level={3} />
      <DxcBreadcrumbs items={items} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hover state" theme="light" level={3} />
      <DxcBreadcrumbs items={items} />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active state" theme="light" level={3} />
      <DxcBreadcrumbs items={items} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Truncation and text ellipsis with tooltip (only when collapsed)" theme="light" level={3} />
      <DxcContainer width="200px">
        <DxcBreadcrumbs
          items={[
            {
              label: "Root",
              href: "/",
            },
            {
              label: "Main folder",
              href: "",
            },
            {
              label: "User",
              href: "",
            },
            {
              label: "Very long label for the link",
              href: "",
            },
          ]}
          itemsBeforeCollapse={3}
        />
      </DxcContainer>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Truncation, text ellipsis with tooltip and without root" theme="light" level={3} />
      <DxcContainer width="200px">
        <DxcBreadcrumbs
          items={[
            {
              label: "Root",
              href: "/",
            },
            {
              label: "Main folder",
              href: "",
            },
            {
              label: "User",
              href: "",
            },
            {
              label: "Very long label for the link",
              href: "",
            },
          ]}
          itemsBeforeCollapse={3}
          showRoot={false}
        />
      </DxcContainer>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Dropdown theming doesn't affect the collapsed trigger" theme="light" level={3} />
      <ExampleContainer>
        <Title title="Opinionated theming" theme="light" level={4} />
        <HalstackProvider
          theme={{
            dropdown: {
              baseColor: "#fabada",
              fontColor: "#999",
              optionFontColor: "#4d4d4d",
            },
          }}
        >
          <DxcBreadcrumbs items={items} itemsBeforeCollapse={3} />
        </HalstackProvider>
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Advanced theming" theme="light" level={4} />
        <HalstackProvider
          advancedTheme={{
            dropdown: {
              buttonBackgroundColor: "#fabada",
              buttonHeight: "100px",
              buttonBorderThickness: "2px",
              buttonBorderStyle: "solid",
              buttonBorderColor: "#000",
            },
          }}
        >
          <DxcBreadcrumbs items={items} itemsBeforeCollapse={3} />
        </HalstackProvider>
      </ExampleContainer>
    </ExampleContainer>
    <ExampleContainer expanded>
      <Title title="Collapsed variant with dropdown menu opened" theme="light" level={3} />
      <DxcBreadcrumbs items={items} />
    </ExampleContainer>
  </>
);

export const Chromatic = Breadcrumbs.bind({});
Chromatic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdowns = canvas.getAllByRole("button");
  await userEvent.click(dropdowns[dropdowns.length - 1]);
};

import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcBreadcrumbs from "./Breadcrumbs";
import DxcContainer from "../container/Container";
import { HalstackProvider } from "../HalstackContext";
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
          ...(preview?.parameters?.a11y?.config?.rules || [])
        ]
      }
    }
  }
};

const items = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "User Menu",
    href: ""
  },
  {
    label: "Preferences",
    href: ""
  },
  {
    label: "Customization",
    href: ""
  },
  {
    label: "Dark Mode",
    href: ""
  }
];

const Breadcrumbs = () => (
  <>
    <Title title="Default" theme="light" level={3} />
    <ExampleContainer>
      <DxcBreadcrumbs
        items={[
          {
            label: "Home",
            href: "/"
          },
          {
            label: "User Menu",
            href: ""
          },
          {
            label: "Preferences",
            href: ""
          },
          {
            label: "Dark Mode",
            href: ""
          }
        ]}
      />
    </ExampleContainer>
    <Title title="Collapsed variant" theme="light" level={3} />
    <ExampleContainer>
      <DxcBreadcrumbs items={items} />
    </ExampleContainer>
    <Title title="Collapsed variant without root" theme="light" level={3} />
    <ExampleContainer>
      <DxcBreadcrumbs items={items} showRoot={false} />
    </ExampleContainer>
    <Title title="Collapsed variant with dropdown menu opened" theme="light" level={3} />
    <ExampleContainer>
      <DxcContainer height="150px">
        <DxcBreadcrumbs items={items} />
      </DxcContainer>
    </ExampleContainer>
    <Title title="Focus state" theme="light" level={3} />
    <ExampleContainer pseudoState="pseudo-focus">
      <DxcBreadcrumbs items={items} />
    </ExampleContainer>
    <Title title="Hover state" theme="light" level={3} />
    <ExampleContainer pseudoState="pseudo-hover">
      <DxcBreadcrumbs items={items} />
    </ExampleContainer>
    <Title title="Active state" theme="light" level={3} />
    <ExampleContainer pseudoState="pseudo-active">
      <DxcBreadcrumbs items={items} />
    </ExampleContainer>
    <Title title="Truncation and text ellipsis with tooltip (only when collapsed)" theme="light" level={3} />
    <ExampleContainer>
      <DxcContainer width="200px">
        <DxcBreadcrumbs
          items={[
            {
              label: "Root",
              href: "/"
            },
            {
              label: "Main folder",
              href: ""
            },
            {
              label: "User",
              href: ""
            },
            {
              label: "Very long label for the link",
              href: ""
            }
          ]}
          itemsBeforeCollapse={3}
        />
      </DxcContainer>
    </ExampleContainer>
    <Title title="Truncation, text ellipsis with tooltip and without root" theme="light" level={3} />
    <ExampleContainer>
      <DxcContainer width="200px">
        <DxcBreadcrumbs
          items={[
            {
              label: "Root",
              href: "/"
            },
            {
              label: "Main folder",
              href: ""
            },
            {
              label: "User",
              href: ""
            },
            {
              label: "Very long label for the link",
              href: ""
            }
          ]}
          itemsBeforeCollapse={3}
          showRoot={false}
        />
      </DxcContainer>
    </ExampleContainer>
    <Title title="Dropdown theming doesn't affect the collapsed trigger" theme="light" level={3} />
    <ExampleContainer>
      <Title title="Opinionated theming" theme="light" level={4} />
      <ExampleContainer>
        <HalstackProvider
          theme={{
            dropdown: {
              baseColor: "#fabada",
              fontColor: "#999",
              optionFontColor: "#4d4d4d"
            }
          }}
        >
          <DxcBreadcrumbs items={items} itemsBeforeCollapse={3} />
        </HalstackProvider>
      </ExampleContainer>
      <Title title="Advanced theming" theme="light" level={4} />
      <ExampleContainer>
        <HalstackProvider
          advancedTheme={{
            dropdown: {
              buttonBackgroundColor: "#fabada",
              buttonHeight: "100px",
              buttonBorderThickness: "2px",
              buttonBorderStyle: "solid",
              buttonBorderColor: "#000"
            }
          }}
        >
          <DxcBreadcrumbs items={items} itemsBeforeCollapse={3} />
        </HalstackProvider>
      </ExampleContainer>
    </ExampleContainer>
  </>
);

export const Chromatic = Breadcrumbs.bind({});
Chromatic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdowns = canvas.getAllByRole("button");
  await userEvent.click(dropdowns[2]);
};

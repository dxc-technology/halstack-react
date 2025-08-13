import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcBreadcrumbs from "./Breadcrumbs";
import DxcContainer from "../container/Container";
import { userEvent, within } from "storybook/test";
import { disabledRules } from "../../test/accessibility/rules/specific/breadcrumbs/disabledRules";
import preview from "../../.storybook/preview";
import { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Breadcrumbs",
  component: DxcBreadcrumbs,
  parameters: {
    a11y: {
      config: {
        rules: [
          ...preview?.parameters?.a11y?.config?.rules,
          ...disabledRules.map((ruleId) => ({ id: ruleId, enabled: false })),
        ],
      },
    },
  },
} satisfies Meta<typeof DxcBreadcrumbs>;

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
    <Title title="Default" theme="light" level={3} />
    <ExampleContainer>
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
    <ExampleContainer pseudoState={["pseudo-active", "pseudo-focus"]}>
      <DxcBreadcrumbs items={items} />
    </ExampleContainer>
    <Title title="Truncation and text ellipsis with tooltip (only when collapsed)" theme="light" level={3} />
    <ExampleContainer>
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
    <Title title="Truncation, text ellipsis with tooltip and without root" theme="light" level={3} />
    <ExampleContainer>
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
  </>
);

type Story = StoryObj<typeof DxcBreadcrumbs>;

export const Chromatic: Story = {
  render: Breadcrumbs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const dropdowns = await canvas.findAllByRole("button");
    dropdowns[2] != null && (await userEvent.click(dropdowns[2]));
  },
};

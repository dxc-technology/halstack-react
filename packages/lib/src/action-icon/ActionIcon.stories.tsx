import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcActionIcon from "./ActionIcon";
import { userEvent, within } from "storybook/test";
import DxcTooltip from "../tooltip/Tooltip";
import DxcInset from "../inset/Inset";
import { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Action Icon ",
  component: DxcActionIcon,
} satisfies Meta<typeof DxcActionIcon>;

const iconSVG = (
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const ActionIcon = () => (
  <>
    <Title title="Default" theme="light" level={2} />
    <ExampleContainer>
      <DxcActionIcon icon="favorite" title="Favourite" />
    </ExampleContainer>
    <Title title="Disabled" theme="light" level={2} />
    <ExampleContainer>
      <DxcActionIcon icon="favorite" title="Favourite" disabled />
    </ExampleContainer>
    <Title title="Hover" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-hover">
      <DxcActionIcon icon="filled_favorite" title="Favourite" />
    </ExampleContainer>
    <Title title="Focus" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-focus">
      <DxcActionIcon icon={iconSVG} title="Favourite" />
    </ExampleContainer>
    <Title title="Active" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-active">
      <DxcActionIcon icon={iconSVG} title="Favourite" />
    </ExampleContainer>
  </>
);

const Tooltip = () => (
  <>
    <Title title="Default tooltip" theme="light" level={2} />
    <ExampleContainer>
      <DxcActionIcon icon="favorite" title="Favourite" />
    </ExampleContainer>
  </>
);

const NestedTooltip = () => (
  <>
    <Title title="Nested tooltip" theme="light" level={2} />
    <ExampleContainer>
      <DxcInset top="var(--spacing-padding-xxl)">
        <DxcTooltip label="Favourite" position="top">
          <DxcActionIcon icon="favorite" title="Favourite" />
        </DxcTooltip>
      </DxcInset>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcActionIcon>;

export const Chromatic: Story = {
  render: ActionIcon,
};

export const ActionIconTooltip: Story = {
  render: Tooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button");
    await userEvent.hover(button);
  },
};

export const NestedActionIconTooltip: Story = {
  render: NestedTooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button");
    await userEvent.hover(button);
  },
};

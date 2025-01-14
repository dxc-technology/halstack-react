import { userEvent, within } from "@storybook/test";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import DxcInset from "../inset/Inset";
import DxcTooltip from "./Tooltip";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Tooltip",
  component: DxcTooltip,
} as Meta<typeof DxcTooltip>;

const Tooltip = () => (
  <>
    <Title title="Default tooltip" theme="light" level={4} />
    <ExampleContainer>
      <DxcInset bottom="3rem">
        <DxcTooltip label="Tooltip Test">
          <DxcButton label="Hoverable button" />
        </DxcTooltip>
      </DxcInset>
    </ExampleContainer>
  </>
);

const LargeTextWithinTooltip = () => (
  <>
    <Title title="Multiple line tooltip" theme="light" level={4} />
    <ExampleContainer>
      <DxcInset bottom="5rem" left="1rem">
        <DxcTooltip label="Tooltip Test with a large text to display in the container while hovering the component">
          <DxcButton label="Hoverable button" />
        </DxcTooltip>
      </DxcInset>
    </ExampleContainer>
  </>
);

const TopTooltip = () => (
  <>
    <Title title="Top tooltip" theme="light" level={4} />
    <ExampleContainer>
      <DxcInset top="3rem">
        <DxcTooltip label="Tooltip Test" position="top">
          <DxcButton label="Hoverable button" />
        </DxcTooltip>
      </DxcInset>
    </ExampleContainer>
  </>
);

const LeftTooltip = () => (
  <>
    <Title title="Left tooltip" theme="light" level={4} />
    <ExampleContainer>
      <DxcFlex justifyContent="center">
        <DxcTooltip label="Tooltip Test" position="left">
          <DxcButton label="Hoverable button" />
        </DxcTooltip>
      </DxcFlex>
    </ExampleContainer>
  </>
);

const RightTooltip = () => (
  <>
    <Title title="Right tooltip" theme="light" level={4} />
    <ExampleContainer>
      <DxcTooltip label="Tooltip Test" position="right">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcTooltip>;

export const Chromatic: Story = {
  render: Tooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.hover(button);
  },
};

export const LargeTextTooltip: Story = {
  render: LargeTextWithinTooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.hover(button);
  },
};

export const TooltipPositionTop: Story = {
  render: TopTooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.hover(button);
  },
};

export const TooltipPositionLeft: Story = {
  render: LeftTooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.hover(button);
  },
};

export const TooltipPositionRight: Story = {
  render: RightTooltip,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.hover(button);
  },
};

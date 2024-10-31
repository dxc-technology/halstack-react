import { userEvent, within } from "@storybook/test";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcButton from "../button/Button";
import DxcFlex from "../flex/Flex";
import DxcInset from "../inset/Inset";
import DxcTooltip from "./Tooltip";
import { useState } from "react";
import useEffect from "react";

export default {
  title: "Tooltip",
  component: DxcTooltip,
};

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
        <DxcTooltip
          label="Tooltip Test"
          position="top"
          onClose={() => {
            console.log("CLOSE");
          }}
          onOpen={() => {
            console.log("OPEN");
          }}
        >
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

const ControlledTooltip = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };

  return (
    <>
      <Title title="Controlled tooltip" theme="light" level={4} />
      <ExampleContainer>
        <DxcFlex gap={"1rem"}>
          <DxcButton label="Trigger tooltip here" onClick={handleOpen} />
          <DxcTooltip
            label="Tooltip Test"
            open={open}
            onOpen={() => {
              console.log("Tooltip opened");
            }}
            onClose={() => {
              console.log("Tooltip closed");
            }}
          >
            <DxcButton label="Button with controlled tooltip" />
          </DxcTooltip>
        </DxcFlex>
      </ExampleContainer>
    </>
  );
};

export const Chromatic = Tooltip.bind({});
Chromatic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await userEvent.hover(button);
};

export const LargeTextTooltip = LargeTextWithinTooltip.bind({});
LargeTextTooltip.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await userEvent.hover(button);
};

export const TooltipPositionTop = TopTooltip.bind({});
TooltipPositionTop.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await userEvent.hover(button);
};

export const TooltipPositionLeft = LeftTooltip.bind({});
TooltipPositionLeft.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await userEvent.hover(button);
};

export const TooltipPositionRight = RightTooltip.bind({});
TooltipPositionRight.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole("button");
  await userEvent.hover(button);
};

export const TooltipControlled = ControlledTooltip.bind({});
TooltipControlled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getAllByRole("button")[0];
  await userEvent.click(button);
};

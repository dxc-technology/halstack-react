import React from "react";
import DxcTooltip from "./Tooltip";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcButton from "../button/Button";
import { userEvent, within } from "@storybook/testing-library";
import DxcInset from "../inset/Inset";
import Title from "../../.storybook/components/Title";

export default {
  title: "Tooltip",
  component: DxcTooltip,
};

const Tooltip = () => (
  <>
    <Title title="Active tooltip" theme="light" level={4} />
    <ExampleContainer>
      <DxcInset space="5rem">
        <DxcTooltip title="Tooltip Test">
          <DxcButton label="Hoverable button" />
        </DxcTooltip>
      </DxcInset>
    </ExampleContainer>
    <Title title="Bottom tooltip" theme="light" level={4} />
    <ExampleContainer>
      <DxcInset space="5rem">
        <DxcTooltip title="Tooltip Test" position="bottom">
          <DxcButton label="Hoverable button" />
        </DxcTooltip>
      </DxcInset>
    </ExampleContainer>
    <Title title="Bottom tooltip multi-line" theme="light" level={4} />
    <ExampleContainer>
      <DxcInset space="5rem">
        <DxcTooltip title="Tooltip Test with a much larger text to display" position="bottom">
          <DxcButton label="Hoverable button" />
        </DxcTooltip>
      </DxcInset>
    </ExampleContainer>
    <Title title="Top tooltip" theme="light" level={4} />
    <ExampleContainer>
      <DxcInset space="5rem">
        <DxcTooltip title="Tooltip Test" position="top">
          <DxcButton label="Hoverable button" />
        </DxcTooltip>
      </DxcInset>
    </ExampleContainer>
    <Title title="Top tooltip multi-line" theme="light" level={4} />
    <ExampleContainer>
      <DxcInset space="5rem">
        <DxcTooltip title="Tooltip Test with a much larger text to display" position="top">
          <DxcButton label="Hoverable button" />
        </DxcTooltip>
      </DxcInset>
    </ExampleContainer>
    <Title title="Left tooltip" theme="light" level={4} />
    <ExampleContainer>
      <DxcInset horizontal="3rem">
        <DxcInset horizontal="5rem" vertical="2rem">
          <DxcTooltip title="Tooltip Test" position="left">
            <DxcButton label="Hoverable button" />
          </DxcTooltip>
        </DxcInset>
      </DxcInset>
    </ExampleContainer>
    <Title title="Left tooltip multi-line" theme="light" level={4} />
    <ExampleContainer>
      <DxcInset horizontal="3rem">
        <DxcInset horizontal="5rem" vertical="2rem">
          <DxcTooltip title="Tooltip Test with a much larger text to display" position="left">
            <DxcButton label="Hoverable button" />
          </DxcTooltip>
        </DxcInset>
      </DxcInset>
    </ExampleContainer>
    <Title title="Right tooltip" theme="light" level={4} />
    <ExampleContainer>
      <DxcInset horizontal="3rem">
        <DxcInset horizontal="5rem" vertical="2rem">
          <DxcTooltip title="Tooltip Test" position="right">
            <DxcButton label="Hoverable button" />
          </DxcTooltip>
        </DxcInset>
      </DxcInset>
    </ExampleContainer>
    <Title title="Right tooltip multi-line" theme="light" level={4} />
    <ExampleContainer>
      <DxcInset horizontal="3rem">
        <DxcInset horizontal="5rem" vertical="2rem">
          <DxcTooltip title="Tooltip Test with a much larger text to display" position="right">
            <DxcButton label="Hoverable button" />
          </DxcTooltip>
        </DxcInset>
      </DxcInset>
    </ExampleContainer>
  </>
);

export const Chromatic = Tooltip.bind({});
Chromatic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const buttonList = canvas.getAllByRole("button");
  await userEvent.hover(buttonList[0]);
};

import React from "react";
import DxcTooltip from "./Tooltip";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcButton from "../button/Button";
import { userEvent, within } from "@storybook/testing-library";
import DxcInset from "../inset/Inset";
import DxcFlex from "../flex/Flex";
import Title from "../../.storybook/components/Title";

export default {
  title: "Tooltip",
  component: DxcTooltip,
};

const Tooltip = () => (
  <>
    <Title title="Tooltips" theme="light" level={2} />
    <ExampleContainer>
      <DxcInset horizontal="5rem" vertical="1rem">
        <DxcFlex gap="2rem">
          <DxcTooltip title="Tooltip Test" position="bottom">
            <DxcButton label="Hoverable button" />
          </DxcTooltip>
          <DxcTooltip title="Tooltip Test" position="top">
            <DxcButton label="Hoverable button" />
          </DxcTooltip>
        </DxcFlex>
      </DxcInset>
    </ExampleContainer>
    <ExampleContainer>
      <DxcInset horizontal="5rem" vertical="1rem">
        <DxcFlex gap="2rem">
          <DxcTooltip title="Tooltip Test" position="left">
            <DxcButton label="Hoverable button" />
          </DxcTooltip>
          <DxcTooltip title="Tooltip Test" position="right">
            <DxcButton label="Hoverable button" />
          </DxcTooltip>
        </DxcFlex>
      </DxcInset>
    </ExampleContainer>
  </>
);

export const Chromatic = Tooltip.bind({});
Chromatic.play = async ({ canvasElement }) => {
  // const canvas = within(canvasElement);
  // const buttonList = canvas.getAllByRole("button");
  // await userEvent.hover(buttonList[0]);
  // await userEvent.hover(buttonList[1]);
  // await userEvent.hover(buttonList[2]);
  // await userEvent.hover(buttonList[3]);
};

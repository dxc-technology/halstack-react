import React from "react";
import DxcTooltip from "./Tooltip";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcFlex from "../flex/Flex";
import DxcButton from "../button/Button";

export default {
  title: "Tooltip",
  component: DxcTooltip,
};

export const Chromatic = () => (
  <>
    {/* <Title title="Notification" theme="light" level={2} /> */}
    <ExampleContainer>
      <DxcTooltip title="Tooltip Test">
        <DxcButton label="Hoverable button" />
      </DxcTooltip>
    </ExampleContainer>
  </>
);

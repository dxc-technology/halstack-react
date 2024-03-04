import React from "react";
import DxcIcon from "./Icon";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { DxcTypography } from "../main";

export default {
  title: "Icon",
  component: DxcIcon,
};

export const Chromatic = () => (
  <>
    <Title title="Image component" theme="light" level={2} />
    <ExampleContainer>
      <DxcIcon icon="home" />
      <DxcTypography color="#fabada">
        <DxcIcon icon="more_vert" />
      </DxcTypography>
    </ExampleContainer>
  </>
);

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
    <Title title="Icon component" theme="light" level={2} />
    <ExampleContainer>
      <DxcIcon icon="home" />
      <DxcIcon icon="filled_home" />
    </ExampleContainer>
    <ExampleContainer>
      <DxcTypography as="p" color="#b182e3">
        <DxcIcon icon="home" />
        <DxcIcon icon="filled_home" />
      </DxcTypography>
    </ExampleContainer>
  </>
);

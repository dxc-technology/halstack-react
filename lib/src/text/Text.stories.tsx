import React from "react";
import Title from "../../.storybook/components/Title";
import DxcText from "./Text";

export default {
  title: "Text",
  component: DxcText,
};

export const Chromatic = () => (
  <>
    <Title title="Two texts as span" theme="light" level={4} />
    <DxcText>Text 1.</DxcText>
    <DxcText>Text 2.</DxcText>
    <Title title="Two texts as p" theme="light" level={4} />
    <DxcText as="p">Text 1.</DxcText>
    <DxcText as="p">Text 2.</DxcText>
  </>
);

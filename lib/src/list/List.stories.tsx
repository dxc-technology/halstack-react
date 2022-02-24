import React from "react";
import styled from "styled-components";
import Title from "../../.storybook/components/Title";
import DxcList from "./List";
import DxcText from "../text/Text";

export default {
  title: "List",
  component: DxcList,
};

export const Chromatic = () => (
  <>
    <Title title="Default list" theme="light" level={4} />
    <DxcList>
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="Multiple lines" theme="light" level={4} />
    <Container>
      <DxcList>
        <DxcText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </DxcText>
        <DxcText>Text 2.</DxcText>
      </DxcList>
    </Container>
    <Title title="gutter = xxsmall" theme="light" level={4} />
    <DxcList gutter="xxsmall">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="gutter = xsmall" theme="light" level={4} />
    <DxcList gutter="xsmall">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="gutter = small" theme="light" level={4} />
    <DxcList gutter="small">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="gutter = medium" theme="light" level={4} />
    <DxcList gutter="medium">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="gutter = large" theme="light" level={4} />
    <DxcList gutter="large">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="gutter = xlarge" theme="light" level={4} />
    <DxcList gutter="xlarge">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="gutter = xxlarge" theme="light" level={4} />
    <DxcList gutter="xxlarge">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>

  </>
);

const Container = styled.div`
  width: 400px;
`;

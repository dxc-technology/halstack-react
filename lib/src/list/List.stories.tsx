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
    <Title title="Number" theme="light" level={4} />
    <DxcList type="number">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="Square" theme="light" level={4} />
    <DxcList type="square">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="Circle" theme="light" level={4} />
    <DxcList type="circle">
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
    <Title title="gutter = 0rem" theme="light" level={4} />
    <DxcList gutter="0rem">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="gutter = 0.125rem" theme="light" level={4} />
    <DxcList gutter="0.125rem">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="gutter = 0.25rem" theme="light" level={4} />
    <DxcList gutter="0.25rem">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="gutter = 0.5rem" theme="light" level={4} />
    <DxcList gutter="0.5rem">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="gutter = 0.75rem" theme="light" level={4} />
    <DxcList gutter="0.75rem">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="gutter = 1rem" theme="light" level={4} />
    <DxcList gutter="1rem">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="gutter = 1.5rem" theme="light" level={4} />
    <DxcList gutter="1.5rem">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
    <Title title="gutter = 2rem" theme="light" level={4} />
    <DxcList gutter="2rem">
      <DxcText>Text 1.</DxcText>
      <DxcText>Text 2.</DxcText>
    </DxcList>
  </>
);

const Container = styled.div`
  width: 400px;
`;

import React from "react";
import Title from "../../.storybook/components/Title";
import styled from "styled-components";
import DxcStack from "./Stack";

export default {
  title: "Stack",
  component: DxcStack,
};

export const Chromatic = () => (
  <>
    <Title title="Default" theme="light" level={4} />
    <Container>
      <DxcStack>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Align = baseline" theme="light" level={4} />
    <Container>
      <DxcStack align="baseline">
        <Placeholder paddingLeft={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingRight={60}></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Align = center" theme="light" level={4} />
    <Container>
      <DxcStack align="center">
        <Placeholder paddingLeft={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingLeft={60}></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Align = end" theme="light" level={4} />
    <Container>
      <DxcStack align="end">
        <Placeholder paddingLeft={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingLeft={60}></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Align = start" theme="light" level={4} />
    <Container>
      <DxcStack align="start">
        <Placeholder paddingLeft={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingLeft={60}></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Align = stretch" theme="light" level={4} />
    <Container>
      <DxcStack align="stretch">
        <Placeholder paddingLeft={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingLeft={60}></Placeholder>
      </DxcStack>
    </Container>
    <Title title="gutter = xxxsmall" theme="light" level={4} />
    <Container>
      <DxcStack gutter="xxxsmall">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="gutter = xxsmall" theme="light" level={4} />
    <Container>
      <DxcStack gutter="xxsmall">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="gutter = xsmall" theme="light" level={4} />
    <Container>
      <DxcStack gutter="xsmall">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="gutter = small" theme="light" level={4} />
    <Container>
      <DxcStack gutter="small">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="gutter = medium" theme="light" level={4} />
    <Container>
      <DxcStack gutter="medium">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="gutter = large" theme="light" level={4} />
    <Container>
      <DxcStack gutter="large">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="gutter = xlarge" theme="light" level={4} />
    <Container>
      <DxcStack gutter="xlarge">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="gutter = xxlarge" theme="light" level={4} />
    <Container>
      <DxcStack gutter="xxlarge">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="gutter = xxxlarge" theme="light" level={4} />
    <Container>
      <DxcStack gutter="xxxlarge">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="gutter = xxlarge && divider" theme="light" level={4} />
    <Container>
      <DxcStack gutter="xxlarge" divider>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="gutter = none" theme="light" level={4} />
    <Container>
      <DxcStack gutter="none">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
  </>
);

const Container = styled.div`
  background: #f2eafa;
  padding: 10px;
`;

const Placeholder = styled.div`
  min-height: 40px;
  min-width: 120px;
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
  padding-left: ${({ paddingLeft }) => `${paddingLeft ?? 0}px`};
  padding-right: ${({ paddingRight }) => `${paddingRight ?? 0}px`};
`;

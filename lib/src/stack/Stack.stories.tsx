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
    <Title title="AlignX = start" theme="light" level={4} />
    <Container>
      <DxcStack alignX="start">
        <Placeholder paddingLeft={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingRight={60}></Placeholder>
      </DxcStack>
    </Container>
    <Title title="AlignX = end" theme="light" level={4} />
    <Container>
      <DxcStack alignX="end">
        <Placeholder paddingLeft={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingLeft={60}></Placeholder>
      </DxcStack>
    </Container>
    <Title title="AlignX = center" theme="light" level={4} />
    <Container>
      <DxcStack alignX="center">
        <Placeholder paddingLeft={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingLeft={60}></Placeholder>
      </DxcStack>
    </Container>
    <Title title="AlignX = baseline" theme="light" level={4} />
    <Container>
      <DxcStack alignX="baseline">
        <Placeholder paddingLeft={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingLeft={60}></Placeholder>
      </DxcStack>
    </Container>
    <Title title="AlignX = stretch" theme="light" level={4} />
    <Container>
      <DxcStack alignX="stretch">
        <Placeholder paddingLeft={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingLeft={60}></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Gutter = 0rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="0rem">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Gutter = 0.125rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="0.125rem">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Gutter = 0.25rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="0.25rem">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Gutter = 0.5rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="0.5rem">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Gutter = 0.75rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="0.75rem">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Gutter = 1rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="1rem">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Gutter = 1.5rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="1.5rem">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Gutter = 2rem && divider" theme="light" level={4} />
    <Container>
      <DxcStack gutter="2rem" divider>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
    <Title title="Reverse" theme="light" level={4} />
    <Container>
      <DxcStack reverse>
        <Placeholder>1</Placeholder>
        <Placeholder>2</Placeholder>
        <Placeholder>3</Placeholder>
      </DxcStack>
    </Container>
  </>
);

const Container = styled.div`
  background: #f2eafa;
  padding: 10px;
`;

type PlaceholderProps = { paddingLeft?: number; paddingRight?: number };

const Placeholder = styled.div<PlaceholderProps>`
  min-height: 40px;
  min-width: 120px;
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
  padding-left: ${({ paddingLeft }) => `${paddingLeft ?? 0}px`};
  padding-right: ${({ paddingRight }) => `${paddingRight ?? 0}px`};
`;

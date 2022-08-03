import React from "react";
import Title from "../../.storybook/components/Title";
import styled from "styled-components";
import DxcFlex from "./Flex";

export default {
  title: "Flex",
  component: DxcFlex,
};

export const Chromatic = () => (
  <>
    <Title title="Default" level={4} />
    <Container>
      <DxcFlex>
        <Placeholder />
        <Placeholder width="50px" />
        <Placeholder />
        <Placeholder width="50px" />
        <Placeholder width="50px" />
      </DxcFlex>
    </Container>
    <Title title="Direction column, wrap, justify content end, align items center and gap" level={4} />
    <Container>
      <DxcFlex direction="column" wrap="wrap" justifyContent="end" alignItems="center" gap="20px">
        <Placeholder />
        <Placeholder width="100px" />
        <Placeholder />
        <Placeholder width="100px" />
        <Placeholder />
      </DxcFlex>
    </Container>
    <Title title="Wrap with align content space between, row and column gaps, and as a span" level={4} />
    <Container height="250px">
      <DxcFlex wrap="wrap" alignContent="space-between" as="span" gap={{ rowGap: "10px", columnGap: "20px" }}>
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder width="100px" />
        <Placeholder />
        <Placeholder />
        <Placeholder width="100px" />
        <Placeholder />
        <Placeholder />
        <Placeholder width="100px" />
        <Placeholder />
      </DxcFlex>
    </Container>
    <Title title="Basis 100%, order, grow and align self" level={4} />
    <Container height="75px">
      <DxcFlex basis="100%">
        <DxcFlex order={3} grow={1} alignSelf="flex-end">
          <PlaceholderGrowAndShrink>order 3, grow 1, align self end</PlaceholderGrowAndShrink>
        </DxcFlex>
        <DxcFlex order={-1} grow={4}>
          <PlaceholderGrowAndShrink>order -1, grow 4</PlaceholderGrowAndShrink>
        </DxcFlex>
        <DxcFlex order={5} grow={1}>
          <PlaceholderGrowAndShrink>order 5, grow 1</PlaceholderGrowAndShrink>
        </DxcFlex>
        <DxcFlex order={2} grow={2}>
          <PlaceholderGrowAndShrink>order 2. grow 2</PlaceholderGrowAndShrink>
        </DxcFlex>
      </DxcFlex>
    </Container>
    <Title title="Basis and shrink" level={4} />
    <Container>
      <DxcFlex basis="600px">
        <DxcFlex shrink={4} basis="400px">
          <PlaceholderGrowAndShrink>shrink 4</PlaceholderGrowAndShrink>
        </DxcFlex>
        <DxcFlex shrink={2} basis="400px">
          <PlaceholderGrowAndShrink>shrink 2</PlaceholderGrowAndShrink>
        </DxcFlex>
        <DxcFlex shrink={1} basis="400px">
          <PlaceholderGrowAndShrink>shrink 1</PlaceholderGrowAndShrink>
        </DxcFlex>
      </DxcFlex>
    </Container>
  </>
);

const Container = styled.div<{ height?: string }>`
  display: flex;
  background: #f2eafa;
  margin: 2.5rem;
  ${({ height }) => (height ? `height: ${height}` : "max-height: 150px")};
`;

const Placeholder = styled.div<{ width?: string }>`
  height: 40px;
  min-width: ${({ width }) => width || "200px"};
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
`;

const PlaceholderGrowAndShrink = styled.div`
  height: 40px;
  width: 100%;
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
`;

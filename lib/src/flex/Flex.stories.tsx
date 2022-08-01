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
    <Title title="Wrap with align content space between and as a span" level={4} />
    <Container height="250px">
      <DxcFlex wrap="wrap" alignContent="space-between" as="span">
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
  width: ${({ width }) => width || "200px"};
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
`;

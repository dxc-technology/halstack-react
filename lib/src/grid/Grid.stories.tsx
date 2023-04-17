import React from "react";
import Title from "../../.storybook/components/Title";
import styled from "styled-components";
import DxcGrid from "./Grid";

export default {
  title: "Grid",
  component: DxcGrid,
};

export const Chromatic = () => (
  <>
    <Title title="Template areas layout" level={4} />
    <Container height="300px">
      <DxcGrid
        templateColumns={["repeat(4, 1fr)"]}
        templateRows={["auto"]}
        templateAreas={["header header header header", "sidenav main main main", "footer footer footer footer"]}
        gap="0.5rem"
      >
        <DxcGrid area="header">
          <Placeholder />
        </DxcGrid>
        <DxcGrid area="main">
          <Placeholder />
        </DxcGrid>
        <DxcGrid area="sidenav">
          <Placeholder />
        </DxcGrid>
        <DxcGrid area="footer">
          <Placeholder />
        </DxcGrid>
      </DxcGrid>
    </Container>
    <Title title="Grid Application Layout" level={4} />
    <div style={{ margin: "2.5rem" }}>
      <DxcGrid templateColumns={["1fr", "1fr", "1fr"]} templateRows={["1fr", "3fr", "1fr"]} gap="0.5rem">
        <DxcGrid column={{ start: 1, end: -1 }}>
          <ColoredContainer color="yellow">Header</ColoredContainer>
        </DxcGrid>
        <DxcGrid column={1}>
          <ColoredContainer color="lightcyan">Sidenav</ColoredContainer>
        </DxcGrid>
        <DxcGrid column={{ start: 2, end: -1 }}>
          <ColoredContainer color="white">Main</ColoredContainer>
        </DxcGrid>
        <DxcGrid column={{ start: 1, end: -1 }}>
          <ColoredContainer color="black">Footer</ColoredContainer>
        </DxcGrid>
      </DxcGrid>
    </div>
  </>
);

const Container = styled.div<{ height?: string }>`
  display: grid;
  overflow: auto;
  background: #f2eafa;
  margin: 2.5rem;
  ${({ height }) => height && `height: ${height}`};
`;

const Placeholder = styled.div<{ width?: string; height?: string }>`
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
`;

const ColoredContainer = styled.div<{ color?: string }>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  padding: 1rem;
  border: 1px solid #a46ede;
  border-radius: 0.5rem;
  font-family: Open Sans, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #a46ede;
`;

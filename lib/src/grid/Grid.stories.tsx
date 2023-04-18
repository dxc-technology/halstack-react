import React from "react";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
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
        templateAreas={["header header header header", "sidenav . main main", "footer footer footer footer"]}
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
    <Title title="Overlapping" level={4} />
    <div style={{ marginTop: "2.5rem", marginRight: "2.5rem", marginBottom: "4rem", marginLeft: "2.5rem" }}>
      <DxcGrid templateRows={["50px", "50px"]}>
        <ColoredContainer color="yellow" height="100px">
          1
        </ColoredContainer>
        <ColoredContainer color="transparent" height="100px">
          2
        </ColoredContainer>
      </DxcGrid>
    </div>
    <Title title="Implicit Grids" level={4} />
    <div style={{ margin: "2.5rem" }}>
      <DxcGrid templateColumns={["50px"]} templateRows={["50px", "50px"]} autoRows="50px" autoColumns="50px">
        <DxcGrid>
          <ColoredContainer height="50px">1</ColoredContainer>
        </DxcGrid>
        <DxcGrid row={2}>
          <ColoredContainer height="50px">3</ColoredContainer>
        </DxcGrid>
        <DxcGrid row={6} column={1}>
          <ColoredContainer height="50px">5</ColoredContainer>
        </DxcGrid>
        <DxcGrid row={3}>
          <ColoredContainer height="50px">4</ColoredContainer>
        </DxcGrid>
        <DxcGrid row={{ start: 1, end: 2 }} column={{ start: 5, end: 6 }}>
          <ColoredContainer height="50px">2</ColoredContainer>
        </DxcGrid>
      </DxcGrid>
    </div>
    <Title title="Autoflow 'row' (default)" level={4} />
    <ExampleContainer>
      <DxcGrid templateColumns={["repeat(5, 1fr)"]} templateRows={["1fr", "1fr"]} autoFlow="row" autoColumns="1fr">
        <DxcGrid row={{ start: 1, end: -1 }} column={1}>
          <ColoredContainer color="lightsalmon">1</ColoredContainer>
        </DxcGrid>
        <ColoredContainer color="lightyellow">2</ColoredContainer>
        <ColoredContainer color="lightcyan">3</ColoredContainer>
        <ColoredContainer color="lightgreen">4</ColoredContainer>
        <DxcGrid row={{ start: 1, end: -1 }} column={-2}>
          <ColoredContainer color="lightpink">5</ColoredContainer>
        </DxcGrid>
      </DxcGrid>
    </ExampleContainer>
    <Title title="Autoflow 'column'" level={4} />
    <ExampleContainer>
      <DxcGrid templateColumns={["repeat(5, 1fr)"]} templateRows={["1fr", "1fr"]} autoFlow="column" autoColumns="1fr">
        <DxcGrid row={{ start: 1, end: -1 }} column={1}>
          <ColoredContainer color="lightsalmon">1</ColoredContainer>
        </DxcGrid>
        <ColoredContainer color="lightyellow">2</ColoredContainer>
        <ColoredContainer color="lightcyan">3</ColoredContainer>
        <ColoredContainer color="lightgreen">4</ColoredContainer>
        <DxcGrid row={{ start: 1, end: -1 }} column={-2}>
          <ColoredContainer color="lightpink">5</ColoredContainer>
        </DxcGrid>
      </DxcGrid>
    </ExampleContainer>
  </>
);

const Container = styled.div<{ height?: string }>`
  display: grid;
  overflow: auto;
  margin: 2.5rem;
  ${({ height }) => height && `height: ${height}`};
`;

const Placeholder = styled.div<{ color?: string; width?: string; height?: string }>`
  border: 1px solid #a46ede;
  background-color: ${({ color }) => color ?? "#f2eafa;"};
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
`;

const ColoredContainer = styled.div<{ color?: string; width?: string; height?: string }>`
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

  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
`;

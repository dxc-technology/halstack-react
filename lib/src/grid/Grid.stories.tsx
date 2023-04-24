import React from "react";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import styled from "styled-components";
import DxcGrid from "./Grid";
import DxcInset from "../inset/Inset";

export default {
  title: "Grid",
  component: DxcGrid,
};

export const Chromatic = () => (
  <>
    <Title title="Default" level={4} />
    <ExampleContainer>
      <DxcGrid>
        <ColoredContainer />
        <ColoredContainer />
        <ColoredContainer />
      </DxcGrid>
    </ExampleContainer>
    <Title title="Place items" level={4} />
    <ExampleContainer>
      <DxcGrid templateRows={["200px"]} placeItems="center">
        <ColoredContainer height="50px" width="50px" />
      </DxcGrid>
      <DxcGrid placeItems={{ justifyItems: "end" }}>
        <ColoredContainer />
        <ColoredContainer />
        <ColoredContainer />
      </DxcGrid>
      <DxcGrid templateRows={["repeat(3, 100px)"]} placeItems={{ alignItems: "end", justifyItems: "center" }}>
        <ColoredContainer height="50px" width="50px" />
        <ColoredContainer height="50px" width="50px" />
        <ColoredContainer height="50px" width="50px" />
      </DxcGrid>
    </ExampleContainer>
    <Title title="Place content" level={4} />
    <Container height="200px">
      <DxcGrid placeContent="center">
        <ColoredContainer height="50px" width="50px" />
        <ColoredContainer height="50px" width="50px" />
      </DxcGrid>
    </Container>
    <Container height="200px">
      <DxcGrid placeContent={{ alignContent: "center" }}>
        <ColoredContainer height="50px" width="50px" />
      </DxcGrid>
    </Container>
    <Container height="200px">
      <DxcGrid placeContent={{ alignContent: "center", justifyContent: "end" }}>
        <ColoredContainer height="50px" width="50px" />
      </DxcGrid>
    </Container>
    <Title title="Place self" level={4} />
    <ExampleContainer>
      <DxcGrid templateRows={["repeat(3, 100px)"]}>
        <DxcGrid.GridItem placeSelf="center">
          <ColoredContainer height="50px" width="50px" />
        </DxcGrid.GridItem>
        <DxcGrid.GridItem placeSelf={{ alignSelf: "end" }}>
          <ColoredContainer height="40px" width="40px" />
          <ColoredContainer height="30px" width="30px" />
        </DxcGrid.GridItem>
        <DxcGrid.GridItem placeSelf={{ alignSelf: "center", justifySelf: "end" }}>
          <ColoredContainer height="50px" width="50px" />
        </DxcGrid.GridItem>
      </DxcGrid>
    </ExampleContainer>
    <Title title="Halstack layout using template areas" level={4} />
    <ExampleContainer>
      <DxcGrid
        templateColumns={["repeat(4, 1fr)"]}
        templateRows={["40px", "200px", "60px"]}
        templateAreas={["header header header header", "sidenav main main main", "sidenav footer footer footer"]}
        gap={{ rowGap: "0.5rem", columnGap: "1rem" }}
      >
        <DxcGrid.GridItem areaName="header" as="header">
          <ColoredContainer height="100%" />
        </DxcGrid.GridItem>
        <DxcGrid.GridItem areaName="main" as="main">
          <ColoredContainer height="100%" />
        </DxcGrid.GridItem>
        <DxcGrid.GridItem areaName="sidenav" as="nav">
          <ColoredContainer height="100%" />
        </DxcGrid.GridItem>
        <DxcGrid.GridItem areaName="footer" as="footer">
          <ColoredContainer height="100%" />
        </DxcGrid.GridItem>
      </DxcGrid>
    </ExampleContainer>
    <Title title="Template rows and columns with flexible sizes" level={4} />
    <ExampleContainer>
      <DxcGrid templateColumns={["1fr", "1fr", "1fr"]} templateRows={["1fr", "3fr", "1fr"]} gap="0.5rem">
        <DxcGrid.GridItem column={{ start: 1, end: -1 }}>
          <ColoredContainer color="yellow" height="100%">
            Header
          </ColoredContainer>
        </DxcGrid.GridItem>
        <DxcGrid.GridItem column={1}>
          <ColoredContainer color="lightcyan" height="100%">
            Sidenav
          </ColoredContainer>
        </DxcGrid.GridItem>
        <DxcGrid
          column={{ start: 2, end: -1 }}
          templateRows={["repeat(4, 1fr)"]}
          templateColumns={["repeat(2, 1fr)"]}
          gap="1rem"
        >
          <ColoredContainer />
          <ColoredContainer />
          <ColoredContainer />
          <ColoredContainer />
          <ColoredContainer />
          <ColoredContainer />
          <ColoredContainer />
          <ColoredContainer />
        </DxcGrid>
        <DxcGrid.GridItem column={{ start: 1, end: -1 }}>
          <ColoredContainer color="black" height="100%">
            Footer
          </ColoredContainer>
        </DxcGrid.GridItem>
      </DxcGrid>
    </ExampleContainer>
    <Title title="Overlapping" level={4} />
    <DxcInset bottom="2rem">
      <ExampleContainer>
        <DxcGrid templateRows={["50px", "50px"]}>
          <ColoredContainer color="yellow" height="100px">
            1
          </ColoredContainer>
          <ColoredContainer color="transparent" height="100px">
            2
          </ColoredContainer>
        </DxcGrid>
      </ExampleContainer>
    </DxcInset>
    <Title title="Implicit rows and columns" level={4} />
    <ExampleContainer>
      <DxcGrid templateColumns={["50px"]} templateRows={["50px", "50px"]} autoRows="50px" autoColumns="50px">
        <DxcGrid.GridItem>
          <ColoredContainer height="50px">1</ColoredContainer>
        </DxcGrid.GridItem>
        <DxcGrid.GridItem row={2}>
          <ColoredContainer height="50px">3</ColoredContainer>
        </DxcGrid.GridItem>
        <DxcGrid.GridItem row={6} column={1}>
          <ColoredContainer height="50px">5</ColoredContainer>
        </DxcGrid.GridItem>
        <DxcGrid.GridItem row={3}>
          <ColoredContainer height="50px">4</ColoredContainer>
        </DxcGrid.GridItem>
        <DxcGrid.GridItem row={{ start: 1, end: 2 }} column={{ start: 5, end: 7 }}>
          <ColoredContainer height="50px">2</ColoredContainer>
        </DxcGrid.GridItem>
      </DxcGrid>
    </ExampleContainer>
    <Title title="Autoflow 'row' (default)" level={4} />
    <ExampleContainer>
      <DxcGrid templateColumns={["repeat(5, 1fr)"]} templateRows={["1fr", "1fr"]} autoFlow="row" autoColumns="1fr">
        <DxcGrid.GridItem row={{ start: 1, end: "span 2" }} column={1}>
          <ColoredContainer height="100%">1</ColoredContainer>
        </DxcGrid.GridItem>
        <ColoredContainer color="lightyellow">2</ColoredContainer>
        <ColoredContainer color="lightcyan">3</ColoredContainer>
        <ColoredContainer color="lightgreen">4</ColoredContainer>
        <DxcGrid.GridItem row={{ start: 1, end: -1 }} column={-2}>
          <ColoredContainer color="lightpink" height="100%">
            5
          </ColoredContainer>
        </DxcGrid.GridItem>
      </DxcGrid>
    </ExampleContainer>
    <Title title="Autoflow 'column'" level={4} />
    <ExampleContainer>
      <DxcGrid templateColumns={["repeat(5, 1fr)"]} templateRows={["1fr", "1fr"]} autoFlow="column" autoColumns="1fr">
        <DxcGrid.GridItem row={{ start: 1, end: -1 }} column={1}>
          <ColoredContainer height="100%">1</ColoredContainer>
        </DxcGrid.GridItem>
        <ColoredContainer color="lightyellow">2</ColoredContainer>
        <ColoredContainer color="lightcyan">3</ColoredContainer>
        <ColoredContainer color="lightgreen">4</ColoredContainer>
        <DxcGrid.GridItem row={{ start: 1, end: -1 }} column={-2}>
          <ColoredContainer color="lightpink" height="100%">
            5
          </ColoredContainer>
        </DxcGrid.GridItem>
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

const ColoredContainer = styled.div<{ color?: string; width?: string; height?: string }>`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color ?? "#e5d5f6"};
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

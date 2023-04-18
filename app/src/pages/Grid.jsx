import React from "react";
import { DxcGrid } from "@dxc-technology/halstack-react";
import styled from "styled-components";

const App = () => (
  <div style={{ margin: "1rem" }}>
    <h2>Template areas layout</h2>
    <Container height="300px">
      <DxcGrid
        templateColumns={["repeat(4, 1fr)"]}
        templateRows={["auto"]}
        templateAreas={[
          "header header header header",
          "sidenav . main main",
          "footer footer footer footer",
        ]}
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
  </div>
);

const Container = styled.div`
  display: grid;
  overflow: auto;
  margin: 2.5rem;
  ${({ height }) => height && `height: ${height}`};
`;

const Placeholder = styled.div`
  border: 1px solid #a46ede;
  background-color: ${({ color }) => color ?? "#f2eafa;"};
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
`;

const ColoredContainer = styled.div`
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

export default App;

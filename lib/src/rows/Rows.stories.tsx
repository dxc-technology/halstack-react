import React from "react";
import Title from "../../.storybook/components/Title";
import styled from "styled-components";
import DxcRows from "./Rows";

export default {
  title: "Rows",
  component: DxcRows,
};

export const Chromatic = () => (
  <>
    <Title title="Default" theme="light" level={4} />
    <Container>
      <DxcRows>
        <DxcRows.Row>
          <Placeholder width="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="auto" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="AlignX = end" theme="light" level={4} />
    <Container>
      <DxcRows alignX="end">
        <Placeholder width="small" />
        <Placeholder width="medium" />
        <Placeholder width="large" />
      </DxcRows>
    </Container>
    <Title title="AlignX = center" theme="light" level={4} />
    <Container>
      <DxcRows alignX="center">
        <DxcRows.Row>
          <Placeholder width="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="AlignX = baseline" theme="light" level={4} />
    <Container>
      <DxcRows alignX="baseline">
        <DxcRows.Row>
          <Placeholder width="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="AlignX = start" theme="light" level={4} />
    <Container>
      <DxcRows alignX="start">
        <DxcRows.Row>
          <Placeholder width="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="AlignY = end" theme="light" level={4} />
    <Container>
      <DxcRows alignY="end">
        <DxcRows.Row>
          <Placeholder width="small" height="small" />
          <Placeholder width="medium" height="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" height="medium" />
          <Placeholder width="small" height="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" height="large" />
          <Placeholder width="small" height="small" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="AlignY = center" theme="light" level={4} />
    <Container>
      <DxcRows alignY="center">
        <DxcRows.Row>
          <Placeholder width="small" height="small" />
          <Placeholder width="medium" height="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" height="medium" />
          <Placeholder width="small" height="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" height="large" />
          <Placeholder width="small" height="small" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="AlignY = baseline" theme="light" level={4} />
    <Container>
      <DxcRows alignY="baseline">
        <DxcRows.Row>
          <Placeholder width="small" height="small" />
          <Placeholder width="medium" height="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" height="medium" />
          <Placeholder width="small" height="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" height="large" />
          <Placeholder width="small" height="small" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="AlignY = start" theme="light" level={4} />
    <Container>
      <DxcRows alignY="start">
        <DxcRows.Row>
          <Placeholder width="small" height="small" />
          <Placeholder width="medium" height="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" height="medium" />
          <Placeholder width="small" height="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" height="large" />
          <Placeholder width="small" height="small"/>
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="Gutter = 0.125rem" theme="light" level={4} />
    <Container>
      <DxcRows gutter="0.125rem">
        <DxcRows.Row>
          <Placeholder width="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="Gutter = 0.25rem" theme="light" level={4} />
    <Container>
      <DxcRows gutter="0.25rem">
        <DxcRows.Row>
          <Placeholder width="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="Gutter = 0.5rem" theme="light" level={4} />
    <Container>
      <DxcRows gutter="0.5rem">
        <DxcRows.Row>
          <Placeholder width="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="Gutter = 0.75rem" theme="light" level={4} />
    <Container>
      <DxcRows gutter="0.75rem">
        <DxcRows.Row>
          <Placeholder width="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="Gutter = 1rem" theme="light" level={4} />
    <Container>
      <DxcRows gutter="1rem">
        <DxcRows.Row>
          <Placeholder width="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="Gutter = 1.5rem" theme="light" level={4} />
    <Container>
      <DxcRows gutter="1.5rem">
        <DxcRows.Row>
          <Placeholder width="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="Gutter = 2rem and divider" theme="light" level={4} />
    <Container>
      <DxcRows gutter="2rem" divider>
        <DxcRows.Row>
          <Placeholder width="small" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium" />
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large" />
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="Reverse" theme="light" level={4} />
    <Container>
      <DxcRows reverse>
        <DxcRows.Row>
          <Placeholder width="small">1</Placeholder>
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="medium">2</Placeholder>
        </DxcRows.Row>
        <DxcRows.Row>
          <Placeholder width="large">3</Placeholder>
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="Heights" theme="light" level={4} />
    <Container>
      <DxcRows>
        <DxcRows.Row height="1">
          <Placeholder width="small">1</Placeholder>
        </DxcRows.Row>
        <DxcRows.Row height="2">
          <Placeholder width="medium">2</Placeholder>
        </DxcRows.Row>
        <DxcRows.Row height="5">
          <Placeholder width="large">5</Placeholder>
        </DxcRows.Row>
      </DxcRows>
    </Container>
    <Title title="Heights" theme="light" level={4} />
    <Container>
      <DxcRows>
        <DxcRows.Row height="1">
          <Placeholder width="small">1</Placeholder>
        </DxcRows.Row>
        <DxcRows.Row height="3">
          <Placeholder width="medium">3</Placeholder>
        </DxcRows.Row>
        <DxcRows.Row height="auto">
          <Placeholder width="large">auto</Placeholder>
        </DxcRows.Row>
      </DxcRows>
    </Container>
  </>
);

const Container = styled.div`
  display: flex;
  background: #f2eafa;
  height: 200px;
`;

type PlaceholderProps = {
  width: "large" | "medium" | "small" | "auto";
  height?: "large" | "medium" | "small" | "auto";
};

const Placeholder = styled.div<PlaceholderProps>`
  width: ${({ width }) =>
    width === "large" ? "150px" : width === "medium" ? "120px" : width === "small" ? "100px" : "100%"};
  ${({ height }) =>
    height
      ? `height: ${height === "large" ? "50px" : height === "medium" ? "20px" : height === "small" ? "10px" : "100%"};`
      : ""};
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
`;

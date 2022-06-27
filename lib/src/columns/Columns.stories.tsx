import React from "react";
import Title from "../../.storybook/components/Title";
import styled from "styled-components";
import DxcColumns from "./Columns";

export default {
  title: "Columns",
  component: DxcColumns,
};

export const Chromatic = () => (
  <>
    <Title title="Default" theme="light" level={4} />
    <Container>
      <DxcColumns>
        <DxcColumns.Column>
          <Placeholder height="auto" width="small">
            auto height
          </Placeholder>
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" width="medium" />
          <Placeholder height="medium" width="auto">
            auto width
          </Placeholder>
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" width="small" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="Default with divider" theme="light" level={4} />
    <Container>
      <DxcColumns divider>
        <DxcColumns.Column>
          <Placeholder height="auto" width="auto">
            auto height
          </Placeholder>
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" width="auto">
            auto width
          </Placeholder>
          <Placeholder height="medium" width="auto">
            auto width
          </Placeholder>
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" width="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" width="large" />
          <Placeholder height="large" width="medium" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="Default with one column" theme="light" level={4} />
    <Container>
      <DxcColumns>
        <DxcColumns.Column>
          <Placeholder height="auto" width="auto" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="AlignY = end" theme="light" level={4} />
    <Container>
      <DxcColumns alignY="end">
        <Placeholder height="small" />
        <Placeholder height="medium" />
        <Placeholder height="large" />
        <Placeholder height="medium" />
        <Placeholder height="small" />
      </DxcColumns>
    </Container>
    <Title title="AlignY = center" theme="light" level={4} />
    <Container>
      <DxcColumns alignY="center">
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="AlignY = baseline" theme="light" level={4} />
    <Container>
      <DxcColumns alignY="baseline">
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="AlignY = start" theme="light" level={4} />
    <Container>
      <DxcColumns alignY="start">
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="AlignX = end" theme="light" level={4} />
    <Container>
      <DxcColumns alignX="end">
        <DxcColumns.Column>
          <Placeholder height="small" width="small" />
          <Placeholder height="medium" width="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" width="medium" />
          <Placeholder height="small" width="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" width="large" />
          <Placeholder height="small" width="small" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="AlignX = center" theme="light" level={4} />
    <Container>
      <DxcColumns alignX="center">
        <DxcColumns.Column>
          <Placeholder height="small" width="small" />
          <Placeholder height="medium" width="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" width="medium" />
          <Placeholder height="small" width="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" width="large" />
          <Placeholder height="small" width="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" width="medium" />
          <Placeholder height="small" width="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="small" width="small" />
          <Placeholder height="medium" width="medium" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="AlignX = baseline" theme="light" level={4} />
    <Container>
      <DxcColumns alignX="baseline">
        <DxcColumns.Column>
          <Placeholder height="small" width="small" />
          <Placeholder height="medium" width="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" width="medium" />
          <Placeholder height="small" width="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" width="large" />
          <Placeholder height="small" width="small" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="AlignX = start" theme="light" level={4} />
    <Container>
      <DxcColumns alignX="start">
        <DxcColumns.Column>
          <Placeholder height="small" width="small" />
          <Placeholder height="medium" width="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" width="medium" />
          <Placeholder height="small" width="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" width="large" />
          <Placeholder height="small" width="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" width="medium" />
          <Placeholder height="small" width="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="small" width="small" />
          <Placeholder height="medium" width="medium" />
          <Placeholder height="large" width="large" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="Gutter = 0.125rem" theme="light" level={4} />
    <Container>
      <DxcColumns gutter="0.125rem">
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="Gutter = 0.25rem" theme="light" level={4} />
    <Container>
      <DxcColumns gutter="0.25rem">
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="Gutter = 0.5rem" theme="light" level={4} />
    <Container>
      <DxcColumns gutter="0.5rem">
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="Gutter = 0.75rem" theme="light" level={4} />
    <Container>
      <DxcColumns gutter="0.75rem">
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="Gutter = 1rem" theme="light" level={4} />
    <Container>
      <DxcColumns gutter="1rem">
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="Gutter = 1.5rem" theme="light" level={4} />
    <Container>
      <DxcColumns gutter="1.5rem">
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="Gutter = 2rem and divider" theme="light" level={4} />
    <Container>
      <DxcColumns gutter="2rem" divider>
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium" />
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="small" />
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="Reverse" theme="light" level={4} />
    <Container>
      <DxcColumns reverse>
        <DxcColumns.Column>
          <Placeholder height="small">1</Placeholder>
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="medium">2</Placeholder>
        </DxcColumns.Column>
        <DxcColumns.Column>
          <Placeholder height="large">3</Placeholder>
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="Widths" theme="light" level={4} />
    <Container>
      <DxcColumns>
        <DxcColumns.Column width="1">
          <Placeholder height="small">1</Placeholder>
        </DxcColumns.Column>
        <DxcColumns.Column width="2">
          <Placeholder height="medium">2</Placeholder>
        </DxcColumns.Column>
        <DxcColumns.Column width="5">
          <Placeholder height="large">5</Placeholder>
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
    <Title title="Widths" theme="light" level={4} />
    <Container>
      <DxcColumns>
        <DxcColumns.Column width="1">
          <Placeholder height="small">1</Placeholder>
        </DxcColumns.Column>
        <DxcColumns.Column width="1">
          <Placeholder height="small">1</Placeholder>
        </DxcColumns.Column>
        <DxcColumns.Column width="3">
          <Placeholder height="medium">3</Placeholder>
        </DxcColumns.Column>
        <DxcColumns.Column width="auto">
          <Placeholder height="large">auto</Placeholder>
        </DxcColumns.Column>
      </DxcColumns>
    </Container>
  </>
);

const Container = styled.div`
  display: flex;
  background: #f2eafa;
  height: 200px;
`;

type PlaceholderProps = {
  width?: "large" | "medium" | "small" | "auto";
  height: "large" | "medium" | "small" | "auto";
};

const Placeholder = styled.div<PlaceholderProps>`
  width: ${({ width }) =>
    width === "large" ? "150px" : width === "medium" ? "120px" : width === "small" ? "100px" : "100%"};
  ${({ height }) =>
    height
      ? `height: ${height === "large" ? "100px" : height === "medium" ? "70px" : height === "small" ? "50px" : "100%"};`
      : ""};
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
`;

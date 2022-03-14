import React from "react";
import Title from "../../.storybook/components/Title";
import styled from "styled-components";
import DxcRow from "./Row";

export default {
  title: "Row",
  component: DxcRow,
};

export const Chromatic = () => (
  <>
    <Title title="Default" theme="light" level={4} />
    <Container>
      <DxcRow>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="Justify = center" theme="light" level={4} />
    <Container>
      <DxcRow justify="center">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="Justify = end" theme="light" level={4} />
    <Container>
      <DxcRow justify="end">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="Justify = spaceAround" theme="light" level={4} />
    <Container>
      <DxcRow justify="spaceAround">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="Justify = spaceBetween" theme="light" level={4} />
    <Container>
      <DxcRow justify="spaceBetween">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="Justify = spaceEvenly" theme="light" level={4} />
    <Container>
      <DxcRow justify="spaceEvenly">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="Justify = start" theme="light" level={4} />
    <Container>
      <DxcRow justify="start">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="Align = baseline" theme="light" level={4} />
    <Container>
      <DxcRow align="baseline">
        <Placeholder paddingTop={20}>test</Placeholder>
        <Placeholder>test</Placeholder>
        <Placeholder paddingBottom={60}>test</Placeholder>
      </DxcRow>
    </Container>
    <Title title="Align = center" theme="light" level={4} />
    <Container>
      <DxcRow align="center">
        <Placeholder paddingTop={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingTop={60}></Placeholder>
      </DxcRow>
    </Container>
    <Title title="Align = end" theme="light" level={4} />
    <Container>
      <DxcRow align="end">
        <Placeholder paddingTop={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingTop={60}></Placeholder>
      </DxcRow>
    </Container>
    <Title title="Align = start" theme="light" level={4} />
    <Container>
      <DxcRow align="start">
        <Placeholder paddingTop={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingTop={60}></Placeholder>
      </DxcRow>
    </Container>
    <Title title="Align = stretch" theme="light" level={4} />
    <Container>
      <DxcRow align="stretch">
        <Placeholder paddingTop={20}></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder paddingTop={60}></Placeholder>
      </DxcRow>
    </Container>
     <Title title="gutter = xxxsmall" theme="light" level={4} />
    <Container>
      <DxcRow gutter="xxxsmall">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="gutter = xxsmall" theme="light" level={4} />
    <Container>
      <DxcRow gutter="xxsmall">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="gutter = xsmall" theme="light" level={4} />
    <Container>
      <DxcRow gutter="xsmall">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="gutter = small" theme="light" level={4} />
    <Container>
      <DxcRow gutter="small">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="gutter = medium" theme="light" level={4} />
    <Container>
      <DxcRow gutter="medium">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="gutter = large" theme="light" level={4} />
    <Container>
      <DxcRow gutter="large">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="gutter = xlarge" theme="light" level={4} />
    <Container>
      <DxcRow gutter="xlarge">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="gutter = xxlarge" theme="light" level={4} />
    <Container>
      <DxcRow gutter="xxlarge">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="gutter = xxxlarge" theme="light" level={4} />
    <Container>
      <DxcRow gutter="xxxlarge">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="gutter = none" theme="light" level={4} />
    <Container>
      <DxcRow gutter="none">
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </DxcRow>
    </Container>
    <Title title="reverse = false" theme="light" level={4} />
    <Container>
      <DxcRow reverse={false}>
        <Placeholder>1</Placeholder>
        <Placeholder>2</Placeholder>
        <Placeholder>3</Placeholder>
      </DxcRow>
    </Container>
    <Title title="reverse = true" theme="light" level={4} />
    <Container>
      <DxcRow reverse={true}>
        <Placeholder>1</Placeholder>
        <Placeholder>2</Placeholder>
        <Placeholder>3</Placeholder>
      </DxcRow>
    </Container>
    <Title title="wrap = true" theme="light" level={4} />
    <Container width={300}>
      <DxcRow wrap={true}>
        <Placeholder>1</Placeholder>
        <Placeholder>2</Placeholder>
        <Placeholder>3</Placeholder>
      </DxcRow>
    </Container>
    <Title title="wrap = false" theme="light" level={4} />
    <Container width={300}>
      <DxcRow wrap={false}>
        <Placeholder>1</Placeholder>
        <Placeholder>2</Placeholder>
        <Placeholder>3</Placeholder>
      </DxcRow>
    </Container>
  </>
);

const Container = styled.div`
  background: #d0d0d0;
  padding: 10px;
  border-radius: 10px;
  width: ${({ width }) => (width ? `${width}px` : "unset")};
`;

const Placeholder = styled.div`
  min-height: 80px;
  min-width: 120px;
  border: 1px solid #fabada;
  background-color: #fff7fb;
  border-radius: 5px;
  padding-top: ${({ paddingTop }) => `${paddingTop ?? 0}px`};
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom ?? 0}px`};
`;

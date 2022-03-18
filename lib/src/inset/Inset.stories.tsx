import React from "react";
import Title from "../../.storybook/components/Title";
import styled from "styled-components";
import DxcStack from "./../stack/Stack";
import DxcInset from "./Inset";

export default {
  title: "Inset",
  component: DxcInset,
};

export const Chromatic = () => (
  <>
    <Title title="Default" level={4} />
    <Container>
      <DxcInset>
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = none" level={4} />
    <Container>
      <DxcInset space="none">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = xxxsmall" level={4} />
    <Container>
      <DxcInset space="xxxsmall">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = xxsmall" level={4} />
    <Container>
      <DxcInset space="xxsmall">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = xsmall" level={4} />
    <Container>
      <DxcInset space="xsmall">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = small" level={4} />
    <Container>
      <DxcInset space="small">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = medium" level={4} />
    <Container>
      <DxcInset space="medium">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = large" level={4} />
    <Container>
      <DxcInset space="large">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = xlarge" level={4} />
    <Container>
      <DxcInset space="xlarge">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = xxlarge" level={4} />
    <Container>
      <DxcInset space="xxlarge">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = xxxlarge" level={4} />
    <Container>
      <DxcInset space="xxxlarge">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = none" level={4} />
    <Container>
      <DxcInset horizontal="none">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = xxxsmall" level={4} />
    <Container>
      <DxcInset horizontal="xxxsmall">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = xxsmall" level={4} />
    <Container>
      <DxcInset horizontal="xxsmall">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = xsmall" level={4} />
    <Container>
      <DxcInset horizontal="xsmall">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = small" level={4} />
    <Container>
      <DxcInset horizontal="small">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = medium" level={4} />
    <Container>
      <DxcInset horizontal="medium">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = large" level={4} />
    <Container>
      <DxcInset horizontal="large">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = xlarge" level={4} />
    <Container>
      <DxcInset horizontal="xlarge">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = xxlarge" level={4} />
    <Container>
      <DxcInset horizontal="xxlarge">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = xxxlarge" level={4} />
    <Container>
      <DxcInset horizontal="xxxlarge">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = none" level={4} />
    <Container>
      <DxcInset vertical="none">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = xxxsmall" level={4} />
    <Container>
      <DxcInset vertical="xxxsmall">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = xxsmall" level={4} />
    <Container>
      <DxcInset vertical="xxsmall">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = xsmall" level={4} />
    <Container>
      <DxcInset vertical="xsmall">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = small" level={4} />
    <Container>
      <DxcInset vertical="small">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = medium" level={4} />
    <Container>
      <DxcInset vertical="medium">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = large" level={4} />
    <Container>
      <DxcInset vertical="large">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = xlarge" level={4} />
    <Container>
      <DxcInset vertical="xlarge">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = xxlarge" level={4} />
    <Container>
      <DxcInset vertical="xxlarge">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = xxxlarge" level={4} />
    <Container>
      <DxcInset vertical="xxxlarge">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="top = xxsmall, right= medium, bottom = large and left = xxlarge" level={4} />
    <Container>
      <DxcInset top="xxsmall" right="medium" bottom="large" left="xxlarge">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="Inside a stack" level={4} />
    <Container>
      <DxcStack gutter="medium" divider>
        <Placeholder></Placeholder>
        <DxcInset top="xxsmall" right="medium" bottom="large" left="xxlarge">
          <Placeholder></Placeholder>
        </DxcInset>
        <Placeholder></Placeholder>
      </DxcStack>
    </Container>
  </>
);

const Container = styled.div`
  background: #f2eafa;
  margin: 2.5rem;
`;

const Placeholder = styled.div`
  min-height: 40px;
  min-width: 120px;
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
`;

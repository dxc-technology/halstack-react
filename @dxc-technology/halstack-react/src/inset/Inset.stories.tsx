import React from "react";
import Title from "../../.storybook/components/Title";
import styled from "styled-components";
import DxcFlex from "./../flex/Flex";
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
      <DxcInset space="0rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = xxxsmall" level={4} />
    <Container>
      <DxcInset space="0.125rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = xxsmall" level={4} />
    <Container>
      <DxcInset space="0.25rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = xsmall" level={4} />
    <Container>
      <DxcInset space="0.5rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = small" level={4} />
    <Container>
      <DxcInset space="1rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = medium" level={4} />
    <Container>
      <DxcInset space="1.5rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = large" level={4} />
    <Container>
      <DxcInset space="2rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = xlarge" level={4} />
    <Container>
      <DxcInset space="3rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = xxlarge" level={4} />
    <Container>
      <DxcInset space="4rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="space = xxxlarge" level={4} />
    <Container>
      <DxcInset space="5rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = none" level={4} />
    <Container>
      <DxcInset horizontal="0rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = xxxsmall" level={4} />
    <Container>
      <DxcInset horizontal="0.125rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = xxsmall" level={4} />
    <Container>
      <DxcInset horizontal="0.25rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = xsmall" level={4} />
    <Container>
      <DxcInset horizontal="0.5rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = small" level={4} />
    <Container>
      <DxcInset horizontal="1rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = medium" level={4} />
    <Container>
      <DxcInset horizontal="1.5rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = large" level={4} />
    <Container>
      <DxcInset horizontal="2rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = xlarge" level={4} />
    <Container>
      <DxcInset horizontal="3rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = xxlarge" level={4} />
    <Container>
      <DxcInset horizontal="4rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="horizontal = xxxlarge" level={4} />
    <Container>
      <DxcInset horizontal="5rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = none" level={4} />
    <Container>
      <DxcInset vertical="0rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = xxxsmall" level={4} />
    <Container>
      <DxcInset vertical="0.125rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = xxsmall" level={4} />
    <Container>
      <DxcInset vertical="0.25rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = xsmall" level={4} />
    <Container>
      <DxcInset vertical="0.5rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = small" level={4} />
    <Container>
      <DxcInset vertical="1rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = medium" level={4} />
    <Container>
      <DxcInset vertical="1.5rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = large" level={4} />
    <Container>
      <DxcInset vertical="2rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = xlarge" level={4} />
    <Container>
      <DxcInset vertical="3rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = xxlarge" level={4} />
    <Container>
      <DxcInset vertical="4rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="vertical = xxxlarge" level={4} />
    <Container>
      <DxcInset vertical="5rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="top = xxsmall, right= medium, bottom = large and left = xxlarge" level={4} />
    <Container>
      <DxcInset top="0.25rem" right="1.5rem" bottom="2rem" left="4rem">
        <Placeholder></Placeholder>
      </DxcInset>
    </Container>
    <Title title="Inside a flex column" level={4} />
    <Container>
      <DxcFlex direction="column" gap="0.75rem">
        <Placeholder></Placeholder>
        <DxcInset top="0.25rem" right="1.5rem" bottom="2rem" left="4rem">
          <Placeholder></Placeholder>
        </DxcInset>
        <Placeholder></Placeholder>
      </DxcFlex>
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

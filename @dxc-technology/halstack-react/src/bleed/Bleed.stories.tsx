import React from "react";
import styled from "styled-components";
import Title from "../../.storybook/components/Title";
import DxcBleed from "./Bleed";
import DxcFlex from "../flex/Flex";

export default {
  title: "Bleed",
  component: DxcBleed,
};

export const Chromatic = () => (
  <>
    <Title title="Space = none" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed space="0rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Space = xxxsmall" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed space="0.125rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Space = xxsmall" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed space="0.25rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Space = xsmall" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed space="0.5rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Space = small" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed space="1rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Space = medium" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed space="1.5rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Space = large" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed space="2rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Space = xlarge" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed space="3rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Space = xxlarge" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed space="4rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Space = xxxlarge" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed space="5rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>

    <Title title="Horizontal = none" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed horizontal="0rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Horizontal = xxxsmall" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed horizontal="0.125rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Horizontal = xxsmall" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed horizontal="0.25rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Horizontal = xsmall" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed horizontal="0.5rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Horizontal = small" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed horizontal="1rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Horizontal = medium" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed horizontal="1.5rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Horizontal = large" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed horizontal="2rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Horizontal = xlarge" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed horizontal="3rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Horizontal = xxlarge" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed horizontal="4rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Horizontal = xxxlarge" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed horizontal="5rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>

    <Title title="Vertical = none" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed vertical="0rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Vertical = xxxsmall" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed vertical="0.125rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Vertical = xxsmall" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed vertical="0.25rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Vertical = xsmall" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed vertical="0.5rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Vertical = small" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed vertical="1rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Vertical = medium" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed vertical="1.5rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Vertical = large" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed vertical="2rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Vertical = xlarge" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed vertical="3rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Vertical = xxlarge" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed vertical="4rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
    <Title title="Vertical = xxxlarge" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed vertical="5rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>

    <Title title="Top = xsmall, right = small, bottom = medium and left = large" theme="light" level={4} />
    <Container>
      <DxcFlex direction="column" gap="1.5rem">
        <Placeholder></Placeholder>
        <DxcBleed top="0.5rem" right="1rem" bottom="1.5rem" left="2rem">
          <Placeholder></Placeholder>
        </DxcBleed>
        <Placeholder></Placeholder>
      </DxcFlex>
    </Container>
  </>
);

const Container = styled.div`
  background: #f2eafa;
  padding: 5rem;
  margin: 2.5rem;
`;

const Placeholder = styled.div`
  min-height: 40px;
  min-width: 120px;
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
`;

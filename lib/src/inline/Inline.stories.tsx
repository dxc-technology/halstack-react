import React from "react";
import Title from "../../.storybook/components/Title";
import styled from "styled-components";
import DxcInline from "./Inline";

export default {
  title: "Inline",
  component: DxcInline,
};

export const Chromatic = () => (
  <>
    <Title title="Default" theme="light" level={4} />
    <Container>
      <DxcInline>
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="Default with divider" theme="light" level={4} />
    <Container>
      <DxcInline divider>
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
        <Placeholder height="large" width="large" />
        <Placeholder height="medium" width="small" />
      </DxcInline>
    </Container>
    <Title title="One child larger than flex container" theme="light" level={4} />
    <FlexContainer customWidth>
      <DxcInline>
        <Placeholder height="large" width="xlarge" />
      </DxcInline>
    </FlexContainer>
    <Title title="Wrap" theme="light" level={4} />
    <Container customWidth>
      <DxcInline>
        <Placeholder height="large" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
        <Placeholder height="large" width="medium" />
      </DxcInline>
    </Container>
    <Title title="AlignY = start" theme="light" level={4} />
    <Container>
      <DxcInline alignY="stretch">
        <Placeholder width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="AlignY = end with divider" theme="light" level={4} />
    <Container>
      <DxcInline alignY="end" divider>
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="AlignY = center" theme="light" level={4} />
    <Container>
      <DxcInline alignY="center">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="AlignY with wrapped items" theme="light" level={4} />
    <Container customWidth>
      <DxcInline alignY="end">
        <Placeholder height="large" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
        <Placeholder height="small" width="medium" />
      </DxcInline>
    </Container>
    <Title title="AlignY = baseline" theme="light" level={4} />
    <Container>
      <DxcInline alignY="baseline">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="AlignX = start" theme="light" level={4} />
    <Container>
      <DxcInline alignX="start">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" />
      </DxcInline>
    </Container>
    <Title title="AlignX = end with divider" theme="light" level={4} />
    <Container>
      <DxcInline alignX="end" divider>
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="small" width="small" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="AlignX = center" theme="light" level={4} />
    <Container>
      <DxcInline alignX="center">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="AlignX with wrapped items" theme="light" level={4} />
    <Container customWidth>
      <DxcInline alignX="center">
        <Placeholder height="small" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
        <Placeholder height="large" width="large" />
        <Placeholder height="medium" width="small" />
        <Placeholder height="small" width="large" />
        <Placeholder height="large" width="large" />
        <Placeholder height="large" width="medium" />
      </DxcInline>
    </Container>
    <Title title="Gutter = 0.125rem" theme="light" level={4} />
    <Container>
      <DxcInline gutter="0.125rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="Gutter = 0.25rem" theme="light" level={4} />
    <Container>
      <DxcInline gutter="0.25rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="Gutter = 0.5rem" theme="light" level={4} />
    <Container>
      <DxcInline gutter="0.5rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="Gutter = 0.75rem" theme="light" level={4} />
    <Container>
      <DxcInline gutter="0.75rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="Gutter = 1rem" theme="light" level={4} />
    <Container>
      <DxcInline gutter="1rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="Gutter = 1.5rem" theme="light" level={4} />
    <Container>
      <DxcInline gutter="1.5rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="Gutter = 2rem and divider" theme="light" level={4} />
    <Container>
      <DxcInline gutter="2rem" divider>
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcInline>
    </Container>
    <Title title="Gutter = 3rem" theme="light" level={4} />
    <Container>
      <DxcInline gutter="3rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
      </DxcInline>
    </Container>
    <Title title="Gutter = 4rem" theme="light" level={4} />
    <Container>
      <DxcInline gutter="4rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
      </DxcInline>
    </Container>
    <Title title="Gutter = 5rem" theme="light" level={4} />
    <Container>
      <DxcInline gutter="5rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
      </DxcInline>
    </Container>
    <Title title="Reverse" theme="light" level={4} />
    <Container>
      <DxcInline reverse>
        <Placeholder height="small" width="small">
          1
        </Placeholder>
        <Placeholder height="medium" width="medium">
          2
        </Placeholder>
        <Placeholder height="large" width="large">
          3
        </Placeholder>
        <Placeholder height="small" width="large">
          4
        </Placeholder>
      </DxcInline>
    </Container>
  </>
);

const FlexContainer = styled.div<{ customWidth?: boolean }>`
  display: flex;
  ${({ customWidth }) => customWidth && `width: 200px;`};
  background: #f2eafa;
`;

const Container = styled.div<{ customWidth?: boolean }>`
  background: #f2eafa;
  ${({ customWidth }) => customWidth && `width: 300px;`};
`;

type PlaceholderProps = {
  width?: "xlarge" | "large" | "medium" | "small" | "auto";
  height?: "large" | "medium" | "small" | "auto";
};

const Placeholder = styled.div<PlaceholderProps>`
  ${({ width }) =>
    width &&
    `width: ${width === "xlarge" ? "350px" : width === "large" ? "150px" : width === "medium" ? "100px" : "50px"};`};
  ${({ height }) => height && `height: ${height === "large" ? "150px" : height === "medium" ? "100px" : "50px"};`};
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
`;

import React from "react";
import Title from "../../.storybook/components/Title";
import styled from "styled-components";
import DxcStack from "./Stack";

export default {
  title: "Stack",
  component: DxcStack,
};

export const Chromatic = () => (
  <>
    <Title title="Default" theme="light" level={4} />
    <Container>
      <DxcStack>
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcStack>
    </Container>
    <Title title="Default with divider" theme="light" level={4} />
    <Container>
      <DxcStack divider>
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="large" />
        <Placeholder height="small" width="large" />
      </DxcStack>
    </Container>
    <Title title="Alignment with divider" theme="light" level={4} />
    <Container>
      <DxcStack alignX="end" divider>
        <Placeholder height="small" width="small" />
        <Placeholder height="small" width="medium" />
        <Placeholder height="medium" width="small" />
      </DxcStack>
    </Container>
    <Title title="Default with one child" theme="light" level={4} />
    <Container>
      <DxcStack divider>
        <Placeholder height="large" width="xlarge" />
      </DxcStack>
    </Container>
    <Title title="Wrap" theme="light" level={4} />
    <FlexContainer customHeight>
      <DxcStack wrap>
        <Placeholder height="small" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
        <Placeholder height="large" width="medium" />
      </DxcStack>
    </FlexContainer>
    <Title title="No wrap in a flex container" theme="light" level={4} />
    <FlexContainer customHeight>
      <DxcStack>
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="small" />
        <Placeholder height="small" width="medium" />
      </DxcStack>
    </FlexContainer>
    <Title title="No wrap (default)" theme="light" level={4} />
    <Container customHeight>
      <DxcStack>
        <Placeholder height="small" width="medium" />
        <Placeholder height="small" width="small" />
      </DxcStack>
    </Container>
    <Title title="AlignX = start" theme="light" level={4} />
    <Container>
      <DxcStack alignX="start">
        <Placeholder height="small" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
        <Placeholder height="large" width="medium" />
      </DxcStack>
    </Container>
    <Title title="AlignX = end" theme="light" level={4} />
    <Container>
      <DxcStack alignX="end">
        <Placeholder height="small" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
      </DxcStack>
    </Container>
    <Title title="AlignX = center" theme="light" level={4} />
    <Container>
      <DxcStack alignX="center">
        <Placeholder height="small" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
        <Placeholder height="large" width="medium" />
      </DxcStack>
    </Container>
    <Title title="AlignX = baseline" theme="light" level={4} />
    <Container>
      <DxcStack alignX="baseline">
        <Placeholder height="small" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
      </DxcStack>
    </Container>
    <Title title="AlignX with wrapped items" theme="light" level={4} />
    <Container customHeight>
      <DxcStack alignX="center" wrap>
        <Placeholder height="small" width="medium" />
        <Placeholder height="small" width="small" />
      </DxcStack>
    </Container>
    <Title title="Gutter = 0rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="0rem">
        <Placeholder height="small" width="medium" />
        <Placeholder height="large" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="small" />
        <Placeholder height="small" width="medium" />
      </DxcStack>
    </Container>
    <Title title="Gutter = 0.125rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="0.125rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
      </DxcStack>
    </Container>
    <Title title="Gutter = 0.25rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="0.25rem">
        <Placeholder height="small" width="medium" />
        <Placeholder height="large" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="small" />
        <Placeholder height="small" width="medium" />
      </DxcStack>
    </Container>
    <Title title="Gutter = 0.5rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="0.5rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
      </DxcStack>
    </Container>
    <Title title="Gutter = 0.75rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="0.75rem">
        <Placeholder height="small" width="medium" />
        <Placeholder height="large" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="small" />
        <Placeholder height="small" width="medium" />
      </DxcStack>
    </Container>
    <Title title="Gutter = 1rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="1rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
      </DxcStack>
    </Container>
    <Title title="Gutter = 1.5rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="1.5rem">
        <Placeholder height="small" width="medium" />
        <Placeholder height="large" width="small" />
        <Placeholder height="medium" width="medium" />
        <Placeholder height="large" width="small" />
        <Placeholder height="small" width="medium" />
      </DxcStack>
    </Container>
    <Title title="Gutter = 2rem & divider" theme="light" level={4} />
    <Container>
      <DxcStack gutter="2rem" divider>
        <Placeholder height="small" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
      </DxcStack>
    </Container>
    <Title title="Gutter = 3rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="3rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
      </DxcStack>
    </Container>
    <Title title="Gutter = 4rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="4rem">
        <Placeholder height="large" width="medium" />
        <Placeholder height="medium" width="small" />
      </DxcStack>
    </Container>
    <Title title="Gutter = 5rem" theme="light" level={4} />
    <Container>
      <DxcStack gutter="5rem">
        <Placeholder height="small" width="small" />
        <Placeholder height="medium" width="small" />
      </DxcStack>
    </Container>
    <Title title="Reverse" theme="light" level={4} />
    <Container>
      <DxcStack reverse>
        <Placeholder height="small" width="medium">
          1
        </Placeholder>
        <Placeholder height="large" width="small">
          2
        </Placeholder>
        <Placeholder height="medium" width="medium">
          3
        </Placeholder>
        <Placeholder height="large" width="small">
          4
        </Placeholder>
      </DxcStack>
    </Container>
    <Title title="Wrapped and reversed children" theme="light" level={4} />
    <FlexContainer customHeight>
      <DxcStack reverse wrap>
        <Placeholder height="small" width="medium">
          1
        </Placeholder>
        <Placeholder height="large" width="small">
          2
        </Placeholder>
        <Placeholder height="medium" width="medium">
          3
        </Placeholder>
        <Placeholder height="large" width="small">
          4
        </Placeholder>
      </DxcStack>
    </FlexContainer>
  </>
);

const FlexContainer = styled.div<{ customHeight?: boolean }>`
  display: flex;
  ${({ customHeight }) => customHeight && `height: 100px;`};
  background: #f2eafa;
`;

const Container = styled.div<{ customHeight?: boolean }>`
  background: #f2eafa;
  ${({ customHeight }) => customHeight && `height: 100px;`};
`;

type PlaceholderProps = {
  width?: "xlarge" | "large" | "medium" | "small" | "auto";
  height?: "large" | "medium" | "small" | "auto";
};

const Placeholder = styled.div<PlaceholderProps>`
  ${({ width }) =>
    width &&
    `width: ${width === "xlarge" ? "350px" : width === "large" ? "150px" : width === "medium" ? "100px" : "50px"};`};
  ${({ height }) => height && `height: ${height === "large" ? "100px" : height === "medium" ? "80px" : "50px"};`};
  border: 1px solid #a46ede;
  background-color: #e5d5f6;
`;

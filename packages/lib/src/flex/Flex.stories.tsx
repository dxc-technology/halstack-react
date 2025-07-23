import styled from "@emotion/styled";
import Title from "../../.storybook/components/Title";
import DxcFlex from "./Flex";
import { Meta, StoryObj } from "@storybook/react-vite";

export default {
  title: "Flex",
  component: DxcFlex,
} satisfies Meta<typeof DxcFlex>;

const Container = styled.div<{ height?: string }>`
  display: flex;
  background: #f2eafa;
  margin: 2.5rem;
  ${({ height }) => (height ? `height: ${height}` : "max-height: 150px")};
`;

const Placeholder = styled.div<{ minWidth?: string; width?: string }>`
  height: 40px;
  min-width: ${({ minWidth }) => minWidth ?? "200px"};
  width: ${({ width }) => width};
  border: 1px solid #a46ede;
  border-radius: 0.5rem;
  background-color: #e5d5f6;
`;

const Flex = () => (
  <>
    <Title title="Default" level={4} />
    <Container>
      <DxcFlex>
        <Placeholder />
        <Placeholder minWidth="50px" />
        <Placeholder />
        <Placeholder minWidth="50px" />
        <Placeholder minWidth="50px" />
      </DxcFlex>
    </Container>
    <Title title="Direction column, wrap, justify content end, align items center and gap" level={4} />
    <Container>
      <DxcFlex direction="column" wrap="wrap" justifyContent="end" alignItems="center" gap="var(--spacing-gap-l)">
        <Placeholder />
        <Placeholder minWidth="100px" />
        <Placeholder />
        <Placeholder minWidth="100px" />
        <Placeholder />
      </DxcFlex>
    </Container>
    <Title title="Wrap with align content space between, row and column gaps, and as a span" level={4} />
    <Container height="250px">
      <DxcFlex
        wrap="wrap"
        alignContent="space-between"
        as="span"
        gap={{ rowGap: "var(--spacing-gap-s)", columnGap: "var(--spacing-gap-l)" }}
      >
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder minWidth="100px" />
        <Placeholder />
        <Placeholder />
        <Placeholder minWidth="100px" />
        <Placeholder />
        <Placeholder />
        <Placeholder minWidth="100px" />
        <Placeholder />
      </DxcFlex>
    </Container>
    <Title title="Basis 100%, order, grow and align self" level={4} />
    <Container height="75px">
      <DxcFlex basis="100%">
        <DxcFlex order={3} grow={1} alignSelf="flex-end">
          <Placeholder width="100%" minWidth="0">
            order 3, grow 1, align self end
          </Placeholder>
        </DxcFlex>
        <DxcFlex order={-1} grow={4}>
          <Placeholder width="100%" minWidth="0">
            order -1, grow 4
          </Placeholder>
        </DxcFlex>
        <DxcFlex order={5} grow={1}>
          <Placeholder width="100%" minWidth="0">
            order 5, grow 1
          </Placeholder>
        </DxcFlex>
        <DxcFlex order={2} grow={2}>
          <Placeholder width="100%" minWidth="0">
            order 2. grow 2
          </Placeholder>
        </DxcFlex>
      </DxcFlex>
    </Container>
    <Title title="Basis and shrink" level={4} />
    <Container>
      <DxcFlex basis="600px">
        <DxcFlex shrink={4} basis="400px">
          <Placeholder width="100%" minWidth="0">
            shrink 4
          </Placeholder>
        </DxcFlex>
        <DxcFlex shrink={2} basis="400px">
          <Placeholder width="100%" minWidth="0">
            shrink 2
          </Placeholder>
        </DxcFlex>
        <DxcFlex shrink={1} basis="400px">
          <Placeholder width="100%" minWidth="0">
            shrink 1
          </Placeholder>
        </DxcFlex>
      </DxcFlex>
    </Container>
  </>
);

type Story = StoryObj<typeof DxcFlex>;

export const Chromatic: Story = {
  render: Flex,
};

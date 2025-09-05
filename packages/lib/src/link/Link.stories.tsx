import ExampleContainer from "../../.storybook/components/ExampleContainer";
import Title from "../../.storybook/components/Title";
import DxcLink from "./Link";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Link",
  component: DxcLink,
} as Meta<typeof DxcLink>;

const icon = (
  <svg viewBox="0 0 24 24" enableBackground="new 0 0 24 24" fill="currentColor">
    <g>
      <rect fill="none" width="24" height="24" />
    </g>
    <g>
      <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
    </g>
  </svg>
);

const Link = () => (
  <>
    <Title title="With anchor" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcLink href="#">Test</DxcLink>
      <Title title="Disabled" theme="light" level={4} />
      <DxcLink disabled href="#">
        Test
      </DxcLink>
      <Title title="Icon before" theme="light" level={4} />
      <DxcLink href="https://www.google.com" icon="lock" iconPosition="before">
        Test
      </DxcLink>
      <Title title="Icon after" theme="light" level={4} />
      <DxcLink href="https://www.youtube.com/" icon="check" iconPosition="after">
        Test
      </DxcLink>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="With link hovered" theme="light" level={4} />
      <DxcLink href="https://www.dxc.com">Test</DxcLink>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="With link focused" theme="light" level={4} />
      <DxcLink href="https://www.dxc.com">Test</DxcLink>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="With link active" theme="light" level={4} />
      <DxcLink href="https://www.dxc.com">Test</DxcLink>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-visited">
      <Title title="With link visited" theme="light" level={4} />
      <DxcLink href="https://www.amazon.com">Test</DxcLink>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Inherit color" theme="light" level={4} />
      <span style={{ color: "#fabada" }}>
        This is a <DxcLink inheritColor>Test</DxcLink>.
      </span>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="With brackets and focus" theme="light" level={4} />
      This is a (
      <DxcLink inheritColor href="https://www.google.com">
        Test
      </DxcLink>
      ).
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Long text with hover" theme="light" level={4} />
      Lorem{" "}
      <DxcLink href="https://www.google.com" icon="filled_home">
        Test
      </DxcLink>{" "}
      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit{" "}
      <DxcLink href="https://www.google.com" icon={icon} iconPosition="after">
        Test
      </DxcLink>{" "}
      anim id est laborum.
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Long text with focus" theme="light" level={4} />
      Lorem <DxcLink href="https://www.google.com">Test</DxcLink> ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum.
    </ExampleContainer>
    <Title title="With button" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcLink onClick={() => {}}>Test</DxcLink>
      <Title title="Disabled" theme="light" level={4} />
      <DxcLink onClick={() => {}} disabled>
        Test
      </DxcLink>
      <Title title="Icon before" theme="light" level={4} />
      <DxcLink onClick={() => {}} icon={icon} iconPosition="before">
        Test
      </DxcLink>
      <Title title="Icon after" theme="light" level={4} />
      <DxcLink onClick={() => {}} icon={icon} iconPosition="after">
        Test
      </DxcLink>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="With link hovered" theme="light" level={4} />
      <DxcLink onClick={() => {}}>Test</DxcLink>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="With link focused" theme="light" level={4} />
      <DxcLink onClick={() => {}}>Test</DxcLink>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="With link active" theme="light" level={4} />
      <DxcLink onClick={() => {}}>Test</DxcLink>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-visited">
      <Title title="With link visited" theme="light" level={4} />
      <DxcLink onClick={() => {}}>Test</DxcLink>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Inherit color" theme="light" level={4} />
      This is a{" "}
      <DxcLink onClick={() => {}} inheritColor>
        Test
      </DxcLink>
      .
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="With brackets and focus" theme="light" level={4} />
      This is a (
      <DxcLink onClick={() => {}} inheritColor>
        Test
      </DxcLink>
      ).
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Long text with hover" theme="light" level={4} />
      Lorem{" "}
      <DxcLink onClick={() => {}} href="https://www.google.com">
        Test
      </DxcLink>{" "}
      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Long text with focus" theme="light" level={4} />
      Lorem{" "}
      <DxcLink onClick={() => {}} href="https://www.google.com">
        Test
      </DxcLink>{" "}
      ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcLink margin="xxsmall" href="https://www.facebook.com/">
        Test
      </DxcLink>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcLink margin="xsmall" href="https://www.linkedin.com/">
        Test
      </DxcLink>
      <Title title="Small margin" theme="light" level={4} />
      <DxcLink margin="small" href="https://www.linkedin.com/">
        Test
      </DxcLink>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcLink margin="medium" href="https://www.linkedin.com/">
        Test
      </DxcLink>
      <Title title="Large margin" theme="light" level={4} />
      <DxcLink margin="large" href="https://www.linkedin.com/">
        Test
      </DxcLink>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcLink margin="xlarge" href="https://www.linkedin.com/">
        Test
      </DxcLink>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcLink margin="xxlarge" href="https://www.linkedin.com/">
        Test
      </DxcLink>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcLink>;

export const Chromatic: Story = {
  render: Link,
};

import React from "react";
import DxcLink from "./Link";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Link",
  component: DxcLink,
};

const icon = (
  <svg viewBox="0 0 24 24" enable-background="new 0 0 24 24" fill="currentColor">
    <g id="Bounding_Box">
      <rect fill="none" width="24" height="24" />
    </g>
    <g id="Master">
      <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
    </g>
  </svg>
);

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcLink text="Test" disabled></DxcLink>
      <Title title="Icon before" theme="light" level={4} />
      <DxcLink text="Test" href="https://www.google.com" icon={icon} iconPosition="before"></DxcLink>
      <Title title="Icon after" theme="light" level={4} />
      <DxcLink text="Test" href="https://www.youtube.com/" icon={icon} iconPosition="after"></DxcLink>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="With link hovered" theme="light" level={4} />
      <DxcLink text="Test" href="https://www.dxc.com"></DxcLink>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="With link focused" theme="light" level={4} />
      <DxcLink text="Test" href="https://www.dxc.com"></DxcLink>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="With link active" theme="light" level={4} />
      <DxcLink text="Test" href="https://www.dxc.com"></DxcLink>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Inherit color" theme="light" level={4} />
      This is a <DxcLink text="Test" inheritColor={true}></DxcLink>.
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcLink text="Test" margin="xxsmall" href="https://www.facebook.com/"></DxcLink>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcLink text="Test" margin="xsmall" href="https://www.linkedin.com/"></DxcLink>
      <Title title="Small margin" theme="light" level={4} />
      <DxcLink text="Test" margin="small" href="https://www.linkedin.com/"></DxcLink>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcLink text="Test" margin="medium" href="https://www.linkedin.com/"></DxcLink>
      <Title title="Large margin" theme="light" level={4} />
      <DxcLink text="Test" margin="large" href="https://www.linkedin.com/"></DxcLink>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcLink text="Test" margin="xlarge" href="https://www.linkedin.com/"></DxcLink>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcLink text="Test" margin="xxlarge" href="https://www.linkedin.com/"></DxcLink>
    </ExampleContainer>
  </>
);

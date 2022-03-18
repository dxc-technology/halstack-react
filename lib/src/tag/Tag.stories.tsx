import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DxcTag from "./Tag";

export default {
  title: "Tag",
  component: DxcTag,
};

const icon = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const largeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
);

export const Chromatic = () => (
  <>
    <ExampleContainer>
      <Title title="Without label" theme="light" level={4} />
      <DxcTag />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon" theme="light" level={4} />
      <DxcTag icon={icon} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With large icon" theme="light" level={4} />
      <DxcTag icon={largeIcon} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label" theme="light" level={4} />
      <DxcTag label="Tag" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With label and icon" theme="light" level={4} />
      <DxcTag label="Tag" icon={icon} />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With right icon" theme="light" level={4} />
      <DxcTag label="Tag" icon={icon} labelPosition="before" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Icon background color" theme="light" level={4} />
      <DxcTag label="Tag" icon={icon} iconBgColor="#fabada" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="With link focused" theme="light" level={4} />
      <DxcTag icon={icon} label="Tag" linkHref="https://www.dxc.com" />
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="With action focused" theme="light" level={4} />
      <DxcTag
        icon={icon}
        label="Tag"
        onClick={() => {
          console.log("click");
        }}
      />
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcTag label="Xxsmall" margin="xxsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcTag label="Xsmall" margin="xsmall" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcTag label="Small" margin="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcTag label="Medium" margin="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcTag label="Large" margin="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcTag label="Xlarge" margin="xlarge" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcTag label="Xxlarge" margin="xxlarge" />
    </ExampleContainer>
    <Title title="Sizes" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Small size" theme="light" level={4} />
      <DxcTag label="Small" size="small" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size" theme="light" level={4} />
      <DxcTag label="Medium size medium s" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium size with ellipsis" theme="light" level={4} />
      <DxcTag label="Medium size medium si medium" size="medium" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large size" theme="light" level={4} />
      <DxcTag label="Large size large size large size large size large size" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large size with ellipsis" theme="light" level={4} />
      <DxcTag label="Large size large size large size large size large size large size" size="large" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FillParent size" theme="light" level={4} />
      <DxcTag label="FillParent" size="fillParent" />
    </ExampleContainer>
    <ExampleContainer>
      <Title title="FitContent size" theme="light" level={4} />
      <DxcTag label="FitContent" size="fitContent" />
    </ExampleContainer>
  </>
);

const LinkTag = () => (
  <ExampleContainer expanded>
    <Title title="Hover link tag" theme="light" level={4} />
    <DxcTag label="Tag" icon={icon} linkHref="https://www.dxc.com" />
  </ExampleContainer>
);

export const HoverLinkTag = LinkTag.bind({});
HoverLinkTag.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.hover(canvas.getByText("Tag"));
};

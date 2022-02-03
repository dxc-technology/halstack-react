import React from "react";
import DxcButton from "./Button";
import { BackgroundColorProvider } from "../BackgroundColorContext";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import DarkContainer from "../../.storybook/components/DarkSection";

export default {
  title: "Button",
  component: DxcButton,
};

const iconSVG = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};
export const Chromatic = () => (
  <>
    <>
      <Title title="Primary" theme="light" level={2}/>
      <ExampleContainer>
        <Title title="Enabled" theme="light" level={4}/>
        <DxcButton label="Primary enabled" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-hover">
        <Title title="Hovered" theme="light" level={4}/>
        <DxcButton label="Primary hovered" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-focus">
        <Title title="Focused" theme="light" level={4}/>
        <DxcButton label="Primary focused" />
      </ExampleContainer>
      <ExampleContainer pseudoState="pseudo-active">
        <Title title="Actived" theme="light" level={4}/>
        <DxcButton label="Primary actived" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Disabled" theme="light" level={4}/>
        <DxcButton label="Primary disabled" disabled />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="With left icon" theme="light" level={4}/>
        <DxcButton label="Primary" icon={iconSVG} />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="With right icon" theme="light" level={4}/>
        <DxcButton label="Primary" icon={iconSVG} iconPosition="after" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Only icon" theme="light" level={4}/>
        <DxcButton icon={iconSVG} />
      </ExampleContainer>
    </>
    <>
      <>
      <Title title="Secondary" theme="light" level={2}/>
        <ExampleContainer>
          <Title title="Enabled" theme="light" level={4}/>
          <DxcButton mode="secondary" label="Secondary enabled" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Hovered" theme="light" level={4}/>
          <DxcButton mode="secondary" label="Secondary hovered" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-focus">
          <Title title="Focused" theme="light" level={4}/>
          <DxcButton mode="secondary" label="Secondary focused" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Actived" theme="light" level={4}/>
          <DxcButton mode="secondary" label="Secondary actived" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Disabled" theme="light" level={4}/>
          <DxcButton mode="secondary" disabled label="Secondary disabled" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="With icon" theme="light" level={4}/>
          <DxcButton mode="secondary" label="Secondary" icon={iconSVG} />
        </ExampleContainer>
      </>
      <>
      <Title title="Text" theme="light" level={2}/>
        <ExampleContainer>
          <Title title="Enabled" theme="light" level={4}/>
          <DxcButton mode="text" label="Text enabled" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-hover">
          <Title title="Hovered" theme="light" level={4}/>
          <DxcButton mode="text" label="Text hovered" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-focus">
          <Title title="Focused" theme="light" level={4}/>
          <DxcButton mode="text" label="Text focused" />
        </ExampleContainer>
        <ExampleContainer pseudoState="pseudo-active">
          <Title title="Actived" theme="light" level={4}/>
          <DxcButton mode="text" label="Text actived" />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="Disabled" theme="light" level={4}/>
          <DxcButton mode="text" label="Text disabled" disabled />
        </ExampleContainer>
        <ExampleContainer>
          <Title title="With icon" theme="light" level={4}/>
          <DxcButton label="Text" mode="text" icon={iconSVG} />
        </ExampleContainer>
      </>
    </>
    <BackgroundColorProvider color="#333333">
      <DarkContainer>
        <>
        <Title title="Primary" theme="dark" level={2}/>
          <ExampleContainer>
            <Title title="Enabled" theme="dark" level={4}/>
            <DxcButton label="Primary enabled" />
          </ExampleContainer>
          <ExampleContainer pseudoState="pseudo-hover">
            <Title title="Hovered" theme="dark" level={4}/>
            <DxcButton label="Primary hovered" />
          </ExampleContainer>
          <ExampleContainer pseudoState="pseudo-focus">
            <Title title="Focused" theme="dark" level={4}/>
            <DxcButton label="Primary focused" />
          </ExampleContainer>
          <ExampleContainer pseudoState="pseudo-active">
            <Title title="Actived" theme="dark" level={4}/>
            <DxcButton label="Primary actived" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled" theme="dark" level={4}/>
            <DxcButton label="Primary disabled" disabled />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="With icon" theme="dark" level={4}/>
            <DxcButton label="Primary" icon={iconSVG} />
          </ExampleContainer>
        </>
        <>
        <Title title="Secondary" theme="dark" level={2}/>
          <ExampleContainer>
            <Title title="Enabled" theme="dark" level={4}/>
            <DxcButton mode="secondary" label="Secondary enabled" />
          </ExampleContainer>
          <ExampleContainer pseudoState="pseudo-hover">
            <Title title="Hovered" theme="dark" level={4}/>
            <DxcButton mode="secondary" label="Secondary hovered" />
          </ExampleContainer>
          <ExampleContainer pseudoState="pseudo-focus">
            <Title title="Focused" theme="dark" level={4}/>
            <DxcButton mode="secondary" label="Secondary focused" />
          </ExampleContainer>
          <ExampleContainer pseudoState="pseudo-active">
            <Title title="Actived" theme="dark" level={4}/>
            <DxcButton mode="secondary" label="Secondary actived" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled" theme="dark" level={4}/>
            <DxcButton mode="secondary" disabled label="Secondary disabled" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="With icon" theme="dark" level={4}/>
            <DxcButton mode="secondary" label="Primary" icon={iconSVG} />
          </ExampleContainer>
        </>
        <>
        <Title title="Text" theme="dark" level={2}/>
          <ExampleContainer>
            <Title title="Enabled" theme="dark" level={4}/>
            <DxcButton mode="text" label="Text enabled" />
          </ExampleContainer>
          <ExampleContainer pseudoState="pseudo-hover">
            <Title title="Hovered" theme="dark" level={4}/>
            <DxcButton mode="text" label="Text hovered" />
          </ExampleContainer>
          <ExampleContainer pseudoState="pseudo-focus">
            <Title title="Focused" theme="dark" level={4}/>
            <DxcButton mode="text" label="Text focused" />
          </ExampleContainer>
          <ExampleContainer pseudoState="pseudo-active">
            <Title title="Actived" theme="dark" level={4}/>
            <DxcButton mode="text" label="Text actived" />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="Disabled" theme="dark" level={4}/>
            <DxcButton mode="text" label="Text disabled" disabled />
          </ExampleContainer>
          <ExampleContainer>
            <Title title="With icon" theme="dark" level={4}/>
            <DxcButton mode="text" label="Primary" icon={iconSVG} />
          </ExampleContainer>
        </>
      </DarkContainer>
    </BackgroundColorProvider>
    <>
    <Title title="Sizes" theme="light" level={2}/>
      <ExampleContainer>
        <Title title="Small size" theme="light" level={4}/>
        <DxcButton label="Small" size="small" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Medium size" theme="light" level={4}/>
        <DxcButton label="MediumSiz" size="medium" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Medium size with ellipsis" theme="light" level={4}/>
        <DxcButton label="MediumSize" size="medium" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Medium size icon after" theme="light" level={4}/>
        <DxcButton label="Mediu" iconPosition="after" icon={iconSVG} size="medium" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Medium size icon before" theme="light" level={4}/>
        <DxcButton label="Mediu" iconPosition="before" icon={iconSVG} size="medium" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Medium size icon after with ellipsis" theme="light" level={4}/>
        <DxcButton label="Medium" iconPosition="after" icon={iconSVG} size="medium" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Medium size icon before with ellipsis" theme="light" level={4}/>
        <DxcButton label="Medium" iconPosition="before" icon={iconSVG} size="medium" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Large size" theme="light" level={4}/>
        <DxcButton label="LargeSizePrimaryButtonEx" size="large" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Large size with ellipsis" theme="light" level={4}/>
        <DxcButton label="LargeSizePrimaryButtonExa" size="large" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Large size icon after" theme="light" level={4}/>
        <DxcButton label="LargeSizePrimaryButto" iconPosition="after" icon={iconSVG} size="large" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Large size icon before" theme="light" level={4}/>
        <DxcButton label="LargeSizePrimaryButto" iconPosition="before" icon={iconSVG} size="large" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Large size icon after with ellipsis" theme="light" level={4}/>
        <DxcButton label="LargeSizePrimaryButton" iconPosition="after" icon={iconSVG} size="large" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Large size icon before with ellipsis" theme="light" level={4}/>
        <DxcButton label="LargeSizePrimaryButton" iconPosition="before" icon={iconSVG} size="large" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Fit content size" theme="light" level={4}/>
        <DxcButton label="FillParent" size="fillParent" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Medium size" theme="light" level={4}/>
        <DxcButton label="FitContent" size="fitContent" />
      </ExampleContainer>
      <Title title="Margins" theme="light" level={2}/>
      <ExampleContainer>
        <Title title="Xxsmall margin" theme="light" level={4}/>
        <DxcButton label="Xxsmall margin" margin="xxsmall" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Xsmall margin" theme="light" level={4}/>
        <DxcButton label="Xsmall margin" margin="xsmall" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Small margin" theme="light" level={4}/>
        <DxcButton label="Small margin" margin="small" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Medium margin" theme="light" level={4}/>
        <DxcButton label="Medium margin" margin="medium" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Large margin" theme="light" level={4}/>
        <DxcButton label="Large margin" margin="large" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Xlarge margin" theme="light" level={4}/>
        <DxcButton label="Xlarge margin" margin="xlarge" />
      </ExampleContainer>
      <ExampleContainer>
        <Title title="Xxlarge margin" theme="light" level={4}/>
        <DxcButton label="Xxlarge margin" margin="xxlarge" />
      </ExampleContainer>
    </>
  </>
);


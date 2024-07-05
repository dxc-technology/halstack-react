import React from "react";
import DxcButton from "./Button";
import DxcFlex from "./../flex/Flex";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "Button",
  component: DxcButton,
};

const facebookIcon = (
  <svg
    version="1.1"
    x="0px"
    y="0px"
    width="438.536px"
    height="438.536px"
    viewBox="0 0 438.536 438.536"
    fill="currentColor"
  >
    <g>
      <path
        d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
  C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
  h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
  C438.532,59.576,430.49,40.204,414.41,24.123z M373.155,225.548h-49.963V406.84h-74.802V225.548H210.99V163.02h37.401v-37.402
  c0-26.838,6.283-47.107,18.843-60.813c12.559-13.706,33.304-20.555,62.242-20.555h49.963v62.526h-31.401
  c-10.663,0-17.467,1.853-20.417,5.568c-2.949,3.711-4.428,10.23-4.428,19.558v31.119h56.534L373.155,225.548z"
      />
    </g>
  </svg>
);

const opinionatedTheme = {
  button: {
    baseColor: "#5f249f",
    primaryFontColor: "#ffffff",
    secondaryHoverFontColor: "#ffffff",
  },
};

export const Chromatic = () => (
  <>
    <>
      <Title title="Brand" theme="light" level={2} />
      <>
        <Title title="Small" theme="light" level={2} />
        <Title title="Primary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="brand" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" disabled icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} size="small" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" size="small" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" size="small" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" size="small" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" size="small" width="fillParent" />
        </ExampleContainer>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Margin" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton label="xxsmall" size="small" margin="xxsmall" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="xsmall" size="small" margin="xsmall" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="small" size="small" margin="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="medium" size="small" margin="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="large" size="small" margin="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="xlarge" size="small" margin="xlarge" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="xxlarge" size="small" margin="xxlarge" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
      <>
        <Title title="Medium" theme="light" level={2} />
        <Title title="Primary" theme="light" level={2} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" icon="person" iconPosition="after" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton label="Small Small" size="medium" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium Medium Medium" size="medium" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large Large Large Large Large Large" size="medium" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" size="medium" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" size="medium" width="fillParent" />
        </ExampleContainer>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Margin" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton label="xxsmall" size="medium" margin="xxsmall" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="xsmall" size="medium" margin="xsmall" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="small" size="medium" margin="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="medium" size="medium" margin="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="large" size="medium" margin="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="xlarge" size="medium" margin="xlarge" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="xxlarge" size="medium" margin="xxlarge" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
      <>
        <Title title="Large" theme="light" level={2} />
        <Title title="Primary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" icon="person" iconPosition="after" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} size="large" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" size="large" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" size="large" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" size="large" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" size="large" width="fillParent" />
        </ExampleContainer>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Margin" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton label="xxsmall" size="medium" margin="xxsmall" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="xsmall" size="medium" margin="xsmall" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="small" size="medium" margin="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="medium" size="medium" margin="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="large" size="medium" margin="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="xlarge" size="medium" margin="xlarge" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="xxlarge" size="medium" margin="xxlarge" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" label="Secondary" icon="person" iconPosition="after" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" label="Tertiary" icon="person" iconPosition="after" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
    </>
    <>
      <Title title="Error" theme="light" level={2} />
      <>
        <Title title="Small" theme="light" level={2} />
        <Title title="Primary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="error" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="error" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="error" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="error" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="error" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="error" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" semantic="error" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" semantic="error" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" semantic="error" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" semantic="error" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" semantic="error" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} semantic="error" size="small" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" semantic="error" size="small" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" semantic="error" size="small" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" semantic="error" size="small" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" semantic="error" size="small" width="fillParent" />
        </ExampleContainer>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="error" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="error" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="error" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" label="Secondary" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="error"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="secondary"
                semantic="error"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="secondary"
                semantic="error"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="secondary"
                semantic="error"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="error"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="error" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="error" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="error" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="error"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="tertiary"
                semantic="error"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="tertiary"
                semantic="error"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="tertiary"
                semantic="error"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="error"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="error" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="error" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="error" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
      <>
        <Title title="Medium" theme="light" level={2} />
        <Title title="Primary" theme="light" level={2} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="error" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="error" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="error" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="error" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="error" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="error" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" semantic="error" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" semantic="error" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" semantic="error" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" semantic="error" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" semantic="error" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} semantic="error" size="medium" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" semantic="error" size="medium" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" semantic="error" size="medium" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" semantic="error" size="medium" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" semantic="error" size="medium" width="fillParent" />
        </ExampleContainer>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="error" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="error" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="error" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" label="Secondary" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="error"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="secondary"
                semantic="error"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="secondary"
                semantic="error"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="secondary"
                semantic="error"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="error"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="error" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="error" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="error" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="error"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="tertiary"
                semantic="error"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="tertiary"
                semantic="error"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="tertiary"
                semantic="error"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="error"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="error" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="error" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="error" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
      <>
        <Title title="Large" theme="light" level={2} />
        <Title title="Primary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="error" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="error" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="error" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="error" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="error" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="error" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="error" icon="person" iconPosition="after" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" semantic="error" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" semantic="error" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" semantic="error" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" semantic="error" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" semantic="error" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} semantic="error" size="large" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" semantic="error" size="large" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" semantic="error" size="large" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" semantic="error" size="large" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" semantic="error" size="large" width="fillParent" />
        </ExampleContainer>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="error" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="error" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="error" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" label="Secondary" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" label="Secondary" disabled icon="person" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="error" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="error"
                label="Secondary"
                disabled
                icon="person"
                iconPosition="after"
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="error" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="error" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="error" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="error" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" disabled icon="person" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="error" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="error"
                label="Tertiary"
                disabled
                icon="person"
                iconPosition="after"
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="error" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="error" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="error" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="error" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
    </>
    <>
      <Title title="Warning" theme="light" level={2} />
      <>
        <Title title="Small" theme="light" level={2} />
        <Title title="Primary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="warning" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="warning" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="warning" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="warning" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="warning" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="warning" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" disabled icon="person" size="small" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="warning" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="warning" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="warning" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" disabled icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" semantic="warning" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" semantic="warning" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" semantic="warning" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" semantic="warning" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" semantic="warning" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} semantic="warning" size="small" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" semantic="warning" size="small" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" semantic="warning" size="small" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" semantic="warning" size="small" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" semantic="warning" size="small" width="fillParent" />
        </ExampleContainer>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" label="Secondary" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" label="Secondary" disabled icon="person" size="small" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="warning"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="secondary"
                semantic="warning"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="secondary"
                semantic="warning"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="secondary"
                semantic="warning"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="warning"
                label="Secondary"
                disabled
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="warning" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="warning" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="warning" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" disabled icon="person" size="small" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="warning"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="tertiary"
                semantic="warning"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="tertiary"
                semantic="warning"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="tertiary"
                semantic="warning"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="warning"
                label="Tertiary"
                disabled
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="warning" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="warning" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="warning" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
      <>
        <Title title="Medium" theme="light" level={2} />
        <Title title="Primary" theme="light" level={2} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="warning" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="warning" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="warning" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="warning" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="warning" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="warning" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" disabled icon="person" size="medium" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="warning" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="warning" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="warning" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" disabled icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" semantic="warning" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" semantic="warning" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" semantic="warning" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" semantic="warning" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" semantic="warning" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} semantic="warning" size="medium" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" semantic="warning" size="medium" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" semantic="warning" size="medium" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" semantic="warning" size="medium" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" semantic="warning" size="medium" width="fillParent" />
        </ExampleContainer>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" label="Secondary" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" label="Secondary" disabled icon="person" size="medium" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="warning"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="secondary"
                semantic="warning"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="secondary"
                semantic="warning"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="secondary"
                semantic="warning"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="warning"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="warning" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="warning" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="warning" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" disabled icon="person" size="medium" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="warning"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="tertiary"
                semantic="warning"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="tertiary"
                semantic="warning"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="tertiary"
                semantic="warning"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="warning"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="warning" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="warning" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="warning" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
      <>
        <Title title="Large" theme="light" level={2} />
        <Title title="Primary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="warning" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="warning" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="warning" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="warning" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="warning" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="warning" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" disabled icon="person" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="warning" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="warning" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="warning" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="warning" disabled icon="person" iconPosition="after" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" semantic="warning" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" semantic="warning" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" semantic="warning" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" semantic="warning" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" semantic="warning" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} semantic="warning" size="large" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" semantic="warning" size="large" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" semantic="warning" size="large" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" semantic="warning" size="large" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" semantic="warning" size="large" width="fillParent" />
        </ExampleContainer>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" label="Secondary" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" label="Secondary" disabled icon="person" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="warning" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="warning"
                label="Secondary"
                disabled
                icon="person"
                iconPosition="after"
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="warning" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="warning" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="warning" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="warning" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" disabled icon="person" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="warning" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="warning"
                label="Tertiary"
                disabled
                icon="person"
                iconPosition="after"
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="warning" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="warning" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="warning" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="warning" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
    </>
    <>
      <Title title="Success" theme="light" level={2} />
      <>
        <Title title="Small" theme="light" level={2} />
        <Title title="Primary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="success" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="success" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="success" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="success" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="success" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="success" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" disabled icon="person" size="small" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" disabled icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" semantic="success" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" semantic="success" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" semantic="success" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" semantic="success" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" semantic="success" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} semantic="success" size="small" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" semantic="success" size="small" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" semantic="success" size="small" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" semantic="success" size="small" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" semantic="success" size="small" width="fillParent" />
        </ExampleContainer>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="success" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="success" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="success" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" label="Secondary" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" label="Secondary" disabled icon="person" size="small" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="success"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="secondary"
                semantic="success"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="secondary"
                semantic="success"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="secondary"
                semantic="success"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="success"
                label="Secondary"
                disabled
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="success" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="success" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="success" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" disabled icon="person" size="small" />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="success"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="tertiary"
                semantic="success"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="tertiary"
                semantic="success"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="tertiary"
                semantic="success"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="success"
                label="Tertiary"
                disabled
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="success" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="success" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="success" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
      <>
        <Title title="Medium" theme="light" level={2} />
        <Title title="Primary" theme="light" level={2} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="success" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="success" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="success" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="success" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="success" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="success" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" semantic="success" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" semantic="success" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" semantic="success" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" semantic="success" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" semantic="success" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} semantic="success" size="medium" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" semantic="success" size="medium" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" semantic="success" size="medium" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" semantic="success" size="medium" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" semantic="success" size="medium" width="fillParent" />
        </ExampleContainer>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="success" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="success" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="success" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" label="Secondary" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="success"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="secondary"
                semantic="success"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="secondary"
                semantic="success"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="secondary"
                semantic="success"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="success"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="success" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="success" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="success" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="success"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="tertiary"
                semantic="success"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="tertiary"
                semantic="success"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="tertiary"
                semantic="success"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="success"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="success" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="success" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="success" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
      <>
        <Title title="Large" theme="light" level={2} />
        <Title title="Primary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="success" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="success" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="success" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="success" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="success" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="success" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="success" icon="person" iconPosition="after" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" semantic="success" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" semantic="success" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" semantic="success" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" semantic="success" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" semantic="success" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} semantic="success" size="large" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" semantic="success" size="large" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" semantic="success" size="large" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" semantic="success" size="large" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" semantic="success" size="large" width="fillParent" />
        </ExampleContainer>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="success" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="success" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="success" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" label="Secondary" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="success" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="success"
                label="Secondary"
                icon="person"
                iconPosition="after"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="success" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="success" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="success" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="success" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="success" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="success"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="success" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="success" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="success" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="success" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
    </>
    <>
      <Title title="Info" theme="light" level={2} />
      <>
        <Title title="Small" theme="light" level={2} />
        <Title title="Primary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="info" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="info" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="info" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="info" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="info" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="info" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" semantic="info" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" semantic="info" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" semantic="info" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" semantic="info" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" semantic="info" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} semantic="info" size="small" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" semantic="info" size="small" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" semantic="info" size="small" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" semantic="info" size="small" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" semantic="info" size="small" width="fillParent" />
        </ExampleContainer>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="info" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="info" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="info" label="Secondary" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" label="Secondary" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="info"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="secondary"
                semantic="info"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="secondary"
                semantic="info"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="secondary"
                semantic="info"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="info"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="small"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="info" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="info" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="info" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="info"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="tertiary"
                semantic="info"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="tertiary"
                semantic="info"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="tertiary"
                semantic="info"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="info"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="small"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="info" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="info" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="info" icon="person" size="small" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" icon="person" size="small" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
      <>
        <Title title="Medium" theme="light" level={2} />
        <Title title="Primary" theme="light" level={2} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="info" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="info" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="info" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="info" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="info" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="info" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" semantic="info" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" semantic="info" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" semantic="info" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" semantic="info" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" semantic="info" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} semantic="info" size="medium" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" semantic="info" size="medium" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" semantic="info" size="medium" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" semantic="info" size="medium" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" semantic="info" size="medium" width="fillParent" />
        </ExampleContainer>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="info" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="info" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="info" label="Secondary" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" label="Secondary" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="info"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="secondary"
                semantic="info"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="secondary"
                semantic="info"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="secondary"
                semantic="info"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="info"
                label="Secondary"
                icon="person"
                iconPosition="after"
                size="medium"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="info" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="info" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="info" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="info"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton
                mode="tertiary"
                semantic="info"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton
                mode="tertiary"
                semantic="info"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton
                mode="tertiary"
                semantic="info"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
              />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="tertiary"
                semantic="info"
                label="Tertiary"
                icon="person"
                iconPosition="after"
                size="medium"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="info" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="info" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="info" icon="person" size="medium" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" icon="person" size="medium" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
      <>
        <Title title="Large" theme="light" level={2} />
        <Title title="Primary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="info" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="info" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="info" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="info" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="info" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="info" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton label="Primary" semantic="info" icon="person" iconPosition="after" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton icon="person" semantic="info" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton icon="person" semantic="info" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton icon="person" semantic="info" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton icon="person" semantic="info" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton icon="person" semantic="info" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <DxcFlex>
          <DxcFlex direction="column">
            <Title title="Width" theme="light" level={4} />
            <DxcFlex>
              <ExampleContainer>
                <DxcButton icon={facebookIcon} semantic="info" size="large" width="small" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Medium" semantic="info" size="large" width="medium" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Large" semantic="info" size="large" width="large" />
              </ExampleContainer>
              <ExampleContainer>
                <DxcButton label="Fit content" semantic="info" size="large" width="fitContent" />
              </ExampleContainer>
            </DxcFlex>
          </DxcFlex>
        </DxcFlex>
        <ExampleContainer>
          <DxcButton label="Fill parent" semantic="info" size="large" width="fillParent" />
        </ExampleContainer>
        <Title title="Secondary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="info" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="info" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="info" label="Secondary" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" label="Secondary" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="info" label="Secondary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton
                mode="secondary"
                semantic="info"
                label="Secondary"
                icon="person"
                iconPosition="after"
                disabled
              />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="secondary" semantic="info" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="secondary" semantic="info" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="secondary" semantic="info" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="secondary" semantic="info" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
        <Title title="Tertiary" theme="light" level={3} />
        <DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" iconPosition="after" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" label="Tertiary" icon="person" iconPosition="after" disabled />
            </ExampleContainer>
          </DxcFlex>
          <DxcFlex direction="column">
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-hover">
              <DxcButton mode="tertiary" semantic="info" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-focus">
              <DxcButton mode="tertiary" semantic="info" icon="person" />
            </ExampleContainer>
            <ExampleContainer pseudoState="pseudo-active">
              <DxcButton mode="tertiary" semantic="info" icon="person" />
            </ExampleContainer>
            <ExampleContainer>
              <DxcButton mode="tertiary" semantic="info" icon="person" disabled />
            </ExampleContainer>
          </DxcFlex>
        </DxcFlex>
      </>
    </>
  </>
);

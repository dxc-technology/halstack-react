import React from "react";
import styled from "styled-components";
import DxcButton from "./Button";
import { BackgroundColorProvider } from "../BackgroundColorContext";

export default {
  title: "Button ",
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
      <h2>Primary</h2>
      <Container>
        <h4>Enabled</h4>
        <DxcButton label="Primary enabled" />
      </Container>
      <Container className="pseudo-hover">
        <h4>Hovered</h4>
        <DxcButton label="Primary hovered" />
      </Container>
      <Container className="pseudo-focus">
        <h4>Focused</h4>
        <DxcButton label="Primary focused" />
      </Container>
      <Container className="pseudo-active">
        <h4>Actived</h4>
        <DxcButton label="Primary actived" />
      </Container>
      <Container>
        <h4>Disabled</h4>
        <DxcButton label="Primary disabled" disabled />
      </Container>
      <Container>
        <h4>With left icon</h4>
        <DxcButton label="Primary" icon={iconSVG} />
      </Container>
      <Container>
        <h4>With right icon</h4>
        <DxcButton label="Primary" iconPosition="after" icon={iconSVG} />
      </Container>
      <Container>
        <h4>Only icon</h4>
        <DxcButton icon={iconSVG} />
      </Container>
      <Container>
        <h4>Small size</h4>
        <DxcButton label="Small" size="small" />
      </Container>
      <Container>
        <h4>Medium size</h4>
        <DxcButton label="MediumSiz" size="medium" />
      </Container>
      <Container>
        <h4>Medium size with ellipsis</h4>
        <DxcButton label="MediumSize" size="medium" />
      </Container>
      <Container>
        <h4>Medium size icon after</h4>
        <DxcButton label="Mediu" iconPosition="after" icon={iconSVG} size="medium" />
      </Container>
      <Container>
        <h4>Medium size icon before</h4>
        <DxcButton label="Mediu" iconPosition="before" icon={iconSVG} size="medium" />
      </Container>
      <Container>
        <h4>Medium size icon after with ellipsis</h4>
        <DxcButton label="Medium" iconPosition="after" icon={iconSVG} size="medium" />
      </Container>
      <Container>
        <h4>Medium size icon before with ellipsis</h4>
        <DxcButton label="Medium" iconPosition="before" icon={iconSVG} size="medium" />
      </Container>
      <Container>
        <h4>Large size</h4>
        <DxcButton label="LargeSizePrimaryButtonEx" size="large" />
      </Container>
      <Container>
        <h4>Large size with ellipsis</h4>
        <DxcButton label="LargeSizePrimaryButtonExa" size="large" />
      </Container>
      <Container>
        <h4>Large size icon after</h4>
        <DxcButton label="LargeSizePrimaryButto" iconPosition="after" icon={iconSVG} size="large" />
      </Container>
      <Container>
        <h4>Large size icon before</h4>
        <DxcButton label="LargeSizePrimaryButto" iconPosition="before" icon={iconSVG} size="large" />
      </Container>
      <Container>
        <h4>Large size icon after with ellipsis</h4>
        <DxcButton label="LargeSizePrimaryButton" iconPosition="after" icon={iconSVG} size="large" />
      </Container>
      <Container>
        <h4>Large size icon before with ellipsis</h4>
        <DxcButton label="LargeSizePrimaryButton" iconPosition="before" icon={iconSVG} size="large" />
      </Container>
      <Container>
        <h4>Fill parent size</h4>
        <DxcButton label="FillParent" size="fillParent" />
      </Container>
      <Container>
        <h4>Fit content size</h4>
        <DxcButton label="FitContent" size="fitContent" />
      </Container>
      <Container>
        <h4>Xxsmall margin</h4>
        <DxcButton label="Xxsmall margin" margin="xxsmall" />
      </Container>
      <Container>
        <h4>Xsmall margin</h4>
        <DxcButton label="Xsmall margin" margin="xsmall" />
      </Container>
      <Container>
        <h4>Small margin</h4>
        <DxcButton label="Small margin" margin="small" />
      </Container>
      <Container>
        <h4>Medium margin</h4>
        <DxcButton label="Medium margin" margin="medium" />
      </Container>
      <Container>
        <h4>Large margin</h4>
        <DxcButton label="Large margin" margin="large" />
      </Container>
      <Container>
        <h4>Xlarge margin</h4>
        <DxcButton label="Xlarge margin" margin="xlarge" />
      </Container>
      <Container>
        <h4>Xxlarge margin</h4>
        <DxcButton label="Xxlarge margin" margin="xxlarge" />
      </Container>
    </>
    <>
      <div>
        <h2>Secondary</h2>
        <Container>
          <h4>Enabled</h4>
          <DxcButton mode="secondary" label="Secondary enabled" />
        </Container>
        <Container className="pseudo-hover">
          <h4>Hovered</h4>
          <DxcButton mode="secondary" label="Secondary hovered" />
        </Container>
        <Container className="pseudo-focus">
          <h4>Focused</h4>
          <DxcButton mode="secondary" label="Secondary focused" />
        </Container>
        <Container className="pseudo-active">
          <h4>Actived</h4>
          <DxcButton mode="secondary" label="Secondary actived" />
        </Container>
        <Container>
          <h4>Disabled</h4>
          <DxcButton mode="secondary" disabled label="Secondary disabled" />
        </Container>
        <Container>
          <h4>With left icon</h4>
          <DxcButton mode="secondary" label="Secondary" icon={iconSVG} />
        </Container>
        <Container>
          <h4>With right icon</h4>
          <DxcButton mode="secondary" label="Secondary" iconPosition="after" icon={iconSVG} />
        </Container>
        <Container>
          <h4> Only icon</h4>
          <DxcButton mode="secondary" icon={iconSVG} />
        </Container>
        <Container>
          <h4>Small size</h4>
          <DxcButton mode="secondary" label="Small" size="small" />
        </Container>
        <Container>
          <h4>Medium size</h4>
          <DxcButton mode="secondary" label="MediumSiz" size="medium" />
        </Container>
        <Container>
          <h4>Medium size with ellipsis</h4>
          <DxcButton mode="secondary" label="MediumSize" size="medium" />
        </Container>
        <Container>
          <h4>Medium size icon after</h4>
          <DxcButton mode="secondary" label="Mediu" iconPosition="after" icon={iconSVG} size="medium" />
        </Container>
        <Container>
          <h4>Medium size icon before</h4>
          <DxcButton mode="secondary" label="Mediu" iconPosition="before" icon={iconSVG} size="medium" />
        </Container>
        <Container>
          <h4>Medium size icon after with ellipsis</h4>
          <DxcButton mode="secondary" label="Medium" iconPosition="after" icon={iconSVG} size="medium" />
        </Container>
        <Container>
          <h4>Medium size icon before with ellipsis</h4>
          <DxcButton mode="secondary" label="Medium" iconPosition="before" icon={iconSVG} size="medium" />
        </Container>
        <Container>
          <h4>Large size</h4>
          <DxcButton mode="secondary" label="LargeSizeSecondaryButton" size="large" />
        </Container>
        <Container>
          <h4>Large size with ellipsis</h4>
          <DxcButton mode="secondary" label="LargeSizeSecondaryButtonE" size="large" />
        </Container>
        <Container>
          <h4>Large size icon after</h4>
          <DxcButton mode="secondary" label="LargeSizeSecondaryB" iconPosition="after" icon={iconSVG} size="large" />
        </Container>
        <Container>
          <h4>Large size icon before</h4>
          <DxcButton mode="secondary" label="LargeSizeSecondaryB" iconPosition="before" icon={iconSVG} size="large" />
        </Container>
        <Container>
          <h4>Large size icon after with ellipsis</h4>
          <DxcButton mode="secondary" label="LargeSizeSecondaryBu" iconPosition="after" icon={iconSVG} size="large" />
        </Container>
        <Container>
          <h4>Large size icon before with ellipsis</h4>
          <DxcButton mode="secondary" label="LargeSizeSecondaryBu" iconPosition="before" icon={iconSVG} size="large" />
        </Container>
        <Container>
          <h4>Fill parent size</h4>
          <DxcButton mode="secondary" label="FillParent" size="fillParent" />
        </Container>
        <Container>
          <h4>Fit content size</h4>
          <DxcButton mode="secondary" label="FitContent" size="fitContent" />
        </Container>
        <Container>
          <h4>Xxsmall margin</h4>
          <DxcButton mode="secondary" label="Xxsmall margin" size="large" margin="xxsmall" />
        </Container>
        <Container>
          <h4>xsmall margin</h4>
          <DxcButton mode="secondary" label="Xsmall margin" size="large" margin="xsmall" />
        </Container>
        <Container>
          <h4>Small margin</h4>
          <DxcButton mode="secondary" label="Small margin" size="large" margin="small" />
        </Container>
        <Container>
          <h4>Medium margin</h4>
          <DxcButton mode="secondary" label="Medium margin" size="large" margin="medium" />
        </Container>
        <Container>
          <h4>Large margin</h4>
          <DxcButton mode="secondary" label="Large margin" size="large" margin="large" />
        </Container>
        <Container>
          <h4>Xlarge margin</h4>
          <DxcButton mode="secondary" label="Xlarge margin" size="large" margin="xlarge" />
        </Container>
        <Container>
          <h4>Xxlarge margin</h4>
          <DxcButton mode="secondary" label="Xxlarge margin" size="large" margin="xxlarge" />
        </Container>
      </div>
      <div>
        <h2>Text</h2>
        <Container>
          <h4>Enabled</h4>
          <DxcButton mode="text" label="Text enabled" />
        </Container>
        <Container className="pseudo-hover">
          <h4>Hovered</h4>
          <DxcButton mode="text" label="Text hovered" />
        </Container>
        <Container className="pseudo-focus">
          <h4>Focused</h4>
          <DxcButton mode="text" label="Text focused" />
        </Container>
        <Container className="pseudo-active">
          <h4>Actived</h4>
          <DxcButton mode="text" label="Text actived" />
        </Container>
        <Container>
          <h4>Disabled</h4>
          <DxcButton mode="text" label="Text disabled" disabled />
        </Container>
        <Container>
          <h4>With left icon</h4>
          <DxcButton label="Text" mode="text" icon={iconSVG} />
        </Container>
        <Container>
          <h4>With right icon</h4>
          <DxcButton label="Text" mode="text" iconPosition="after" icon={iconSVG} />
        </Container>
        <Container>
          <h4>Only icon</h4>
          <DxcButton mode="text" icon={iconSVG} />
        </Container>
        <Container>
          <h4>Small size</h4>
          <DxcButton mode="text" label="Small" size="small" />
        </Container>
        <Container>
          <h4>Medium size</h4>
          <DxcButton mode="text" label="MediumSiz" size="medium" />
        </Container>
        <Container>
          <h4>Medium size with ellipsis</h4>
          <DxcButton mode="text" label="MediumSize" size="medium" />
        </Container>
        <Container>
          <h4>Medium size icon after</h4>
          <DxcButton mode="text" label="Mediu" iconPosition="after" icon={iconSVG} size="medium" />
        </Container>
        <Container>
          <h4>Medium size icon before</h4>
          <DxcButton mode="text" label="Mediu" iconPosition="before" icon={iconSVG} size="medium" />
        </Container>
        <Container>
          <h4>Medium size icon after with ellipsis</h4>
          <DxcButton mode="text" label="Medium" iconPosition="after" icon={iconSVG} size="medium" />
        </Container>
        <Container>
          <h4>Medium size icon before with ellipsis</h4>
          <DxcButton mode="text" label="Medium" iconPosition="before" icon={iconSVG} size="medium" />
        </Container>
        <Container>
          <h4>Large size</h4>
          <DxcButton mode="text" label="LargeSizeExampleTextButt" size="large" />
        </Container>
        <Container>
          <h4>Large size with ellipsis</h4>
          <DxcButton mode="text" label="LargeSizeExampleTextButto" size="large" />
        </Container>
        <Container>
          <h4>Large size icon after</h4>
          <DxcButton mode="text" label="LargeSizeSecondaryB" iconPosition="after" icon={iconSVG} size="large" />
        </Container>
        <Container>
          <h4>Large size icon before</h4>
          <DxcButton mode="text" label="LargeSizeSecondaryB" iconPosition="before" icon={iconSVG} size="large" />
        </Container>
        <Container>
          <h4>Large size icon after with ellipsis</h4>
          <DxcButton mode="text" label="LargeSizeSecondaryBu" iconPosition="after" icon={iconSVG} size="large" />
        </Container>
        <Container>
          <h4>Large size icon before with ellipsis</h4>
          <DxcButton mode="text" label="LargeSizeSecondaryBu" iconPosition="before" icon={iconSVG} size="large" />
        </Container>
        <Container>
          <h4>Fill parent size</h4>
          <DxcButton mode="text" label="FillParent" size="fillParent" />
        </Container>

        <Container>
          <h4>Fit content size</h4>
          <DxcButton mode="text" label="FitContent" size="fitContent" />
        </Container>
        <Container>
          <h4>Xxsmall margin</h4>
          <DxcButton mode="text" label="Xxsmall margin" margin="xxsmall" />
        </Container>
        <Container>
          <h4>Xsmall margin</h4>
          <DxcButton mode="text" label="Xsmall margin" margin="xsmall" />
        </Container>
        <Container>
          <h4>Small margin</h4>
          <DxcButton mode="text" label="Small margin" margin="small" />
        </Container>
        <Container>
          <h4>Medium margin</h4>
          <DxcButton mode="text" label="Medium margin" margin="medium" />
        </Container>
        <Container>
          <h4>Large margin</h4>
          <DxcButton mode="text" label="Large margin" margin="large" />
        </Container>
        <Container>
          <h4>Xlarge margin</h4>
          <DxcButton mode="text" label="Xlarge margin" margin="xlarge" />
        </Container>
        <Container>
          <h4>Xxlarge margin</h4>
          <DxcButton mode="text" label="Xxlarge margin" margin="xxlarge" />
        </Container>
      </div>
    </>
    <BackgroundColorProvider color="#000000">
      <DarkContainer>
        <>
          <h2 style={{ color: "white" }}>Primary</h2>

          <Container>
            <h4 style={{ color: "white" }}>Enabled</h4>
            <DxcButton label="Primary enabled" />
          </Container>
          <Container className="pseudo-hover">
            <h4 style={{ color: "white" }}>Hovered</h4>
            <DxcButton label="Primary hovered" />
          </Container>
          <Container className="pseudo-focus">
            <h4 style={{ color: "white" }}>Focused</h4>
            <DxcButton label="Primary focused" />
          </Container>
          <Container className="pseudo-active">
            <h4 style={{ color: "white" }}>Actived</h4>
            <DxcButton label="Primary actived" />
          </Container>
          <Container>
            <h4 style={{ color: "white" }}>Disabled</h4>
            <DxcButton label="Primary disabled" disabled />
          </Container>
        </>
        <>
          <h2 style={{ color: "white" }}>Secondary</h2>
          <Container>
            <h4 style={{ color: "white" }}>Enabled</h4>
            <DxcButton mode="secondary" label="Secondary enabled" />
          </Container>
          <Container className="pseudo-hover">
            <h4 style={{ color: "white" }}>Hovered</h4>
            <DxcButton mode="secondary" label="Secondary hovered" />
          </Container>
          <Container className="pseudo-focus">
            <h4 style={{ color: "white" }}>Focused</h4>
            <DxcButton mode="secondary" label="Secondary focused" />
          </Container>
          <Container className="pseudo-active">
            <h4 style={{ color: "white" }}>Actived</h4>
            <DxcButton mode="secondary" label="Secondary actived" />
          </Container>
          <Container>
            <h4 style={{ color: "white" }}>Disabled</h4>
            <DxcButton mode="secondary" disabled label="Secondary disabled" />
          </Container>
        </>
        <>
          <h2 style={{ color: "white" }}>Text</h2>
          <Container>
            <h4 style={{ color: "white" }}>Enabled</h4>
            <DxcButton mode="text" label="Text enabled" />
          </Container>
          <Container className="pseudo-hover">
            <h4 style={{ color: "white" }}>Hovered</h4>
            <DxcButton mode="text" label="Text hovered" />
          </Container>
          <Container className="pseudo-focus">
            <h4 style={{ color: "white" }}>Focused</h4>
            <DxcButton mode="text" label="Text focused" />
          </Container>
          <Container className="pseudo-active">
            <h4 style={{ color: "white" }}>Actived</h4>
            <DxcButton mode="text" label="Text actived" />
          </Container>
          <Container>
            <h4 style={{ color: "white" }}>Disabled</h4>
            <DxcButton mode="text" label="Text disabled" disabled />
          </Container>
        </>
      </DarkContainer>
    </BackgroundColorProvider>
  </>
);

const Container = styled.div`
  margin: 15px;
`;
const DarkContainer = styled.div`
  background-color: #000000;
`;

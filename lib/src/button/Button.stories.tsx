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
      <MainTitle>Primary</MainTitle>
      <Container>
        <ContainerTitle>Enabled</ContainerTitle>
        <DxcButton label="Primary enabled" />
      </Container>
      <Container className="pseudo-hover">
        <ContainerTitle>Hovered</ContainerTitle>
        <DxcButton label="Primary hovered" />
      </Container>
      <Container className="pseudo-focus">
        <ContainerTitle>Focused</ContainerTitle>
        <DxcButton label="Primary focused" />
      </Container>
      <Container className="pseudo-active">
        <ContainerTitle>Actived</ContainerTitle>
        <DxcButton label="Primary actived" />
      </Container>
      <Container>
        <ContainerTitle>Disabled</ContainerTitle>
        <DxcButton label="Primary disabled" disabled />
      </Container>
      <Container>
        <ContainerTitle>With left icon</ContainerTitle>
        <DxcButton label="Primary" icon={iconSVG} />
      </Container>
      <Container>
        <ContainerTitle>With right icon</ContainerTitle>
        <DxcButton label="Primary" icon={iconSVG} iconPosition="after" />
      </Container>
      <Container>
        <ContainerTitle>Only icon</ContainerTitle>
        <DxcButton icon={iconSVG} />
      </Container>
    </>
    <>
      <>
        <MainTitle>Secondary</MainTitle>
        <Container>
          <ContainerTitle>Enabled</ContainerTitle>
          <DxcButton mode="secondary" label="Secondary enabled" />
        </Container>
        <Container className="pseudo-hover">
          <ContainerTitle>Hovered</ContainerTitle>
          <DxcButton mode="secondary" label="Secondary hovered" />
        </Container>
        <Container className="pseudo-focus">
          <ContainerTitle>Focused</ContainerTitle>
          <DxcButton mode="secondary" label="Secondary focused" />
        </Container>
        <Container className="pseudo-active">
          <ContainerTitle>Actived</ContainerTitle>
          <DxcButton mode="secondary" label="Secondary actived" />
        </Container>
        <Container>
          <ContainerTitle>Disabled</ContainerTitle>
          <DxcButton mode="secondary" disabled label="Secondary disabled" />
        </Container>
        <Container>
          <ContainerTitle>With icon</ContainerTitle>
          <DxcButton mode="secondary" label="Secondary" icon={iconSVG} />
        </Container>
      </>
      <>
        <MainTitle>Text</MainTitle>
        <Container>
          <ContainerTitle>Enabled</ContainerTitle>
          <DxcButton mode="text" label="Text enabled" />
        </Container>
        <Container className="pseudo-hover">
          <ContainerTitle>Hovered</ContainerTitle>
          <DxcButton mode="text" label="Text hovered" />
        </Container>
        <Container className="pseudo-focus">
          <ContainerTitle>Focused</ContainerTitle>
          <DxcButton mode="text" label="Text focused" />
        </Container>
        <Container className="pseudo-active">
          <ContainerTitle>Actived</ContainerTitle>
          <DxcButton mode="text" label="Text actived" />
        </Container>
        <Container>
          <ContainerTitle>Disabled</ContainerTitle>
          <DxcButton mode="text" label="Text disabled" disabled />
        </Container>
        <Container>
          <ContainerTitle>With icon</ContainerTitle>
          <DxcButton label="Text" mode="text" icon={iconSVG} />
        </Container>
      </>
    </>
    <BackgroundColorProvider color="#333333">
      <DarkContainer>
        <>
          <MainTitle style={{ color: "white" }}>Primary</MainTitle>
          <Container>
            <ContainerTitle style={{ color: "white" }}>Enabled</ContainerTitle>
            <DxcButton label="Primary enabled" />
          </Container>
          <Container className="pseudo-hover">
            <ContainerTitle style={{ color: "white" }}>Hovered</ContainerTitle>
            <DxcButton label="Primary hovered" />
          </Container>
          <Container className="pseudo-focus">
            <ContainerTitle style={{ color: "white" }}>Focused</ContainerTitle>
            <DxcButton label="Primary focused" />
          </Container>
          <Container className="pseudo-active">
            <ContainerTitle style={{ color: "white" }}>Actived</ContainerTitle>
            <DxcButton label="Primary actived" />
          </Container>
          <Container>
            <ContainerTitle style={{ color: "white" }}>Disabled</ContainerTitle>
            <DxcButton label="Primary disabled" disabled />
          </Container>
          <Container style={{ color: "white" }}>
            <ContainerTitle>With icon</ContainerTitle>
            <DxcButton label="Primary" icon={iconSVG} />
          </Container>
        </>
        <>
          <MainTitle style={{ color: "white" }}>Secondary</MainTitle>
          <Container>
            <ContainerTitle style={{ color: "white" }}>Enabled</ContainerTitle>
            <DxcButton mode="secondary" label="Secondary enabled" />
          </Container>
          <Container className="pseudo-hover">
            <ContainerTitle style={{ color: "white" }}>Hovered</ContainerTitle>
            <DxcButton mode="secondary" label="Secondary hovered" />
          </Container>
          <Container className="pseudo-focus">
            <ContainerTitle style={{ color: "white" }}>Focused</ContainerTitle>
            <DxcButton mode="secondary" label="Secondary focused" />
          </Container>
          <Container className="pseudo-active">
            <ContainerTitle style={{ color: "white" }}>Actived</ContainerTitle>
            <DxcButton mode="secondary" label="Secondary actived" />
          </Container>
          <Container>
            <ContainerTitle style={{ color: "white" }}>Disabled</ContainerTitle>
            <DxcButton mode="secondary" disabled label="Secondary disabled" />
          </Container>
          <Container style={{ color: "white" }}>
            <ContainerTitle>With icon</ContainerTitle>
            <DxcButton mode="secondary" label="Primary" icon={iconSVG} />
          </Container>
        </>
        <>
          <MainTitle style={{ color: "white" }}>Text</MainTitle>
          <Container>
            <ContainerTitle style={{ color: "white" }}>Enabled</ContainerTitle>
            <DxcButton mode="text" label="Text enabled" />
          </Container>
          <Container className="pseudo-hover">
            <ContainerTitle style={{ color: "white" }}>Hovered</ContainerTitle>
            <DxcButton mode="text" label="Text hovered" />
          </Container>
          <Container className="pseudo-focus">
            <ContainerTitle style={{ color: "white" }}>Focused</ContainerTitle>
            <DxcButton mode="text" label="Text focused" />
          </Container>
          <Container className="pseudo-active">
            <ContainerTitle style={{ color: "white" }}>Actived</ContainerTitle>
            <DxcButton mode="text" label="Text actived" />
          </Container>
          <Container>
            <ContainerTitle style={{ color: "white" }}>Disabled</ContainerTitle>
            <DxcButton mode="text" label="Text disabled" disabled />
          </Container>
          <Container style={{ color: "white" }}>
            <ContainerTitle>With icon</ContainerTitle>
            <DxcButton mode="text" label="Primary" icon={iconSVG} />
          </Container>
        </>
      </DarkContainer>
    </BackgroundColorProvider>
    <>
      <MainTitle>Sizes</MainTitle>
      <Container>
        <ContainerTitle>Small size</ContainerTitle>
        <DxcButton label="Small" size="small" />
      </Container>
      <Container>
        <ContainerTitle>Medium size</ContainerTitle>
        <DxcButton label="MediumSiz" size="medium" />
      </Container>
      <Container>
        <ContainerTitle>Medium size with ellipsis</ContainerTitle>
        <DxcButton label="MediumSize" size="medium" />
      </Container>
      <Container>
        <ContainerTitle>Medium size icon after</ContainerTitle>
        <DxcButton label="Mediu" iconPosition="after" icon={iconSVG} size="medium" />
      </Container>
      <Container>
        <ContainerTitle>Medium size icon before</ContainerTitle>
        <DxcButton label="Mediu" iconPosition="before" icon={iconSVG} size="medium" />
      </Container>
      <Container>
        <ContainerTitle>Medium size icon after with ellipsis</ContainerTitle>
        <DxcButton label="Medium" iconPosition="after" icon={iconSVG} size="medium" />
      </Container>
      <Container>
        <ContainerTitle>Medium size icon before with ellipsis</ContainerTitle>
        <DxcButton label="Medium" iconPosition="before" icon={iconSVG} size="medium" />
      </Container>
      <Container>
        <ContainerTitle>Large size</ContainerTitle>
        <DxcButton label="LargeSizePrimaryButtonEx" size="large" />
      </Container>
      <Container>
        <ContainerTitle>Large size with ellipsis</ContainerTitle>
        <DxcButton label="LargeSizePrimaryButtonExa" size="large" />
      </Container>
      <Container>
        <ContainerTitle>Large size icon after</ContainerTitle>
        <DxcButton label="LargeSizePrimaryButto" iconPosition="after" icon={iconSVG} size="large" />
      </Container>
      <Container>
        <ContainerTitle>Large size icon before</ContainerTitle>
        <DxcButton label="LargeSizePrimaryButto" iconPosition="before" icon={iconSVG} size="large" />
      </Container>
      <Container>
        <ContainerTitle>Large size icon after with ellipsis</ContainerTitle>
        <DxcButton label="LargeSizePrimaryButton" iconPosition="after" icon={iconSVG} size="large" />
      </Container>
      <Container>
        <ContainerTitle>Large size icon before with ellipsis</ContainerTitle>
        <DxcButton label="LargeSizePrimaryButton" iconPosition="before" icon={iconSVG} size="large" />
      </Container>
      <Container>
        <ContainerTitle>Fill parent size</ContainerTitle>
        <DxcButton label="FillParent" size="fillParent" />
      </Container>
      <Container>
        <ContainerTitle>Fit content size</ContainerTitle>
        <DxcButton label="FitContent" size="fitContent" />
      </Container>
      <MainTitle>Margins</MainTitle>
      <Container>
        <ContainerTitle>Xxsmall margin</ContainerTitle>
        <DxcButton label="Xxsmall margin" margin="xxsmall" />
      </Container>
      <Container>
        <ContainerTitle>Xsmall margin</ContainerTitle>
        <DxcButton label="Xsmall margin" margin="xsmall" />
      </Container>
      <Container>
        <ContainerTitle>Small margin</ContainerTitle>
        <DxcButton label="Small margin" margin="small" />
      </Container>
      <Container>
        <ContainerTitle>Medium margin</ContainerTitle>
        <DxcButton label="Medium margin" margin="medium" />
      </Container>
      <Container>
        <ContainerTitle>Large margin</ContainerTitle>
        <DxcButton label="Large margin" margin="large" />
      </Container>
      <Container>
        <ContainerTitle>Xlarge margin</ContainerTitle>
        <DxcButton label="Xlarge margin" margin="xlarge" />
      </Container>
      <Container>
        <ContainerTitle>Xxlarge margin</ContainerTitle>
        <DxcButton label="Xxlarge margin" margin="xxlarge" />
      </Container>
    </>
  </>
);

const MainTitle = styled.h2`
  font-family: Open Sans, sans-serif;
`;

const ContainerTitle = styled.h4`
  font-family: Open Sans, sans-serif;
`;

const Container = styled.div`
  margin: 15px;
`;

const DarkContainer = styled.div`
  background-color: #333333;
`;

import React from "react";
import styled from "styled-components";
import DxcButton from "./Button";

export default {
  title: "Chromatic",
  component: DxcButton,
};

const PrimaryBtn = () => (
  <>
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
      <h4>Reset</h4>
      <DxcButton label="Primary reset" type="reset" />
    </Container>
    <Container>
      <h4>Submit</h4>
      <DxcButton label="Primary submit" type="submit" />
    </Container>
    <Container>
      <h4>With left icon</h4>
      <DxcButton
        label="Primary"
        icon={
          <svg
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            enable-background="new 0 0 24 24"
            fill="currentColor"
          >
            <g id="Bounding_Box">
              <rect fill="none" width="24" height="24" />
            </g>
            <g id="Master">
              <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
            </g>
          </svg>
        }
      />
    </Container>
    <Container>
      <h4>With right icon</h4>
      <DxcButton
        label="Primary"
        iconPosition="after"
        icon={
          <svg
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            enable-background="new 0 0 24 24"
            fill="currentColor"
          >
            <g id="Bounding_Box">
              <rect fill="none" width="24" height="24" />
            </g>
            <g id="Master">
              <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
            </g>
          </svg>
        }
      />
    </Container>
    <Container>
      <h4>Only icon</h4>
      <DxcButton
        icon={
          <svg
            x="0px"
            y="0px"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            enable-background="new 0 0 24 24"
            fill="currentColor"
          >
            <g id="Bounding_Box">
              <rect fill="none" width="24" height="24" />
            </g>
            <g id="Master">
              <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
            </g>
          </svg>
        }
      />
    </Container>
    <Container>
      <h4>Small size</h4>
      <DxcButton label="Small" size="small" />
    </Container>
    <Container>
      <h4>Medium size</h4>
      <DxcButton label="Medium" size="medium" />
    </Container>
    <Container>
      <h4>Large size</h4>
      <DxcButton label="Large" size="large" />
    </Container>
    <Container>
      <h4>Fill parent size</h4>
      <DxcButton label="Fill parent" size="fillParent" />
    </Container>
    <Container>
      <h4>Fill content size</h4>
      <DxcButton label="Fill content" size="fillContent" />
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
      <DxcButton label="Fill content" margin="medium" />
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
);
export const Primary = PrimaryBtn.bind({});

const Container = styled.div`
  margin: 15px;
`;

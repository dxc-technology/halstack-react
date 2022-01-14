import React from "react";
import styled from "styled-components";
import DxcButton from "./Button";

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
      <h1>Primary</h1>
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
      <Container>
        <h4>Primary button single line</h4>
        <DxcButton mode="primary" label="Button" margin="xsmall" />
      </Container>
      <Container>
        <h4>Primary button medium size</h4>
        <DxcButton mode="primary" label="ButtonMedi" margin="xsmall" size="medium" />
      </Container>
      <Container>
        <h4>Primary button medium size with ellipsis</h4>
        <DxcButton mode="primary" label="ButtonMediu" margin="xsmall" size="medium" />
      </Container>
      <Container>
        <h4>Primary button large size</h4>
        <DxcButton mode="primary" label="ButtonMediumnativeproces" margin="xsmall" size="large" />
      </Container>
      <Container>
        <h4>Primary button large size with ellipsis</h4>
        <DxcButton mode="primary" label="ButtonMediumnativeprocess" margin="xsmall" size="large" />
      </Container>
      <Container>
        <h4>Primary button medium size icon after</h4>
        <DxcButton mode="primary" label="But" iconPosition="after" icon={iconSVG} size="medium" margin="xsmall" />
      </Container>
      <Container>
        <h4>Primary button medium size icon before</h4>
        <DxcButton mode="primary" label="But" iconPosition="before" icon={iconSVG} size="medium" margin="xsmall" />
      </Container>
      <Container>
        <h4>Primary button medium size icon after with ellipsis</h4>
        <DxcButton mode="primary" label="ButMED" iconPosition="after" icon={iconSVG} size="medium" margin="xsmall" />
      </Container>
      <Container>
        <h4>Primary button medium size icon before with elipsis</h4>
        <DxcButton mode="primary" label="ButMED" iconPosition="before" icon={iconSVG} size="medium" margin="xsmall" />
      </Container>
      <Container>
        <h4>Primary button large size icon after</h4>
        <DxcButton
          mode="primary"
          label="Buttonlargewithoutellip"
          iconPosition="after"
          icon={iconSVG}
          size="large"
          margin="xsmall"
        />
      </Container>
      <Container>
        <h4>Primary button large size icon before</h4>
        <DxcButton
          mode="primary"
          label="Buttonlargewithoutellip"
          iconPosition="before"
          icon={iconSVG}
          size="large"
          margin="xsmall"
        />
      </Container>
      <Container>
        <h4>Primary button large size icon after with ellipsis</h4>
        <DxcButton
          mode="primary"
          label="Buttonlargewithellipsis1"
          iconPosition="after"
          icon={iconSVG}
          size="large"
          margin="xsmall"
        />
      </Container>
      <Container>
        <h4>Primary button large size icon before with elipsis</h4>
        <DxcButton
          mode="primary"
          label="Buttonlargewithellipsis1"
          iconPosition="before"
          icon={iconSVG}
          size="large"
          margin="xsmall"
        />
      </Container>
    </>
    <>
      <div>
        <h1>Secondary</h1>
        <Container>
          <h4>Enabled</h4>
          <DxcButton mode="secondary" label="Secondary Button" />
        </Container>
        <Container className="pseudo-hover">
          <h4>Hovered</h4>
          <DxcButton mode="secondary" label="Secondary hovered" />
        </Container>
        <Container className="pseudo-active">
          <h4>Actived</h4>
          <DxcButton mode="secondary" label="Secondary actived" />
        </Container>
        <Container className="pseudo-focus">
          <h4>Focused</h4>
          <DxcButton mode="secondary" label="Secondary focused" />
        </Container>
        <Container>
          <h4>Disabled</h4>
          <DxcButton mode="secondary" disabled label="Secondary disabled" />
        </Container>
        <Container>
          <h4>With left icon</h4>
          <DxcButton label="Secondary" mode="secondary" icon={iconSVG} />
        </Container>
        <Container>
          <h4>With right icon</h4>
          <DxcButton label="Secondary" mode="secondary" iconPosition="after" icon={iconSVG} />
        </Container>
        <Container>
          <h4>Secondary - only icon</h4>
          <DxcButton mode="secondary" icon={iconSVG} margin="xsmall" />
        </Container>
        <Container>
          <h4>Small size</h4>
          <DxcButton mode="secondary" label="Small" size="small" margin="small" />
        </Container>
        <Container>
          <h4>Medium size</h4>
          <DxcButton mode="secondary" label="Medium" size="medium" margin="small" />
        </Container>
        <Container>
          <h4>Large size</h4>
          <DxcButton mode="secondary" label="Large" size="large" margin="small" />
        </Container>
        <Container>
          <h4>Fit content size</h4>
          <DxcButton mode="secondary" label="Fit Content" size="fitContent" margin="small" />
        </Container>
        <Container>
          <h4>Fill parent size</h4>
          <DxcButton mode="secondary" label="Fill Parent" size="fillParent" margin="small" />
        </Container>
        <Container>
          <h4>Xxsmall margin</h4>
          <DxcButton mode="secondary" label="xxsmall" size="large" margin="xxsmall" />
        </Container>
        <Container>
          <h4>xsmall margin</h4>
          <DxcButton mode="secondary" label="xsmall" size="large" margin="xsmall" />
        </Container>
        <Container>
          <h4>Small margin</h4>
          <DxcButton mode="secondary" label="small" size="large" margin="small" />
        </Container>
        <Container>
          <h4>Medium margin</h4>
          <DxcButton mode="secondary" label="medium" size="large" margin="medium" />
        </Container>
        <Container>
          <h4>Large margin</h4>
          <DxcButton mode="secondary" label="large" size="large" margin="large" />
        </Container>
        <Container>
          <h4>Xlarge margin</h4>
          <DxcButton mode="secondary" label="xlarge" size="large" margin="xlarge" />
        </Container>
        <Container>
          <h4>Xxlarge margin</h4>
          <DxcButton mode="secondary" label="xxlarge" size="large" margin="xxlarge" />
        </Container>
        <Container>
          <h4>Secondary button single line</h4>
          <DxcButton mode="secondary" label="Button" margin="xsmall" />
        </Container>
        <Container>
          <h4>Secondary button medium size</h4>
          <DxcButton
            mode="secondary"
            label="ButtonMedi"
            iconPosition="after"
            icon={iconSVG}
            size="medium"
            margin="xsmall"
          />
        </Container>
        <Container>
          <h4>Secondary button medium size with ellipsis</h4>
          <DxcButton mode="secondary" label="ButtonMediu" margin="xsmall" size="medium" />
        </Container>
        <Container>
          <h4>Secondary button large size</h4>
          <DxcButton mode="secondary" label="ButtonMediumnativeproces" margin="xsmall" size="large" />
        </Container>
        <Container>
          <h4>Secondary button large size with ellipsis</h4>
          <DxcButton mode="secondary" label="ButtonMediumnativeprocess" margin="xsmall" size="large" />
        </Container>
        <Container>
          <h4>Secondary button medium size icon after</h4>
          <DxcButton mode="secondary" label="But" iconPosition="after" icon={iconSVG} size="medium" margin="xsmall" />
        </Container>
        <Container>
          <h4>Secondary button medium size icon before</h4>
          <DxcButton mode="secondary" label="But" iconPosition="before" icon={iconSVG} size="medium" margin="xsmall" />
        </Container>
        <Container>
          <h4>Secondary button medium size icon after with ellipsis</h4>
          <DxcButton
            mode="secondary"
            label="ButMED"
            iconPosition="after"
            icon={iconSVG}
            size="medium"
            margin="xsmall"
          />
        </Container>
        <Container>
          <h4>Secondary button medium size icon before with elipsis</h4>
          <DxcButton
            mode="secondary"
            label="ButMED"
            iconPosition="before"
            icon={iconSVG}
            size="medium"
            margin="xsmall"
          />
        </Container>
        <Container>
          <h4>Secondary button large size icon after</h4>
          <DxcButton
            mode="secondary"
            label="Buttonlargewithoutellip"
            iconPosition="after"
            icon={iconSVG}
            size="large"
            margin="xsmall"
          />
        </Container>
        <Container>
          <h4>Secondary button large size icon before</h4>
          <DxcButton
            mode="secondary"
            label="Buttonlargewithoutellip"
            iconPosition="before"
            icon={iconSVG}
            size="large"
            margin="xsmall"
          />
        </Container>
        <Container>
          <h4>Secondary button large size icon after with ellipsis</h4>
          <DxcButton
            mode="secondary"
            label="Buttonlargewithellipsis1"
            iconPosition="after"
            icon={iconSVG}
            size="large"
            margin="xsmall"
          />
        </Container>
        <Container>
          <h4>Secondary button large size icon before with elipsis</h4>
          <DxcButton
            mode="secondary"
            label="Buttonlargewithellipsis1"
            iconPosition="before"
            icon={iconSVG}
            size="large"
            margin="xsmall"
          />
        </Container>
      </div>
    </>
  </>
);

const Container = styled.div`
  margin: 15px;
`;

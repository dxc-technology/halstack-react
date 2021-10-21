import React from "react";
import {
  DxcButton,
  ThemeProvider,
  BackgroundColorProvider,
} from "@dxc-technology/halstack-react";
import styled from "styled-components";
import homeLogo from "../images/home.svg";

const colors = {
  button: {
    baseColor: "#fcf2bd",
    primaryFontColor: "#006BF6",
    secondaryHoverFontColor: "#cee0f5",
  },
};

const iconSVG = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

function App() {
  const onClick = () => {};

  return (
    <div>
      <div>
        <h4>Disabled</h4>
        <DxcButton
          mode="primary"
          label="Custom Button"
          onClick={onClick}
          disabled
          size="large"
          margin="small"
        />
        <DxcButton
          mode="secondary"
          label="Custom Button"
          onClick={onClick}
          disabled
          size="large"
          margin="small"
        />
        <DxcButton
          mode="text"
          label="Custom Button"
          onClick={onClick}
          disabled
          size="large"
          margin="small"
        />
      </div>
      <div>
        <h4>Primary - only icon</h4>
        <DxcButton
          mode="primary"
          onClick={onClick}
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
          margin="xsmall"
        />
      </div>
      <div>
        <h4>Secondary - only icon</h4>
        <DxcButton
          mode="secondary"
          onClick={onClick}
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
          margin="xsmall"
        />
      </div>
      <div>
        <h4>Text - only icon</h4>
        <DxcButton
          mode="text"
          onClick={onClick}
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
          margin="xsmall"
        />
      </div>
      <div>
        <h4>Sizes</h4>
        <div className="test-case" id="small-size">
          <DxcButton
            mode="primary"
            label="Small"
            onClick={onClick}
            size="small"
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-size">
          <DxcButton
            mode="primary"
            label="Medium"
            onClick={onClick}
            size="medium"
            margin="small"
          />
        </div>
        <div className="test-case" id="large-size">
          <DxcButton
            mode="primary"
            label="Large"
            onClick={onClick}
            size="large"
            margin="small"
          />
        </div>
        <div className="test-case" id="fitContent-size">
          <DxcButton
            mode="primary"
            label="Fit Content"
            onClick={onClick}
            size="fitContent"
            margin="small"
          />
        </div>
        <div className="test-case" id="fillParent-size">
          <DxcButton
            mode="primary"
            label="Fill Parent"
            onClick={onClick}
            size="fillParent"
            margin="small"
          />
        </div>
      </div>
      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <DxcButton
            mode="primary"
            label="xxsmall"
            onClick={onClick}
            size="large"
            margin="xxsmall"
          />
        </div>
        <div className="test-case" id="xsmall-margin">
          <DxcButton
            mode="primary"
            label="xsmall"
            onClick={onClick}
            size="large"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="small-margin">
          <DxcButton
            mode="primary"
            label="small"
            onClick={onClick}
            size="large"
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-margin">
          <DxcButton
            mode="primary"
            label="medium"
            onClick={onClick}
            size="large"
            margin="medium"
          />
        </div>
        <div className="test-case" id="large-margin">
          <DxcButton
            mode="primary"
            label="large"
            onClick={onClick}
            size="large"
            margin="large"
          />
        </div>
        <div className="test-case" id="xlarge-margin">
          <DxcButton
            mode="primary"
            label="xlarge"
            onClick={onClick}
            size="large"
            margin="xlarge"
          />
        </div>
        <div className="test-case" id="xxlarge">
          <DxcButton
            mode="primary"
            label="xxlarge"
            onClick={onClick}
            size="large"
            margin="xxlarge"
          />
        </div>
      </div>
      <div>
        <div className="test-case" id="primary-single-line">
          <h4>primary button single line</h4>
          <DxcButton
            mode="primary"
            label="Button"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="primary-max-line-icon-after">
          <h4>
            primary button size medium - Label max size single line icon after
          </h4>
          <DxcButton
            mode="primary"
            label="But"
            iconPosition="after"
            onClick={onClick}
            icon={<p>This is a text</p>}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="primary-max-line-icon-before">
          <h4>
            primary button size medium - Label max size single line icon before
          </h4>
          <DxcButton
            mode="primary"
            label="But"
            iconPosition="before"
            onClick={onClick}
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
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="primary-min-multiline-icon-after">
          <h4>
            primary button size medium - Label min size multi line icon after
          </h4>
          <DxcButton
            mode="primary"
            label="ButL"
            iconPosition="after"
            onClick={onClick}
            icon={iconSVG}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="primary-min-multiline-icon-before">
          <h4>
            primary button size medium - Label min size multi line icon before
          </h4>
          <DxcButton
            mode="primary"
            label="ButM"
            iconPosition="before"
            onClick={onClick}
            icon={iconSVG}
            size="medium"
            margin="xsmall"
          />
        </div>
      </div>
      <div>
        <div className="test-case" id="text-single-line">
          <h4>text button single line</h4>
          <DxcButton
            mode="text"
            label="Button"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="text-max-line-icon-after">
          <h4>
            text button size medium - Label max size single line icon after
          </h4>
          <DxcButton
            mode="text"
            label="But"
            iconPosition="after"
            onClick={onClick}
            icon={
              <svg
                x="0px"
                y="0px"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                enable-background="new 0 0 24 24"
                fill="yellow"
              >
                <g id="Bounding_Box">
                  <rect fill="none" width="24" height="24" />
                </g>
                <g id="Master">
                  <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                </g>
              </svg>
            }
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="text-max-line-icon-before">
          <h4>
            text button size medium - Label max size single line icon before
          </h4>
          <DxcButton
            mode="text"
            label="But"
            iconPosition="before"
            onClick={onClick}
            icon={iconSVG}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="text-min-multiline-icon-after">
          <h4>
            text button size medium - Label min size multi line icon after
          </h4>
          <DxcButton
            mode="text"
            label="ButL"
            iconPosition="after"
            onClick={onClick}
            icon={<img src={homeLogo} />}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="text-min-multiline-icon-before">
          <h4>
            text button size medium - Label min size multi line icon before
          </h4>
          <DxcButton
            mode="text"
            label="ButM"
            iconPosition="before"
            onClick={onClick}
            icon={iconSVG}
            size="medium"
            margin="xsmall"
          />
        </div>
      </div>
      <div>
        <div className="test-case" id="secondary-single-line">
          <h4>secondary button single line</h4>
          <DxcButton
            mode="secondary"
            label="Button"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="secondary-max-line-icon-after">
          <h4>
            secondary button size medium - Label max size single line icon after
          </h4>
          <DxcButton
            mode="secondary"
            label="But"
            iconPosition="after"
            onClick={onClick}
            icon={iconSVG}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="secondary-max-line-icon-before">
          <h4>
            secondary button size medium - Label max size single line icon
            before
          </h4>
          <DxcButton
            mode="secondary"
            label="But"
            iconPosition="before"
            onClick={onClick}
            icon={iconSVG}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="secondary-min-multiline-icon-after">
          <h4>
            secondary button size medium - Label min size multi line icon after
          </h4>
          <DxcButton
            mode="secondary"
            label="ButL"
            iconPosition="after"
            onClick={onClick}
            icon={iconSVG}
            size="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="secondary-min-multiline-icon-before">
          <h4>
            secondary button size medium - Label min size multi line icon before
          </h4>

          <DxcButton
            mode="secondary"
            label="ButM"
            iconPosition="before"
            onClick={onClick}
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
            size="medium"
            margin="xsmall"
          />
        </div>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Buttons</h4>
        <ThemeProvider theme={colors}>
          <div>
            <DxcButton
              mode="primary"
              label="Custom Button"
              onClick={onClick}
              size="large"
              margin="small"
            />
            <DxcButton
              mode="secondary"
              label="Custom Button"
              onClick={onClick}
              size="large"
              margin="small"
            />
            <DxcButton
              mode="text"
              label="Custom Button"
              onClick={onClick}
              size="large"
              margin="small"
            />
          </div>
          <div>
            <DxcButton
              mode="primary"
              label="Custom Button"
              onClick={onClick}
              disabled
              size="large"
              margin="small"
            />
            <DxcButton
              mode="secondary"
              label="Custom Button"
              onClick={onClick}
              disabled
              size="large"
              margin="small"
            />
            <DxcButton
              mode="text"
              label="Custom Button"
              onClick={onClick}
              disabled
              size="large"
              margin="small"
            />
          </div>
        </ThemeProvider>
      </div>
      <BackgroundColorProvider color="#000000">
        <Mode mode="dark" text="Default">
          <DxcButton
            mode="primary"
            label="Custom Button"
            onClick={onClick}
            size="large"
            margin="small"
          />
        </Mode>
        <Mode mode="dark" text="Primary">
          <DxcButton
            mode="primary"
            onClick={onClick}
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
            margin="xsmall"
          />
        </Mode>
        <Mode mode="dark" text="Primary">
          <DxcButton
            mode="primary"
            label="Custom Button"
            onClick={onClick}
            size="large"
            margin="small"
            disabled
          />
        </Mode>
        <Mode mode="dark" text="Secondary">
          <DxcButton
            mode="secondary"
            label="Custom Button"
            onClick={onClick}
            size="large"
            margin="small"
          />
        </Mode>
        <Mode mode="dark" text="Secondary">
          <DxcButton
            mode="secondary"
            onClick={onClick}
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
            margin="xsmall"
          />
        </Mode>
        <Mode mode="dark" text="Secondary">
          <DxcButton
            mode="secondary"
            label="Custom Button"
            onClick={onClick}
            size="large"
            margin="small"
            disabled
          />
        </Mode>
        <Mode mode="dark" text="Text">
          <DxcButton
            mode="text"
            label="Custom Button"
            onClick={onClick}
            size="large"
            margin="small"
          />
        </Mode>
        <Mode mode="dark" text="Text">
          <DxcButton
            mode="text"
            onClick={onClick}
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
            margin="xsmall"
          />
        </Mode>
        <Mode mode="dark" text="Text">
          <DxcButton
            mode="text"
            label="Custom Button"
            onClick={onClick}
            size="large"
            margin="small"
            disabled
          />
        </Mode>
      </BackgroundColorProvider>
    </div>
  );
}

const Mode = ({ mode, children }) => {
  return (
    <ModeContainer mode={mode}>
      <PreviewsContainer>{children}</PreviewsContainer>
    </ModeContainer>
  );
};

const ModeContainer = styled.div`
  background-color: ${(props) =>
    props.mode === "dark" ? "#000000" : "transparent"};
  display: flex;
  flex-flow: row wrap;
`;

const PreviewsContainer = styled.div`
  flex: 100%;
`;

export default App;

import React from "react";
import { DxcButton, ThemeContext } from "@dxc-technology/halstack-react";
import homeLogo from "../images/home.svg";

const colors = {
  button: {
    color: "#FABADA",
    hoverColor: "grey",
  },
};

function App() {
  const onClick = () => {};

  return (
    <div>
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
            icon={
              <img src={homeLogo} />
            }
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
        <div className="test-case" id="primary-min-multiline-icon-before">
          <h4>
            primary button size medium - Label min size multi line icon before
          </h4>
          <DxcButton
            mode="primary"
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
        <div className="test-case" id="secondary-min-multiline-icon-after">
          <h4>
            secondary button size medium - Label min size multi line icon after
          </h4>
          <DxcButton
            mode="secondary"
            label="ButL"
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
        <h4>Custom Button</h4>
        <ThemeContext.Provider value={colors}>
          <DxcButton
            mode="primary"
            label="Custom Button"
            onClick={onClick}
            size="large"
            margin="small"
          />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;

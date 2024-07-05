import React from "react";
import { DxcButton, HalstackProvider } from "@dxc-technology/halstack-react";
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
      <h4>Disabled</h4>
      <div style={{ display: "flex" }}>
        <DxcButton
          mode="primary"
          label="Custom Button"
          onClick={onClick}
          disabled
          width="large"
          margin="small"
        />
        <DxcButton
          mode="secondary"
          label="Custom Button"
          onClick={onClick}
          disabled
          width="large"
          margin="small"
        />
        <DxcButton
          mode="tertiary"
          label="Custom Button"
          onClick={onClick}
          disabled
          width="large"
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
              enableBackground="new 0 0 24 24"
              fill="currentColor"
            >
              <g>
                <rect fill="none" width="24" height="24" />
              </g>
              <g>
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
              enableBackground="new 0 0 24 24"
              fill="currentColor"
            >
              <g>
                <rect fill="none" width="24" height="24" />
              </g>
              <g>
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
          mode="tertiary"
          onClick={onClick}
          icon={
            <svg
              x="0px"
              y="0px"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              enableBackground="new 0 0 24 24"
              fill="currentColor"
            >
              <g>
                <rect fill="none" width="24" height="24" />
              </g>
              <g>
                <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
              </g>
            </svg>
          }
          margin="xsmall"
        />
      </div>
      <div>
        <h4>Widths</h4>
        <div className="test-case" id="small-width">
          <DxcButton
            mode="primary"
            label="Small"
            onClick={onClick}
            width="small"
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-width">
          <DxcButton
            mode="primary"
            label="Medium"
            onClick={onClick}
            width="medium"
            margin="small"
          />
        </div>
        <div className="test-case" id="large-width">
          <DxcButton
            mode="primary"
            label="Large"
            onClick={onClick}
            width="large"
            margin="small"
          />
        </div>
        <div className="test-case" id="fitContent-width">
          <DxcButton
            mode="primary"
            label="Fit Content"
            onClick={onClick}
            width="fitContent"
            margin="small"
          />
        </div>
        <div className="test-case" id="fillParent-width">
          <DxcButton
            mode="primary"
            label="Fill Parent"
            onClick={onClick}
            width="fillParent"
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
            width="large"
            margin="xxsmall"
          />
        </div>
        <div className="test-case" id="xsmall-margin">
          <DxcButton
            mode="primary"
            label="xsmall"
            onClick={onClick}
            width="large"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="small-margin">
          <DxcButton
            mode="primary"
            label="small"
            onClick={onClick}
            width="large"
            margin="small"
          />
        </div>
        <div className="test-case" id="medium-margin">
          <DxcButton
            mode="primary"
            label="medium"
            onClick={onClick}
            width="large"
            margin="medium"
          />
        </div>
        <div className="test-case" id="large-margin">
          <DxcButton
            mode="primary"
            label="large"
            onClick={onClick}
            width="large"
            margin="large"
          />
        </div>
        <div className="test-case" id="xlarge-margin">
          <DxcButton
            mode="primary"
            label="xlarge"
            onClick={onClick}
            width="large"
            margin="xlarge"
          />
        </div>
        <div className="test-case" id="xxlarge">
          <DxcButton
            mode="primary"
            label="xxlarge"
            onClick={onClick}
            width="large"
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
            primary button width medium - Label max width single line icon after
          </h4>
          <DxcButton
            mode="primary"
            label="But"
            iconPosition="after"
            onClick={onClick}
            icon={<p>This is a text</p>}
            width="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="primary-max-line-icon-before">
          <h4>
            primary button width medium - Label max width single line icon
            before
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
                enableBackground="new 0 0 24 24"
                fill="currentColor"
              >
                <g>
                  <rect fill="none" width="24" height="24" />
                </g>
                <g>
                  <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                </g>
              </svg>
            }
            width="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="primary-min-multiline-icon-after">
          <h4>
            primary button width medium - Label min width multi line icon after
          </h4>
          <DxcButton
            mode="primary"
            label="ButL"
            iconPosition="after"
            onClick={onClick}
            icon={iconSVG}
            width="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="primary-min-multiline-icon-before">
          <h4>
            primary button width medium - Label min width multi line icon before
          </h4>
          <DxcButton
            mode="primary"
            label="ButM"
            iconPosition="before"
            onClick={onClick}
            icon={iconSVG}
            width="medium"
            margin="xsmall"
          />
        </div>
      </div>
      <div>
        <div className="test-case" id="text-single-line">
          <h4>text button single line</h4>
          <DxcButton
            mode="tertiary"
            label="Button"
            onClick={onClick}
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="text-max-line-icon-after">
          <h4>
            text button width medium - Label max width single line icon after
          </h4>
          <DxcButton
            mode="tertiary"
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
                enableBackground="new 0 0 24 24"
                fill="yellow"
              >
                <g>
                  <rect fill="none" width="24" height="24" />
                </g>
                <g>
                  <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                </g>
              </svg>
            }
            width="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="text-max-line-icon-before">
          <h4>
            text button width medium - Label max width single line icon before
          </h4>
          <DxcButton
            mode="tertiary"
            label="But"
            iconPosition="before"
            onClick={onClick}
            icon={iconSVG}
            width="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="text-min-multiline-icon-after">
          <h4>
            text button width medium - Label min width multi line icon after
          </h4>
          <DxcButton
            mode="tertiary"
            label="ButL"
            iconPosition="after"
            onClick={onClick}
            icon={<img src={homeLogo} alt="Home" />}
            width="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="text-min-multiline-icon-before">
          <h4>
            text button width medium - Label min width multi line icon before
          </h4>
          <DxcButton
            mode="tertiary"
            label="ButM"
            iconPosition="before"
            onClick={onClick}
            icon={iconSVG}
            width="medium"
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
            secondary button width medium - Label max width single line icon
            after
          </h4>
          <DxcButton
            mode="secondary"
            label="But"
            iconPosition="after"
            onClick={onClick}
            icon={iconSVG}
            width="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="secondary-max-line-icon-before">
          <h4>
            secondary button width medium - Label max width single line icon
            before
          </h4>
          <DxcButton
            mode="secondary"
            label="But"
            iconPosition="before"
            onClick={onClick}
            icon={iconSVG}
            width="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="secondary-min-multiline-icon-after">
          <h4>
            secondary button width medium - Label min width multi line icon
            after
          </h4>
          <DxcButton
            mode="secondary"
            label="ButL"
            iconPosition="after"
            onClick={onClick}
            icon={iconSVG}
            width="medium"
            margin="xsmall"
          />
        </div>
        <div className="test-case" id="secondary-min-multiline-icon-before">
          <h4>
            secondary button width medium - Label min width multi line icon
            before
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
                enableBackground="new 0 0 24 24"
                fill="currentColor"
              >
                <g>
                  <rect fill="none" width="24" height="24" />
                </g>
                <g>
                  <path d="M19,9.3V4h-3v2.6L12,3L2,12h3v8h5v-6h4v6h5v-8h3L19,9.3z M10,10c0-1.1,0.9-2,2-2s2,0.9,2,2H10z" />
                </g>
              </svg>
            }
            width="medium"
            margin="xsmall"
          />
        </div>
      </div>
      <div className="test-case" id="custom-colors">
        <h4>Custom Buttons</h4>
        <HalstackProvider theme={colors}>
          <div>
            <DxcButton
              mode="primary"
              label="Custom Button"
              onClick={onClick}
              width="large"
              margin="small"
            />
            <DxcButton
              mode="secondary"
              label="Custom Button"
              onClick={onClick}
              width="large"
              margin="small"
            />
            <DxcButton
              mode="tertiary"
              label="Custom Button"
              onClick={onClick}
              width="large"
              margin="small"
            />
          </div>
          <div>
            <DxcButton
              mode="primary"
              label="Custom Button"
              onClick={onClick}
              disabled
              width="large"
              margin="small"
            />
            <DxcButton
              mode="secondary"
              label="Custom Button"
              onClick={onClick}
              disabled
              width="large"
              margin="small"
            />
            <DxcButton
              mode="tertiary"
              label="Custom Button"
              onClick={onClick}
              disabled
              width="large"
              margin="small"
            />
          </div>
        </HalstackProvider>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { DxcLink } from "@dxc-technology/halstack-react";
import homeLogo from "../images/home.svg";
import { Link as RouterLink } from "@reach/router";

const iconSVG = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

function App() {
  return (
    <div>
      <div>
        <h4>Default Link</h4>
        <div className="test-case" id="default-link">
          <p>
            This is a text with a <DxcLink href="#">Link</DxcLink> to another
            page.
          </p>
        </div>
      </div>
      <div>
        <h4>Default Link with onClick</h4>
        <div className="test-case" id="default-link-onClick">
          <p>
            This is a text with a{" "}
            <DxcLink onClick={() => console.log("Hello")}>Link</DxcLink> to
            another page.
          </p>
        </div>
      </div>
      <div>
        <h4>Not Underlined Link</h4>
        <div className="test-case" id="not-underlined-link">
          <p>
            This is a text with a{" "}
            <DxcLink href="#" margin="xxsmall" underlined={false}>
              Link
            </DxcLink>{" "}
            to another page.
          </p>
        </div>
      </div>
      <div>
        <h4>Default inherited color Link with NewWindow</h4>
        <div className="test-case" id="inherited-color-link">
          <DxcLink href="#" inheritColor newWindow>
            Link
          </DxcLink>
        </div>
      </div>
      <div>
        <h4>Not Underline colored Link</h4>
        <div className="test-case" id="not-underlined-colored-link">
          <DxcLink href="#" underlined={false} inheritedColor>
            Link
          </DxcLink>
        </div>
      </div>
      <div>
        <h4>Margin</h4>
        <div className="test-case" id="margin-xxsmall">
          <DxcLink href="#" margin="xxsmall">
            Margin xxsmall
          </DxcLink>
        </div>
        <div className="test-case" id="margin-xsmall">
          <DxcLink href="#" margin="xsmall">
            Margin xsmall
          </DxcLink>
        </div>
        <div className="test-case" id="margin-small">
          <DxcLink href="#" margin="small">
            Margin small
          </DxcLink>
        </div>
        <div className="test-case" id="margin-medium">
          <DxcLink href="#" margin="medium">
            Margin medium
          </DxcLink>
        </div>
        <div className="test-case" id="margin-large">
          <DxcLink href="#" margin="large">
            Margin large
          </DxcLink>
        </div>
        <div className="test-case" id="margin-xlarge">
          <DxcLink href="#" margin="xlarge">
            Margin xlarge
          </DxcLink>
        </div>
        <div className="test-case" id="margin-xxlarge">
          <DxcLink href="#" margin="xxlarge">
            Margin xxlarge
          </DxcLink>
        </div>
      </div>
      <div>
        <h4>Icons</h4>
        <div className="test-case" id="icon-after">
          <p>
            This is a text with an{" "}
            <DxcLink
              href="#"
              iconPosition="after"
              icon={
                <svg
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
            >
              Icon after
            </DxcLink>{" "}
            the link.
          </p>
          <p>
            This is a text with an{" "}
            <DxcLink
              href="#"
              iconPosition="after"
              icon={<p>This is a test.</p>}
            >
              Icon after
            </DxcLink>{" "}
            the link.
          </p>
        </div>
        <div className="test-case" id="icon-before">
          <p>
            This is a text with an{" "}
            <DxcLink
              href="#"
              iconPosition="before"
              icon={iconSVG}
              inheritColor
              underlined={false}
            >
              Icon before
            </DxcLink>{" "}
            the link.
          </p>
        </div>
        <div className="test-case" id="icon-before-img">
          <p>
            This is a text with an{" "}
            <DxcLink
              href="#"
              iconPosition="before"
              icon={<img src={homeLogo} />}
              inheritColor
              underlined={false}
            >
              Icon before
            </DxcLink>{" "}
            the link.
          </p>
        </div>
      </div>
      <div>
        <h4>Disabled</h4>
        <div className="test-case" id="disabled-light-link">
          <DxcLink href="#" disabled underlined>
            Disabled link
          </DxcLink>{" "}
        </div>
        <div className="test-case" id="disabled-light-link">
          <DxcLink onClick={() => console.log("Hello")} disabled underlined>
            Disabled link
          </DxcLink>{" "}
        </div>
      </div>

      <div>
        <h4>Custom Link</h4>
        <div className="test-case" id="custom-router-link">
          <p>
            This is a text with a{" "}
            <DxcLink>
              <RouterLink to="/test">custom router link</RouterLink>
            </DxcLink>{" "}
            to another page.
          </p>
        </div>
        <div className="test-case" id="custom-inherit-router-link">
          <p>
            This is a text with a{" "}
            <DxcLink inheritColor>
              <RouterLink to="/test">custom router link</RouterLink>
            </DxcLink>{" "}
            to another page.
          </p>
        </div>
      </div>
      <div>
        <h4>Custom Link with onClick</h4>
        <div className="test-case" id="default-link-onClick">
          <p>
            This is a text with a{" "}
            <DxcLink underlined={false} onClick={() => console.log("Hello")}>
              custom button link
            </DxcLink>{" "}
            to another page.
          </p>
        </div>
      </div>
      <div>
        <h4>Custom Link with margin</h4>
        <div className="test-case" id="margin-medium">
          <DxcLink margin="medium">
            <RouterLink to="/test">Router link with margin medium</RouterLink>
          </DxcLink>
        </div>
        <div className="test-case" id="margin-large">
          <DxcLink margin="large">
            <RouterLink to="/test">Router link with margin large</RouterLink>
          </DxcLink>
        </div>
      </div>
      <div>
        <h4>Custom Link with icons</h4>
        <div className="test-case" id="icon-button">
          <p>
            This is a text with an{" "}
            <DxcLink icon={iconSVG}>
              <RouterLink to="/test">icon before</RouterLink>
            </DxcLink>{" "}
            the button.
          </p>
        </div>
        <div className="test-case" id="icon-router-link">
          <p>
            This is a text with an{" "}
            <DxcLink icon={iconSVG} iconPosition="after">
              <RouterLink to="/test">icon after</RouterLink>
            </DxcLink>{" "}
            the router link.
          </p>
        </div>
      </div>
      <div>
        <h4>Disabled custom Link</h4>
        <div className="test-case" id="disabled-button-link">
          <DxcLink disabled>
            <RouterLink to="/test">Disabled custom router link</RouterLink>
          </DxcLink>
        </div>
      </div>
    </div>
  );
}

export default App;

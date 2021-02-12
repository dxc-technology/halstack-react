import React from "react";
import { DxcLink } from "@dxc-technology/halstack-react";
import homeLogo from "../images/home.svg";

const iconSVG = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
};

function App() {
  return (
    <div>
      <div>
        <h4>Default Link</h4>
        <div className="test-case" id="default-link">
          <p>
            This is a text with a <DxcLink href="#" text="Link"></DxcLink> to
            another page.
          </p>
        </div>
      </div>
      <div>
        <h4>Default Link with onClick</h4>
        <div className="test-case" id="default-link-onClick">
          <p>
            This is a text with a{" "}
            <DxcLink onClick={() => console.log("Hello")} text="Link"></DxcLink>{" "}
            to another page.
          </p>
        </div>
      </div>
      <div>
        <h4>Not Underlined Link</h4>
        <div className="test-case" id="not-underlined-link">
          <p>
            This is a text with a
            <DxcLink
              href="#"
              margin="xxsmall"
              underlined={false}
              text="Link"
            ></DxcLink>
            to another page.
          </p>
        </div>
      </div>
      <div>
        <h4>Default inherited color Link with NewWindow</h4>
        <div className="test-case" id="inherited-color-link">
          <DxcLink
            href="#"
            inheritColor={true}
            newWindow={true}
            text="Link"
          ></DxcLink>
        </div>
      </div>
      <div>
        <h4>Not Underline colored Link</h4>
        <div className="test-case" id="not-underlined-colored-link">
          <DxcLink
            href="#"
            underlined={false}
            inheritedColor={true}
            text="Link"
          ></DxcLink>
        </div>
      </div>
      <div>
        <h4>Margin</h4>
        <div className="test-case" id="margin-xxsmall">
          <DxcLink href="#" margin="xxsmall" text="Margin xxsmall"></DxcLink>
        </div>
        <div className="test-case" id="margin-xsmall">
          <DxcLink href="#" margin="xsmall" text="Margin xsmall"></DxcLink>
        </div>
        <div className="test-case" id="margin-small">
          <DxcLink href="#" margin="small" text="Margin small"></DxcLink>
        </div>
        <div className="test-case" id="margin-medium">
          <DxcLink href="#" margin="medium" text="Margin medium"></DxcLink>
        </div>
        <div className="test-case" id="margin-large">
          <DxcLink href="#" margin="large" text="Margin large"></DxcLink>
        </div>
        <div className="test-case" id="margin-xlarge">
          <DxcLink href="#" margin="xlarge" text="Margin xlarge"></DxcLink>
        </div>
        <div className="test-case" id="margin-xxlarge">
          <DxcLink href="#" margin="xxlarge" text="Margin xxlarge"></DxcLink>
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
              text="Icon after"
            ></DxcLink>{" "}
            the link.
          </p>
          <p>
            This is a text with an{" "}
            <DxcLink
              href="#"
              iconPosition="after"
              icon={<p>This is a test.</p>}
              text="Icon after"
            ></DxcLink>{" "}
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
              inheritColor={true}
              underlined={false}
              text="Icon before"
            ></DxcLink>{" "}
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
              inheritColor={true}
              underlined={false}
              text="Icon before"
            ></DxcLink>{" "}
            the link.
          </p>
        </div>
      </div>
      <div>
        <h4>Disabled</h4>
        <div className="test-case" id="disabled-light-link">
          <DxcLink
            href="#"
            disabled={true}
            underlined={true}
            text="Disabled link"
          ></DxcLink>{" "}
        </div>
        <div className="test-case" id="disabled-light-link">
          <DxcLink
            onClick={() => console.log("Hello")}
            disabled={true}
            underlined={true}
            text="Disabled link"
          ></DxcLink>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;

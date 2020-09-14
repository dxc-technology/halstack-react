import React from "react";
import { DxcLink } from "@dxc-technology/halstack-react";
import homeLogo from "../images/home.svg";

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
              iconSrc={homeLogo}
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
              iconSrc={homeLogo}
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
      </div>
    </div>
  );
}

export default App;

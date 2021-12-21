import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";

function App() {
  return (
    <div>
      <div>
        <h4>Light headings</h4>
        <div className="test-case" id="heading-level1-light">
          <DxcHeading text="Hello world!" level={1} />
        </div>
        <div className="test-case" id="heading-level2-light">
          <DxcHeading text="Hello world!" level={2} />
        </div>
        <div className="test-case" id="heading-level3-light">
          <DxcHeading text="Hello world!" level={3} />
        </div>
        <div className="test-case" id="heading-level4-light">
          <DxcHeading text="Hello world!" level={4} />
        </div>
        <div className="test-case" id="heading-level5-light">
          <DxcHeading text="Hello world!" level={5} />
        </div>
      </div>
      <div>
        <h4>As prop</h4>
        <div className="test-case" id="heading-level1-as-h5">
          <DxcHeading text="Level 1 as h5" level={1} as="h5" />
        </div>
        <div className="test-case" id="heading-level2-as-h3">
          <DxcHeading text="Level 2 as h3" level={2} as="h3" />
        </div>
        <div className="test-case" id="heading-level3-as-h4">
          <DxcHeading text="Level 3 as h4" level={3} as="h4" />
        </div>
        <div className="test-case" id="heading-level4-as-h2">
          <DxcHeading text="Level 4 as h2" level={4} as="h2" />
        </div>
        <div className="test-case" id="heading-level5-as-h1">
          <DxcHeading text="Level 5 as h1" level={5} as="h2" />
        </div>
      </div>
      <div>
        <h4>Weights</h4>
        <div className="test-case" id="heading-level1-weight-normal">
          <DxcHeading text="Hello world!" level={1} weight="normal" />
        </div>
        <div className="test-case" id="heading-level1-weight-bold">
          <DxcHeading text="Hello world!" level={1} weight="bold" />
        </div>
        <div className="test-case" id="heading-level2-weight-light">
          <DxcHeading text="Hello world!" level={2} weight="light" />
        </div>
        <div className="test-case" id="heading-level2-weight-bold">
          <DxcHeading text="Hello world!" level={2} weight="bold" />
        </div>
        <div className="test-case" id="heading-level3-weight-light">
          <DxcHeading text="Hello world!" level={3} weight="light" />
        </div>
        <div className="test-case" id="heading-level3-weight-bold">
          <DxcHeading text="Hello world!" level={3} weight="bold" />
        </div>
        <div className="test-case" id="heading-level4-weight-light">
          <DxcHeading text="Hello world!" level={4} weight="light" />
        </div>
        <div className="test-case" id="heading-level4-weight-bold">
          <DxcHeading text="Hello world!" level={4} weight="bold" />
        </div>
        <div className="test-case" id="heading-level5-weight-light">
          <DxcHeading text="Hello world!" level={5} weight="light" />
        </div>
        <div className="test-case" id="heading-level5-weight-bold">
          <DxcHeading text="Hello world!" level={5} weight="bold" />
        </div>
      </div>
      <div>
        <h4>Headings with margin</h4>
        <div className="test-case" id="heading-margin-xxsmall">
          <DxcHeading text="Hello world!" level={5} margin="xxsmall" />
        </div>
        <div className="test-case" id="heading-margin-xsmall">
          <DxcHeading text="Hello world!" level={5} margin="xsmall" />
        </div>
        <div className="test-case" id="heading-margin-small">
          <DxcHeading text="Hello world!" level={5} margin="small" />
        </div>
        <div className="test-case" id="heading-margin-medium">
          <DxcHeading text="Hello world!" level={5} margin="medium" />
        </div>
        <div className="test-case" id="heading-margin-large">
          <DxcHeading text="Hello world!" level={5} margin="large" />
        </div>
        <div className="test-case" id="heading-margin-xlarge">
          <DxcHeading text="Hello world!" level={5} margin="xlarge" />
        </div>
        <div className="test-case" id="heading-margin-xxlarge">
          <DxcHeading text="Hello world!" level={5} margin="xxlarge" />
        </div>
      </div>
    </div>
  );
}

export default App;

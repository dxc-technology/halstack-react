import React from "react";
import { DxcHeading } from "@diaas/dxc-react-cdk";

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
      <div style={{ background: "#000000", padding: "25px 0px 25px 0px" }}>
        <h4 style={{color: "#FFFFFF"}}>Dark headings</h4>
        <div className="test-case" id="heading-level1-dark">
          <DxcHeading text="Hello world!" level={1} theme="dark" />
        </div>
        <div className="test-case" id="heading-level2-dark">
          <DxcHeading text="Hello world!" level={2} theme="dark" />
        </div>
        <div className="test-case" id="heading-level3-dark">
          <DxcHeading text="Hello world!" level={3} theme="dark" />
        </div>
        <div className="test-case" id="heading-level4-dark">
          <DxcHeading text="Hello world!" level={4} theme="dark" />
        </div>
        <div className="test-case" id="heading-level5-dark">
          <DxcHeading text="Hello world!" level={5} theme="dark" />
        </div>
      </div>
      <div>
        <h4>Weights</h4>
        <div className="test-case" id="heading-level1-weight-normal">
          <DxcHeading text="Hello world!" level={1} weight="normal"/>
        </div>
        <div className="test-case" id="heading-level1-weight-bold">
          <DxcHeading text="Hello world!" level={1} weight="bold"/>
        </div>
        <div className="test-case" id="heading-level2-weight-light">
          <DxcHeading text="Hello world!" level={2} weight="light"/>
        </div>
        <div className="test-case" id="heading-level2-weight-bold">
          <DxcHeading text="Hello world!" level={2} weight="bold"/>
        </div>
        <div className="test-case" id="heading-level3-weight-light">
          <DxcHeading text="Hello world!" level={3} weight="light"/>
        </div>
        <div className="test-case" id="heading-level3-weight-bold">
          <DxcHeading text="Hello world!" level={3} weight="bold"/>
        </div>
        <div className="test-case" id="heading-level4-weight-light">
          <DxcHeading text="Hello world!" level={4} weight="light"/>
        </div>
        <div className="test-case" id="heading-level4-weight-bold">
          <DxcHeading text="Hello world!" level={4} weight="bold"/>
        </div>
        <div className="test-case" id="heading-level5-weight-light">
          <DxcHeading text="Hello world!" level={5} weight="light"/>
        </div>
        <div className="test-case" id="heading-level5-weight-bold">
          <DxcHeading text="Hello world!" level={5} weight="bold"/>
        </div>
      </div>
    </div>
  );
}

export default App;

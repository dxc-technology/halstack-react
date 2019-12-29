import React, { useState } from "react";
import { DxcAccordion } from "@diaas/dxc-react-cdk";
import homeLogo from "../images/home.svg";

function App() {
  const [isExpanded, changeIsExpanded] = useState(true);
  const onChange = newValue => {
    changeIsExpanded(newValue);
  };

  return (
    <div>
      <h3>Light</h3>
      <div>
        <DxcAccordion
          label="First accordion uncontrolled"
          onChange={onChange}
          margin={{ top: "small", bottom: "large" }}
          padding="xxlarge"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
        <DxcAccordion
          theme="light"
          label="Second accordion controlled"
          onChange={onChange}
          isExpanded={isExpanded}
          margin={{ top: "small", bottom: "large" }}
          padding="xxlarge"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
        <DxcAccordion
          label="Third accordion"
          onChange={onChange}
          disabled
          assistiveText="Extra information"
          isExpanded={isExpanded}
          margin={{ top: "small", bottom: "large" }}
          padding="xxlarge"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
        <DxcAccordion
          theme="light"
          label="Fourth accordion"
          assistiveText="Extra information"
          iconPosition="before"
          iconSrc={homeLogo}
          onChange={onChange}
          isExpanded={isExpanded}
          margin={{ top: "small", bottom: "large" }}
          padding="xxlarge"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
        <DxcAccordion
          theme="light"
          label="Fifth accordion"
          assistiveText="Extra information"
          iconPosition="after"
          iconSrc={homeLogo}
          onChange={onChange}
          isExpanded={isExpanded}
          margin={{ top: "small", bottom: "large" }}
          padding="xxlarge"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </div>
      <div>
        <DxcAccordion
          theme="light"
          mode="alternative"
          label="First accordion"
          onChange={onChange}
          margin={{ top: "small", bottom: "large" }}
          padding="xxlarge"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
        <DxcAccordion
          theme="light"
          mode="alternative"
          disabled
          label="Second accordion"
          onChange={onChange}
          margin={{ top: "small", bottom: "large" }}
          padding="xxlarge"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
        <DxcAccordion
          theme="light"
          mode="alternative"
          label="Third accordion"
          assistiveText="Extra information"
          onChange={onChange}
          margin={{ top: "small", bottom: "large" }}
          padding="xxlarge"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
        <DxcAccordion
          theme="light"
          mode="alternative"
          label="Fourth accordion"
          assistiveText="Extra information"
          iconPosition="before"
          iconSrc={homeLogo}
          onChange={onChange}
          margin={{ top: "small", bottom: "large" }}
          padding="xxlarge"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
        <DxcAccordion
          theme="light"
          mode="alternative"
          label="Fifth accordion"
          assistiveText="Extra information"
          iconPosition="after"
          iconSrc={homeLogo}
          onChange={onChange}
          margin={{ top: "small", bottom: "large" }}
          padding="xxlarge"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </div>
      <h3>Dark</h3>
      <div>
        <div
          style={{
            background: "black"
          }}
        >
          <DxcAccordion
            label="First accordion"
            onChange={onChange}
            margin={{ top: "small", bottom: "large" }}
            padding="xxlarge"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
          <DxcAccordion
            theme="dark"
            disabled
            label="Second accordion"
            onChange={onChange}
            margin={{ top: "small", bottom: "large" }}
            padding="xxlarge"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
          <DxcAccordion
            theme="dark"
            label="Third accordion"
            onChange={onChange}
            assistiveText="Extra information"
            margin={{ top: "small", bottom: "large" }}
            padding="xxlarge"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
          <DxcAccordion
            theme="dark"
            label="Fourth accordion"
            assistiveText="Extra information"
            iconPosition="before"
            iconSrc={homeLogo}
            onChange={onChange}
            margin={{ top: "small", bottom: "large" }}
            padding="xxlarge"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
          <DxcAccordion
            theme="dark"
            label="Fifth accordion"
            assistiveText="Extra information"
            iconPosition="after"
            iconSrc={homeLogo}
            onChange={onChange}
            margin={{ top: "small", bottom: "large" }}
            padding="xxlarge"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div style={{ background: "black" }}>
          <DxcAccordion
            theme="dark"
            mode="alternative"
            label="First accordion"
            onChange={onChange}
            margin={{ top: "small", bottom: "large" }}
            padding="xxlarge"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
          <DxcAccordion
            theme="dark"
            mode="alternative"
            disabled
            label="Second accordion"
            onChange={onChange}
            margin={{ top: "small", bottom: "large" }}
            padding="xxlarge"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
          <DxcAccordion
            theme="dark"
            mode="alternative"
            label="Third accordion"
            assistiveText="Extra information"
            onChange={onChange}
            margin={{ top: "small", bottom: "large" }}
            padding="xxlarge"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
          <DxcAccordion
            theme="dark"
            mode="alternative"
            label="Fourth accordion"
            assistiveText="Extra information"
            iconPosition="before"
            iconSrc={homeLogo}
            onChange={onChange}
            margin={{ top: "small", bottom: "large" }}
            padding="xxlarge"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
          <DxcAccordion
            theme="dark"
            mode="alternative"
            label="Fifth accordion"
            assistiveText="Extra information"
            iconPosition="after"
            iconSrc={homeLogo}
            onChange={onChange}
            margin={{ top: "small", bottom: "large" }}
            padding="xxlarge"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
      </div>
    </div>
  );
}

export default App;

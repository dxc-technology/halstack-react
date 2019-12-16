import React from "react";
import { DxcAccordion } from "@diaas/dxc-react-cdk";
import logo from "../images/home.svg";

function App() {
  const onChange = () => {};

  return (
    <div>
      <h3>Light</h3>
      <div style={{ marginBottom: "50px" }}>
        <DxcAccordion label="First accordion" onChange={onChange}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
        <DxcAccordion
          theme="light"
          disabled
          label="Second accordion"
          onChange={onChange}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
        <DxcAccordion
          label="Third accordion"
          onChange={onChange}
          assistiveText="Extra information"
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
          iconSrc={logo}
          onChange={onChange}
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
          iconSrc={logo}
          onChange={onChange}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <DxcAccordion
          theme="light"
          mode="alternative"
          label="First accordion"
          onChange={onChange}
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
          iconSrc={logo}
          onChange={onChange}
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
          iconSrc={logo}
          onChange={onChange}
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
            background: "black",
            paddingTop: "50px",
            paddingBottom: "50px"
          }}
        >
          <DxcAccordion label="First accordion" onChange={onChange}>
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
            iconSrc={logo}
            onChange={onChange}
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
            iconSrc={logo}
            onChange={onChange}
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div style={{ background: "black", paddingBottom: "50px" }}>
          <DxcAccordion
            theme="dark"
            mode="alternative"
            label="First accordion"
            onChange={onChange}
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
            iconSrc={logo}
            onChange={onChange}
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
            iconSrc={logo}
            onChange={onChange}
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

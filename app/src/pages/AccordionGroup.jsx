import React, { useState } from "react";
import {
  DxcAccordionGroup,
  DxcAccordion,
  ThemeContext,
} from "@dxc-technology/halstack-react";

function App() {
  const [indexClose, setIndexClose] = useState(0);

  const onActiveChange = (i) => {
    console.log("onActiveChange", i);
  };

  const onCloseControlled = (i) => {
    setIndexClose((prevValue) => {
      return prevValue === i ? null : i;
    });
  };

  return (
    <div>
      <div className="test-case" id="light-theme-default">
        <h4>Accordion Group Uncontrolled</h4>
        <DxcAccordionGroup>
          <DxcAccordionGroup.Accordion label="Accordion1" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
          <DxcAccordionGroup.Accordion label="Accordion2" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
        </DxcAccordionGroup>
      </div>
      <div className="test-case" id="accordion-group-one-children">
        <h4>Accordion Group with one children</h4>
        <DxcAccordionGroup>
          <DxcAccordionGroup.Accordion label="Accordion1" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
        </DxcAccordionGroup>
      </div>
      <div className="test-case" id="light-theme-default">
        <h4>Accordion Group Uncontrolled with undefined ActiveIndex</h4>

        <DxcAccordionGroup indexActive={undefined} margin="medium">
          <DxcAccordionGroup.Accordion label="Accordion3" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
          <DxcAccordionGroup.Accordion label="Accordion4" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
          <DxcAccordionGroup.Accordion label="Accordion5" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
        </DxcAccordionGroup>
      </div>
      <div className="test-case" id="light-theme-default">
        <h4>Accordion Group on Close Controlled</h4>

        <DxcAccordionGroup
          margin="large"
          indexActive={indexClose}
          onActiveChange={onCloseControlled}
        >
          <DxcAccordionGroup.Accordion
            label="Accordion6"
            padding="medium"
            margin="large"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
          <DxcAccordionGroup.Accordion label="Accordion7" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
        </DxcAccordionGroup>
      </div>
      <div className="test-case" id="light-theme-default">
        <h4>Accordion Group Controlled with static index active</h4>

        <DxcAccordionGroup margin="xlarge" indexActive={0}>
          <DxcAccordionGroup.Accordion label="Accordion8" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
          <DxcAccordionGroup.Accordion
            label="Accordion9"
            padding="medium"
            disabled
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
        </DxcAccordionGroup>
      </div>
      <div className="test-case" id="light-theme-default">
        <h4>
          Accordion Group Controlled with static index active and function
        </h4>
        <DxcAccordionGroup
          margin="xlarge"
          indexActive={null}
          onActiveChange={onActiveChange}
        >
          <DxcAccordionGroup.Accordion label="Accordion10" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
          <DxcAccordionGroup.Accordion label="Accordion11" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
        </DxcAccordionGroup>
      </div>
      <div className="test-case" id="light-theme-default">
        <h4>Accordion Group Uncontrolled with funtion onActiveChange</h4>

        <DxcAccordionGroup onActiveChange={onActiveChange}>
          <DxcAccordionGroup.Accordion label="Accordion12" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
          <DxcAccordionGroup.Accordion label="Accordion13" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
        </DxcAccordionGroup>
      </div>
      <div className="test-case" id="light-theme-default">
        <h4>Disabled Accordion Group</h4>
        <DxcAccordionGroup onActiveChange={onActiveChange} disabled={true}>
          <DxcAccordionGroup.Accordion label="Accordion14" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
          <DxcAccordionGroup.Accordion label="Accordion15" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordionGroup.Accordion>
        </DxcAccordionGroup>
      </div>
      <div className="test-case" id="light-theme-default">
        <h4>Nested Accordion Group</h4>
        <DxcAccordionGroup>
          <DxcAccordionGroup.Accordion label="Accordion16">
            <DxcAccordionGroup margin="medium">
              <DxcAccordionGroup.Accordion label="Accordion17">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </DxcAccordionGroup.Accordion>
              <DxcAccordionGroup.Accordion label="Accordion18" padding="medium">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </div>
              </DxcAccordionGroup.Accordion>
            </DxcAccordionGroup>
          </DxcAccordionGroup.Accordion>
          <DxcAccordionGroup.Accordion label="Accordion18" padding="medium">
            <DxcAccordion label="Accordion">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAccordion>
          </DxcAccordionGroup.Accordion>
        </DxcAccordionGroup>
      </div>
    </div>
  );
}

export default App;

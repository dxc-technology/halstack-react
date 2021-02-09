import React, { useState } from "react";
import {
  DxcAccordionGroup,
  ThemeContext,
  DxcAlert,
} from "@dxc-technology/halstack-react";
import homeIcon from "../images/home.svg";

const colors = {
  accordion: {
    arrowColor: "#FABADA",
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
  const [indexAccordion, setIndexAccordion] = useState(1);
  const [indexAccordion2, setIndexAccordion2] = useState(0);

  const onActiveChange = (i) => {
    console.log("onActiveChange", i);
    setIndexAccordion(i);
  };

  const onActiveChange2 = (i) => {
    console.log("onActiveChange2", i);
    setIndexAccordion2(0);
  };

  return (
    <div>
      <div className="test-case" id="light-theme-default">
        <h4>Accordion Group Uncontrolled</h4>
        <ThemeContext.Provider>
          <DxcAccordionGroup>
            <DxcAccordionGroup.Accordion label="Accordion5454" padding="medium">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAccordionGroup.Accordion>
            <DxcAccordionGroup.Accordion label="Accordion7777" padding="medium">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAccordionGroup.Accordion>
          </DxcAccordionGroup>
        </ThemeContext.Provider>
      </div>
      <div className="test-case" id="light-theme-default">
        <h4>Accordion Group Uncontrolled with ActiveIndex</h4>
        <ThemeContext.Provider>
          <DxcAccordionGroup indexActive={1} margin="medium">
            <DxcAccordionGroup.Accordion label="Accordion5454" padding="medium">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAccordionGroup.Accordion>
            <DxcAccordionGroup.Accordion label="Accordion7777" padding="medium">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAccordionGroup.Accordion>
            <DxcAccordionGroup.Accordion label="Accordion7777" padding="medium">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAccordionGroup.Accordion>
          </DxcAccordionGroup>
        </ThemeContext.Provider>
      </div>
      <div className="test-case" id="light-theme-default">
        <h4>Accordion Group Controlled</h4>
        <ThemeContext.Provider>
          <DxcAccordionGroup
            padding="large"
            indexActive={indexAccordion}
            onActiveChange={onActiveChange}
          >
            <DxcAccordionGroup.Accordion label="Accordion5454" padding="medium">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAccordionGroup.Accordion>
            <DxcAccordionGroup.Accordion label="Accordion7777" padding="medium">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAccordionGroup.Accordion>
          </DxcAccordionGroup>
        </ThemeContext.Provider>
      </div>
      <div className="test-case" id="light-theme-default">
        <h4>Accordion Group Controlled</h4>
        <ThemeContext.Provider>
          <DxcAccordionGroup
            margin="xlarge"
            indexActive={indexAccordion2}
            onActiveChange={onActiveChange2}
          >
            <DxcAccordionGroup.Accordion label="Accordion5454" padding="medium">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAccordionGroup.Accordion>
            <DxcAccordionGroup.Accordion
              label="Accordion7777"
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
        </ThemeContext.Provider>
      </div>
      <div className="test-case" id="light-theme-default">
        <h4>Accordion Group Controlled without indexActive</h4>
        <ThemeContext.Provider>
          <DxcAccordionGroup padding="small" onActiveChange={onActiveChange2}>
            <DxcAccordionGroup.Accordion label="Accordion5454" padding="medium">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAccordionGroup.Accordion>
            <DxcAccordionGroup.Accordion label="Accordion7777" padding="medium">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAccordionGroup.Accordion>
          </DxcAccordionGroup>
        </ThemeContext.Provider>
      </div>
      <div className="test-case" id="light-theme-default">
        <h4>Disabled Accordion Group</h4>
        <ThemeContext.Provider>
          <DxcAccordionGroup padding="small" onActiveChange={onActiveChange2} disabled={true}>
            <DxcAccordionGroup.Accordion label="Accordion5454" padding="medium">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAccordionGroup.Accordion>
            <DxcAccordionGroup.Accordion label="Accordion7777" padding="medium">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </div>
            </DxcAccordionGroup.Accordion>
          </DxcAccordionGroup>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;

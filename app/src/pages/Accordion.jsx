import React, { useState } from "react";
import { DxcAccordion, ThemeProvider } from "@dxc-technology/halstack-react";
import homeIcon from "../images/home.svg";

const colors = {
  accordion: {
    arrowColor: "#fc0773",
    fontColor: "#fabada",
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
  const [isExpanded, changeIsExpanded] = useState(true);
  const onChange = (newValue) => {
    changeIsExpanded(newValue);
  };

  return (
    <div>
      <div className="test-case" id="light-theme-default">
        <h4>Light theme - Default Accordion</h4>
        <DxcAccordion label="Accordion" onChange={onChange}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </div>

      <div className="test-case" id="icon-before-default">
        <h4>Icon before - Default Accordion</h4>
        <DxcAccordion
          label="Accordion"
          iconPosition="before"
          icon={
            <svg
              x="0px"
              y="0px"
              width="24px"
              height="24px"
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
          onChange={onChange}
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
        <DxcAccordion
          label="Accordion"
          iconPosition="before"
          icon={iconSVG}
          onChange={onChange}
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </div>

      <div className="test-case" id="icon-after-default">
        <h4>Icon after - Default Accordion</h4>
        <DxcAccordion
          label="Accordion"
          iconPosition="after"
          icon={<img src={homeIcon}></img>}
          onChange={onChange}
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </div>

      <div className="test-case" id="disabled-default">
        <h4>Disabled</h4>
        <DxcAccordion
          label="Accordion"
          disabled
          onChange={onChange}
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </div>

      <div className="test-case" id="label-max-size">
        <h4>Max label size single line - Default Accordion</h4>
        <DxcAccordion
          label="Accordion label max size example simgle line accordion accordion accordion accordion accordion accordion accordion accordion accordion accordion accordion accordion accordion accordion ac"
          onChange={onChange}
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </div>

      <div className="test-case" id="label-min-size">
        <h4>Min label size multiline - Default Accordion</h4>
        <DxcAccordion
          label="Accordion label max size example simgle line accordion accordion accordion accordion accordion accordion accordion accordion accordion accordion accordion accordion accordion accordion acc"
          onChange={onChange}
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </div>

      <div className="test-case" id="assistive-text-default">
        <h4>Assistive text - Default Accordion</h4>
        <DxcAccordion
          label="Accordion"
          assistiveText="Assistive text"
          onChange={onChange}
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </div>

      <div className="test-case" id="assistive-text-max-size">
        <h4>Max assistive text size single line - Default Accordion</h4>
        <DxcAccordion
          label="Accordion"
          assistiveText="Assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assi"
          onChange={onChange}
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </div>

      <div className="test-case" id="assistive-text-min-size">
        <h4>Min assistive text size multiline - Default Accordion</h4>
        <DxcAccordion
          label="Accordion"
          assistiveText="Assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assistive text assis"
          onChange={onChange}
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </div>

      <div>
        <h4>Margins</h4>
        <div className="test-case" id="xxsmall-margin">
          <h5>xxsmall margin</h5>
          <DxcAccordion
            label="Accordion"
            margin="xxsmall"
            onChange={onChange}
            padding="medium"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div className="test-case" id="xsmall-margin">
          <h5>xsmall margin</h5>
          <DxcAccordion
            label="Accordion"
            margin="xsmall"
            onChange={onChange}
            padding="medium"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div className="test-case" id="small-margin">
          <h5>Small margin</h5>
          <DxcAccordion
            label="Accordion"
            margin="small"
            onChange={onChange}
            padding="medium"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div className="test-case" id="medium-margin">
          <h5>Medium margin</h5>
          <DxcAccordion
            label="Accordion"
            margin="medium"
            onChange={onChange}
            padding="medium"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div className="test-case" id="large-margin">
          <h5>Large margin</h5>
          <DxcAccordion
            label="Accordion"
            margin="large"
            onChange={onChange}
            padding="medium"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div className="test-case" id="xlarge-margin">
          <h5>xlarge margin</h5>
          <DxcAccordion
            label="Accordion"
            margin="xlarge"
            onChange={onChange}
            padding="medium"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div className="test-case" id="xxlarge-margin">
          <h5>xxlarge margin</h5>
          <DxcAccordion
            label="Accordion"
            margin="xxlarge"
            onChange={onChange}
            padding="medium"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
      </div>

      <div>
        <h4>Paddings</h4>
        <div className="test-case" id="xxsmall-padding">
          <h5>xxsmall padding</h5>
          <DxcAccordion
            label="Accordion"
            isExpanded={isExpanded}
            onChange={onChange}
            padding="xxsmall"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div className="test-case" id="xsmall-padding">
          <h5>xsmall padding</h5>
          <DxcAccordion
            label="Accordion"
            isExpanded={isExpanded}
            onChange={onChange}
            padding="xsmall"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div className="test-case" id="small-padding">
          <h5>Small padding</h5>
          <DxcAccordion
            label="Accordion"
            isExpanded={isExpanded}
            onChange={onChange}
            padding="small"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div className="test-case" id="medium-padding">
          <h5>Medium padding</h5>
          <DxcAccordion
            label="Accordion"
            isExpanded={isExpanded}
            onChange={onChange}
            padding="medium"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div className="test-case" id="large-padding">
          <h5>Large padding</h5>
          <DxcAccordion
            label="Accordion"
            isExpanded={isExpanded}
            onChange={onChange}
            padding="large"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div className="test-case" id="xlarge-padding">
          <h5>xlarge padding</h5>
          <DxcAccordion
            label="Accordion"
            isExpanded={isExpanded}
            onChange={onChange}
            padding="xlarge"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </div>
        <div className="test-case" id="xxlarge-padding">
          <h5>xxlarge padding</h5>
          <DxcAccordion
            label="Accordion"
            isExpanded={isExpanded}
            onChange={onChange}
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

      <div className="test-case" id="expanded-max-size-accordion">
        <h4>Expanded accordion - Max content size single line</h4>
        <DxcAccordion
          label="Accordion"
          isExpanded={isExpanded}
          onChange={onChange}
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacu.
          </div>
        </DxcAccordion>
      </div>

      <div className="test-case" id="expanded-min-size-accordion">
        <h4>Expanded accordion - Min content size multiline</h4>
        <DxcAccordion
          label="Accordion"
          isExpanded={isExpanded}
          onChange={onChange}
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus.
          </div>
        </DxcAccordion>
      </div>

      <div className="test-case" id="nested-accordion">
        <h4>Nested Accordion</h4>
        <DxcAccordion label="Accordion" onChange={onChange} padding="medium">
          <DxcAccordion label="Accordion" padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </DxcAccordion>
      </div>

      <div className="test-case" id="custom-colors">
        <h4>Custom Accordion</h4>
        <ThemeProvider theme={colors}>
          <DxcAccordion label="Accordion" onChange={onChange} padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;

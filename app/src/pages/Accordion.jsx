import React, { useState } from "react";
import { DxcAccordion, ThemeContext } from "@dxc-technology/halstack-react";
import homeIcon from "../images/home.svg";
import facebookIcon from "../images/facebook.svg";

const colors = {
  accordion: {
    arrowColor: "#FABADA",
  },
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
        <DxcAccordion label="Accordion" onChange={onChange} padding="medium">
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
          iconSrc={homeIcon}
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
          iconSrc={homeIcon}
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

      <div className="test-case" id="custom-colors">
        <h4>Custom Accordion</h4>
        <ThemeContext.Provider value={colors}>
          <DxcAccordion label="Accordion" onChange={onChange} padding="medium">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </div>
          </DxcAccordion>
        </ThemeContext.Provider>
      </div>
    </div>
  );
}

export default App;

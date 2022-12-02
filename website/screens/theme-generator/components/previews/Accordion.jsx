import React, { useState } from "react";
import styled from "styled-components";
import {
  DxcAccordion,
  DxcAccordionGroup,
} from "@dxc-technology/halstack-react";

import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";

const Accordion = () => {
  const onChange = () => {};
  const [indexAccordion, setIndexAccordion] = useState(0);

  const onActiveChange = (i) => {
    setIndexAccordion((prevValue) => (prevValue === i ? null : i));
  };

  return (
    <AccordionContainer>
      <Mode text="Default">
        <DxcAccordion
          label="Default Accordion"
          assistiveText="Assistive text"
          onChange={onChange}
          margin="medium"
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </Mode>
      <Mode text="Icon">
        <DxcAccordion
          label="Default Accordion"
          onChange={onChange}
          icon={facebookIcon}
          margin="medium"
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </Mode>
      <Mode text="Disabled">
        <DxcAccordion
          disabled
          icon={facebookIcon}
          label="Default Accordion"
          assistiveText="Assistive text"
          onChange={onChange}
          margin="medium"
          padding="medium"
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </div>
        </DxcAccordion>
      </Mode>
      <Mode text="Accordion Group">
        <DxcAccordionGroup
          indexActive={indexAccordion}
          onActiveChange={onActiveChange}
          margin="medium"
        >
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
      </Mode>
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div``;

export default Accordion;

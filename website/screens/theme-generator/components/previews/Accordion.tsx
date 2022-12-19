import React, { useState } from "react";
import styled from "styled-components";
import {
  DxcAccordion,
  DxcAccordionGroup,
  DxcInset,
} from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import facebookIcon from "../../images/FacebookIcon";
import PreviewContainer from "../PreviewContainer";

const Accordion = () => {
  const [indexAccordion, setIndexAccordion] = useState(0);

  const onActiveChange = (index: number) => {
    setIndexAccordion((currentIndex) => (currentIndex === index ? -1 : index));
  };

  return (
    <PreviewContainer>
      <Mode text="Default">
        <DxcAccordion
          label="Default Accordion"
          assistiveText="Assistive text"
        >
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </DxcInset>
        </DxcAccordion>
      </Mode>
      <Mode text="Icon">
        <DxcAccordion
          label="Default Accordion"
          icon={facebookIcon}
        >
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </DxcInset>
        </DxcAccordion>
      </Mode>
      <Mode text="Disabled">
        <DxcAccordion
          disabled
          icon={facebookIcon}
          label="Default Accordion"
          assistiveText="Assistive text"
        >
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </DxcInset>
        </DxcAccordion>
      </Mode>
      <Mode text="Accordion Group">
        <DxcAccordionGroup
          indexActive={indexAccordion}
          onActiveChange={onActiveChange}
        >
          <DxcAccordionGroup.Accordion label="Accordion1">
            <DxcInset space="2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </DxcInset>
          </DxcAccordionGroup.Accordion>
          <DxcAccordionGroup.Accordion label="Accordion2">
            <DxcInset space="2rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </DxcInset>
          </DxcAccordionGroup.Accordion>
        </DxcAccordionGroup>
      </Mode>
    </PreviewContainer>
  );
};

export default Accordion;

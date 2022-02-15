import React from "react";
import DxcAccordion from "./Accordion";
import DxcHeading from "../heading/Heading";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";

export default {
  title: "Accordion",
  component: DxcAccordion,
};

const folderIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enable-background="new 0 0 24 24"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="currentColor"
  >
    <g>
      <rect fill="none" height="24" width="24" />
    </g>
    <g>
      <path d="M20,6h-8l-2-2H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M16,16h2v-2h-2v-2 h2v-2h-2V8h4v10h-4V16z M16,16h-2v2H4V6h5.17l2,2H14v2h2v2h-2v2h2V16z" />
    </g>
  </svg>
);

export const Chromatic = () => (
  <>
    <Title title="Component anatomy" theme="light" level={2} />
    <ExampleContainer>
      <Title title="With label" theme="light" level={4} />
      <DxcAccordion label="Accordion">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With assistive text" theme="light" level={4} />
      <DxcAccordion label="Accordion" assistiveText="Assistive text">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With icon" theme="light" level={4} />
      <DxcAccordion label="Accordion" assistiveText="Assistive text" icon={folderIcon}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <Title title="States" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <DxcAccordion label="Focused">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcAccordion label="Hovered">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcAccordion label="Active">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcAccordion label="Disabled" assistiveText="Assistive text" disabled>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled with icon" theme="light" level={4} />
      <DxcAccordion label="Disabled" assistiveText="Assistive text" icon={folderIcon} disabled>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <Title title="Paddings" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall padding" theme="light" level={4} />
      <DxcAccordion label="Xxsmall padding" isExpanded padding="xxsmall">
        <div>
          <DxcHeading level={5} text="Content header" margin={{ bottom: "xxsmall" }} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall padding" theme="light" level={4} />
      <DxcAccordion label="Xsmall padding" isExpanded padding="xsmall">
        <div>
          <DxcHeading level={5} text="Content header" margin={{ bottom: "xxsmall" }} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small padding" theme="light" level={4} />
      <DxcAccordion label="Small padding" isExpanded padding="small">
        <div>
          <DxcHeading level={5} text="Content header" margin={{ bottom: "xxsmall" }} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium padding" theme="light" level={4} />
      <DxcAccordion label="Medium padding" isExpanded padding="medium">
        <div>
          <DxcHeading level={5} text="Content header" margin={{ bottom: "xxsmall" }} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large padding" theme="light" level={4} />
      <DxcAccordion label="Large padding" isExpanded padding="large">
        <div>
          <DxcHeading level={5} text="Content header" margin={{ bottom: "xxsmall" }} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge padding" theme="light" level={4} />
      <DxcAccordion label="Xlarge padding" isExpanded padding="xlarge">
        <div>
          <DxcHeading level={5} text="Content header" margin={{ bottom: "xxsmall" }} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge padding" theme="light" level={4} />
      <DxcAccordion label="Xxlarge padding" isExpanded padding="xxlarge">
        <div>
          <DxcHeading level={5} text="Content header" margin={{ bottom: "xxsmall" }} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcAccordion label="Xxsmall margin" margin="xxsmall">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcAccordion label="Xsmall margin" margin="xsmall">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcAccordion label="Small margin" margin="small">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcAccordion label="Medium margin" margin="medium">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcAccordion label="Large margin" margin="large">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcAccordion label="Xlarge margin" margin="xlarge">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcAccordion label="Xxlarge margin" margin="xxlarge">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
  </>
);

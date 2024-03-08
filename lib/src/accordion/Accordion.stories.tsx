import React from "react";
import DxcAccordion from "./Accordion";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { HalstackProvider } from "../HalstackContext";

export default {
  title: "Accordion",
  component: DxcAccordion,
};

const smallIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20">
    <path d="m7.646 18.333-.313-2.625q-.208-.125-.458-.27-.25-.146-.458-.271l-2.438 1.021-2.354-4.063 2.083-1.583V9.458L1.625 7.875l2.354-4.063 2.438 1.021q.208-.125.458-.27.25-.146.458-.271l.313-2.625h4.708l.313 2.625q.208.125.458.271.25.145.458.27l2.438-1.021 2.354 4.063-2.063 1.583v1.084l2.063 1.583-2.354 4.063-2.438-1.021q-.208.125-.458.271-.25.145-.458.27l-.313 2.625ZM10 12.979q1.229 0 2.104-.875T12.979 10q0-1.229-.875-2.104T10 7.021q-1.229 0-2.104.875T7.021 10q0 1.229.875 2.104t2.104.875Zm0-1.75q-.5 0-.865-.364-.364-.365-.364-.865t.364-.865q.365-.364.865-.364t.865.364q.364.365.364.865t-.364.865q-.365.364-.865.364ZM10.021 10Zm-.854 6.583h1.666l.25-2.166q.605-.167 1.167-.5.562-.334 1.021-.792l2.021.854.833-1.375-1.771-1.354q.104-.292.146-.604.042-.313.042-.646 0-.292-.042-.594t-.125-.635l1.771-1.375-.834-1.375-2.02.875q-.48-.479-1.032-.802-.552-.323-1.156-.49l-.271-2.187H9.167l-.271 2.187q-.604.167-1.156.49-.552.323-1.011.781l-2.021-.854-.833 1.375 1.75 1.354q-.083.333-.125.646-.042.312-.042.604t.042.594q.042.302.125.635l-1.75 1.375.833 1.375 2.021-.854q.459.458 1.011.781.552.323 1.156.49Z" />
  </svg>
);

const facebookIcon = (
  <svg
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    width="438.536px"
    height="438.536px"
    viewBox="0 0 438.536 438.536"
    fill="currentColor"
  >
    <g>
      <path
        d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
  C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
  h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
  C438.532,59.576,430.49,40.204,414.41,24.123z M373.155,225.548h-49.963V406.84h-74.802V225.548H210.99V163.02h37.401v-37.402
  c0-26.838,6.283-47.107,18.843-60.813c12.559-13.706,33.304-20.555,62.242-20.555h49.963v62.526h-31.401
  c-10.663,0-17.467,1.853-20.417,5.568c-2.949,3.711-4.428,10.23-4.428,19.558v31.119h56.534L373.155,225.548z"
      />
    </g>
  </svg>
);

const advancedTheme = {
  accordion: {
    backgroundColor: "#000000",
    assistiveTextFontColor: "#ffffff",
    titleLabelFontColor: "#ffffff",
    arrowColor: "#5f249f",
    iconColor: "#5f249f",
  },
};

const opinionatedTheme = {
  accordion: {
    accentColor: "#5f249f",
    titleFontColor: "#000000",
    assistiveTextFontColor: "#666666",
  },
};

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
      <DxcAccordion label="Accordion" assistiveText="Assistive text" icon="folder">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With smaller icon" theme="light" level={4} />
      <DxcAccordion label="Accordion" assistiveText="Assistive text" icon={smallIcon}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </div>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="With bigger icon (SVG)" theme="light" level={4} />
      <DxcAccordion label="Accordion Test" assistiveText="Assistive text" icon={facebookIcon}>
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
      <DxcAccordion label="Disabled" assistiveText="Assistive text" icon="folder" disabled>
        <div>
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
    <Title title="Opinionated theme" theme="light" level={2} />
    <ExampleContainer>
      <Title title="With assistive text and icon" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcAccordion label="Accordion" assistiveText="Assistive text" icon="folder">
          Content
        </DxcAccordion>
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcAccordion label="Hovered">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </DxcAccordion>
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcAccordion label="Active">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </DxcAccordion>
      </HalstackProvider>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <HalstackProvider theme={opinionatedTheme}>
        <DxcAccordion label="Disabled" assistiveText="Assistive text" icon="folder" disabled>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </DxcAccordion>
      </HalstackProvider>
    </ExampleContainer>
  </>
);

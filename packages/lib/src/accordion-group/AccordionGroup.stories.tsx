import DxcAccordionGroup from "./AccordionGroup";
import DxcInset from "../inset/Inset";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Accordion Group",
  component: DxcAccordionGroup,
} as Meta<typeof DxcAccordionGroup>;

const AccordionGroup = () => (
  <>
    <Title title="States" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Default" theme="light" level={4} />
      <DxcAccordionGroup>
        <DxcAccordionGroup.Accordion label="Accordion1" assistiveText="Assistive text">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion2" assistiveText="Assistive text">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion3" assistiveText="Assistive text">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Expanded" theme="light" level={4} />
      <DxcAccordionGroup defaultIndexActive={1}>
        <DxcAccordionGroup.Accordion label="Accordion4">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion5">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion6">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcAccordionGroup disabled>
        <DxcAccordionGroup.Accordion label="Accordion7">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion8">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <DxcAccordionGroup defaultIndexActive={2}>
        <DxcAccordionGroup.Accordion label="Accordion9">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion10">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion11">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall" theme="light" level={4} />
      <DxcAccordionGroup margin="xxsmall">
        <DxcAccordionGroup.Accordion label="Accordion12">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion13">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall" theme="light" level={4} />
      <DxcAccordionGroup margin="xsmall">
        <DxcAccordionGroup.Accordion label="Accordion14">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion15">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small" theme="light" level={4} />
      <DxcAccordionGroup margin="small">
        <DxcAccordionGroup.Accordion label="Accordion16">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion17">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium" theme="light" level={4} />
      <DxcAccordionGroup margin="medium">
        <DxcAccordionGroup.Accordion label="Accordion18">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion19">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large" theme="light" level={4} />
      <DxcAccordionGroup margin="large">
        <DxcAccordionGroup.Accordion label="Accordion20">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion21">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge" theme="light" level={4} />
      <DxcAccordionGroup margin="xlarge">
        <DxcAccordionGroup.Accordion label="Accordion22">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion23">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge" theme="light" level={4} />
      <DxcAccordionGroup margin="xxlarge">
        <DxcAccordionGroup.Accordion label="Accordion24">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
        <DxcAccordionGroup.Accordion label="Accordion25">
          <DxcInset space="2rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordionGroup.Accordion>
      </DxcAccordionGroup>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcAccordionGroup>;

export const Chromatic: Story = {
  render: AccordionGroup,
};

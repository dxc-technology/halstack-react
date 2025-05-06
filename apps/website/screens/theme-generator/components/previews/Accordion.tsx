import { DxcAccordion, DxcBadge, DxcInset, DxcStatusLight } from "@dxc-technology/halstack-react";
import Mode from "../Mode";
import PreviewContainer from "./PreviewContainer";

const Accordion = () => (
  <PreviewContainer>
    <Mode text="Default">
      <DxcAccordion>
        <DxcAccordion.AccordionItem label="How to edit your profile?">
          <DxcInset space="1.5rem">To edit your profile you need to go to Settings and click on Profile.</DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </Mode>
    <Mode text="Icon">
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="How to edit your profile?"
          icon="filled_info"
          assistiveText="Ref - 123645"
          subLabel="Jan, 23 2025"
        >
          <DxcInset space="1.5rem">To edit your profile you need to go to Settings and click on Profile.</DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </Mode>
    <Mode text="Badge & Status light">
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="GET request"
          subLabel="Jan, 20 2025"
          badge={{ position: "before", element: <DxcBadge label="GET" color="green" /> }}
          statusLight={<DxcStatusLight label="Active" mode="success" />}
        >
          <DxcInset space="1.5rem">To edit your profile you need to go to Settings and click on Profile.</DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </Mode>
    <Mode text="Disabled accordions">
      <DxcAccordion>
        <DxcAccordion>
          <DxcAccordion.AccordionItem
            label="Assure Claims"
            subLabel="Jan, 09 2025"
            assistiveText="Ref - 1236554546"
            icon="heart_plus"
            disabled
          >
            <DxcInset space="1.5rem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </DxcInset>
          </DxcAccordion.AccordionItem>
        </DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Assure Claims"
          subLabel="Jan, 09 2025"
          disabled
          badge={{ position: "before", element: <DxcBadge label="Enterprise" color="green" /> }}
          statusLight={<DxcStatusLight label="Active" mode="success" />}
        >
          <DxcInset space="1.5rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </Mode>
    <Mode text="Group of accordions">
      <DxcAccordion defaultIndexActive={[0, 2]}>
        <DxcAccordion.AccordionItem
          label="Find a person"
          badge={{ position: "before", element: <DxcBadge label="GET" color="green" /> }}
          statusLight={<DxcStatusLight label="Active" mode="success" />}
        >
          <DxcInset space="1.5rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem
          label="Create a person"
          assistiveText="Provide all required info"
          badge={{ position: "before", element: <DxcBadge label="POST" color="blue" /> }}
        >
          <DxcInset space="1.5rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem
          label="Find interactions"
          badge={{ position: "before", element: <DxcBadge label="OPTIONS" color="yellow" /> }}
          statusLight={<DxcStatusLight label="Active" mode="warning" />}
        >
          <DxcInset space="1.5rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem
          label="Delete a person"
          assistiveText="Deletion will be permanent"
          icon="delete"
          badge={{ position: "before", element: <DxcBadge label="DELETE" /> }}
        >
          <DxcInset space="1.5rem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </Mode>
  </PreviewContainer>
);

export default Accordion;

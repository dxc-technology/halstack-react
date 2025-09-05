import DxcAccordion from "./Accordion";
import Title from "../../.storybook/components/Title";
import ExampleContainer from "../../.storybook/components/ExampleContainer";
import { Meta, StoryObj } from "@storybook/react";
import DxcBadge from "../badge/Badge";
import DxcStatusLight from "../status-light/StatusLight";
import DxcInset from "../inset/Inset";

export default {
  title: "Accordion",
  component: DxcAccordion,
} as Meta<typeof DxcAccordion>;

const smallIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20" width="20">
    <path d="m7.646 18.333-.313-2.625q-.208-.125-.458-.27-.25-.146-.458-.271l-2.438 1.021-2.354-4.063 2.083-1.583V9.458L1.625 7.875l2.354-4.063 2.438 1.021q.208-.125.458-.27.25-.146.458-.271l.313-2.625h4.708l.313 2.625q.208.125.458.271.25.145.458.27l2.438-1.021 2.354 4.063-2.063 1.583v1.084l2.063 1.583-2.354 4.063-2.438-1.021q-.208.125-.458.271-.25.145-.458.27l-.313 2.625ZM10 12.979q1.229 0 2.104-.875T12.979 10q0-1.229-.875-2.104T10 7.021q-1.229 0-2.104.875T7.021 10q0 1.229.875 2.104t2.104.875Zm0-1.75q-.5 0-.865-.364-.364-.365-.364-.865t.364-.865q.365-.364.865-.364t.865.364q.364.365.364.865t-.364.865q-.365.364-.865.364ZM10.021 10Zm-.854 6.583h1.666l.25-2.166q.605-.167 1.167-.5.562-.334 1.021-.792l2.021.854.833-1.375-1.771-1.354q.104-.292.146-.604.042-.313.042-.646 0-.292-.042-.594t-.125-.635l1.771-1.375-.834-1.375-2.02.875q-.48-.479-1.032-.802-.552-.323-1.156-.49l-.271-2.187H9.167l-.271 2.187q-.604.167-1.156.49-.552.323-1.011.781l-2.021-.854-.833 1.375 1.75 1.354q-.083.333-.125.646-.042.312-.042.604t.042.594q.042.302.125.635l-1.75 1.375.833 1.375 2.021-.854q.459.458 1.011.781.552.323 1.156.49Z" />
  </svg>
);

const facebookIcon = (
  <svg
    version="1.1"
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

const Accordion = () => (
  <>
    <Title title="Accordion anatomy" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Label" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem label="Assure Claims">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Label and sublabel" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem label="Assure Claims" subLabel="Jan, 09 2025">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Label and assistive text" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem label="Assure Claims" assistiveText="Ref — 1236554546">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </div>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Label, subLabel and assistive text" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem label="Assure Claims" subLabel="Jan, 09 2025" assistiveText="Ref — 1236554546">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Icon and label" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem label="Assure Claims" icon="heart_plus">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Icon, label and sublabel" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem label="Assure Claims" subLabel="Jan, 09 2025" icon="heart_plus">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Icon, label, sublabel and assistive text" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Assure Claims"
          subLabel="Jan, 09 2025"
          assistiveText="Ref — 1236554546"
          icon="heart_plus"
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Label, sublabel, assistive text and badge (before)" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Assure Claims"
          subLabel="Jan, 09 2025"
          assistiveText="Ref — 1236554546"
          badge={{ position: "before", element: <DxcBadge label="Enterprise" icon="home" /> }}
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Label, sublabel and badge (after)" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Assure Claims"
          subLabel="Jan, 09 2025"
          badge={{ position: "after", element: <DxcBadge label="Enterprise" /> }}
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Icon, label, sublabel and status light" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Assure Claims"
          subLabel="Jan, 09 2025"
          icon="heart_plus"
          statusLight={<DxcStatusLight label="Active" />}
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Label, sublabel, badge (before) and status light" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Assure Claims"
          subLabel="Jan, 09 2025"
          badge={{ position: "before", element: <DxcBadge label="Enterprise" /> }}
          statusLight={<DxcStatusLight label="Active" />}
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Smaller icon" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem label="Assure Claims" assistiveText="Ref — 1236554546" icon={smallIcon}>
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Bigger icon (SVG)" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem label="Assure Claims" assistiveText="Ref — 1236554546" icon={facebookIcon}>
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Group of accordions (independent false)" theme="light" level={4} />
      <DxcAccordion defaultIndexActive={[0, 2]}>
        <DxcAccordion.AccordionItem label="Accordion1" assistiveText="Assistive text">
          <DxcInset space="var(--spacing-padding-xl)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem label="Accordion2" assistiveText="Assistive text">
          <DxcInset space="var(--spacing-padding-xl)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem label="Accordion3" assistiveText="Assistive text">
          <DxcInset space="var(--spacing-padding-xl)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Group of accordions (independent true)" theme="light" level={4} />
      <DxcAccordion independent defaultIndexActive={0}>
        <DxcAccordion.AccordionItem
          label="Find a person"
          badge={{ position: "before", element: <DxcBadge label="GET" color="green" /> }}
          statusLight={<DxcStatusLight label="Active" mode="success" />}
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem
          label="Create a person"
          assistiveText="Provide all required info"
          badge={{ position: "before", element: <DxcBadge label="POST" color="blue" /> }}
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem
          label="Find interactions"
          badge={{ position: "before", element: <DxcBadge label="OPTIONS" color="yellow" /> }}
          statusLight={<DxcStatusLight label="Active" mode="warning" />}
        >
          <DxcInset space="var(--spacing-padding-l)">
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
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Long badge, long label, long sublabel and long assistive text" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure ClaimsAssure Claims"
          subLabel="Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025"
          assistiveText="Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text "
          badge={{
            position: "before",
            element: (
              <DxcBadge label="Long long long long long long long long long longlong long long long long long long longlong long long long long long long long text" />
            ),
          }}
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Long label, long sublabel" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Assure Claims Assure Claims Assure Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims "
          subLabel="Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025"
          icon="heart_plus"
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Long label, long sublabel and short assistive text" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Assure Claims Assure Claims Assure Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims Assure Claims "
          subLabel="Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025 Jan, 09 2025"
          assistiveText="Assistive text Assistive text"
          icon="heart_plus"
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Sublabel longer than label" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Bounce Rate"
          subLabel="Mon, May 19, 3:17 PM"
          badge={{ position: "after", element: <DxcBadge label="Resolved" icon="check_circle" color="green" /> }}
        >
          <DxcInset space="var(--spacing-padding-l)">
            To edit your profile you need to go to Settings and click on Profile.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Short label, long sublabel and long assistive text" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Assure Claim"
          subLabel="Jan, 09 2025"
          assistiveText="Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text Assistive text"
          icon="heart_plus"
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <Title title="States" theme="light" level={2} />
    <ExampleContainer pseudoState="pseudo-focus">
      <Title title="Focused" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem label="Assure Claims" subLabel="Jan, 09 2025" assistiveText="Ref — 1236554546">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-hover">
      <Title title="Hovered" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem label="Assure Claims" subLabel="Jan, 09 2025" assistiveText="Ref — 1236554546">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer pseudoState="pseudo-active">
      <Title title="Active" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem label="Assure Claims" subLabel="Jan, 09 2025" assistiveText="Ref — 1236554546">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Disabled" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Assure Claims"
          subLabel="Jan, 09 2025"
          assistiveText="Ref — 1236554546"
          icon="heart_plus"
          disabled
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Assure Claims"
          subLabel="Jan, 09 2025"
          disabled
          badge={{ position: "before", element: <DxcBadge label="Enterprise" color="green" /> }}
          statusLight={<DxcStatusLight label="Active" mode="success" />}
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Assure Claims"
          subLabel="Jan, 09 2025"
          icon="heart_plus"
          disabled
          badge={{ position: "after", element: <DxcBadge label="Enterprise" color="green" /> }}
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Group of accordions" theme="light" level={4} />
      <DxcAccordion>
        <DxcAccordion.AccordionItem
          label="Find a person"
          badge={{ position: "before", element: <DxcBadge label="GET" color="green" /> }}
          statusLight={<DxcStatusLight label="Active" mode="success" />}
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem
          label="Create a person"
          assistiveText="Provide all required info"
          badge={{ position: "before", element: <DxcBadge label="POST" color="blue" /> }}
        >
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
        <DxcAccordion.AccordionItem
          label="Find interactions"
          badge={{ position: "before", element: <DxcBadge label="OPTIONS" color="yellow" /> }}
          statusLight={<DxcStatusLight label="Active" mode="warning" />}
        >
          <DxcInset space="var(--spacing-padding-l)">
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
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <Title title="Margins" theme="light" level={2} />
    <ExampleContainer>
      <Title title="Xxsmall margin" theme="light" level={4} />
      <DxcAccordion margin="xxsmall">
        <DxcAccordion.AccordionItem label="Assure Claims">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xsmall margin" theme="light" level={4} />
      <DxcAccordion margin="xsmall">
        <DxcAccordion.AccordionItem label="Assure Claims">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Small margin" theme="light" level={4} />
      <DxcAccordion margin="small">
        <DxcAccordion.AccordionItem label="Assure Claims">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Medium margin" theme="light" level={4} />
      <DxcAccordion margin="medium">
        <DxcAccordion.AccordionItem label="Assure Claims">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Large margin" theme="light" level={4} />
      <DxcAccordion margin="large">
        <DxcAccordion.AccordionItem label="Assure Claims">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xlarge margin" theme="light" level={4} />
      <DxcAccordion margin="xlarge">
        <DxcAccordion.AccordionItem label="Assure Claims">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
    <ExampleContainer>
      <Title title="Xxlarge margin" theme="light" level={4} />
      <DxcAccordion margin="xxlarge">
        <DxcAccordion.AccordionItem label="Assure Claims">
          <DxcInset space="var(--spacing-padding-l)">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </DxcInset>
        </DxcAccordion.AccordionItem>
      </DxcAccordion>
    </ExampleContainer>
  </>
);

type Story = StoryObj<typeof DxcAccordion>;

export const Chromatic: Story = {
  render: Accordion,
};

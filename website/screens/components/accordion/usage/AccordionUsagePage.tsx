import { DxcList, DxcFlex, DxcText } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import Example from "@/common/example/Example";
import accordionPlacement from "./images/accordion_placement.png";
import accordionAlignment from "./images/accordion_alignment.png";
import accordionTriggers from "./images/accordion_triggers.png";
import accordionContent from "./images/accordion_content.png";
import accordionMultiExpand from "./images/accordion_multi_expand.png";
import accordionGroup from "./examples/accordionGroup";
import assistiveText from "./examples/assistiveText";
import behaviorAndInteraction from "./examples/behaviorAndInteraction";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcText as="p">
        The accordion component delivers large amounts of content in a small
        space through progressive disclosure.
      </DxcText>
    ),
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcList>
            <DxcText>Displaying and grouping additional information.</DxcText>
            <DxcText>
              To shorten pages and reduce scrolling when content is not crucial
              to read in full.
            </DxcText>
            <DxcText>
              Adding granular control over the information on a given page.
            </DxcText>
          </DxcList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcList>
            <DxcText>
              When most of the content on the page is needed to answer user
              questions.
            </DxcText>
            <DxcText>
              To display a list of clickable options, dropdown should be used
              instead.
            </DxcText>
            <DxcText>
              Displaying critical system information or a primary action to be
              taken on the page. (for example: alerts, confirmation or
              cancellation buttons).
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
  {
    title: "Placement and alignment",
    subSections: [
      {
        title: "Placement",
        content: (
          <>
            <DxcText as="p">
              Accordions can be placed with main page content or placed inside
              of a container such as a side panel or tile.
            </DxcText>
            <Figure caption="Component placement examples">
              <Image
                src={accordionPlacement}
                alt="Component placement examples"
              />
            </Figure>
          </>
        ),
      },
      {
        title: "Alignment",
        content: (
          <>
            <DxcText as="p">
              By default the chevron icon is placed on the end side of the
              header. This allows for the title on the start side to align with
              other type elements in the layout.
            </DxcText>
            <Image
              src={accordionAlignment}
              alt="Component elements alignment"
            />
            <DxcText as="p">
              <em>
                <strong>Left</strong>. Place chevron icon at the end of the
                accordion header.
              </em>
            </DxcText>
            <DxcText as="p">
              <em>
                <strong>Right</strong>. Don’t place caret icon on the left.
              </em>
            </DxcText>
          </>
        ),
      },
    ],
  },
  {
    title: "Behavior and interaction",
    content: (
      <>
        <Example example={behaviorAndInteraction} />
        <DxcText as="p">
          The accordion component has two main states: collapsed and expanded.
          The chevron icon at the end of the accordion indicates which state the
          accordion is in. Accordions begin by default in the collapsed state
          with all content panels closed. Starting in a collapsed state gives
          the user a high level overview of the available information.
        </DxcText>
        <DxcList>
          <DxcText>
            Trigger collapsed and expanded states when clicking on either the
            header or icon.
          </DxcText>
          <DxcText>
            Use icons and animation to easily reflect collapsed and expanded
            states.
          </DxcText>
          <DxcFlex direction="column" gap="0.5rem">
            <DxcText>
              Use a chevron icon to indicate the expand/collapse behavior.
            </DxcText>
            <DxcList type="circle">
              <DxcText>
                When the panel expands, the chevron icon rotates 180 degrees
                counterclockwise.
              </DxcText>
              <DxcText>
                When the panel collapses, the chevron icon rotates 180 degrees
                clockwise.
              </DxcText>
            </DxcList>
          </DxcFlex>
        </DxcList>
        <Image src={accordionTriggers} alt="Accordion trigger usage" />
        <DxcText as="p">
          <em>
            <strong>Left</strong>. Trigger collapsed and expanded states when
            clicking on either the header or icon.
          </em>
        </DxcText>
        <DxcText as="p">
          <em>
            <strong>Right</strong>. Leave the header without caret or use a
            button to trigger the expand/collapse action.
          </em>
        </DxcText>
      </>
    ),
    subSections: [
      {
        title: "Mobile",
        content: (
          <>
            <DxcText as="p">
              In small devices, extremely long pages are detrimental to the user
              experience. Collapsing information minimizes excessive scrolling
              and gives an overview of the structure and content available on
              the page.
            </DxcText>
            <DxcList>
              <DxcText>
                In mobile use 100% of the available screen width.
              </DxcText>
            </DxcList>
          </>
        ),
      },
    ],
  },
  {
    title: "Accordion group",
    content: (
      <>
        <DxcText as="p">
          Accordion headers are stacked vertically and different hierarchy
          levels are allowed.
        </DxcText>
        <Example example={accordionGroup} />
        <DxcText as="p">
          <em>
            The expandable section of an accordion group can contain different
            types of plain information or clickable components.
          </em>
        </DxcText>
        <DxcText as="p">
          <Figure caption="Component placement examples">
            <Image src={accordionMultiExpand} alt="image" />
          </Figure>
        </DxcText>
        <DxcText as="p">
          <em>
            When one accordion panel is expanded, the rest of the group should
            be collapsed.
          </em>
        </DxcText>
      </>
    ),
  },
  {
    title: "Content",
    content: (
      <>
        <DxcText as="p">
          The accordion component can contain other components, images, tables,
          and every custom feature that can be supported inside the element
          container.
        </DxcText>
        <Image src={accordionContent} alt="Nesting and icon usage examples" />
        <DxcText as="p">
          <em>
            <strong>Left</strong>. Nesting is allowed. Use in parent accordion
            Open Sans Semibold.
          </em>
        </DxcText>
        <DxcText as="p">
          <em>
            <strong>Right</strong>. Icons can be used as a complement to the
            header label.
          </em>
        </DxcText>
      </>
    ),
  },
  {
    title: "Assistive text",
    content: (
      <>
        <DxcText as="p">
          Assistive text can be shown at the end of the accordion header when
          needed.
        </DxcText>
        <DxcList>
          <DxcText>Icons and images can not be used.</DxcText>
          <DxcText>
            Only add a assistive text when there is plenty space in the
            accordion header, in mobile devices is not displayed.
          </DxcText>
          <DxcText>
            Try always to use a descriptive header so is no necessity to add
            extra information.
          </DxcText>
          <DxcText>
            Assistive text content will be truncated 48px before reaching the
            accordion title. Title display has priority when space is limited.
          </DxcText>
        </DxcList>
        <Example example={assistiveText} />
      </>
    ),
  },
];

const AccordionUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/accordion/usage/AccordionUsagePage.tsx" />
    </DxcFlex>
  );
};

export default AccordionUsagePage;

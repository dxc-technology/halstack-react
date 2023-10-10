import {
  DxcBulletedList,
  DxcFlex,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
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
      <DxcParagraph>
        The accordion component delivers large amounts of content in a small
        space through progressive disclosure.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Displaying and grouping additional information.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              To shorten pages and reduce scrolling when content is not crucial
              to read in full.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Adding granular control over the information on a given page.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              When most of the content on the page is needed to answer user
              questions.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              To display a list of clickable options, dropdown should be used
              instead.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Displaying critical system information or a primary action to be
              taken on the page. (for example: alerts, confirmation or
              cancellation buttons).
            </DxcBulletedList.Item>
          </DxcBulletedList>
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
            <DxcParagraph>
              Accordions can be placed with main page content or placed inside
              of a container such as a side panel or tile.
            </DxcParagraph>
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
            <DxcParagraph>
              By default the chevron icon is placed on the end side of the
              header. This allows for the title on the start side to align with
              other type elements in the layout.
            </DxcParagraph>
            <Image
              src={accordionAlignment}
              alt="Component elements alignment"
            />
            <DxcParagraph>
              <em>
                <strong>Left</strong>. Place chevron icon at the end of the
                accordion header.
              </em>
            </DxcParagraph>
            <DxcParagraph>
              <em>
                <strong>Right</strong>. Don’t place caret icon on the left.
              </em>
            </DxcParagraph>
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
        <DxcParagraph>
          The accordion component has two main states: collapsed and expanded.
          The chevron icon at the end of the accordion indicates which state the
          accordion is in. Accordions begin by default in the collapsed state
          with all content panels closed. Starting in a collapsed state gives
          the user a high level overview of the available information.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Trigger collapsed and expanded states when clicking on either the
            header or icon.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Use icons and animation to easily reflect collapsed and expanded
            states.
          </DxcBulletedList.Item>
          <DxcFlex direction="column" gap="0.5rem">
            <DxcBulletedList.Item>
              Use a chevron icon to indicate the expand/collapse behavior.
            </DxcBulletedList.Item>
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>
                When the panel expands, the chevron icon rotates 180 degrees
                counterclockwise.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                When the panel collapses, the chevron icon rotates 180 degrees
                clockwise.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcFlex>
        </DxcBulletedList>
        <Image src={accordionTriggers} alt="Accordion trigger usage" />
        <DxcParagraph>
          <em>
            <strong>Left</strong>. Trigger collapsed and expanded states when
            clicking on either the header or icon.
          </em>
        </DxcParagraph>
        <DxcParagraph>
          <em>
            <strong>Right</strong>. Leave the header without caret or use a
            button to trigger the expand/collapse action.
          </em>
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Mobile",
        content: (
          <>
            <DxcParagraph>
              In small devices, extremely long pages are detrimental to the user
              experience. Collapsing information minimizes excessive scrolling
              and gives an overview of the structure and content available on
              the page.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                In mobile use 100% of the available screen width.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Accordion group",
    content: (
      <>
        <DxcParagraph>
          Accordion headers are stacked vertically and different hierarchy
          levels are allowed.
        </DxcParagraph>
        <Example example={accordionGroup} />
        <DxcParagraph>
          <em>
            The expandable section of an accordion group can contain different
            types of plain information or clickable components.
          </em>
        </DxcParagraph>
        <DxcParagraph>
          <Figure caption="Component placement examples">
            <Image
              src={accordionMultiExpand}
              alt="Component placement examples"
            />
          </Figure>
        </DxcParagraph>
        <DxcParagraph>
          <em>
            When one accordion panel is expanded, the rest of the group should
            be collapsed.
          </em>
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Content",
    content: (
      <>
        <DxcParagraph>
          The accordion component can contain other components, images, tables,
          and every custom feature that can be supported inside the element
          container.
        </DxcParagraph>
        <Image src={accordionContent} alt="Nesting and icon usage examples" />
        <DxcParagraph>
          <em>
            <strong>Left</strong>. Nesting is allowed. Use in parent accordion
            Open Sans Semibold.
          </em>
        </DxcParagraph>
        <DxcParagraph>
          <em>
            <strong>Right</strong>. Icons can be used as a complement to the
            header label.
          </em>
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Assistive text",
    content: (
      <>
        <DxcParagraph>
          Assistive text can be shown at the end of the accordion header when
          needed.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Icons and images can not be used.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Only add a assistive text when there is plenty space in the
            accordion header, in mobile devices is not displayed.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Try always to use a descriptive header so is no necessity to add
            extra information.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Assistive text content will be truncated 48px before reaching the
            accordion title. Title display has priority when space is limited.
          </DxcBulletedList.Item>
        </DxcBulletedList>
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

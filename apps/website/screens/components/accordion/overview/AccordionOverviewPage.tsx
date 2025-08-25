import { DxcBulletedList, DxcFlex, DxcLink, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import anatomy from "./images/accordion_anatomy.png";
import Example from "@/common/example/Example";
import basicExample from "./examples/basicExample";
import nestedExample from "./examples/nestedExample";
import placement from "./images/accordion_placement.png";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The accordion component is designed to present large amounts of content in a small space by leveraging
        progressive disclosure. It helps improve the user experience by breaking down information into manageable
        sections, allowing users to focus only on what they need.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Accordion's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Header:</strong> serves as the trigger for expanding or collapsing the section. It acts as a summary
            of the content, allowing users to decide if they want to interact with it.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Content area:</strong> the expanded section where detailed information or functionality resides.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Title:</strong> a concise and descriptive label that summarizes the content of the accordion
            section. It helps users understand what type of information they can expect to find inside.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Chevron icon</strong> <em>(Expand/collapse)</em>: A visual indicator of the accordion's current
            state (expanded or collapsed). It provides an affordance for interaction and ensures users can toggle the
            accordion intuitively.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Left secondary element</strong> <em>(Optional)</em>: Provides additional context or enhances the
            user experience. Only <strong>one</strong> of the following can be used per accordion section to avoid
            visual clutter:
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Icon:</strong> Adds visual context or aids recognition by representing the content type or
                purpose of the section.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Badge:</strong> Displays supplemental information, such as a notification count or status, to
                give users a quick overview of the section.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Sublabel</strong> <em>(Optional)</em>: Offers additional context or instruction.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Right secondary element</strong> <em>(Optional)</em>: Also limited to <strong>one</strong> element
            per section. May include:
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Helper text:</strong> Offers supporting guidance or content summary.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Status light:</strong> A visual status indicator (e.g., completed, in progress, error).
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Badge:</strong> Similar to the left badge, positioned right for layout flexibility.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <Example example={basicExample} />
      </>
    ),
  },
  {
    title: "Using accordions",
    subSections: [
      {
        title: "Behavior and interaction",
        content: (
          <DxcParagraph>
            The accordion component has two main states: collapsed and expanded. The chevron icon at the end of the
            accordion indicates which state the accordion is in. Accordions begin by default in the collapsed state with
            all content panels closed. Starting in a collapsed state gives the user a high level overview of the
            available information.
          </DxcParagraph>
        ),
      },
      {
        title: "Content area",
        content: (
          <>
            <DxcParagraph>
              The content area can contain other components, images, tables, and every custom feature that can be
              supported inside the element container.
            </DxcParagraph>
            <Example example={nestedExample} />
          </>
        ),
      },
      {
        title: "Allowing multiple sections open vs single-open behavior",
        content: (
          <>
            <DxcParagraph>
              The accordion component can be configured to allow either <strong>multiple sections</strong> to be open
              simultaneously or limit the user to a <strong>single-open</strong> section at a time. Each approach has
              specific use cases, but it's important to prioritise user needs and content hierarchy when deciding which
              behavior to implement.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Allow multiple sections open</strong>
                <DxcParagraph>
                  This approach gives users full control over the visibility of content, allowing them to open or
                  collapse multiple sections at the same time. It's particularly useful when:
                </DxcParagraph>
                <DxcBulletedList type="circle">
                  <DxcBulletedList.Item>
                    Users need to compare or reference information across different sections simultaneously.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    The content in each section is independent and doesn't require strict linear navigation.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    There is enough vertical space to accommodate multiple expanded sections without overwhelming the
                    layout.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Single-open behavior</strong>
                <DxcParagraph>
                  Some implementations restrict the accordion to allow only one section to be open at a time. When a
                  user expands a new section, the previously expanded section collapses automatically. This pattern is
                  suitable when:
                </DxcParagraph>
                <DxcBulletedList type="circle">
                  <DxcBulletedList.Item>
                    The content is closely related or mutually exclusive, making it logical to view only one section at
                    a time.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    Vertical space is limited, and having multiple sections open could cause usability or layout issues.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    A simplified and more guided user experience is desired, such as in wizards or step-by-step
                    processes.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Placement and alignment",
        content: (
          <>
            <DxcParagraph>
              Accordions can be placed with main page content or placed inside of a container such as a side panel or
              tile.
            </DxcParagraph>
            <Image src={placement} alt="Accordion's placement" />
          </>
        ),
      },
    ],
  },
  {
    title: "Responsive behavior",
    content: (
      <>
        <DxcParagraph>
          In small devices, extremely long pages are detrimental to the user experience. Collapsing information
          minimises excessive scrolling and gives an overview of the structure and content available on the page.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>In mobile use 100% of the available screen width</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcParagraph>
        To ensure a clean, efficient, and user-friendly experience, follow these best practices when designing and
        implementing accordion components:
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Use accordions to manage space and structure",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Apply accordions when you need to organize large or secondary content into collapsible sections.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              They are particularly useful for FAQs, optional content, or detailed information nested under high-level
              summaries.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Collapsing content helps reduce scrolling and offers users control over what they choose to engage with.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Keep headers simple and informative",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Each accordion header must include a clear, concise title that describes the content inside.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use a sublabel only when additional context is necessary —it should not overpower the title.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Avoid hiding essential or primary information inside an accordion panel.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Limit secondary elements for clarity",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use <strong>only one secondary element per side</strong> of the header (left and right) to avoid clutter.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Choose either an icon or a badge for the left side, and a helper text, badge, or status light for the
              right side —never more than one per side.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Avoid placing two elements of the same type in one header (e.g., two badges), as this reduces scannability
              and can confuse users.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Respect visual hierarchy and semantic meaning",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Always prioritize the visibility of mandatory elements like the title over optional elements.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              If both a badge and a status light are present, avoid applying semantic colors (e.g., red, green) to the
              badge to prevent visual conflict with the status indicator.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Maintain consistency in layout and alignment to support content scanning, especially when multiple
              accordion sections are used together.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Choose the appropriate expand behavior",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use <strong>single-open behavior</strong> when content is interdependent, linear, or when space is
              limited.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use <strong>multi-open behavior</strong> when content is independent or when users may need to view
              multiple sections at once.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Consider the context of use and user goals when deciding which interaction pattern is most appropriate.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Design for mobile and accessibility",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Accordions should span the full width of the screen on smaller devices for easier interaction.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Ensure all interactive elements are large enough to be tapped comfortably on touchscreens.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const AccordionOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/accordion/overview/AccordionOverviewPage.tsx" />
  </DxcFlex>
);

export default AccordionOverviewPage;

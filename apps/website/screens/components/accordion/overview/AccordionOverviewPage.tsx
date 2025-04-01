import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import accordionMainParts from "./images/accordion_main_parts.png";
import accordionElements from "./images/accordion_elements.png";
import accordionExamples from "./images/accordion_examples.png";
import accordionContent from "./images/accordion_content.png";
import accordionPlacement from "./images/accordion_placement.png";

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
    subSections: [
      {
        title: "Main parts",
        content: (
          <>
            <DxcParagraph>Each accordion section consists of two main parts:</DxcParagraph>
            <Figure caption="Main parts">
              <Image src={accordionMainParts} alt="Main parts" />
            </Figure>
            <DxcBulletedList type="number">
              <DxcBulletedList.Item>
                <strong>Header</strong>: Serves as the trigger for expanding or collapsing the section. It acts as a
                summary of the content, allowing users to decide if they want to interact with it.{" "}
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Content area</strong>: The expanded section where detailed information or functionality
                resides.{" "}
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
        subSections: [
          {
            title: "Header layout, primary and secondary elements",
            content: (
              <>
                <DxcParagraph>
                  The accordion header is divided into two sections: left and right, each of which can contain different
                  UI elements. These elements are categorised as primary or secondary, based on their importance and
                  role within the accordion's functionality.
                </DxcParagraph>
                <Image src={accordionElements} alt="Accordion elements" />
              </>
            ),
            subSections: [
              {
                title: "Primary Elements",
                content: (
                  <>
                    <DxcParagraph>
                      The primary elements are <strong>mandatory</strong> and provide the basic functionality of the
                      accordion. These ensure the component is functional and intuitive for users:
                    </DxcParagraph>
                    <DxcBulletedList>
                      <DxcBulletedList.Item>
                        <strong>Title</strong>: A concise and descriptive label that summarises the content of the
                        accordion section. It helps users understand what type of information they can expect to find
                        inside.
                      </DxcBulletedList.Item>
                      <DxcBulletedList.Item>
                        <strong>Chevron Icon</strong>: A visual indicator of the accordion’s current state (expanded or
                        collapsed). It provides an affordance for interaction and ensures users can toggle the accordion
                        intuitively.
                      </DxcBulletedList.Item>
                    </DxcBulletedList>
                    <DxcParagraph>
                      Without these elements, the accordion cannot effectively communicate its purpose or provide a
                      clear interaction model.
                    </DxcParagraph>
                  </>
                ),
              },
              {
                title: "Secondary Elements",
                content: (
                  <>
                    <DxcParagraph>
                      The secondary elements are <strong>optional</strong> and provide additional context or enhance the
                      user experience. While not essential for the accordion's functionality, they add useful details or
                      visual hierarchy.
                    </DxcParagraph>
                    <DxcBulletedList type="number">
                      <DxcBulletedList.Item>
                        Left secondary elements:
                        <DxcBulletedList type="circle">
                          <DxcBulletedList.Item>
                            <strong>Icon</strong>: Adds visual context or aids recognition by representing the content
                            type or purpose of the section.
                          </DxcBulletedList.Item>
                          <DxcBulletedList.Item>
                            <strong>Badge</strong>: Displays supplemental information, such as a notification count or
                            status, to give users a quick overview of the section.
                          </DxcBulletedList.Item>
                        </DxcBulletedList>
                      </DxcBulletedList.Item>
                      <DxcBulletedList.Item>
                        Right secondary elements:
                        <DxcBulletedList type="circle">
                          <DxcBulletedList.Item>
                            <strong>Helper text</strong>: Provides additional context, such as brief instructions or a
                            summary of the content within the section.
                          </DxcBulletedList.Item>
                          <DxcBulletedList.Item>
                            <strong>Status light</strong>: Displays a visual indicator of the section’s status (e.g.,
                            completed, in progress, or error).
                          </DxcBulletedList.Item>
                          <DxcBulletedList.Item>
                            <strong>Badge</strong>: Similar to the left-side badge, but placed on the right for better
                            alignment in specific layouts.
                          </DxcBulletedList.Item>
                        </DxcBulletedList>
                      </DxcBulletedList.Item>
                    </DxcBulletedList>
                    <Figure caption="Accordion examples">
                      <Image src={accordionExamples} alt="Accordion examples" />
                    </Figure>
                  </>
                ),
              },
            ],
          },
          {
            title: "Content area",
            content: (
              <>
                <DxcParagraph>
                  The content area can contain other components, images, tables, and every custom feature that can be
                  supported inside the element container.
                </DxcParagraph>
                <Image src={accordionContent} alt="Accordion content" />
                <DxcParagraph>
                  Nesting is allowed and icons can be used as a complement to the header label.
                </DxcParagraph>
              </>
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
                  Accordions can be placed with main page content or placed inside of a container such as a side panel
                  or tile.
                </DxcParagraph>
                <Figure caption="Accordion placement">
                  <Image src={accordionPlacement} alt="Accordion placement" />
                </Figure>
              </>
            ),
          },
          {
            title: "Alignment",
            content: (
              <DxcParagraph>
                By default the chevron icon is placed on the end side of the header. This allows for the title on the
                start side to align with other type elements in the layout.
              </DxcParagraph>
            ),
          },
        ],
      },
      {
        title: "Behavior and interaction",
        content: (
          <>
            <DxcParagraph>
              The accordion component has two main states: collapsed and expanded. The chevron icon at the end of the
              accordion indicates which state the accordion is in. Accordions begin by default in the collapsed state
              with all content panels closed. Starting in a collapsed state gives the user a high level overview of the
              available information.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Trigger collapsed and expanded states when clicking on either the header or icon.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Use icons and animation to easily reflect collapsed and expanded states.
              </DxcBulletedList.Item>
              <DxcFlex direction="column" gap="0.5rem">
                <DxcBulletedList.Item>
                  Use a chevron icon to indicate the expand/collapse behavior.
                </DxcBulletedList.Item>
                <DxcBulletedList type="circle">
                  <DxcBulletedList.Item>
                    When the panel expands, the chevron icon rotates 180 degrees counterclockwise.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    When the panel collapses, the chevron icon rotates 180 degrees clockwise.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </DxcFlex>
            </DxcBulletedList>
          </>
        ),
        subSections: [
          {
            title: "Allowing multiple sections open vs single-open behavior",
            content: (
              <DxcParagraph>
                The accordion component can be configured to allow either <strong>multiple sections</strong> to be open
                simultaneously or limit the user to a <strong>single-open</strong> section at a time. Each approach has
                specific use cases, but it’s important to prioritise user needs and content hierarchy when deciding
                which behavior to implement.
              </DxcParagraph>
            ),
            subSections: [
              {
                title: "Allow multiple sections open",
                content: (
                  <>
                    <DxcParagraph>
                      This approach gives users full control over the visibility of content, allowing them to open or
                      collapse multiple sections at the same time. It’s particularly useful when:
                    </DxcParagraph>
                    <DxcBulletedList>
                      <DxcBulletedList.Item>
                        Users need to compare or reference information across different sections simultaneously.
                      </DxcBulletedList.Item>
                      <DxcBulletedList.Item>
                        The content in each section is independent and doesn’t require strict linear navigation.
                      </DxcBulletedList.Item>
                      <DxcBulletedList.Item>
                        There is enough vertical space to accommodate multiple expanded sections without overwhelming
                        the layout.
                      </DxcBulletedList.Item>
                    </DxcBulletedList>
                  </>
                ),
              },
              {
                title: "Single-open behavior",
                content: (
                  <>
                    <DxcParagraph>
                      Some implementations restrict the accordion to allow only <strong>one section</strong> to be open
                      at a time. When a user expands a new section, the previously expanded section collapses
                      automatically. This pattern is suitable when:
                    </DxcParagraph>
                    <DxcBulletedList>
                      <DxcBulletedList.Item>
                        The content is closely related or mutually exclusive, making it logical to view only one section
                        at a time.
                      </DxcBulletedList.Item>
                      <DxcBulletedList.Item>
                        Vertical space is limited, and having multiple sections open could cause usability or layout
                        issues.
                      </DxcBulletedList.Item>
                      <DxcBulletedList.Item>
                        A simplified and more guided user experience is desired, such as in wizards or step-by-step
                        processes.
                      </DxcBulletedList.Item>
                    </DxcBulletedList>
                  </>
                ),
              },
            ],
          },
        ],
      },
      {
        title: "Best practices",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>One element per side</strong>: Each side of the header (<strong>left</strong> and{" "}
                <strong>right</strong>) should only include <strong>one</strong> secondary element to maintain a clean
                and organised visual hierarchy.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>No duplicates</strong>: Avoid including multiple instances of the same type of element in the
                header (e.g., two badges or two status lights), as this can create visual clutter and confuse users.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Semantic colors</strong>: If both a <strong>badge</strong> and a <strong>status light</strong>{" "}
                are included, avoid using semantic colors (e.g., red, green) for the badge to prevent it from competing
                visually with the status light.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Growth priority</strong>: Mandatory and descriptive elements, such as the title, are prioritised
                over optional elements to ensure that essential information is always visible and accessible.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
        subSections: [
          {
            title: "Mobile",
            content: (
              <>
                <DxcParagraph>
                  In small devices, extremely long pages are detrimental to the user experience. Collapsing information
                  minimises excessive scrolling and gives an overview of the structure and content available on the
                  page.
                </DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>In mobile use 100% of the available screen width.</DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
          {
            title: "Do's",
            content: (
              <>
                <DxcParagraph>Use an accordion when:</DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Displaying and grouping additional information</strong> that is related or supplemental to
                    the primary content.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Shortening pages</strong> and reducing scrolling, especially for optional or non-critical
                    content.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Providing users with granular control</strong> over the visibility of information, helping
                    them interact with the page in a way that meets their specific needs.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Organising FAQs or similar repeated structures</strong>, where content can be logically
                    divided into expandable sections.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    Enhancing content <strong>hierarchy</strong> by nesting detailed or secondary content under a more
                    general overview.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
          {
            title: "Don'ts",
            content: (
              <>
                <DxcParagraph>Don’t use an accordion if:</DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>The majority of the content on the page is crucial</strong> for the user to see upfront, as
                    hiding it may increase friction or confusion.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    You need to <strong>display a list of selectable options</strong> (e.g., navigation menus or
                    filters)—a dropdown or other list pattern is more appropriate.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Critical system information or actions</strong> (like alerts, confirmations, or primary
                    buttons) need to be visible—these should remain prominent and accessible without requiring user
                    interaction.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    The interaction of expanding and collapsing creates{" "}
                    <strong>unnecessary complexity or extra clicks</strong> for the user.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
        ],
      },
    ],
  },
];

const AccordionOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/accordion/overview/AccordionOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default AccordionOverviewPage;

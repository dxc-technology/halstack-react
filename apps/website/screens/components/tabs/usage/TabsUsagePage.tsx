import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import defaultUsage from "./examples/default";
import scrollableUsage from "./examples/scrollable";
import contentUsageTabImage from "./images/tabs_content.png";
import typographyUsageTabImage from "./images/tabs_typography.png";
import tabsPlacement from "./images/tabs_placement.png";
import scrollablePanelNavigation from "./images/tabs_scrollable_panel_navigation.png";
import mobileNavigation from "./images/tabs_mobile_navigation.png";
import panelNavigation from "./images/tabs_panel_navigation.png";
import tabsAlignment from "./images/tabs_alignment.png";
import tabsPanelBehavior from "./images/tabs_panel_behavior.png";
import tabsScrollablePanelBehavior from "./images/tabs_scrollable_panel_behavior.png";
import Example from "@/common/example/Example";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          Tabs organize and allow navigation between groups of content that are related and at the same level of
          hierarchy.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Do's",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Use tabs for navigation when dividing content into different sections.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>The content should have the same level of hierarchy.</DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Tabs can contain icons and text. Text labels should be short and have a clear relation to content.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Don'ts",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Do not use tabs to move through sequential content that needs to be read in a particular order.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Avoid using tabs for comparing content across multiple tabs, such as different sizes of the same item.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Placement and alignment",
    subSections: [
      {
        title: "Placement",
        content: (
          <>
            <DxcParagraph>
              There are two variations of tabs, default and container. They are hierarchically the same and should never
              be nested within each other. Tabs are usually placed above the content under the header o general
              navigation.
            </DxcParagraph>
            <Figure
              caption={
                <>
                  <DxcParagraph>
                    <strong>Left</strong>: A standalone tab that can also be nested within components.
                  </DxcParagraph>
                  <DxcParagraph>
                    <strong>Right</strong>: Emphasized tab always paired with an attached background container.
                  </DxcParagraph>
                </>
              }
            >
              <Image src={tabsPlacement} alt="Placement" />
            </Figure>
          </>
        ),
        subSections: [
          {
            title: "Desktop",
            content: (
              <>
                <DxcParagraph>
                  <strong>Default</strong>
                </DxcParagraph>
                <DxcParagraph>
                  When used for main navigation place tabs above the header using 100% of the width of the screen.
                </DxcParagraph>
                <Example example={defaultUsage}></Example>
                <Example example={scrollableUsage}></Example>
                <DxcParagraph>
                  <strong>Container</strong>
                </DxcParagraph>
                <DxcParagraph>
                  When used for panel navigation place tabs in the top of the panel using all available width.
                  Scrollable tabs are allowed when there is not enough space available.
                </DxcParagraph>
                <Figure caption="Using scrollable tabs for panel navigation">
                  <Image src={scrollablePanelNavigation} alt="Using scrollable tabs for panel navigation" />
                </Figure>
              </>
            ),
          },
          {
            title: "Mobile",
            content: (
              <>
                <DxcParagraph>
                  <strong>Main navigation</strong>
                </DxcParagraph>
                <DxcParagraph>
                  When used for main navigation place tabs above the header using 100% of the width of the screen.
                </DxcParagraph>
                <Figure
                  caption={
                    <>
                      <DxcParagraph>
                        <strong>Left</strong>: Main navigation tabs are place above the content.
                      </DxcParagraph>
                      <DxcParagraph>
                        <strong>Right</strong>: Don&#39;t stack more than 4 fixed tabs.
                      </DxcParagraph>
                    </>
                  }
                >
                  <Image src={mobileNavigation} alt="Mobile main navigation" />
                </Figure>
                <DxcParagraph>
                  <strong>Panel navigation</strong>
                </DxcParagraph>
                <Figure caption="Panel navigation tabs are placed in the top of the panel using all available width">
                  <Image src={panelNavigation} alt="Mobile panel nagivation" />
                </Figure>
              </>
            ),
          },
        ],
      },
      {
        title: "Alignment",
        content: (
          <>
            <DxcParagraph>
              Tabs are always displayed horizontally in a single row. They can be left aligned or entered depending on
              the content and context.
            </DxcParagraph>
            <Figure
              caption={
                <>
                  <DxcParagraph>
                    <strong>Left</strong>: Tabs are always displayed in a single row.
                  </DxcParagraph>
                </>
              }
            >
              <Image src={tabsAlignment} alt="Alignment" />
            </Figure>
          </>
        ),
      },
    ],
  },
  {
    title: "Content",
    content: (
      <>
        <Figure
          caption={
            <>
              <DxcParagraph>
                <strong>Left:</strong> Text labels should clearly and succinctly describe the content of the tab they
                represent.
              </DxcParagraph>
              <DxcParagraph>
                <strong>Center:</strong> Tab content should contain a cohesive set of items that share a common
                characteristics.
              </DxcParagraph>
              <DxcParagraph>
                <strong>Right</strong>: Tab labels should appear in a single row. They can use a second line if needed,
                with truncated text.
              </DxcParagraph>
            </>
          }
        >
          <Image src={contentUsageTabImage} alt="Tabs content" />
        </Figure>
      </>
    ),
    subSections: [
      {
        title: "Typography",
        content: (
          <>
            <DxcParagraph>
              Avoid to use all caps for tab labels. ALL CAPS is rarely a good idea because it&#39;s harder to read.
            </DxcParagraph>
            <Figure caption="The sentence-case capitalization and semibold use is recommended style for tab labels">
              <Image src={typographyUsageTabImage} alt="Typography" />
            </Figure>
          </>
        ),
      },
    ],
  },
  {
    title: "Behavior and interaction",
    subSections: [
      {
        title: "Main navigation",
        content: (
          <DxcParagraph>
            Users can navigate between tabs by tapping a tab, or by performing a swipe gesture over content in mobile
            devices.
          </DxcParagraph>
        ),
      },
      {
        title: "Panel navigation",
        content: (
          <>
            <DxcParagraph>
              Interacting with the tabs makes the content scrolls to the point that is associated with that specific
              tab, while the tabs keep fixed at the top of the container.
            </DxcParagraph>
            <Figure caption="Do not use main navigation if they only affect an specific panel">
              <Image src={tabsPanelBehavior} alt="Panel navigation" />
            </Figure>
            <Figure
              caption={
                <>
                  <DxcParagraph>
                    The use of scrollable tabs in panel navigation could cause swipe interferences with OS navigation.
                  </DxcParagraph>
                  <DxcParagraph>Do not use main navigation if they only affect an specific panel.</DxcParagraph>
                </>
              }
            >
              <Image src={tabsScrollablePanelBehavior} alt="Scrollable panel" />
            </Figure>
          </>
        ),
      },
    ],
  },
];

const TabsUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/tabs/usage/TabsUsagePage.tsx" />
    </DxcFlex>
  );
};

export default TabsUsagePage;

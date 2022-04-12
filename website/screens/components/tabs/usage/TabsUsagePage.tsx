import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";
import tabsUsage from "./images/tabs_usage.png";
import contentUsageTabImage from "./images/tabs_content.png";
import typographyUsageTabImage from "./images/tabs_typography.png";
import tabsPlacement from "./images/tabs_placement.png";
import defaultPlacement from "./images/tabs_default_placement.png";
import scrollablePlacement from "./images/tabs_scrollable_placement.png";
import scrollablePanelNavigation from "./images/tabs_scrollable_panel_navigation.png";
import mobileNavigation from "./images/tabs_mobile_navigation.png";
import panelNavigation from "./images/tabs_panel_navigation.png";
import tabsAlignment from "./images/tabs_alignment.png";
import tabsPanelBehavior from "./images/tabs_panel_behavior.png";
import tabsScrollablePanelBehavior from "./images/tabs_scrollable_panel_behavior.png";

const TabsUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcText as="p">
          Tabs organize and allow navigation between groups of content that are
          related and at the same level of hierarchy.
        </DxcText>
        <Image src={tabsUsage} alt="image" />
        <HeadingLink level={3}>Do&#39;s</HeadingLink>
        <DxcList>
          <DxcText>
            Use tabs for navigation when dividing content into different
            sections.
          </DxcText>
          <DxcText>
            The content should have the same level of hierarchy.
          </DxcText>
          <DxcText>
            Tabs can contain icons and text. Text labels should be short and
            have a clear relation to content.
          </DxcText>
        </DxcList>
        <HeadingLink level={3}>Don&#39;ts</HeadingLink>
        <DxcList>
          <DxcText>
            Do not use tabs to move through sequential content that needs to be
            read in a particular order.
          </DxcText>
          <DxcText>
            Avoid using tabs for comparing content across multiple tabs, such as
            different sizes of the same item.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Placement and alignment</HeadingLink>
        <HeadingLink level={3}>Placement</HeadingLink>
        <DxcText as="p">
          There are two variations of tabs, default and container. They are
          hierarchically the same and should never be nested within each other.
          Tabs are usually placed above the content under the header o general
          navigation.
        </DxcText>
        <Figure
          caption={
            <>
              <DxcText as="p">
                <strong>Left</strong>: A standalone tab that can also be nested
                within components.
              </DxcText>
              <DxcText as="p">
                <strong>Right</strong>: Emphasized tab always paired with an
                attached background container.
              </DxcText>
            </>
          }
        >
          <Image src={tabsPlacement} alt="image" />
        </Figure>
        <HeadingLink level={4}>Desktop</HeadingLink>
        <DxcText as="p">
          <strong>Default</strong>
        </DxcText>
        <DxcText as="p">
          When used for main navigation place tabs above the header using 100%
          of the width of the screen.
        </DxcText>
        <Figure caption="Center horizontally in container is allowed when there is few tabs.">
          <Image src={defaultPlacement} alt="image" />
        </Figure>
        <Figure caption="Use an indicator when there are elements hidden in scrollable tabs.">
          <Image src={scrollablePlacement} alt="image" />
        </Figure>
        <DxcText as="p">
          <strong>Container</strong>
        </DxcText>
        <DxcText as="p">
          When used for panel navigation place tabs in the top of the panel
          using all available width. Scrollable tabs are allowed when there is
          not enough space available.
        </DxcText>
        <Figure caption="Using scrollable tabs for panel navigation.">
          <Image src={scrollablePanelNavigation} alt="image" />
        </Figure>
        <HeadingLink level={4}>Mobile</HeadingLink>
        <DxcText as="p">
          <strong>Main navigation</strong>
        </DxcText>
        <DxcText as="p">
          When used for main navigation place tabs above the header using 100%
          of the width of the screen.
        </DxcText>
        <Figure
          caption={
            <>
              <DxcText as="p">
                <strong>Left</strong>: Main navigation tabs are place above the
                content.
              </DxcText>
              <DxcText as="p">
                <strong>Right</strong>: Don&#39;t stack more than 4 fixed tabs.
              </DxcText>
            </>
          }
        >
          <Image src={mobileNavigation} alt="image" />
        </Figure>
        <DxcText as="p">
          <strong>Panel navigation</strong>
        </DxcText>
        <Figure caption="When used for panel navigation tabs are placed in the top of the panel using all available width.">
          <Image src={panelNavigation} alt="image" />
        </Figure>
        <HeadingLink level={3}>Alignment</HeadingLink>
        <DxcText as="p">
          Tabs are always displayed horizontally in a single row. They can be
          left aligned or entered depending on the content and context.
        </DxcText>
        <Figure
          caption={
            <>
              <DxcText as="p">
                <strong>Left</strong>: Tabs are always displayed in a single
                row.
              </DxcText>
              <DxcText as="p">
                <strong>Left</strong>: Tabs are always displayed in a single
                row.
              </DxcText>
            </>
          }
        >
          <Image src={tabsAlignment} alt="image" />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Content</HeadingLink>
        <Figure
          caption={
            <>
              <DxcText as="p">
                <strong>Left:</strong> Text labels should clearly and succinctly
                describe the content of the tab they represent.
              </DxcText>
              <DxcText as="p">
                <strong>Center:</strong> Tab content should contain a cohesive
                set of items that share a common characteristics.
              </DxcText>
              <DxcText as="p">
                <strong>Right</strong>: Tab labels should appear in a single
                row. They can use a second line if needed, with truncated text.
              </DxcText>
            </>
          }
        >
          <Image src={contentUsageTabImage} alt="image" />
        </Figure>
        <HeadingLink level={3}>Typography</HeadingLink>
        <DxcText as="p">
          Avoid to use all caps for tab labels. ALL CAPS is rarely a good idea
          because it&#39;s harder to read.
        </DxcText>
        <Figure
          caption="Is recommended to use sentence-case capitalization and semibold
            style for tab labels."
        >
          <Image alt="image" src={typographyUsageTabImage} />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={2}>Behavior and interaction</HeadingLink>
        <HeadingLink level={3}>Main navigation</HeadingLink>
        <DxcText as="p">
          Users can navigate between tabs by tapping a tab, or by performing a
          swipe gesture over content in mobile devices.
        </DxcText>
        <HeadingLink level={3}>Panel navigation</HeadingLink>
        <DxcText as="p">
          Interacting with the tabs makes the content scrolls to the point that
          is associated with that specific tab, while the tabs keep fixed at the
          top of the container.
        </DxcText>
        <Figure caption="Do not use main navigation if they only affect an specific panel.">
          <Image src={tabsPanelBehavior} alt="image" />
        </Figure>
        <Figure
          caption={
            <>
              <DxcText as="p">
                The use of scrollable tabs in panel navigation could cause swipe
                interferences with OS navigation.
              </DxcText>
              <DxcText as="p">
                Do not use main navigation if they only affect an specific
                panel.
              </DxcText>
            </>
          }
        >
          <Image src={tabsScrollablePanelBehavior} alt="image" />
        </Figure>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/tabs/usage/TabsUsagePage.tsx" />
    </DxcStack>
  );
};

export default TabsUsagePage;

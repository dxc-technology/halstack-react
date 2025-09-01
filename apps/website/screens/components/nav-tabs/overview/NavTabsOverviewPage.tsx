import { DxcBulletedList, DxcFlex, DxcParagraph, DxcLink, DxcHeading } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Image from "@/common/Image";
import navTabsAnatomy from "./images/navTabs_anatomy.png";
import Link from "next/link";
import Example from "@/common/example/Example";
import icons_top from "./examples/icons_top";
import icons_left from "./examples/icons_left";
import badges from "./examples/badges";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Our nav tabs provide a simple and efficient way to organize and navigate between multiple content sections
        within the same page. By dividing related information into distinct tabs, it helps reduce visual clutter and
        improves content discoverability without requiring users to leave the current view. This component is especially
        useful in scenarios where users need to compare or switch between data sets, settings or categories. It supports
        both horizontal and stacked layouts, ensuring adaptability across different use cases and screen sizes.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={navTabsAnatomy} alt="Nav tabs anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> the outer wrapper that holds and organizes all tab items. It defines the overall
            structure and layout of the navigation tabs, ensuring proper alignment and spacing across the component.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> the text displayed within each tab that indicates the section or category it leads
            to.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Notification badge</strong> <em>(Optional)</em>: a visual indicator that displays the number of
            pending actions, alerts or updates related to a specific tab.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Selected tab:</strong> the active tab currently in focus, representing the visible content section.
            It is visually distinguished from unselected tabs using different color, weight or indicator styling.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Icon</strong> <em>(Optional)</em>: an optional graphical element placed before the label to visually
            reinforce the tab's meaning or category.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Selected tab indicator:</strong> a horizontal bar that visually marks the currently active tab.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Unselected tab indicator:</strong> a horizontal bar that visually marks the currently inactive tab.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Using nav tabs",
    subSections: [
      {
        title: "Icon position",
        content: (
          <>
            <DxcParagraph>
              Icons in nav tabs can be placed either <strong>above or to the left</strong> of the label, depending on
              the layout and density of the interface.
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Use the <strong>top position</strong> when the tabs are displayed in a horizontal layout and you want to
                emphasize the icon as a key visual cue—ideal for dashboards or mobile-first interfaces where vertical
                stacking feels more natural.
                <Example example={icons_top} defaultIsVisible={false} />
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Place the icon <strong>to the left</strong> of the label in more compact environments, especially when
                space is limited. This configuration maintains readability while preserving a clean, organized
                structure.
                <Example example={icons_left} defaultIsVisible={false} />
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              Choose the position that best aligns with the visual hierarchy and user flow of your application.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Notification badges",
        content: (
          <>
            <DxcParagraph>
              Nav tabs can optionally include a <strong>notification badge</strong> to indicate new activity, alerts, or
              content updates related to that tab. These badges are typically displayed as small counters and serve as a
              visual prompt to <strong>draw the user's attention</strong> to something that requires their interaction
              or awareness. Use notification badges sparingly and only when there is a clear need to highlight important
              changes—such as unread messages, pending actions or system alerts—to avoid visual noise and ensure they
              retain their impact.
            </DxcParagraph>
            <Example example={badges} defaultIsVisible={false} />
          </>
        ),
      },
      {
        title: "Nav tabs vs. Tabs",
        content: (
          <>
            <DxcParagraph>
              Both{" "}
              <Link href="/components/tabs" passHref legacyBehavior>
                <DxcLink>tabs</DxcLink>
              </Link>{" "}
              and nav tabs are used for navigation, but they serve different purposes and function in distinct ways.
            </DxcParagraph>
            <DxcHeading level={4} text="Nav tabs" />
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Act as primary navigation elements, often leading to <strong>different pages</strong> or sections of an
                application.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Clicking on a <strong>nav tab</strong> may trigger a full page reload or route change.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcHeading level={4} text="Tabs" />
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Used to switch between different content sections within the same page or container.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Typically do <strong>not</strong> trigger a full page reload but update content dynamically.
              </DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>
              Both components improve usability, but <strong>tabs</strong> are best for grouping related content within
              a page, while <strong>nav tabs</strong> help users move across different sections or pages of an
              application.
            </DxcParagraph>
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
          The size of the navigation tabs adjusts according to the container. On smaller screen resolutions, if the
          content exceeds the available space, a scroll bar will appear.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Use nav tabs to <strong>group related content</strong> or views under a shared context, making it easier for
            users to switch between them without losing orientation.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Keep nav tab items <strong>labels short and descriptive</strong> to avoid truncation and maintain clarity,
            especially on smaller viewports.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Ensure that tabs <strong>follow a logical order</strong>—based on frequency of use, workflow, or user
            priority.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Use notification badges to <strong>highlight relevant updates</strong> only when necessary, and avoid
            overloading multiple tabs with badges at once.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            While the component is flexible enough to support a mix of label-only and label-with-icon tabs, it's best to
            choose one style per set. Mixing both can reduce scannability and create visual imbalance, impacting the
            overall usability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Choose icon placement (left or top) based on the available space and the importance of the icon in the
            context of the label. Left is preferred for horizontal layouts; top works best in vertical or
            space-constrained scenarios.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Avoid mixing navigation tabs and action buttons within the same group, as this can create confusion around
            expected behavior.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const NavTabsOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/nav-tabs/overview/NavTabsOverviewPage.tsx" />
  </DxcFlex>
);

export default NavTabsOverviewPage;

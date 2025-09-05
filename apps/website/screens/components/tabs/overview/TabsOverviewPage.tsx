import { DxcParagraph, DxcBulletedList, DxcFlex, DxcLink, DxcInset } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import defaultUsage from "./examples/default";
import scrollableUsage from "./examples/scrollable";
import Example from "@/common/example/Example";
import anatomy from "./images/tabs_anatomy.png";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Tabs are interactive UI components that allow users to navigate between different sections of content within the
        same page. They help organize related information efficiently, improving usability by reducing clutter and
        enabling seamless content switching. Tabs are commonly used in dashboards, settings panels, and content-heavy
        applications to enhance user experience.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Tabs anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> the wrapper that holds all the tabs together in a row.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Active tab indicator:</strong> a colored line that visually marks the selected tab.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Divider:</strong> a subtle line separating tabs to improve readability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Tab item:</strong> the clickable area that triggers a content change when selected.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label</strong> <em>(Optional if there's an icon)</em>: The text that identifies the tab's purpose or
            section.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Icon:</strong> <em>(Optional if there's a label)</em>: A small graphical element that enhances
            visual recognition of the tab.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Using tabs",
    content: (
      <DxcParagraph>
        Tabs are an effective way to organize content within a user interface by keeping related sections grouped
        together while minimizing clutter. They improve usability by allowing users to quickly switch between different
        views without navigating away from the page. When designed and implemented correctly, tabs enhance the user
        experience by making content more accessible and easier to interact with.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Placement and alignment",
        subSections: [
          {
            title: "Placement",
            content: (
              <>
                <DxcParagraph>
                  There are two types of tabs: <strong>Default</strong> and <strong>Container</strong>. Both types share
                  the same hierarchy and should never be nested within each other. Tabs are typically positioned above
                  the content, under the header or general navigation.
                </DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Default tabs:</strong> used for main navigation, placed above the header, spanning 100% of
                    the screen width.
                    <DxcInset vertical="var(--spacing-padding-m)">
                      <Example example={defaultUsage} />
                    </DxcInset>
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Container tabs:</strong> Used for panel navigation, placed at the top of the panel, using
                    the full available width. Scrollable tabs are allowed when space is limited.
                    <DxcInset vertical="var(--spacing-padding-m)">
                      <Example example={scrollableUsage} />
                    </DxcInset>
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
          {
            title: "Alignment",
            content: (
              <DxcParagraph>
                Tabs are always displayed horizontally in a single row. They can be <strong>left-aligned</strong> or{" "}
                <strong>centered</strong>, depending on the content and context.
              </DxcParagraph>
            ),
          },
        ],
      },
      {
        title: "Tabs vs. Nav tabs",
        content: (
          <>
            <Image src={anatomy} alt="Tabs vs nav tabs" />
            <DxcParagraph>
              Both tabs and{" "}
              <Link href="/components/nav-tabs" passHref legacyBehavior>
                <DxcLink>nav tabs</DxcLink>
              </Link>{" "}
              are used for navigation, but they serve different purposes and function in distinct ways.
            </DxcParagraph>
          </>
        ),
        subSections: [
          {
            title: "Tabs",
            content: (
              <DxcBulletedList>
                <DxcBulletedList.Item>
                  Used to switch between different content sections within the same page or container.
                </DxcBulletedList.Item>
                <DxcBulletedList.Item>
                  Typically do <strong>not</strong> trigger a full page reload but update content dynamically.
                </DxcBulletedList.Item>
              </DxcBulletedList>
            ),
          },
          {
            title: "Nav tabs",
            content: (
              <>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    Act as primary navigation elements, often leading to <strong>different pages</strong> or sections of
                    an application.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    Clicking on a nav tab may trigger a full page reload or route change.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
                <DxcParagraph>
                  Both components improve usability, but <strong>tabs</strong> are best for grouping related content
                  within a page, while <strong>nav tabs</strong> help users move across different sections or pages of
                  an application.
                </DxcParagraph>
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
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Maintain logical order:</strong> arrange tabs in a meaningful sequence based on user needs and place
          frequently used or primary tabs first.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Keep tab labels short & clear:</strong> use concise, descriptive labels (1-2 words) that clearly
          indicate the content. Avoid using generic or ambiguous labels like "Info" or "More." Instead, choose specific
          terms that reflect the content, such as "Account Details" for user-related settings or "Billing" for payment
          information and prioritize readability — avoid using all caps unless necessary.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Managing the number of tabs effectively:</strong> while not a strict rule, keeping the number of tabs
          manageable (ideally 5-7) helps maintain clarity and usability. If additional tabs are necessary, assess the
          information architecture carefully and consider grouping related items.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use icons thoughtfully:</strong> ensure the icon is intuitive and clearly represents the content of
          the tab. While they are generally used alongside labels, they can also be used independently. In such cases,
          it is crucial to choose highly recognizable icons that clearly convey meaning without additional text. When
          used together, the icon and label must work harmoniously to reinforce their meaning and avoid any conflicting
          interpretations. Avoid using overly decorative or generic icons that do not provide clear meaning, such as an
          abstract shape with no context.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Keep design consistent:</strong> while the component is flexible enough to support a mix of label-only
          and label-with-icon tabs, it's best to choose one style per set. Mixing both can reduce scannability and
          create visual imbalance, impacting the overall usability.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const TabsOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/tabs/overview/TabsOverviewPage.tsx" />
  </DxcFlex>
);

export default TabsOverviewPage;

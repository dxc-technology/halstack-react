import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import anatomy from "./images/sidenav_anatomy.png";
import branding from "./images/sidenav_branding.png";
import mainNavigation from "./images/sidenav_mainnav.png";
import bottomContent from "./images/sidenav_bottomcontent.png";
import modes from "./images/sidenav_modes.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The sidenav component is designed to support efficient and intuitive navigation across the main sections of an
          application. Its vertical layout provides persistent access to navigation links, improving discoverability and
          reducing the steps needed to move between pages. It supports nested groups, collapsible sections, and the
          ability to highlight the active route, making it especially useful for applications with deep or complex
          navigation structures.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <DxcParagraph>
          The next section gives an overview of the component's general anatomy. Each part mentioned here will be
          explained in more detail later in the document.
        </DxcParagraph>
        <Image src={anatomy} alt="Sidenav anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Branding:</strong>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Contains <strong>collapse/expand toggle</strong> for the sidenav.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                If no global app header exists, this area should be used for <strong>branding</strong> (logo,
                product/app name).
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Top content:</strong>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Space placed under the branding for <strong>contextual or utility actions</strong> that enhance the main
                navigation, such as a version selector, a searchbar to filter the navigation, status indicators, or
                small alerts.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Main navigation:</strong>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                The core navigation area, structured into <strong>sections and items</strong>.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Each section can be <strong>expanded</strong> (showing children) or <strong>collapsed</strong> (hiding
                children).
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Only this area should be <strong>scrollable</strong>.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Bottom content:</strong>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Space for <strong>secondary sections</strong> (navigation) and/or other <strong>common patterns</strong>{" "}
                (profile details, organization switcher, settings, or primary quick actions)
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },

  {
    title: "Key interactions and features",
    subSections: [
      {
        title: "Branding",
        content: (
          <>
            <DxcParagraph>
              A small button allows users to <strong>collapse or expand</strong> the sidenav. This helps save space when
              the navigation is not in active use, especially in data-heavy or workspace-oriented layouts.
            </DxcParagraph>
            <DxcParagraph>
              This area is used to display the product or organization's logo{" "}
              <strong>when no global app header is present</strong>. It provides brand recognition and visual
              consistency in layouts where the sidenav acts as the main navigation container.
            </DxcParagraph>
            <DxcParagraph>
              <strong>Application name</strong> identifies the current product or application. When a header is present,
              the application name may appear either in the header or within the sidenav, depending on layout needs or
              hierarchy preferences.
            </DxcParagraph>
            <Image src={branding} alt="Sidenav branding" />
          </>
        ),
      },
      {
        title: "Top content",
        content: (
          <>
            <DxcParagraph>
              Area located directly under the branding that provides space for{" "}
              <strong>contextual or utility elements</strong> that support the main navigation. It is intended for
              actions that help users interact with or filter the content of the sidenav.
            </DxcParagraph>
            <DxcParagraph>
              Typical examples include a <strong>searchbar</strong> to filter navigation items, a{" "}
              <strong>version or environment selector</strong>, compact <strong>status indicators</strong>, or{" "}
              <strong>small alerts</strong> that inform users without disrupting navigation.
            </DxcParagraph>
            <DxcParagraph>
              The content in this area should remain lightweight to avoid pushing the primary navigation too far down.
            </DxcParagraph>
            <DxcParagraph>
              It is not intended for secondary navigation or profile-related actions, which belong to the bottom content
              area.
            </DxcParagraph>
          </>
        ),
      },
      {
        title: "Main navigation",
        content: (
          <>
            <DxcParagraph>
              The <strong>Main navigation</strong> is the core area that structures and organizes access to the
              different sections of the application. It is composed of <strong>sections</strong> and{" "}
              <strong>items</strong>, allowing users to navigate efficiently through the product's main areas.
            </DxcParagraph>
            <DxcParagraph>
              Each section can be <strong>expanded</strong> to display its child items or <strong>collapsed</strong> to
              hide them.
            </DxcParagraph>
            <DxcParagraph>
              Each section can be <strong>expanded</strong> to display its child items or <strong>collapsed</strong> to
              hide them. The sidenav allows <strong>hierarchies of any depth</strong>, making it possible to organize
              content into <strong>structured, nested groups</strong> when needed. This can be helpful in large or
              complex applications, but most products work better when navigation is spread across multiple patterns
              instead of relying on deep nesting. <strong>Choose this approach carefully</strong> to avoid adding
              unnecessary complexity to the user experience.
            </DxcParagraph>
            <DxcParagraph>
              Only this area should be <strong>scrollable</strong>, ensuring that other sidenav elements (such as
              branding, top content, or bottom content) remain fixed.
            </DxcParagraph>
            <Image src={mainNavigation} alt="Sidenav main navigation" />
            <DxcBulletedList type="number">
              <DxcBulletedList.Item>
                <strong>Menu item:</strong> Represents a single navigation entry that links to a page or feature within
                the application. It can act as a standalone item or as a parent containing nested items.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Menu group:</strong> A structural wrapper that groups related menu items under a shared
                category. It can be expanded or collapsed to reveal or hide its contents.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Icon:</strong> A leading visual symbol that helps users quickly identify the purpose of each
                item and improves scannability within the navigation list.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Label:</strong> The text name of the menu item. It should be short, descriptive, and consistent
                to clearly indicate the destination or function.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Badge:</strong> A small visual indicator used to display dynamic information such as
                notifications, updates, or item counts related to a menu entry.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Chevron (group indicator):</strong> Indicates that a menu item contains nested items. It rotates
                or changes direction to reflect the expanded or collapsed state of the group.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Group line:</strong> An optional vertical line that visually connects items within the same
                group, reinforcing hierarchy and relationships between parent and child items.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Divider:</strong> A horizontal separator used to visually distinguish different groups or
                sections within the sidenav, improving readability and organization.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Scroll bar:</strong> Appears when the content within the main navigation exceeds the available
                height. Only the main navigation area should scroll, keeping the top content and bottom content fixed.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Border:</strong> A thin visual line that defines the edge of the component and provides a clear
                separation between the sidenav and the main content area.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Bottom content",
        content: (
          <>
            <DxcParagraph>
              The bottom content area of the sidenav is reserved for{" "}
              <strong>secondary actions and persistent utilities</strong> that support the overall navigation
              experience. It commonly includes elements such as profile access, organization switchers, settings, or
              quick actions.
            </DxcParagraph>
            <DxcParagraph>
              While its content is <strong>flexible and customizable</strong>, it should remain focused and minimal to
              avoid visual overload. Teams can adapt this area to their product needs, but it's recommended to follow
              predefined layout examples to maintain <strong>consistency, clarity, and usability</strong> across
              applications.
            </DxcParagraph>
            <Image src={bottomContent} alt="Sidenav bottom content" />
          </>
        ),
      },
      {
        title: "Expanded and collapsed modes",
        content: (
          <>
            <DxcParagraph>
              The sidenav component supports two main display modes — <strong>expanded</strong> and{" "}
              <strong>collapsed</strong> — allowing flexible adaptation to different layout needs and screen sizes.
            </DxcParagraph>
            <DxcParagraph>
              In <strong>expanded mode</strong>, all navigation labels, icons, and hierarchy levels are fully visible,
              offering maximum clarity and discoverability. This mode is recommended when navigation is central to the
              workflow or when users frequently switch between sections.
            </DxcParagraph>
            <DxcParagraph>
              In <strong>collapsed mode</strong>, the sidenav minimizes to a narrow vertical strip, displaying only
              icons and essential visual cues. This helps preserve workspace and focus on content while maintaining
              quick access to navigation. Collapsed mode is ideal for data-dense or content-heavy layouts where space
              efficiency is a priority.
            </DxcParagraph>
            <Image src={modes} alt="Sidenav modes" />
          </>
        ),
      },
      {
        title: "Behavior and considerations in collapsed mode",
        content: (
          <>
            <DxcParagraph>
              While the collapsed mode maintains functional access to navigation, some scenarios may require specific
              handling to preserve usability and consistency:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Missing icons on top-level items:</strong>
                <br />
                If navigation items at the first level do not include icons, a <strong>generic default icon</strong> is
                automatically applied. This ensures the collapsed view remains navigable and visually balanced.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Custom content:</strong>
                <br />
                When custom content at the top or bottom (such as searchbar, user details, CTAs, or quick actions) is
                present in the sidenav, it should be replaced in collapsed mode by a <strong>
                  single icon button
                </strong>{" "}
                to prevent overloading the reduced space.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    subSections: [
      {
        title: "Branding",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Show branding only when the app lacks a global header:</strong> If there's already a global
                header, remove or minimize redundant branding to keep the sidenav clean and focused on navigation.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Keep product or service names short, clear, and recognizable:</strong> Avoid long or redundant
                titles that visually compete with navigation items, ensuring the branding area remains clean and easy to
                scan.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Top content",
        content: (
          <>
            <DxcBulletedList type="number">
              <DxcBulletedList.Item>
                <strong>Prioritize brevity and relevance:</strong> Limit the top content to elements that provide
                immediate contextual value, such as: filtering, quick actions, or lightweight system indicators.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Maintain visual and spatial balance:</strong> Keep the section visually unobtrusive by using
                compact components, consistent spacing, and minimal visual weight. This prevents the top content from
                pushing the main navigation downward and ensures users can access navigation items without unnecessary
                scrolling.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Main navigation",
        content: (
          <>
            <DxcBulletedList type="number">
              <DxcBulletedList.Item>
                <strong>Organize by user goals, not internal structure:</strong> Group navigation items around what
                users want to achieve, not how teams or modules are organized internally.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Keep section names clear and concise:</strong> Ensure users can immediately understand where
                each section will take them by using short, direct labels that clearly describe their destination or
                purpose.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Use icons consistently for recognition:</strong> Each icon should reinforce the meaning of its
                label and be visually consistent across the entire navigation.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Limit nesting depth for clarity:</strong> Even though technically unlimited, stay within 2-3
                levels to maintain a clear mental model of the app's structure.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Bottom content",
        content: (
          <>
            <DxcBulletedList type="number">
              <DxcBulletedList.Item>
                <strong>Use the bottom content area for persistent, secondary actions:</strong> Ideal for items like
                profile access, organization switcher, theme toggle, or settings (actions not tied to a specific
                section).
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Keep it simple and uncluttered:</strong> Limit the number of elements to maintain visual balance
                (it should complement navigation, not compete with it).
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
];

const SidenavOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/sidenav/overview/SidenavOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default SidenavOverviewPage;

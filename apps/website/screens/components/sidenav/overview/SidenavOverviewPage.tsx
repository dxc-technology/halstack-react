import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import anatomy from "./images/sidenav_anatomy.png";
import responsive from "./images/sidenav_responsive.png";

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
        <Image src={anatomy} alt="Sidenav's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Title:</strong> the main label displayed at the top of the sidenav, typically used to indicate the
            name of the product or section.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Group title:</strong> a label that groups related links together, providing visual structure and
            context within the navigation.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Page or section link:</strong> the navigational element that redirects users to a specific view or
            section of the application.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Single group:</strong> a container that holds a set of related links that are always visible and not
            collapsible.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Collapsible group:</strong> a group of links that can be expanded or collapsed, helping reduce
            visual noise and support progressive disclosure.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Divider:</strong> a horizontal line used to visually separate groups or sections within the sidenav
            for better readability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Single link:</strong> an individual navigational item not grouped with others, typically used for
            stand-alone destinations.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Icon:</strong> an optional visual element placed before the link label, used to reinforce meaning or
            improve scannability.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },

  {
    title: "Key interactions and features",
    subSections: [
      {
        title: "Hierarchical navigation",
        content: (
          <DxcParagraph>
            The sidenav supports hierarchical structures,{" "}
            <strong>organizing navigation links into nested groups</strong>. Though it only supports one level of
            nesting, this helps users quickly understand the content structure and navigate between related pages or
            sections more efficiently.
          </DxcParagraph>
        ),
      },
      {
        title: "Collapsible groups",
        content: (
          <DxcParagraph>
            <strong>Groups can be expanded or collapsed</strong>, allowing users to control the visibility of nested
            navigation links. This feature is particularly useful for reducing visual noise and keeping the interface
            tidy, especially when dealing with large or complex structures.
          </DxcParagraph>
        ),
      },
      {
        title: "Active link highlighting",
        content: (
          <DxcParagraph>
            The currently active link is visually highlighted in the sidenav. This gives users clear feedback about
            where they are within the application, improving orientation and navigation consistency.
          </DxcParagraph>
        ),
      },
      {
        title: "Persistent visibility",
        content: (
          <DxcParagraph>
            The sidenav <strong>remains visible and accessible</strong> while the user navigates through the product.
            This persistent placement makes it easy to switch sections quickly, supporting efficient multitasking and
            exploration.
          </DxcParagraph>
        ),
      },
      {
        title: "Icon support",
        content: (
          <DxcParagraph>
            Each <strong>navigation link can include an icon</strong> that visually represents the content or
            functionality it leads to. Icons enhance scannability and make the navigation more intuitive, especially
            when combined with meaningful labels.
          </DxcParagraph>
        ),
      },
      {
        title: "Dividers for visual grouping",
        content: (
          <DxcParagraph>
            The sidenav allows the inclusion of visual dividers between groups or links, making it easier to identify
            content categories and improving the overall readability of the menu.
          </DxcParagraph>
        ),
      },
      {
        title: "Responsive behavior",
        content: (
          <>
            <DxcParagraph>
              On mobile and tablet screens, the sidenav becomes an{" "}
              <strong>overlay panel that can be toggled open or closed</strong>. This responsive version ensures that
              navigation remains accessible without occupying valuable screen space. Users can open the sidenav using a
              dedicated menu icon, and close it either by interacting with the backdrop or selecting a navigation
              option. This enhances usability and maintains focus on content in smaller viewports.
            </DxcParagraph>
            <Image src={responsive} alt="Responsive sidenav" />
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Use the sidenav component to improve discoverability:</strong> make navigation links easy to find
            and access, helping users understand the structure of the application.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Keep in mind the type of devices you're developing for:</strong> ensure the sidenav behaves in a way
            that doesn't block or reduce the space available for the main content, especially on smaller screens.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Follow a clear structure and hierarchy:</strong> organize the content using group titles, dividers,
            and indentation to visually differentiate between sections, titles, and individual links.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use clear and concise labels:</strong> navigation items should use simple, intuitive wording that
            clearly describes their destination or action.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Organize links into logical groups:</strong> related navigation items should be grouped together
            under meaningful group titles for easier scanning.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use icons to reinforce meaning:</strong> include icons where relevant to improve visual recognition
            and support faster navigation.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use collapsible groups for long menus:</strong> when there are many links, collapsible groups help
            keep the sidenav organized and reduce visual clutter.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use dividers to separate sections:</strong> visual separators make different content areas more
            distinct and improve readability.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const SidenavOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/sidenav/overview/SidenavOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default SidenavOverviewPage;

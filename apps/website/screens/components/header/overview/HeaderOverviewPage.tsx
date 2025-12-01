import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import Figure from "@/common/Figure";
import QuickNavContainer from "@/common/QuickNavContainer";
import anatomy from "./images/header_anatomy.png";
import leftSlot from "./images/left_slot.png";
import mainNav from "./images/main_nav.png";
import rightSlot from "./images/right_slot.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The Header serves as the primary navigation and identity element for an application. It includes branding,
          quick access to key sections via navigation links, and a user account menu. Its consistent presence reinforces
          brand recognition and improves usability by offering easy navigation and access to user-related actions.
        </DxcParagraph>
        <DxcParagraph>It typically contains three main areas: left slot, main navigation and right slot.</DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Header anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Left slot:</strong> it's where the branding and application name is displayed.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Main navigation:</strong> a section that allows access to primary and secondary navigational levels,
            which purposes is to guide the user through the primary levels of the interface.
            {/* It is also where the searchbar will be displayed once that feature is triggered. */}
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Right slot:</strong> it's the place where all utilities related to an application are hosted. It's
            highly adaptable for each product's needs.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Key interactions and features",
    subSections: [
      {
        title: "Left slot",
        content: (
          <>
            <DxcParagraph>
              The left slot hosts all branding elements of the product, application, or website. It is the visual anchor
              of the header and helps users quickly identify the environment they are interacting with.
            </DxcParagraph>
            <DxcParagraph>
              The <strong>logo</strong> is a required element in every implementation of the header, ensuring brand
              presence and recognition across all platforms. It must always be displayed inside a fixed container to
              maintain consistency in size and alignment with other header elements.
            </DxcParagraph>
            <DxcParagraph>
              The <strong>name</strong> of the product or service is <strong>optional</strong> and can be placed to the
              right of the logo. When included, it reinforces brand identity and provides additional
              context—particularly useful in multi-product ecosystems or environments where the logo alone may not be
              distinctive enough.
            </DxcParagraph>
            <DxcParagraph>
              Both elements together should remain visually balanced, with consistent spacing and vertical alignment,
              contributing to a cohesive and professional visual hierarchy.
            </DxcParagraph>
            <Figure caption="Left slot configuration of the header component.">
              <Image src={leftSlot} alt="Left slot configuration" />
            </Figure>
          </>
        ),
      },
      {
        title: "Main navigation",
        content: (
          <>
            <DxcParagraph>
              The main navigation section occupies the central area of the header and serves as the{" "}
              <strong>primary entry point</strong> for exploring the product or application. It spans the full available
              width, making it the most visually dominant and functionally important area of the component.
            </DxcParagraph>
            <DxcParagraph>
              Navigation items within this section can be either <strong>single-level links</strong> or{" "}
              <strong>expandable items</strong> that reveal one additional level of navigation. This two-level limit is
              intentional and designed to keep the header focused on orientation rather than deep exploration. The goal
              is to help users understand where they are and move between high-level areas efficiently, while deeper
              navigation is delegated to components such as the sidenav.
            </DxcParagraph>
            {/* <DxcParagraph>
              When the total width of navigation items exceeds the available horizontal space, the header automatically
              groups the overflow items into a <strong>new expandable item</strong> (typically labeled "More" or
              equivalent). This ensures the navigation remains usable and visually balanced across different screen
              sizes and configurations.
            </DxcParagraph> */}
            <DxcParagraph>
              Each navigation item should provide clear affordances for interaction, indicating whether it leads
              directly to a section or expands to show sub-options.
            </DxcParagraph>
            <Figure caption="Header with expandable content">
              <Image src={mainNav} alt="Header with expandable content" />
            </Figure>
          </>
        ),
      },
      {
        title: "Right slot",
        content: (
          <>
            <DxcParagraph>
              The right slot is reserved for <strong>utilities and user actions</strong> that support quick access to
              key functions within the product or application. It typically includes elements such as search,
              notifications, settings, help, or user profile; but its configuration is intentionally flexible to adapt
              to different product contexts.
            </DxcParagraph>
            <DxcParagraph>
              While some elements may be predefined or recommended as part of the default header configuration, this
              area remains <strong>open and customizable</strong>, allowing teams to include, remove, or reorder actions
              according to their needs.
            </DxcParagraph>
            <DxcParagraph>
              This flexible structure allows the right slot to serve both standardized and product-specific use cases
              without compromising the header's overall consistency and usability.
            </DxcParagraph>
            <DxcParagraph>
              However, though this area is open and configurable, we strongly recommend starting from one of the
              predefined layout examples provided in Halstack. It is also very important not to include too many
              actions, as it may overload the component and reduce clarity.
            </DxcParagraph>
            <Figure caption="Pre-defined utilities in Halstack's header component">
              <Image src={rightSlot} alt="Right slot configuration" />
            </Figure>
          </>
        ),
      },
    ],
  },
  {
    title: "Responsiveness",
    content: (
      <>
        <DxcParagraph>
          On smaller viewports, the header adapts to its responsive version. This layout is designed to accommodate the
          component's elements clearly and consistently, so the experience remains coherent across all screen sizes. The
          responsive header is organized into three sections: the top bar, the body, and the bottom.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Top bar:</strong> this section displays the product or application branding, along with the most
            relevant utilities from the right slot of the standard header.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Body:</strong> this is where the main navigation items are placed. Visually, these items follow a
            structure similar to the ones in our sidenav component, and their behavior remains consistent with how they
            function in the default sidenav.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Bottom:</strong> this area is custom, but it's reserved for the header's call-to-action elements,
            when present.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Best practices",
    subSections: [
      {
        title: "General",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use a header in any product that requires clear orientation and structure, especially those that are more
              than just data dashboards.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              In complex applications, the <strong>combination of the header and the sidenav</strong> provides a solid
              navigation framework that allows users to move efficiently and understand the product’s structure.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              When designing an application, always consider the <strong>information architecture</strong> and how it
              will map across the navigation components offered by Halstack. Defining clear hierarchies and dependencies
              between header and sidenav is essential for usability and a smoother user experience.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Keep the header focused on <strong>orientation and high-level access</strong>, avoiding turning it into a
              full navigation menu.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Left slot",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Choose a <strong>compact version of the brand logo</strong> that occupies as little horizontal space as
              possible. This ensures enough room for other header elements with higher interaction priority.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              When including the product or service name, keep it <strong>short, clear, and recognizable</strong>. Avoid
              long or redundant titles that compete visually with the navigation items.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Ensure that the logo maintains sufficient contrast and legibility on different background colors.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Main navigation",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Carefully <strong>evaluate the depth of navigation</strong> before configuring the header. Determine
              whether the sidenav is needed and design both navigation layers to complement each other rather than
              overlap in functionality.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Keep link names <strong>clear, concise, and action-oriented</strong> so users can immediately understand
              where each link will take them.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use <strong>icons sparingly</strong> and only when they add value or clarity. Avoid decorative or overly
              abstract icons that could create confusion.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Limit the number of visible items to maintain balance and prevent overflow.
              {/* When necessary, rely on the automatic grouping ("More" option) for secondary items. */}
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Right slot",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Avoid overloading the header with too many utilities. Keep only the{" "}
              <strong>most essential actions visible</strong>, and relocate secondary or less frequent actions to other
              areas such as the sidenav, footer, or dedicated sections.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Ensure that the <strong>icons used for actions are universal and easily recognizable</strong>. When an
              icon may not be self-explanatory, provide a tooltip for clarity.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Group related actions within containers to maintain alignment and logical order.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Follow accessibility best practices: all icons and actions must have an accessible label and be operable
              by keyboard.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Review responsive behavior when adding or removing utilities to ensure the right slot maintains balance
              and visual stability across viewports.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Responsive mode",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Even though the responsive header is composed of custom sections,{" "}
              <strong>each area should remain aligned</strong> with the structure described above to preserve clarity
              and consistency across smaller viewports.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Avoid overcrowding the top bar</strong> in the responsive layout. Only the most essential and
              frequently used actions should remain visible there. Additional actions or CTAs should be placed in the
              bottom section, while navigation items should be housed in the body.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Keep visual hierarchy</strong> as simple as possible. In reduced spaces, users scan content
              faster, so each section should present its elements in a clear and predictable order.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Ensure that labels, icons, and interactive elements resize or reorganize in a way that maintains
              readability and touch friendliness, especially on mobile devices.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const HeaderOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/header/overview/HeaderOverviewPage.tsx" />
  </DxcFlex>
);

export default HeaderOverviewPage;

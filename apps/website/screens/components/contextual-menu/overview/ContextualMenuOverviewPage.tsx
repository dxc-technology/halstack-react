import { DxcParagraph, DxcFlex, DxcBulletedList } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Image from "@/common/Image";
import anatomy from "./images/contextual_menu_anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        This powerful component improves user experience by allowing users to{" "}
        <strong>navigate through page-level content</strong> or choose from a list of actions while complementing the
        general disposition of the main content within the interface. It also allows a wide range of possibilities when
        it comes to placing content cohesively and comprehensively. To achieve this, it's important to understand how
        the items in our contextual menu behave and interact with each other.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Contextual menu anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Section title:</strong> a label that groups related menu items within a contextual menu, enhancing
            organization and readability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Container:</strong> the structural wrapper that holds all menu elements, ensuring proper alignment,
            spacing, and visual consistency.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Group item:</strong> they are nests of other group items or individual items that are related to
            each other and show indentation as they are unfolded.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Badge:</strong> a small visual indicator, often used to display counts, status updates or categories
            within a menu item.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Single item:</strong> an actionable element within the menu that triggers navigation or an operation
            when selected.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Expand/collapse Icon:</strong> a visual indicator for nested menus, allowing users to reveal or hide
            subitems.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Icon:</strong> a graphical representation within a menu item that aids recognition and reinforces
            meaning.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Section:</strong> they are a collection of group and single items within the menu that share a
            certain relationship and have a title that describes them.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Divider:</strong> a subtle separator that groups related menu items and improves menu structure.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Scrollbar:</strong> appears when the menu content exceeds the container's height, enabling vertical
            navigation.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Contextual menu and Sidenav",
    content: (
      <>
        <DxcParagraph>
          Although visually similar, the sidenav component and the contextual menu differ significantly in
          functionality. Our sidenav is designed to provide a consistent and persistent navigation structure throughout
          the application, allowing users to easily switch between different sections or pages within the app.
        </DxcParagraph>
        <DxcParagraph>
          On the other hand, the contextual menu is more{" "}
          <strong>context-sensitive, and appears in response to specific user actions</strong>, offering a set of
          relevant options or actions that can be performed on the current page. This means that it{" "}
          <strong>operates on a page level</strong>, so the component may appear or not depending on the specific needs
          and requirements for each screen or interaction.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Use meaningful icons:</strong> select icons that accurately represent menu items, ensuring clarity
            and intuitive navigation.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Align properly:</strong> position the contextual menu to the left or right, avoiding placement in
            the center to prevent obstruction of main content.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Enhance navigation with hierarchy:</strong> structure menu items using different levels to maintain
            logical organization.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use badges for status indication:</strong> incorporate a Badge component to display status updates,
            counts or categories for navigable sections.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Default selection:</strong> when pre-selecting an option, try to limit it to the first menu item to
            maintain intuitive user interactions.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Avoid deep hierarchies:</strong> limit navigation depth to a maximum of three levels to prevent
            excessive indentation and complexity.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Restrict icon usage:</strong> use icons only at the first navigation level to maintain readability
            and avoid visual clutter.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Don't overload with icons:</strong> too many icons can create confusion rather than improve
            usability. Keep them purposeful and minimal.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const ContextualMenuOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/contextual-menu/overview/ContextualMenuOverviewPage.tsx" />
  </DxcFlex>
);

export default ContextualMenuOverviewPage;

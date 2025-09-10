import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import collapsed from "./examples/collapsed";
import noRoot from "./examples/noRoot";
import Image from "@/common/Image";
import anatomy from "./images/breadcrumbs_anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Breadcrumbs are a navigational component used in user interfaces to improve the user experience by providing a{" "}
        <strong>clear path to previous steps or navigational levels</strong>. They typically display the user's current
        location within the hierarchical structure of an application, allowing for easy navigation and improved
        orientation.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Breadcrumbs anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Unvisited item:</strong> these are links that represent the navigational path taken by the user but
            are not the current page
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Divider:</strong> a visual element that complements the label, providing additional meaning or
            enhancing recognition.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Visited item:</strong> displays the textual action that the button is going to carry out.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Collapsed breadcrumbs",
    content: (
      <>
        <DxcParagraph>
          When there are more than four items in the breadcrumbs, the component will{" "}
          <strong>collapse the items in a dropdown menu</strong> to avoid overloading the interface. Users can click on
          the dropdown to view the hidden items and navigate to the desired level.
        </DxcParagraph>
        <DxcParagraph>
          Although this can be configurable, we highly encourage our users to stick with the collapsing at five or more
          items. This was not a random decision, we carefully selected it to ensure the component does not overload the
          interface and remains an effective navigational aid.
        </DxcParagraph>
        <Example example={collapsed} />
        <DxcParagraph>
          Depending on the amount of available space, the collapsed <strong>breadcrumbs can be synthesized more</strong>{" "}
          by removing the root element and displaying only the collapsed dropdown and the current page.
        </DxcParagraph>
        <Example example={noRoot} />
        <DxcParagraph>Be mindful of your user's cognitive load and collapse breadcrumbs appropriately.</DxcParagraph>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Use breadcrumbs to <strong>support secondary navigation in hierarchical structures</strong>, helping users
          understand where they are and how they got there.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Always include the full path from the homepage or root section to the current page to provide meaningful
          context.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Display <strong>only one breadcrumb trail per page</strong> to avoid confusion and maintain a clear navigation
          hierarchy.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Make all breadcrumb items navigable except for the last one, which should reflect the current page and remain
          non-interactive.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Keep labels concise</strong> and consistent with the destination page titles to avoid ambiguity.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Place breadcrumbs at the top of the page</strong>, just below the main navigation or header, to follow
          common UI patterns and user expectations.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Avoid using breadcrumbs as a replacement for primary navigation — they are meant to complement it, not replace
          menus or sidebars.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          When truncating breadcrumbs due to space constraints,{" "}
          <strong>prioritize showing the first and last items</strong> while collapsing the middle items with a clear
          overflow mechanism.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const BreadcrumbsOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/breadcrumbs/overview/BreadcrumbsOverviewPage.tsx" />
  </DxcFlex>
);

export default BreadcrumbsOverviewPage;

import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import collapsed from "./examples/collapsed";
import noRoot from "./examples/noRoot";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Breadcrumbs are a navigational component used in user interfaces to improve the user experience by providing a
        clear path to previous steps or navigational levels. They typically display the user's current location within
        the hierarchical structure of an application, allowing for easy navigation and improved orientation.
      </DxcParagraph>
    ),
  },
  {
    title: "Collapsed breadcrumbs",
    content: (
      <>
        <DxcParagraph>
          When there are more than four items in the breadcrumbs, the component will collapse the items in a dropdown
          menu to avoid overloading the interface. Users can click on the dropdown to view the hidden items and navigate
          to the desired level.
        </DxcParagraph>
        <DxcParagraph>
          Although this can be configurable, we highly encourage our users to stick with the collapsing at five or more
          items. This was not a random decision, we carefully selected it to ensure the component does not overload the
          interface and remains an effective navigational aid.
        </DxcParagraph>
        <Example example={collapsed} />
        <DxcParagraph>
          Depending on the amount of available space, the collapsed breadcrumbs can be synthesized more by removing the
          root element and displaying only the collapsed dropdown and the current page.
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
          Use breadcrumbs when there are more than two navigational levels within the same hierarchy to help users
          easily navigate and understand their position.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Ensure each label of the breadcrumbs items is informative yet brief, providing users with a clear
          understanding of where each link will take them without overwhelming them with too much text.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Always position breadcrumbs in the top left corner of the interface.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Avoid overloading the component. Including too many items in the breadcrumbs increases the cognitive load of
          the interface and can confuse users. We recommend using the collapsed version of the component when there are
          more than four items.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Don't use breadcrumbs to replace primary navigation or links, as they are intended to serve as a supplementary
          navigation aid.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Refrain from using breadcrumbs to represent the sequence of steps to complete an action. Remember that it is a
          navigation component through levels with an established hierarchy.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const BreadcrumbsOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/breadcrumbs/overview/BreadcrumbsOverviewPage.tsx" />
  </DxcFlex>
);

export default BreadcrumbsOverviewPage;

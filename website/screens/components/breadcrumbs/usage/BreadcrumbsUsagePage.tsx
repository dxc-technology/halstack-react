import {
  DxcBulletedList,
  DxcFlex,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcParagraph>
        Breadcrumbs are a navigational component used in user interfaces to
        improve the user experience by providing a clear path to previous steps
        or navigational levels. They typically display the user's current
        location within the hierarchical structure of an application, allowing
        for easy navigation and improved orientation.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use breadcrumbs when there are more than two navigational levels
              within the same hierarchy to help users easily navigate and
              understand their position.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Ensure each label of the Breadcrumbs items is informative yet
              brief, providing users with a clear understanding of where each
              link will take them without overwhelming them with too much text.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Always position breadcrumbs in the top left corner of the
              interface.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Avoid overloading the component. Including too many items in the
              breadcrumbs increases the cognitive load of the interface and can
              confuse users. We recommend using the collapsed version of the
              component when there are more than four items.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Don't use breadcrumbs to replace primary navigation or links, as
              they are intended to serve as a supplementary navigation aid.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Refrain from using breadcrumbs to represent the sequence of steps
              to complete an action. Remember that it is a navigation component
              through levels with an established hierarchy.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const BreadcrumbsUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/breadcrumbs/usage/BreadcrumbsUsagePage.tsx" />
    </DxcFlex>
  );
};

export default BreadcrumbsUsagePage;

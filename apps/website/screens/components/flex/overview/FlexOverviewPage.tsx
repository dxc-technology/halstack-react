import { DxcFlex, DxcParagraph, DxcBulletedList, DxcLink } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The flex component simplifies the creation of flexible and responsive layouts by abstracting the complexity of
          CSS flexbox. Instead of manually handling flex properties, developers can use this component to build
          structured and adaptable designs with improved readability and maintainability.
        </DxcParagraph>
        <DxcParagraph>
          By leveraging flex, layouts can automatically adjust to different screen sizes and content variations,
          ensuring a more seamless user experience. This documentation covers its functionality, best practices, and key
          concepts to help you use it effectively.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "The flexible box layout module",
    content: (
      <>
        <DxcParagraph>
          The flexible box layout module (usually referred to as <strong>flexbox</strong>) is a CSS layout model that
          provides a more efficient way to organize, align, and distribute space among items within a container, even
          when their size is unknown or dynamic.
        </DxcParagraph>
        <DxcParagraph>
          Below, we share a series of essential links to help you understand and use the flex component correctly. If
          you are not acquainted with these concepts, we strongly recommend taking a moment to review them:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout" newWindow>
              MDN web docs: CSS flexible box layout
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink href="https://web.dev/learn/css/flexbox" newWindow>
              Google web.dev: Flexbox
            </DxcLink>
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const FlexOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/flex/overview/FlexOverviewPage.tsx" />
  </DxcFlex>
);

export default FlexOverviewPage;

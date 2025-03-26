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
          The flex component is designed to provide a more efficient way to organize, align, and distribute space among
          items within a container, even when their size is unknown or dynamic (hence the term 'flex').
        </DxcParagraph>
        <DxcParagraph>
          By leveraging the capabilities of the flex component, developers can create more flexible and responsive
          layouts that adapt to different screen sizes and device types. This powerful tool enables the creation of
          complex structures that can be easily adjusted to accommodate various content types and user interactions.
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
          Below, we share a series of links that we consider essential to understand and use the flexbox model
          correctly. If you are not acquainted with these concepts, we strongly recommend taking a moment to review
          them:
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

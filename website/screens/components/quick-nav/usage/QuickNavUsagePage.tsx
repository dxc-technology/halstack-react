import {
  DxcParagraph,
  DxcBulletedList,
  DxcFlex,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          The quick nav displays the content of a page or section by order of
          hierarchy and headings.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Use quick nav to show users an overview of a page or section&#39;s
            content and allow them to navigate directly to it.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Quick nav is particularly useful for pages with long sections of
            content.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Quick nav works well with tabs when organizing and presenting easily
            navigable content in terms of main and sub-sections.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const QuickNavUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/quick-nav/usage/QuickNavUsagePage.tsx" />
    </DxcFlex>
  );
};

export default QuickNavUsagePage;

import {
  DxcBulletedList,
  DxcStack,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcParagraph>
          Usage considerations about the paginator component:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Use the paginator when the number of elements is affecting the
            system load, or when the screen size grows considerably.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Always place the paginator at the bottom of the data that is being
            divided.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Identify the current page and the number of elements that are being
            displayed.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const PaginatorUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/paginator/usage/PaginatorUsagePage.tsx" />
    </DxcStack>
  );
};

export default PaginatorUsagePage;

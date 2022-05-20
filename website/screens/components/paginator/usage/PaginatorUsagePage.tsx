import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <DxcText as="p">
          Usage considerations about the paginator component:
        </DxcText>
        <DxcList>
          <DxcText>
            Use the paginator when the number of elements is affecting the
            system load, or when the screen size grows considerably.
          </DxcText>
          <DxcText>
            Always place the paginator at the bottom of the data that is being
            divided.
          </DxcText>
          <DxcText>
            Identify the current page and the number of elements that are being
            displayed.
          </DxcText>
        </DxcList>
      </>
    ),
  },
];

const PaginatorUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Usage"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/paginator/usage/PaginatorUsagePage.tsx" />
    </DxcStack>
  );
};

export default PaginatorUsagePage;

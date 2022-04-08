import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import DocFooter from "../../../common/DocFooter";
import HeadingLink from "../../../common/HeadingLink";

const PaginatorUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
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
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/paginator/usage/PaginatorUsagePage.tsx" />
    </DxcStack>
  );
};

export default PaginatorUsagePage;

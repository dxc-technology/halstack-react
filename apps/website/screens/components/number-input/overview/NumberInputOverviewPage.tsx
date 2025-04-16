import { DxcFlex, DxcParagraph, DxcBulletedList } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>Considerations for the use of the number input component:</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Don&#39;t use the number input component for amounts. Use a text input instead.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Always enable typing in the input field.</DxcBulletedList.Item>
          <DxcBulletedList.Item>Avoid using the component when large values are expected.</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const NumberInputOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/number-input/overview/NumberInputOverviewPage.tsx" />
  </DxcFlex>
);

export default NumberInputOverviewPage;

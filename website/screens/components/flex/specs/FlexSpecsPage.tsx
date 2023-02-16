import { DxcFlex } from "@dxc-technology/halstack-react";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import flexColumnSpecs from "./images/flex_column_specs.png";
import flexRowSpecs from "./images/flex_row_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
        <Figure caption="Flex row design specifications">
          <Image
            src={flexRowSpecs}
            alt="File input row design specifications"
          />
        </Figure>
        <Figure caption="Flex column design specifications">
          <Image
            src={flexColumnSpecs}
            alt="File input column design specifications"
          />
        </Figure>
      </>
    ),
  },
];

const FlexSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/file-input/specs/FileInputSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default FlexSpecsPage;

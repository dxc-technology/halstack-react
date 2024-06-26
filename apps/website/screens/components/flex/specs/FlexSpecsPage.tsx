import { DxcFlex } from "@repo/ui";
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
          <Image src={flexRowSpecs} alt="Flex row design specifications" />
        </Figure>
        <Figure caption="Flex column design specifications">
          <Image src={flexColumnSpecs} alt="Flex column design specifications" />
        </Figure>
      </>
    ),
  },
];

const FlexSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/flex/specs/FlexSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default FlexSpecsPage;

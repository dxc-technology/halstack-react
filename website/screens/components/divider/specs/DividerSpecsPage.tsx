import { DxcParagraph, DxcFlex } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import orientationSpecs from "./images/divider_orientation.png";
import colorsSpecs from "./images/divider_colors.png";
import weightSpecs from "./images/divider_weight.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
        <Figure caption="Divider orientation design specifications">
          <Image
            src={orientationSpecs}
            alt="Divider orientation design specifications"
          />
        </Figure>
        <Figure caption="Divider colors design specifications">
          <Image src={colorsSpecs} alt="Divider colors design specifications" />
        </Figure>
        <Figure caption="Divider weight design specifications">
          <Image src={weightSpecs} alt="Divider weight design specifications" />
        </Figure>
      </>
    ),
  },
  {
    title: "Design tokens",
    content: (
      <>
        <DxcParagraph>
          This component currently has no design tokens.
        </DxcParagraph>
      </>
    ),
  },
];

const DividerSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/divider/specs/DividerSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default DividerSpecsPage;

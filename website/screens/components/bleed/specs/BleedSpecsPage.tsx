import {
  DxcLink,
  DxcBulletedList,
  DxcFlex,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import bleedSpecsImage from "./images/bleed_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
        <Figure caption="Design specifications for bleed component">
          <Image
            src={bleedSpecsImage}
            alt="Design specifications for bleed component"
          />
        </Figure>
        <DxcParagraph>
          Negative space varies depending on the REM values and the approach to
          implementation.
        </DxcParagraph>
      </>
    ),
  },
];

const BleedSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/bleed/specs/BleedSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default BleedSpecsPage;

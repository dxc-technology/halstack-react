import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import insetSpecs from "./images/inset_specs.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
        <Figure caption="Inset design specifications">
          <Image src={insetSpecs} alt="Inset design specifications" />
        </Figure>
        <DxcParagraph>
          Positive space varies depending on the REM values and the approach to implementation.
        </DxcParagraph>
      </>
    ),
  },
];

const InsetSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/inset/specs/InsetSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default InsetSpecsPage;

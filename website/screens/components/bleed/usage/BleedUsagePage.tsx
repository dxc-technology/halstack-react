import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcParagraph>
        Bleed properties refer to the scale of the spacing used outside a
        container. The unit commonly used for the bleed scale is REM, which is a
        measurement unit that refers to the font-size of the root element of a
        document. The following values of REM are commonly used in the design
        system: 0, 0.125, 0.25, 0.5, 1, 1.5, 2, 3, 4, and 5.
      </DxcParagraph>
    ),
  },
];

const BleedUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/button/usage/BleedUsagePage.tsx" />
    </DxcFlex>
  );
};

export default BleedUsagePage;

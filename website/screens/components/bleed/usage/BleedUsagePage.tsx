import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcParagraph>
        Bleed properties refer to the scale of the spacing used outside a
        container. The unit commonly used for the bleed scale is REM, which is a
        measurement unit that refers to the font-size of the root element of a
        document. The following values of REM are commonly used in the design
        system: <Code>0</Code>, <Code>0.125</Code>, <Code>0.25</Code>,{" "}
        <Code>0.5</Code>, <Code>1</Code>, <Code>1.5</Code>, <Code>2</Code>,{" "}
        <Code>3</Code>, <Code>4</Code>, and <Code>5</Code>.
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
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/bleed/usage/BleedUsagePage.tsx" />
    </DxcFlex>
  );
};

export default BleedUsagePage;

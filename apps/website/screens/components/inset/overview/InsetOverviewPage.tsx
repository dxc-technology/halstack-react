import { DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Code from "@/common/Code";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Inset properties refer to the scale of the spacing used outside a container. The unit commonly used for the
          inset scale is REM, which is a measurement unit that refers to the font-size of the root element of a
          document.
        </DxcParagraph>
        <DxcParagraph>
          The following values of REM are commonly used in the design system: <Code>0</Code>, <Code>0.125</Code>,{" "}
          <Code>0.25</Code>, <Code>0.5</Code>, <Code>1</Code>, <Code>1.5</Code>, <Code>2</Code>, <Code>3</Code>,{" "}
          <Code>4</Code>, and <Code>5</Code>.
        </DxcParagraph>
      </>
    ),
  },
];

const InsetOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/inset/overview/InsetOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default InsetOverviewPage;

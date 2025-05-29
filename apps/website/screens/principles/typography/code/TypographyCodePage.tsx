import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcFlex } from "@dxc-technology/halstack-react";
import typographyBasicUsage from "./examples/typographyBasicUsage";
import paragraphBasicUsage from "./examples/paragraphBasicUsage";
import bulletedListBasicUsage from "./examples/bulletedListBasicUsage";
import headingBasicUsage from "./examples/headingBasicUsage";

const sections = [
  {
    title: "Examples",
    subSections: [
      {
        title: "Heading basic usage",
        content: <Example example={headingBasicUsage} defaultIsVisible />,
      },
      {
        title: "Paragraph basic usage",
        content: <Example example={paragraphBasicUsage} defaultIsVisible />,
      },
      {
        title: "Bulleted list basic usage",
        content: <Example example={bulletedListBasicUsage} defaultIsVisible />,
      },
      {
        title: "Typography basic usage",
        content: <Example example={typographyBasicUsage} defaultIsVisible />,
      },
    ],
  },
];

const TypographyCodePage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/principles/typography/code/TypographyCodePage.tsx" />
  </DxcFlex>
);

export default TypographyCodePage;

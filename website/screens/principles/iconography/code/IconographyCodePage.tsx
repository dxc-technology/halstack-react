//import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
//import Example from "@/common/example/Example";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import { DxcFlex } from "@dxc-technology/halstack-react";
import buttonExample from "./examples/ButtonExample";
import actionExample from "./examples/ActionIconExample";
import Example from "@/common/example/Example";

const sections = [
  {
    title: "Examples",
    subSections: [
      {
        title: "Icons in Buttons",
        content: <Example example={buttonExample} defaultIsVisible />,
      },
      {
        title: "ActionIcon with Filled Icon",
        content: <Example example={actionExample} defaultIsVisible />,
      }
    ]
  },
];

const IconographyCodePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/principles/iconography/code/IconographyCodePage.tsx" />
    </DxcFlex>
  );
};

export default IconographyCodePage;

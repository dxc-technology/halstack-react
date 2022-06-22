import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import iconUsage from "./examples/iconUsage";
import Example from "@/common/example/Example";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          Provide visual cue to suggest clickability for all types of links.
        </DxcText>
        <DxcText>
          Distinguish the visited and unvisited for navigation links.
        </DxcText>
        <DxcText>Clearly explain where the link will take you to.</DxcText>
        <DxcText>Front-load the most relevant keyword.</DxcText>
      </DxcList>
    ),
  },
  {
    title: "Icon usage",
    content: (
      <>
        <DxcText as="p">
          An icon can be used either in the normal or underlined mode to
          represent more graphical the purpose of the link, placing the icon
          before or after the link that is representing.
        </DxcText>
        <Example example={iconUsage}></Example>
      </>
    ),
  },
];

const LinkUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/link/usage/LinkUsagePage.tsx" />
    </DxcStack>
  );
};

export default LinkUsagePage;

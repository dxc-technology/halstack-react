import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Image from "@/common/Image";
import linkStatesIcon from "./images/link_states_icon.png";

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
        <Figure caption="Icon usage for the link component">
          <Image src={linkStatesIcon} alt="Icon usage for the link component" />
        </Figure>
      </>
    ),
  },
];

const LinkUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Usage"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/accordion/usage/AccordionUsagePage.tsx" />
    </DxcStack>
  );
};

export default LinkUsagePage;

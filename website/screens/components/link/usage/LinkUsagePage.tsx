import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import HeadingLink from "@/common/HeadingLink";
import Image from "@/common/Image";
import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import linkStatesIcon from "./images/link_states_icon.png";

const LinkUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
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
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Icon usage</HeadingLink>
        <DxcText as="p">
          An icon can be used either in the normal or underlined mode to
          represent more graphical the purpose of the link, placing the icon
          before or after the link that is representing.
        </DxcText>
        <Figure caption="Icon usage for the link component">
          <Image src={linkStatesIcon} alt="Icon usage for the link component" />
        </Figure>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/link/usage/LinkUsagePage.tsx" />
    </DxcStack>
  );
};

export default LinkUsagePage;

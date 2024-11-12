import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import iconUsage from "./examples/iconUsage";
import Example from "@/common/example/Example";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>Provide visual cue to suggest clickability for all types of links.</DxcBulletedList.Item>
        <DxcBulletedList.Item>Distinguish the visited and unvisited for navigation links.</DxcBulletedList.Item>
        <DxcBulletedList.Item>Clearly explain where the link will take you to.</DxcBulletedList.Item>
        <DxcBulletedList.Item>Front-load the most relevant keyword.</DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Icon usage",
    content: (
      <>
        <DxcParagraph>
          An icon can be used either in the normal or underlined mode to represent more graphical the purpose of the
          link, placing the icon before or after the link that is representing.
        </DxcParagraph>
        <Example example={iconUsage}></Example>
      </>
    ),
  },
];

const LinkUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/link/usage/LinkUsagePage.tsx" />
    </DxcFlex>
  );
};

export default LinkUsagePage;

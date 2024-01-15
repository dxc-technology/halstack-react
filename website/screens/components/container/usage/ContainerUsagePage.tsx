import {
  DxcParagraph,
  DxcFlex,
  DxcBulletedList,
} from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcParagraph>
        The primary function of a container is to structure and group other
        components or contents that are related to each other, allowing certain
        styles of customization to obtain more cohesive and consistent
        interfaces.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use a container to group and organize related content within a
              specific section of a page or layout.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Set size, spacing, and margins that are consistent by applying the
              box model properties.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Control the depth of the different elements of your UI by
              customizing the container’s box shadow.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Change and custom border styles of the container to match the rest
              of your interface design.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use the container to build components without first making sure
              that there is no other, more semantic, component in Halstack that
              you can use instead.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "The Box Model",
    content: (
      <>
        <DxcParagraph>Container my friend.</DxcParagraph>
      </>
    ),
  },
];

const ContainerUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/container/usage/ContainerUsagePage.tsx" />
    </DxcFlex>
  );
};

export default ContainerUsagePage;

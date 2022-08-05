import { DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Example from "@/common/example/Example";
import iconUsage from "./examples/iconUsage";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          Use the tag component to highlight properties of a section that want
          to remark.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Make consistent use of the component accross the application.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Be responsible of the use of background color and icons.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          If there are multiple tags, the space between them should be at least
          16px.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
  {
    title: "Icon usage",
    content: (
      <>
        <Example example={iconUsage} />
        <DxcBulletedList>
          <DxcBulletedList.Item>
            The tag can be displayed with icon and label or only icon.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The icon can be placed before or after.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The icon background color can be defined with the
            <Code>iconBgColor</Code> component property.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const TagUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/tag/usage/TagUsagePage.tsx" />
    </DxcFlex>
  );
};

export default TagUsagePage;

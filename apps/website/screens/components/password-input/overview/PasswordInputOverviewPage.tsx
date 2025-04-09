import { DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";

const sections = [
  {
    title: "Introduction",
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use the component password input when the value expected is a password and need to be secured.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>Provide the requirements in the helper text.</DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Show the validation of the password input until the component loses the focus.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>Disable the copy/paste input functionality.</DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const PasswordInputOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/password-input/overview/PasswordInputOverviewPage.tsx" />
  </DxcFlex>
);

export default PasswordInputOverviewPage;

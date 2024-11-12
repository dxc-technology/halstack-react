import { DxcParagraph, DxcFlex, DxcBulletedList, DxcLink } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcParagraph>
        The primary function of a container is to structure and group other components or contents that are related to
        each other, allowing certain styles of customization to obtain more cohesive and consistent interfaces.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use a container to group and organize related content within a specific section of a page or layout.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Set size, spacing, and margins that are consistent by applying the box model properties.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Control the depth of the different elements of your UI by customizing the container's box shadow.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Change and custom border styles of the container to match the rest of your interface design.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Use the container to build components without first making sure that there is no other, more semantic,
              component in Halstack that you can use instead.
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
        <DxcParagraph>
          Everything in CSS has a box around it. Understanding these boxes is key to being able to create more complex
          layouts for your application.
        </DxcParagraph>
        <DxcParagraph>
          Below, we share a series of links that we consider essential to understand and use the Container component
          correctly. If you are not acquainted with these concepts, we strongly recommend taking a moment to review
          them:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            The CSS Box Model
            <DxcBulletedList type="circle">
              <DxcBulletedList.Item>
                <DxcLink
                  href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model"
                  newWindow
                >
                  MDN
                </DxcLink>
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <DxcLink href="https://web.dev/learn/css/box-model" newWindow>
                  web.dev
                </DxcLink>
                , by Google.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink
              href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders"
              newWindow
            >
              Backgrounds and borders
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink
              href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Overflowing_content"
              newWindow
            >
              Overflowing content
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink
              href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS"
              newWindow
            >
              Sizing items in CSS
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing"
              newWindow
            >
              Mastering margin collapsing
            </DxcLink>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning" newWindow>
              Positioning
            </DxcLink>
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const ContainerUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/container/usage/ContainerUsagePage.tsx" />
    </DxcFlex>
  );
};

export default ContainerUsagePage;

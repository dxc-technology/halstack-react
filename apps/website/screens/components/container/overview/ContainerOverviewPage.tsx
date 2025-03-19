import { DxcParagraph, DxcFlex, DxcBulletedList, DxcLink } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The container component represents the box model inside the Halstack Design System. It is a general-purpose
        container that allows users to build their own components, UI elements, and layouts. Being generic in nature, it
        can be "over-used", so it's important to consider situations where more specific and expressive components could
        be used.
      </DxcParagraph>
    ),
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
  {
    title: "Best practices",
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
        <DxcBulletedList.Item>
          <strong>
            Don't use the container to build components without first making sure that there is no other, more specific,
            Halstack component that could be used instead.
          </strong>
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const ContainerOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/container/overview/ContainerOverviewPage.tsx" />
  </DxcFlex>
);

export default ContainerOverviewPage;

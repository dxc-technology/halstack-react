import { DxcParagraph, DxcFlex, DxcBulletedList, DxcLink, DxcInset } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The Halstack's container component provides a structured way to manage layout and spacing within the Halstack
          Design System. It allows for controlled use of design tokens such as spacing, borders, and shadows, ensuring
          consistency across the UI.
        </DxcParagraph>
        <DxcParagraph>
          Being generic in nature, it can be overused, so it's important to consider situations where more specific and
          expressive components could be used.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "The box model",
    content: (
      <>
        <DxcParagraph>
          Everything in CSS has a box around it. Understanding these boxes is key to being able to create more complex
          layouts for your application.
        </DxcParagraph>
        <DxcParagraph>
          Below, we share a series of essential links to help you understand and use the container component correctly.
          If you are not acquainted with these concepts, we strongly recommend taking a moment to review them:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <DxcLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_box_model" newWindow>
              MDN web docs: CSS box model
            </DxcLink>
            <DxcInset vertical="var(--spacing-padding-xs)">
              <DxcBulletedList type="circle">
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
                  <DxcLink href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning" newWindow>
                    Positioning
                  </DxcLink>
                </DxcBulletedList.Item>
              </DxcBulletedList>
            </DxcInset>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <DxcLink href="https://web.dev/learn/css/box-model" newWindow>
              Google web.dev: Box model
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
          Customize border styles of the container to match the rest of your interface design.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>
            Don't use the container to build components without first ensuring that there isn't a more specific,
            semantic Halstack component that could be used instead.
          </strong>
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>
            Don't use the container to create complex layouts when more suitable components are available.
          </strong>{" "}
          Use the{" "}
          <Link href="/components/flex" passHref legacyBehavior>
            <DxcLink>flex</DxcLink>
          </Link>{" "}
          and{" "}
          <Link href="/components/grid" passHref legacyBehavior>
            <DxcLink>grid</DxcLink>
          </Link>{" "}
          components to create those layouts.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Whenever possible, <strong>try to use the design tokens</strong> provided by the Halstack Design System, even
          though the component allows any value.
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

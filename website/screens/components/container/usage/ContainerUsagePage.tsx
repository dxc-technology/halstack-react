import {
  DxcParagraph,
  DxcFlex,
  DxcBulletedList,
  DxcTable,
  DxcLink,
} from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Code from "@/common/Code";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import boxModel from "./images/box_model.png";
import Link from "next/link";
import Example from "@/common/example/Example";
import defaultBoxModel from "./examples/defaultBoxModel";
import alternateBoxModel from "./examples/alternateBoxModel";

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
              customizing the container's box shadow.
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
        <DxcParagraph>
          Everything in CSS has a box around it. Understanding these boxes is
          key to being able to create more complex layouts for your application.
          In this section, we will take a look at the key aspects of the CSS Box
          Model. You'll get an understanding of how it works and the terminology
          that relates to it.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Display types",
        content: (
          <>
            <DxcParagraph>
              In general, you can set various values for the display type using
              the <Code>display</Code> property. Before using each of them, it
              is crucial to comprehend their individual characteristics and
              behaviors.
            </DxcParagraph>
          </>
        ),
        subSections: [
          {
            title: "Outer display",
            content: (
              <>
                <DxcParagraph>
                  There are two types of outer display: <strong>block</strong>{" "}
                  and <strong>inline</strong>. The block elements are formatted
                  visually as blocks. They begin on a new line and take up the
                  full width of the parent element. The most common examples of
                  block elements are <Code>div</Code> and <Code>p</Code>. Their
                  main characteristics are:
                </DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    They respect the width and height properties.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    Padding, margin and border will cause other elements to be
                    pushed away from the box.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    If width is not specified, the box will extend in the inline
                    direction to fill the space available in its container. In
                    most cases, the box will become as wide as its container,
                    filling up 100% of the space available.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    If height is not specified, the box will be sized according
                    to its content.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
                <DxcParagraph>
                  The inline elements are formatted visually as inline elements
                  (like <Code>span</Code> or <Code>a</Code>). They do not start
                  on a new line and only take up as much width as necessary.
                  Their main characteristics are:
                </DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    They do not respect the width and height properties.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    Padding, margin and border will not cause other elements to
                    be pushed away from the box.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    If width is not specified, the box will shrink to fit its
                    content.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    When padding, margins, and borders are applied to the left
                    and right sides, they cause the displacement of nearby
                    inline boxes, influencing their position relative to the
                    current box.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
                <DxcParagraph>
                  The <strong>Container</strong> component allows you to change
                  this type of display, so use it carefully and try to fully
                  understand its connotations before applying one value or
                  another.
                </DxcParagraph>
              </>
            ),
          },
          {
            title: "Inner display",
            content: (
              <>
                <DxcParagraph>
                  Boxes also feature an inner display type that determines the
                  arrangement of elements contained within the box. In the
                  absence of specific instructions, the default behavior
                  involves arranging elements inside a box in the normal flow,
                  functioning either as block or inline boxes.
                </DxcParagraph>
                <DxcParagraph>
                  Changing the behaviour of the inner display won't affect how
                  the box behaves in relation to the rest of the elements in the
                  page. For example, if you change the inner display to{" "}
                  <Code>flex</Code>, the box will still behave as a block
                  element.
                </DxcParagraph>
                <DxcParagraph>
                  To change the inner display type, you must use other more
                  semantic components of Halstack, such as the{" "}
                  <Link href="/components/flex/" passHref legacyBehavior>
                    <DxcLink>Flex</DxcLink>
                  </Link>{" "}
                  or{" "}
                  <Link href="/components/grid/" passHref legacyBehavior>
                    <DxcLink>Grid</DxcLink>
                  </Link>
                  .
                </DxcParagraph>
              </>
            ),
          },
        ],
      },
      {
        title: "Parts of a Box",
        content: (
          <>
            <DxcParagraph>
              The CSS box model serves as a container enveloping each HTML
              element. It comprises four distinct layers: margins, borders,
              padding, and the actual content. The illustration below visually
              delineates each of these layers:
            </DxcParagraph>
            <Figure caption="A diagram with the layers of a box">
              <Image src={boxModel} alt="A diagram with the layers of a box" />
            </Figure>
            <DxcTable>
              <thead>
                <tr>
                  <th>Layer</th>
                  <th>Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Margin</strong>
                  </td>
                  <td>
                    The margin is the outermost layer, wrapping the content,
                    padding, and border as whitespace between this box and other
                    elements. You can use <Code>margin</Code> prop to style this
                    layer.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Border</strong>
                  </td>
                  <td>
                    The border sits between the padding and margin as a line
                    around the content. You can use <Code>border</Code> prop to
                    style this layer.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Padding</strong>
                  </td>
                  <td>
                    The padding is the space between the content and the border.
                    You can us <Code>padding</Code> prop to style this layer.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Content</strong>
                  </td>
                  <td>
                    The area where your content is displayed. Use properties
                    like <Code>width</Code> and <Code>height</Code> among others
                    to size this layer.
                  </td>
                </tr>
              </tbody>
            </DxcTable>
          </>
        ),
      },
      {
        title: "The Standard Box Model",
        content: (
          <>
            <DxcParagraph>
              The standard box model is the default behaviour of the browser to
              calculate the width and height of an element. The width and height
              of an element are calculated by adding the content width and
              height to the padding, border, and margin of the element.
            </DxcParagraph>
            <DxcParagraph>
              For example, in the container below the actual space taken up by
              the box will be <strong>324px wide</strong> (300 of content's
              width + 8 of padding top + 8 of padding bottom + 4 of border top +
              4 of border bottom) and <strong>174px high</strong> (150 of
              content's height + 8 of padding top + 8 of padding bottom + 4 of
              border top + 4 of border bottom). Use browser DevTools to view the
              box model calculation.
            </DxcParagraph>
            <Example example={defaultBoxModel} />
          </>
        ),
      },
      {
        title: "The Alternate Box Model",
        content: (
          <>
            <DxcParagraph>
              In the alternative box model, the <Code>width</Code> corresponds
              to the visible box's width on the page. The content area width is
              derived by subtracting the combined width of padding and border
              from this total width (refer to the image below). It is not
              necessary to sum up the border and padding dimensions to ascertain
              the actual size of the box.
            </DxcParagraph>
            <DxcParagraph>
              To use this box model, set the <Code>boxSizing</Code> prop to{" "}
              <Code>border-box</Code>.
            </DxcParagraph>
            <DxcParagraph>
              For example, in the container below the actual space taken up by
              the box will be <strong>300px wide</strong> (276 of content's
              width + 8 of padding top + 8 of padding bottom + 4 of border top +
              4 of border bottom) and <strong>150px high</strong> (126 of
              content's height + 8 of padding top + 8 of padding bottom + 4 of
              border top + 4 of border bottom). Use browser DevTools to view the
              box model calculation.
            </DxcParagraph>
            <Example example={alternateBoxModel} />
          </>
        ),
      },
    ],
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

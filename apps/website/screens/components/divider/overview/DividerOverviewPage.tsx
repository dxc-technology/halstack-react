import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Image from "@/common/Image";
import anatomy from "./images/divider_anatomy.png";
import weight from "./images/divider_weight.png";
import color from "./images/divider_color.png";
import orientation from "./images/divider_orientation.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The divider component is a simple yet effective element for visually separating content within an interface. It
        helps improve readability and organization by creating clear distinctions between sections or groups of
        information. Our divider also has different weights and colors, allowing it to structure different layouts,
        enhance hierarchy, and guide users through content seamlessly without adding visual clutter.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Divider's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Divider:</strong> a thin, horizontal or vertical rule that visually separates content sections.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Configuring a divider",
    content: (
      <>
        <DxcParagraph>
          Depending on the context in which it is used, the divider can have different weights, colors, and orientations
          to better suit the content it separates.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Weight",
        content: (
          <>
            <Image src={weight} alt="Divider's weight" />
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Regular</strong> (1px of weight): ideal for subtle divisions within the same section,
                maintaining a clean structure without being intrusive. It is used in layouts with related content or in
                lists where a light separation is needed.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Divider</strong> (2px of weight): useful for creating a more noticeable separation between
                sections or distinct content groups, reinforcing visual organization. It can be applied to significant
                context changes within a page or as a separator for grouped information headers.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Color",
        content: (
          <>
            <Image src={color} alt="Divider's color" />
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Light:</strong> best suited for dark backgrounds, providing a subtle yet clear separation
                without overwhelming the interface.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Medium:</strong> a balanced option that works well in most cases, offering a neutral and
                adaptable separation that maintains readability.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Dark:</strong> ideal for light backgrounds or when a stronger visual distinction is needed to
                emphasize section breaks.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Orientation",
        content: (
          <>
            <Image src={orientation} alt="Divider's orientation" />
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Horizontal:</strong> used to separate sections within a page, creating clear distinctions
                between content blocks, lists, or form fields. It helps establish a visual flow and hierarchy.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Vertical:</strong> useful for dividing content side by side, such as in multi-column layouts,
                toolbars, or menus. It helps guide the user's eye and structure information efficiently.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
];

const DividerOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/divider/overview/DividerOverviewPage.tsx" />
  </DxcFlex>
);

export default DividerOverviewPage;

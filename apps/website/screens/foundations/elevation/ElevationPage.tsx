import { DxcHeading, DxcFlex, DxcTable, DxcParagraph, DxcBulletedList } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import Code from "@/common/Code";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import shadows from "./images/shadows.jpg";
import Figure from "@/common/Figure";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Shadows are a fundamental part of visual design systems. In Halstack, we use them, along with colors, to{" "}
          <strong>create depth and layering on the interface</strong>. They help users distinguish between surfaces,
          understand component hierarchy, and focus their attention on key elements.
        </DxcParagraph>
        <DxcParagraph>
          By simulating how light interacts with objects, shadows reinforce a clear spatial structure in digital
          interfaces, much like in the physical world. Whether it's emphasizing a modal over a background or giving
          subtle prominence to a card, elevation contributes both aesthetically and functionally to the user experience.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Shadow tokens",
    content: (
      <>
        <DxcParagraph>
          Halstack provides a set of predefined shadow tokens optimized for clarity and performance across our products.
          Each token corresponds to a specific elevation level with calibrated values for offset, blur, and color
          transparency.
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Token</th>
              <th>X position</th>
              <th>Y position</th>
              <th>Blur</th>
              <th>Spread</th>
              <th>color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>shadow-100</Code>
              </td>
              <td>0px</td>
              <td>2px</td>
              <td>2px</td>
              <td>0px</td>
              <td>
                <Code>color-grey-400-a</Code>
              </td>
            </tr>
            <tr>
              <td>
                <Code>shadow-200</Code>
              </td>
              <td>0px</td>
              <td>12px</td>
              <td>12px</td>
              <td>0px</td>
              <td>
                <Code>color-grey-300-a</Code>
              </td>
            </tr>
            <tr>
              <td>
                <Code>shadow-300</Code>
              </td>
              <td>0px</td>
              <td>24px</td>
              <td>24px</td>
              <td>0px</td>
              <td>
                <Code>color-grey-300-a</Code>
              </td>
            </tr>
            <tr>
              <td>
                <Code>shadow-400</Code>
              </td>
              <td>0px</td>
              <td>48px</td>
              <td>48px</td>
              <td>0px</td>
              <td>
                <Code>color-grey-300-a</Code>
              </td>
            </tr>
          </tbody>
        </DxcTable>
        <Figure caption="Halstack shadows applied to containers">
          <Image src={shadows} alt="Halstack shadows applied to containers" />
        </Figure>
      </>
    ),
  },
  {
    title: "Shadow guidelines by scale",
    content: (
      <>
        <DxcParagraph>
          Each shadow style is designed to serve a different level of emphasis or structural role in the UI. Below are
          some typical use cases per shadow level:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>shadow-100</strong>: creates subtle separation from the background without drawing too much
            attention, such as small UI elements like buttons, input fields, or lightweight cards.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>shadow-200</strong>: signals a slight lift and draws more attention than shadow-100, especially
            useful for elements that temporarily appear above the rest of the UI; such as cards, dashboard, popovers, or
            dropdowns.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>shadow-300</strong>: used for modals, bottom sheets, or floating panels; as it clearly separates
            important, interactive components from the rest of the content.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>shadow-400</strong>: provides the strongest visual depth to ensure clear hierarchy and focus in the
            UI. A few examples where this shadow can be applied are full-screen overlays, onboarding dialogs, or focused
            system alerts.
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
          <strong>Use elevation purposefully</strong>: shadows are not decorative. Apply them to communicate visual
          hierarchy and component behavior.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Don't overlay too much</strong>: avoid stacking multiple shadows or using high-intensity shadows on
          too many components, as this leads to visual clutter.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Stay within the core scale</strong>: Use only the defined shadow tokens unless there's a validated
          need for a custom elevation.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid using shadows as borders</strong>: If you need to separate elements or define boundaries, use
          spacing or a border token instead.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Consistency across themes</strong>: Our shadow tokens are designed to adapt well across themes and
          backgrounds. Avoid tweaking individual values unless strictly necessary.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

export default function ElevationPage() {
  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <DxcHeading level={1} text="Elevation" />
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/foundations/elevation/ElevationPage.tsx" />
    </DxcFlex>
  );
}

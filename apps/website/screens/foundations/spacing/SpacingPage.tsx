import { DxcHeading, DxcFlex, DxcTable, DxcParagraph, DxcBulletedList } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import Code from "@/common/Code";
import QuickNavContainer from "@/common/QuickNavContainer";
import PageHeading from "@/common/PageHeading";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import spacings from "./images/spacings.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Spacing helps <strong>establish relationships between elements</strong> and gives users visual cues that
          improve comprehension and interaction. Good spacing reduces cognitive load, improves accessibility, and
          creates cleaner, more coherent interfaces.
        </DxcParagraph>
        <DxcParagraph>
          We use a <strong>scale-based spacing system</strong> derived from a base unit of <Code>4px</Code>. All
          spacing—margins, padding, and element gaps—is applied using these defined increments. This promotes
          consistency across UI layouts and helps ensure design and code stay aligned.
        </DxcParagraph>
        <DxcParagraph>
          We recommend using spacing tokens instead of hard-coded pixel values to maintain design consistency and
          scalability.
        </DxcParagraph>
        <Image src={spacings} alt="Spacings" />
      </>
    ),
  },
  {
    title: "Spacing tokens",
    content: (
      <>
        <DxcParagraph>
          Our spacing scale is a set of predefined values based on multiples of 2px. This modular system allows
          designers and developers to build layouts that are consistent and responsive.
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Core token</th>
              <th>Value (px)</th>
              <th>Gap token</th>
              <th>Padding token</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>dimensions/0</Code>
              </td>
              <td>0px</td>
              <td>
                <Code>spacing/gap/none</Code>
              </td>
              <td>
                <Code>spacing/padding/none</Code>
              </td>
            </tr>
            <tr>
              <td>
                <Code>dimensions/2</Code>
              </td>
              <td>2px</td>
              <td>
                <Code>spacing/gap/xxs</Code>
              </td>
              <td>
                <Code>spacing/padding/xxxs</Code>
              </td>
            </tr>
            <tr>
              <td>
                <Code>dimensions/4</Code>
              </td>
              <td>4px</td>
              <td>
                <Code>spacing/gap/xs</Code>
              </td>
              <td>
                <Code>spacing/padding/xxs</Code>
              </td>
            </tr>
            <tr>
              <td>
                <Code>dimensions/8</Code>
              </td>
              <td>8px</td>
              <td>
                <Code>spacing/gap/s</Code>
              </td>
              <td>
                <Code>spacing/padding/xs</Code>
              </td>
            </tr>
            <tr>
              <td>
                <Code>dimensions/12</Code>
              </td>
              <td>12px</td>
              <td>
                <Code>spacing/gap/m</Code>
              </td>
              <td>
                <Code>spacing/padding/s</Code>
              </td>
            </tr>
            <tr>
              <td>
                <Code>dimensions/16</Code>
              </td>
              <td>16px</td>
              <td>
                <Code>spacing/gap/ml</Code>
              </td>
              <td>
                <Code>spacing/padding/m</Code>
              </td>
            </tr>
            <tr>
              <td>
                <Code>dimensions/20</Code>
              </td>
              <td>20px</td>
              <td>-</td>
              <td>
                <Code>spacing/padding/ml</Code>
              </td>
            </tr>
            <tr>
              <td>
                <Code>dimensions/24</Code>
              </td>
              <td>24px</td>
              <td>
                <Code>spacing/gap/l</Code>
              </td>
              <td>
                <Code>spacing/padding/l</Code>
              </td>
            </tr>
            <tr>
              <td>
                <Code>dimensions/32</Code>
              </td>
              <td>32px</td>
              <td>
                <Code>spacing/gap/xl</Code>
              </td>
              <td>
                <Code>spacing/padding/xl</Code>
              </td>
            </tr>
            <tr>
              <td>
                <Code>dimensions/40</Code>
              </td>
              <td>40px</td>
              <td>-</td>
              <td>
                <Code>spacing/padding/xxl</Code>
              </td>
            </tr>
            <tr>
              <td>
                <Code>dimensions/48</Code>
              </td>
              <td>48px</td>
              <td>
                <Code>spacing/gap/xxl</Code>
              </td>
              <td>-</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Spacing guidelines by scale",
    content: (
      <DxcParagraph>
        Our spacing system is built around tokens that represent consistent pixel values. We can group these into small,
        medium, and large ranges to guide their application in different UI contexts—from tight, compact interfaces to
        broad layout structures.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Small spacing (0px–8px)",
        content: (
          <>
            <DxcParagraph>
              For <strong>fine-grained spacing</strong> adjustments in compact UI elements where space is tight but
              still important.
            </DxcParagraph>
            <DxcParagraph>
              <strong>Common uses</strong>:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>Spacing between small icons and adjacent text.</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Internal padding for tight UI elements like badges, icon buttons, or dense table cells.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>Narrow gaps between repeating elements.</DxcBulletedList.Item>
              <DxcBulletedList.Item>Padding inside input fields and controls.</DxcBulletedList.Item>
              <DxcBulletedList.Item>Vertical separation of elements within compact cards.</DxcBulletedList.Item>
              <DxcBulletedList.Item>Offset between a trigger element and its overlay.</DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Medium spacing (12px–24px)",
        content: (
          <>
            <DxcParagraph>
              For <strong>more relaxed spacing</strong> in moderately sized components or to separate content within
              larger elements.
            </DxcParagraph>
            <DxcParagraph>
              <strong>Common uses</strong>:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>Padding inside medium-to-large components.</DxcBulletedList.Item>
              <DxcBulletedList.Item>Space between a large icon and its associated content.</DxcBulletedList.Item>
              <DxcBulletedList.Item>Vertical rhythm between grouped elements in cards.</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Gaps between elements in components that are not densely packed, offering a bit more breathing room.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Large spacing (32px–48px)",
        content: (
          <>
            <DxcParagraph>
              To manage <strong>spacing at a layout or structural level</strong>, where content needs to feel clearly
              separated or grouped.
            </DxcParagraph>
            <DxcParagraph>
              <strong>Common uses</strong>:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Space between sections or major content areas on a page (e.g. from page top to header).
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>Aligning content within wide containers or large components.</DxcBulletedList.Item>
              <DxcBulletedList.Item>Creating structure in grid systems or responsive layouts.</DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Responsive behavior",
    content: (
      <>
        <DxcParagraph>
          Both fixed and fluid spacing behaviors play an important role in determining the placement of components when
          adjusting screen sizes.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Fixed spacing</strong> can affect an application in ways such as when a minimum width is reached,
            scrollbars can appear on the application or screen elements can stop adjusting based on available space.
            This approach can be used for more structured layouts where it is important to maintain a fixed structure in
            order to display information properly.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Fluid spacing</strong> is often more suited to smaller screens where elements have more flexibility
            to move around the screen. This can be seen in examples such as reducing the number of columns in a form
            from two columns into just one or the form of components that follow a line-breaking behavior allowing for a
            more vertical flowing approach to component layouts.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcParagraph>
          To build clean, accessible, and maintainable interfaces, apply these spacing principles:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Design on a base grid</strong>
            <DxcParagraph>
              All spacing values should align to the 4px grid. This ensures rhythm and consistency across screens.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Group related content with consistent spacing</strong>
            <DxcParagraph>
              Use consistent vertical and horizontal spacing between related items like form fields, titles and
              descriptions.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Avoid excessive whitespace</strong>
            <DxcParagraph>
              Too much spacing can break content relationships and force users to scan longer distances.
            </DxcParagraph>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Test across viewports</strong>
            <DxcParagraph>
              Ensure spacing remains functional and clear on mobile, tablet, and desktop. Avoid overly tight or loose
              layouts.
            </DxcParagraph>
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

export default function SpacingPage() {
  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <DxcHeading level={1} text="Spacing" />
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/foundations/SpacingPage.tsx" />
    </DxcFlex>
  );
}

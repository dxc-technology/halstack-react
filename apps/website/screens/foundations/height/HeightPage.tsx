import { DxcFlex, DxcParagraph, DxcHeading, DxcBulletedList, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import PageHeading from "@/common/PageHeading";
import Code from "@/common/Code";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          In Halstack, dimensions refer specifically to the <strong>height</strong> of UI elements such as buttons,
          inputs, icons, and other interactive components. While spacing controls the{" "}
          <strong>distance between elements</strong>, dimensions define the <strong>vertical size</strong> of the
          elements themselves.
        </DxcParagraph>
        <DxcParagraph>
          Maintaining consistent height values across the interface ensures a predictable rhythm, enhances scannability,
          and simplifies the construction of flexible, responsive layouts.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Purpose",
    content: (
      <>
        <DxcParagraph>
          Our scale was designed with a balance between flexibility and simplicity. It follows a loosely exponential
          progression that prioritizes <strong>touch accessibility</strong>, <strong>icon alignment</strong> and{" "}
          <strong>component density levels</strong>. Although not every element of our Design System follows a fixed
          height structure, keeping the system as <strong>modular and progressive</strong> as we can, designers and
          developers can reason more easily about vertical alignment and component consistency.
        </DxcParagraph>
        <DxcParagraph>
          In summary, we defined a limited set of height values that serve as our <strong>core dimension tokens</strong>
          . These values are chosen to:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>Align with our spacing scale (multiples of 4px where possible)</DxcBulletedList.Item>
          <DxcBulletedList.Item>Support common component patterns</DxcBulletedList.Item>
          <DxcBulletedList.Item>Create visual consistency and predictable touch targets</DxcBulletedList.Item>
          <DxcBulletedList.Item>Allow cross-platform scalability and design token standardization</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Core height tokens",
    content: (
      <DxcTable>
        <thead>
          <tr>
            <th>Value</th>
            <th>Token</th>
            <th>Typical usage examples</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12px</td>
            <td>
              <Code>dimensions/12</Code>
            </td>
            <td>Small icons, badges, or inline indicators</td>
          </tr>
          <tr>
            <td>16px</td>
            <td>
              <Code>dimensions/16</Code>
            </td>
            <td>Smaller icons size</td>
          </tr>
          <tr>
            <td>20px</td>
            <td>
              <Code>dimensions/20</Code>
            </td>
            <td>Small buttons or compact UI elements</td>
          </tr>
          <tr>
            <td>24px</td>
            <td>
              <Code>dimensions/24</Code>
            </td>
            <td>Standard icon size and input height for dense forms</td>
          </tr>
          <tr>
            <td>32px</td>
            <td>
              <Code>dimensions/32</Code>
            </td>
            <td>Default button/input height in compact UIs</td>
          </tr>
          <tr>
            <td>36px</td>
            <td>
              <Code>dimensions/36</Code>
            </td>
            <td>Secondary button/input variant</td>
          </tr>
          <tr>
            <td>40px</td>
            <td>
              <Code>dimensions/40</Code>
            </td>
            <td>Default form element height</td>
          </tr>
          <tr>
            <td>48px</td>
            <td>
              <Code>dimensions/48</Code>
            </td>
            <td>Primary button, larger input elements</td>
          </tr>
          <tr>
            <td>56px</td>
            <td>
              <Code>dimensions/56</Code>
            </td>
            <td>High emphasis elements, banners</td>
          </tr>
        </tbody>
      </DxcTable>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Stick to the core</strong>: when designing, try to stick as much as possible with our height tokens to
          create consistent layouts across products. Avoid arbitrary custom heights unless strictly necessary.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Respect touch targets</strong>: Ensure interactive elements like buttons and inputs are at least
          <Code>height-40</Code> for accessibility and usability.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Align height with layout spacing</strong>: Use the same spacing unit system (<Code>spacing-4</Code>,{" "}
          <Code>spacing-8</Code>, etc.) to vertically pad elements so they integrate seamlessly.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Don't scale height independently</strong>: Avoid resizing components vertically in isolation without
          updating spacing or content padding.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use tokens in code and design</strong>: Reference tokens (e.g., <Code>height-40</Code>) directly in
          CSS or Figma components for consistency and easier maintenance.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use for more than buttons</strong>: These values apply to any vertically bound element, not just
          buttons and inputs, but also chips, icons, rows, and list items.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

export default function HeightPage() {
  return (
    <DxcFlex direction="column" gap="4rem">
      <PageHeading>
        <DxcFlex direction="column" gap="var(--spacing-gap-xl)">
          <DxcHeading level={1} text="Height" />
        </DxcFlex>
      </PageHeading>
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/foundations/height/HeightPage.tsx" />
    </DxcFlex>
  );
}

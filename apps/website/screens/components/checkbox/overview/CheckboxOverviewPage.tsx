import { DxcParagraph, DxcBulletedList, DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import stacking from "./examples/stacking";
import Image from "@/common/Image";
import anatomy from "./images/checkbox_anatomy.png";
import Link from "next/link";
import labelPosition from "./examples/labelPosition";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Checkboxes support different states, including checked, unchecked, and indeterminate, providing clear visual
          feedback. Checkboxes <strong>should be used when multiple selections are needed</strong>, unlike radio
          buttons, which are for single-choice scenarios. Proper spacing and alignment help maintain clarity, and labels
          should be concise and descriptive to enhance usability.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Checkbox anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Checkbox input:</strong> the interactive element that allows users to toggle between checked,
            unchecked, and indeterminate states. It provides visual feedback based on user selection and supports
            accessibility attributes for better usability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> descriptive text associated with the checkbox, helping users understand the option
            they select. It should be concise and placed close to the checkbox for clear association.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Stacking checkboxes",
    content: (
      <>
        <DxcParagraph>Checkboxes can be stacked vertically or horizontally, depending on the use case. </DxcParagraph>
        <Example example={stacking} />
      </>
    ),
    subSections: [
      {
        title: "Vertical stacking",
        content: (
          <>
            <DxcParagraph>
              To <strong>improve readability and scalability</strong>, checkboxes can be stacked vertically, especially
              in forms or settings panels, allowing users to process options more efficiently without excessive eye
              movement.
            </DxcParagraph>
            <DxcParagraph>Leave minimum 4px of spacing between vertically stacked checkboxes.</DxcParagraph>
          </>
        ),
      },
      {
        title: "Horizontal stacking",
        content: (
          <>
            <DxcParagraph>
              Used in scenarios with limited vertical space, checkboxes can be stacked horizontally, along with a
              consistent spacing and alignment, to maintain a structured and organized layout. If a set of checkboxes is
              related to a single category, consider using a group label to provide context as this will enhance
              usability and help users make informed selections.
            </DxcParagraph>
            <DxcParagraph>Horizontally stacked checkboxes maintain a separation of, minimum, 24px.</DxcParagraph>
          </>
        ),
      },
    ],
  },
  {
    title: "Label position",
    content: (
      <>
        <DxcParagraph>
          By default, the label is placed <strong>to the left of the checkbox</strong>, but it can also be positioned{" "}
          <strong>to the right</strong> when needed. Choose the label position that best fits your layout and ensures
          clear readability and alignment with surrounding elements.
        </DxcParagraph>
        <DxcParagraph>
          We recommend selecting a label placement that maintains a strong visual connection between the checkbox and
          its description, without disrupting the overall flow of the interface.
        </DxcParagraph>
        <Example example={labelPosition} />
      </>
    ),
  },
  {
    title: "Checkbox vs. radio group vs. switch",
    content: (
      <>
        <DxcParagraph>
          Although checkboxes,{" "}
          <Link href="/components/radio-group" passHref legacyBehavior>
            <DxcLink>radio groups</DxcLink>
          </Link>
          , and{" "}
          <Link href="/components/checkbox" passHref legacyBehavior>
            <DxcLink>switches</DxcLink>
          </Link>{" "}
          may appear as selection controls, they serve distinct purposes in a user interface:
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Component</th>
              <th>Use case</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Checkbox</strong>
              </td>
              <td>
                Use when users can select <strong>multiple options</strong> independently. Each checkbox represents an
                on/off decision, making them suitable for filters, preference settings, or multi-select tasks. A group
                may allow none, some, or all options to be selected.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Radio group</strong>
              </td>
              <td>
                Use when the user must select <strong>only one option</strong> from a list of predefined, mutually
                exclusive choices. Ideal for short, static lists where all options should be visible at once to support
                decision-making.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Switch</strong>
              </td>
              <td>
                Use for a <strong>single, immediate toggle</strong> between two states, like on/off or enabled/disabled.
                Switches should act instantly and are best for system or UI-level settings.
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Use for multiple selections:</strong> checkboxes should be used when users can select multiple
            options independently. If only one selection is allowed, use radio buttons instead.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Ensure clear labels:</strong> each checkbox should have a clear, concise label that accurately
            describes the option. Avoid ambiguous wording that might confuse users.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Group related options:</strong> when checkboxes are part of a related set, use a group label to
            provide context. This improves readability and helps users understand the available choices.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Prioritize vertical stacking:</strong> for better readability and usability, stack checkboxes
            vertically, especially when dealing with multiple options. Horizontal stacking should be reserved for short
            lists with clear, non-wrapping labels.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Use the indeterminate state properly:</strong> the indeterminate state should only be used when a
            parent checkbox controls multiple sub-options. This visually indicates that some but not all child options
            are selected.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Maintain sufficient spacing:</strong> provide adequate spacing between checkboxes to prevent
            misclicks and ensure a clean, organized layout.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Ensure accessibility:</strong> make checkboxes large enough to be easily clickable and ensure they
            are keyboard-navigable. Labels should be linked correctly for screen readers to interpret them properly.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const CheckboxInputOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/checkbox/overview/CheckboxOverviewPage.tsx" />
  </DxcFlex>
);

export default CheckboxInputOverviewPage;

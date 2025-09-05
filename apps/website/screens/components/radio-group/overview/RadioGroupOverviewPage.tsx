import { DxcBulletedList, DxcParagraph, DxcFlex, DxcTable, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import stacking from "./examples/stacking";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import Image from "@/common/Image";
import anatomy from "./images/radio_group_anatomy.png";
import Link from "next/link";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The radio group component allows users to <strong>select a single option</strong> from a predefined set of
        choices. Each option is represented by a radio button, ensuring clear and mutually exclusive selection within
        the group. This component is commonly used in forms, surveys, and settings where users need to make a definitive
        choice. By organizing options in a structured manner, the radio group enhances usability and readability,
        guiding users toward a straightforward decision-making process.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Radio group anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Label</strong> <em>(Optional)</em>: the main heading for the radio group. It clearly communicates
            what decision the user is being asked to make.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Helper text</strong> <em>(Optional)</em>: optional supporting text that provides additional context
            or instructions to guide the user's choice.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Radio input:</strong> the circular selection control representing each option. Only one radio input
            can be selected within the group at a time.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Radio input label:</strong> the descriptive text placed next to each radio input. It communicates
            the meaning of the option and is always visible for clarity.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Error message:</strong> displayed below the group when validation fails. It explains what went wrong
            and helps users correct their input.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Stacking radio buttons",
    content: (
      <>
        <DxcParagraph>
          Radio buttons can be arranged vertically or horizontally depending on the context, layout constraints, and
          user experience considerations.
        </DxcParagraph>
        <Example example={stacking} defaultIsVisible={false} />
      </>
    ),
    subSections: [
      {
        title: "Vertical stacking",
        content: (
          <DxcParagraph>
            Vertical stacking is the preferred layout for radio groups, especially in forms or when presenting more than
            two options. It <strong>enhances readability</strong> by allowing users to scan and compare choices with
            minimal cognitive load. This format supports accessibility and scales well with longer option labels.
          </DxcParagraph>
        ),
      },
      {
        title: "Horizontal stacking",
        content: (
          <DxcParagraph>
            Horizontal stacking is suitable when screen space is limited or when options are short and easily
            distinguishable. This layout <strong>can reduce vertical scroll</strong> but should only be used when it
            doesn't compromise readability. Always maintain visual grouping and alignment, and ensure that labels remain
            clear and unambiguous.
          </DxcParagraph>
        ),
      },
    ],
  },
  {
    title: "Radio group vs. checkbox vs. switch",
    content: (
      <>
        <DxcParagraph>
          Although radio groups,{" "}
          <Link href="/components/checkbox" passHref legacyBehavior>
            <DxcLink>checkboxes</DxcLink>
          </Link>
          , and{" "}
          <Link href="/components/switch" passHref legacyBehavior>
            <DxcLink>switches</DxcLink>
          </Link>{" "}
          may appear as selection controls, they serve distinct purposes in a user interface:
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Component</th>
              <HeaderDescriptionCell>Use case</HeaderDescriptionCell>
            </tr>
          </thead>
          <tbody>
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
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Use for mutually exclusive choices:</strong> radio groups are best suited when users need to select{" "}
          <strong>only one option</strong> from a predefined list. Avoid using them for multiple selections — checkboxes
          are more appropriate in that case.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Keep option labels short and clear:</strong> use concise, descriptive labels so users can quickly
          understand each choice. Avoid using long sentences or technical jargon, which can overwhelm the layout and
          slow down decision-making.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Default to vertical layout for clarity:</strong> stacking options vertically improves readability and
          makes scanning easier, especially when there are more than two options. Use horizontal layout only when space
          is limited or options are very short and simple.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Group related options together:</strong> ensure all radio buttons in a group are logically related and
          fall under the same question or decision point. Never separate radio buttons from their group label or helper
          text — they should feel like a cohesive unit.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Handle errors gracefully:</strong> use validation to prevent submission without a selection if
          required, and display clear, specific error messages.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const RadioGroupOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/radio-group/overview/RadioGroupOverviewPage.tsx" />
  </DxcFlex>
);

export default RadioGroupOverviewPage;

import { DxcParagraph, DxcBulletedList, DxcFlex, DxcTable } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import labelPosition from "./examples/labelPosition";
import stacking from "./examples/stacking";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import Image from "@/common/Image";
import anatomy from "./images/switch_anatomy.png";
import content from "screens/components/wizard/usage/examples/content";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The switch component enables users to <strong>toggle a specific setting on or off</strong>. It is designed for
        binary decisions that directly affect system behavior or user preferences. Unlike checkboxes or radio buttons,
        switches represent immediate state changes — they do not require form submission. They are especially effective
        in settings panels, preferences, and mobile interfaces where quick, inline control is essential.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Switch's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Label:</strong> describes the setting or feature being toggled. Helps users understand the
            consequence of switching it on or off.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Thumb:</strong> the sliding circle that moves to indicate the current state.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Track:</strong> the background container of the switch that reflects the active/inactive state with
            color.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Stacking switches",
    content: (
      <DxcParagraph>
        Switches can be arranged vertically or horizontally depending on context, user needs, and available screen
        space.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Vertical stacking",
        content: (
          <DxcParagraph>
            The preferred layout for lists of switches. It <strong>enhances readability</strong> and ensures each toggle
            is clearly associated with its label. Ideal for settings or control panels with multiple toggles.
          </DxcParagraph>
        ),
      },
      {
        title: "Horizontal stacking",
        content: (
          <>
            <DxcParagraph>
              Used when space is constrained or when only a few switches are present. This layout can save space but
              should be avoided for long labels or more than two options.
            </DxcParagraph>
            <Example example={stacking} />
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
          By default, the label is placed <strong>before the switch</strong>, as this position clearly communicates what
          the control is for and improves accessibility. However, it's also possible to position the label{" "}
          <strong>after the switch</strong> in specific cases—particularly when you want to emphasize the{" "}
          <strong>current state</strong> of the control (e.g., “On”, “Off”).
        </DxcParagraph>
        <DxcParagraph>
          We recommend changing the default label position{" "}
          <strong>only when the component's use case justifies it</strong>, and as long as the meaning and state of the
          switch remain clear to the user.
        </DxcParagraph>
        <Example example={labelPosition} />
        <DxcTable>
          <thead>
            <tr>
              <th>Position</th>
              <HeaderDescriptionCell>Description</HeaderDescriptionCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Label before</strong>
              </td>
              <td>Labels before the switch indicate what the switch is for</td>
            </tr>
            <tr>
              <td>
                <strong>Label after</strong>
              </td>
              <td>Labels after the switch indicate the state of the switch</td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Switch vs. radio group vs. checkbox",
    content: (
      <>
        <DxcParagraph>
          While switches, radio group and checkboxes, may all appear as selection controls, they serve distinct purposes
          in a user interface:
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
                <strong>Switch</strong>
              </td>
              <td>
                Use for a single, immediate toggle between two states, like on/off or enabled/disabled. Switches should
                act instantly and are best for system or UI-level settings.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Radio group</strong>
              </td>
              <td>
                Use when the user must select only one option from a list of predefined, mutually exclusive choices.
                Ideal for short, static lists where all options should be visible at once to support decision-making.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Checkbox</strong>
              </td>
              <td>
                Use when users can select multiple options independently. Each checkbox represents an on/off decision,
                making them suitable for filters, preference settings, or multi-select tasks. A group may allow none,
                some, or all options to be selected.
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Best practices",
    subSections: [
      {
        title: "Use for binary, opposing states",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Switches are ideal when users need to turn a setting <strong>on</strong> or <strong>off</strong>, such as
              enabling notifications or dark mode.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Avoid using switches for choices that are not immediately clear opposites (use radio buttons instead).
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Trigger immediate changes",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Switches should take effect <strong>immediately</strong> without requiring form submission.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Do not pair switches with a submit button or use them for decisions that need confirmation.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Use clear, descriptive labels",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>Labels should clarify the effect of toggling the switch.</DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Use positive, action-oriented phrasing when possible (e.g., “Enable sound”).
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Stack vertically for better scannability",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              When multiple switches are used together, stack them vertically to maintain clarity and reduce visual
              clutter.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Don't overuse switches",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Too many toggles on one screen can overwhelm users. Group related settings and consider alternatives like
              grouped checkboxes or forms when appropriate.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const SwitchOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/switch/overview/SwitchOverviewPage.tsx" />
  </DxcFlex>
);

export default SwitchOverviewPage;

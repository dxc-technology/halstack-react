import {
  DxcBulletedList,
  DxcFlex,
  DxcTable,
  DxcParagraph,
  DxcTypography,
  DxcAlert,
} from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import icons from "./examples/iconUsage";
import semantics from "./examples/semantics";
import variants from "./examples/variants";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";
import Code from "@/common/Code";
import Image from "@/common/Image";
import anatomy from "./images/button_anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The Halstack button component is a versatile and accessible UI element designed to trigger user actions across
        applications. It supports multiple variants, including primary, secondary, and text buttons, ensuring
        flexibility in different use cases. The button's appearance suggests the user takes an action that leads to
        different scenarios. These elements that reinforce to the user the necessity to interact are called CTA (Call to
        Action) components, which basically are designed to capture user attention and improve the user experience
        within the application.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Button's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> the interactive/clickable area of the button.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Icon:</strong> a visual element that complements the label, providing additional meaning or
            enhancing recognition.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> displays the textual action that the button is going to carry out.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>
          We can identify three different variants that imply some visual changes according to color and border
          attributes.
        </DxcParagraph>
        <Example example={variants} />
        <DxcTable>
          <thead>
            <tr>
              <th>Variant</th>
              <HeaderDescriptionCell>Description</HeaderDescriptionCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Primary</strong>
              </td>
              <td>
                For the principal call to action on the page; primary buttons should only appear once per screen (not
                including the application header or in a modal dialog).
              </td>
            </tr>
            <tr>
              <td>
                <strong>Secondary</strong>
              </td>
              <td>
                For less prominent actions; secondary buttons can be used in isolation or paired with a primary button
                when there are multiple calls to action.
              </td>
            </tr>
            <tr>
              <td>
                <strong>Text</strong>
              </td>
              <td>
                For the least pronounced actions; often used in conjunction with a primary button (e.g. cancel in a
                modal dialog).
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Icon usage",
    content: (
      <>
        <DxcParagraph>
          Any icon can be used in Halstack Design System, so it is up to the user to choose which one suits its use case
          better. But, it is recommended to use the same library of icons throughout the application to keep
          consistency.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            The icon can go before or after the text with a separation of 8 pixels respecting the main button's text.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Do not use icons mainly for visual interest, the glyph must add information and clarification to the action
            that would be performed in the context of the button.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            A button with an icon and no text is also allowed in the design system. In such a situation and in order to
            preserve the accessibility of the button, the use of the <Code>title</Code> prop is mandatory.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The <Code>title</Code> prop offers a contextual bubble with missing information necessary to clarify the
            action performed by the button. It also provides an accessible gateway when no regular label can be
            specified.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Try to limit the use of icon-only buttons. Whenever possible, the icon should be accompanied by a label.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <Example example={icons} />
      </>
    ),
  },
  {
    title: "Semantic buttons",
    content: (
      <>
        <DxcParagraph>
          Semantic buttons use specific colors to convey the nature of the action they trigger. They provide immediate
          context about the action's significance or the feedback it represents.
        </DxcParagraph>
        <DxcTable>
          <thead>
            <tr>
              <th>Semantic</th>
              <HeaderDescriptionCell>Description</HeaderDescriptionCell>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <DxcTypography color="var(--color-bg-primary-strong)" fontWeight="600">
                  Default
                </DxcTypography>
              </td>
              <td>
                Neutral action with no specific context. Typically used for general actions. Shown in the brand's
                primary color. Use for neutral actions such as "Submit", "Save" or "Continue.”.
              </td>
            </tr>
            <tr>
              <td>
                <DxcTypography color="var(--color-bg-error-strong)" fontWeight="600">
                  Error
                </DxcTypography>
              </td>
              <td>
                Indicates a destructive action or highlights a critical issue. Styled in red. Use for actions like
                "Delete", "Remove" or "Cancel Subscription.”.
              </td>
            </tr>
            <tr>
              <td>
                <DxcTypography color="var(--color-bg-secondary-strong)" fontWeight="600">
                  Info
                </DxcTypography>
              </td>
              <td>
                Provides additional information or context. Shown in blue, the brand's secondary color. Use for actions
                like "More Info", "Details" or "Learn More.”.
              </td>
            </tr>
            <tr>
              <td>
                <DxcTypography color="var(--color-bg-success-strong)" fontWeight="600">
                  Success
                </DxcTypography>
              </td>
              <td>
                Represents a positive action or confirms the completion of a task. Styled in green. Use for actions like
                "Confirm", "Complete" or "Approve.”.
              </td>
            </tr>
            <tr>
              <td>
                <DxcTypography color="var(--color-bg-warning-strong)" fontWeight="600">
                  Warning
                </DxcTypography>
              </td>
              <td>
                Alerts the user to potential issues or actions that need caution. Styled in orange. Use for actions like
                "Warning" or "Attention Needed.”.
              </td>
            </tr>
          </tbody>
        </DxcTable>
        <Example example={semantics} />
      </>
    ),
  },
  {
    title: "Sizes",
    content: (
      <>
        <DxcParagraph>
          The context in which a button is used often dictates its size. Halstack provides buttons in different sizes to
          help create interfaces that are not only functional but also intuitive and accessible, catering to a wide
          range of user needs and interaction scenarios.
        </DxcParagraph>
        <DxcParagraph>
          Varying button sizes help establish a clear visual hierarchy, guiding users towards the most critical actions.
          Primary actions are made more prominent with larger buttons, while secondary actions use smaller buttons to
          avoid distraction.
        </DxcParagraph>
        <DxcAlert
          title="Sizes"
          semantic="warning"
          message={{
            text: "To maintain a clear and effective visual hierarchy, avoid overusing different button sizes within a single interface.",
          }}
          closable={false}
        />
      </>
    ),
    subSections: [
      {
        title: "Height",
        subSections: [
          {
            title: "Small",
            content: (
              <>
                <DxcParagraph>
                  Small buttons help to maintain a clean and uncluttered interface, especially in dense layouts. They
                  are suitable for scenarios where precise actions are needed, often accompanied by icons for quick
                  recognition.
                </DxcParagraph>
                <DxcParagraph>Use cases:</DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Compact spaces:</strong> Small buttons are ideal for areas with limited space, such as
                    tables, forms, and other components.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Secondary actions:</strong> They can be used for less prominent actions that are not the
                    primary focus of the user's interaction.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
          {
            title: "Medium",
            content: (
              <>
                <DxcParagraph>
                  Medium buttons provide a good balance between visibility and space usage, making them versatile for
                  various design contexts.
                </DxcParagraph>
                <DxcParagraph>Use cases:</DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>General use:</strong> Medium buttons are the standard size for most button interactions
                    across web and mobile applications.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Primary actions:</strong> They are often used for primary actions on forms, dialogs, and
                    other key interaction points.
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Consistency:</strong> Using medium buttons as the default ensures a consistent look and feel
                    across the application, aiding user familiarity and navigation.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
          {
            title: "Large",
            content: (
              <>
                <DxcParagraph>
                  Large buttons draw attention and encourage interaction, which is vital for important actions. They
                  create a visual hierarchy, emphasizing the most important actions and guiding users towards them.
                </DxcParagraph>
                <DxcParagraph>Use cases:</DxcParagraph>
                <DxcBulletedList>
                  <DxcBulletedList.Item>
                    <strong>Prominent actions:</strong> Large buttons are used for primary or critical actions that
                    require high visibility, such as "Submit", "Save" or "Purchase".
                  </DxcBulletedList.Item>
                  <DxcBulletedList.Item>
                    <strong>Call to action (CTA):</strong> They are often employed in call-to-action sections where user
                    engagement is crucial, like landing pages.
                  </DxcBulletedList.Item>
                </DxcBulletedList>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Best practices for button labels",
    subSections: [
      {
        title: "Be clear and concise",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Use actionable language:</strong> Start with a verb that clearly describes the action. Examples:
              "Submit", "Save" or "Delete".
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Keep it short:</strong> Aim for one or two words. Longer text can make buttons harder to read and
              understand quickly.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Ensure clarity",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Avoid ambiguity:</strong> Make sure the button's purpose is immediately clear. Avoid vague labels
              like "Click here" or "Go".
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Use specific nouns:</strong> If necessary, include a noun to provide more context. Examples: "Add
              item", "View details".
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Maintain consistency",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Consistent terminology:</strong> Use the same terms for similar actions across your interface to
              avoid confusion. For example, always use "Submit" for form submissions.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Sentence case:</strong> Use sentence-style capitalization—only capitalize the first word. This
              improves readability and looks more approachable.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Focus on the user",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>User-centric language:</strong> Write from the user's perspective. For actions that the user
              performs, consider using first-person pronouns (e.g., "My profile").
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Positive tone:</strong> Where possible, frame actions positively to encourage interaction. For
              example, use "Continue" instead of "Next".
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Accessibility",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Descriptive labels:</strong> Ensure that the button copy makes sense out of context for screen
              reader users. Avoid labels like "More" without additional context.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Avoid jargon:</strong> Use plain language that is easily understood by all users, including those
              who may not be familiar with technical terms.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Visual hierarchy",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Primary action first:</strong> Ensure the primary action stands out with a prominent position and
              styling.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Avoid redundant text:</strong> Do not include unnecessary words that do not add value to the
              action.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Tips",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Test for clarity:</strong> Show your button text to others without context to see if they
              understand the action.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Iterate based on feedback:</strong> Be open to changing your button copy based on user feedback
              and testing results.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Avoid punctuation:</strong> Do not use end punctuation in button labels unless absolutely
              necessary.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const ButtonOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/button/overview/ButtonOverviewPage.tsx" />
  </DxcFlex>
);

export default ButtonOverviewPage;

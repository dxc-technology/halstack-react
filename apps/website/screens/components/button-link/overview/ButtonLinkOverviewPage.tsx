import { DxcBulletedList, DxcFlex, DxcParagraph, DxcAlert } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import anatomy from "./images/button_link_anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The Halstack Button Link component is designed for navigation that requires more visual emphasis than a
          standard text link. It provides the familiar appearance of a button while preserving the expected behavior of
          a link.
        </DxcParagraph>
        <DxcParagraph>
          Although buttons and links can look similar, they serve different purposes. A button triggers an action within
          the current interface, while a link navigates users to another destination. Button Link bridges this visual
          distinction by allowing navigation to be presented with the appearance of a button without changing its
          underlying semantics.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Button link anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Container:</strong> provides the interactive area and visual treatment inherited from the existing
            Button component.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Icon:</strong> appears before or after the label to provide additional context or clarify the
            destination.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> communicates the destination or purpose of the navigation.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Variants",
    content: <></>,
  },
  {
    title: "Icon usage",
    content: <></>,
  },
  {
    title: "Semantic buttons",
    content: <></>,
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
            content: <></>,
          },
          {
            title: "Medium",
            content: <></>,
          },
          {
            title: "Large",
            content: <></>,
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
              <strong>Sentence case:</strong> Use sentence-style capitalization — only capitalize the first word. This
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

const ButtonLinkOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/button-link/overview/ButtonLinkOverviewPage.tsx" />
  </DxcFlex>
);

export default ButtonLinkOverviewPage;

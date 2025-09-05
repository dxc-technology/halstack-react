import { DxcBulletedList, DxcFlex, DxcLink, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import anatomy from "./images/textarea_anatomy.png";
import Link from "next/link";
import Code from "@/common/Code";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          Text areas are essential UI components that allow users to enter and interact with{" "}
          <strong>multi-line text-based information</strong>. They are commonly used in forms to collect feedback,
          comments, descriptions, and longer messages where a single-line input is not sufficient. Text areas support a
          wide range of use cases, from support forms and user profiles to product reviews and detailed reports.
        </DxcParagraph>
        <DxcParagraph>
          Providing clear labels, helpful guidance, and proper formatting improves the user's ability to input
          information accurately and comfortably. Enhancing usability through accessibility, validation, and responsive
          behavior leads to a more intuitive and effective user experience.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Textarea anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Label</strong> <em>(Optional)</em>: a descriptive text that helps users understand what information
            is expected in the input field. It should be clear, concise, and placed near the input for better
            readability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Optional indicator</strong> <em>(Optional)</em>: a small indicator that signals the input field is
            not mandatory. It helps users know they can leave the field empty without causing validation errors.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Placeholder/Value:</strong> a short hint displayed inside the input field before any text is
            entered, offering a brief example or instruction on what type of data is expected. It disappears when the
            user starts typing. The value represents the actual content entered by the user. Unlike the placeholder, the
            value persists during interaction and is what gets submitted with the form.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Helper text</strong> <em>(Optional)</em>: additional text placed below the input label that provides
            guidance, examples, or explanations to assist users in filling out the field correctly.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Container:</strong> the visual wrapper around the input field that provides structure, ensures
            accessibility, and helps differentiate the input from other UI elements.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Resizer</strong> <em>(Optional)</em>: allows users to manually expand or shrink the textarea if
            resizing is enabled.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Form inputs",
    content: (
      <>
        <DxcParagraph>
          Form inputs are essential UI elements that allow users to interact with digital products by{" "}
          <strong>entering or selecting data</strong>. Choosing the right input type and structure is key to designing
          efficient, user-friendly forms that support task completion and data accuracy.
        </DxcParagraph>
        <DxcParagraph>
          A form input (also known as a form field) is used to capture user data. Common input types include text
          fields, date pickers, number fields, radio buttons, checkboxes, toggles, and dropdowns. Forms should always
          include a submission method, such as a submit button, link, or keyboard trigger, to complete the interaction.
        </DxcParagraph>
      </>
    ),
    subSections: [
      {
        title: "Shared input characteristics",
        content: (
          <>
            <DxcParagraph>
              Although input fields vary in type and purpose, they often share a common set of features:
            </DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Placeholder:</strong> a short hint displayed inside the input field that describes its expected
                value or purpose.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Size and max length:</strong> inputs can have both a visual size (width of the field) and a
                character limit that defines how much text can be entered.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Prefix or suffix:</strong> some inputs include a visual element before or after the user input,
                like currency symbols or units, to help clarify the expected data.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Helper text:</strong> additional information displayed below the field to guide the user in
                providing the correct input.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Optional label:</strong> inputs that are not mandatory can be marked with an "Optional" tag to
                set clear expectations.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
      {
        title: "Common input states",
        content: (
          <>
            <DxcParagraph>Most inputs can also present standard interactive or informative states:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                <strong>Disabled:</strong> this state prevents users from interacting with the field. It's typically
                used when a value is not applicable or editable under certain conditions or roles.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Error:</strong> when a user enters invalid or incomplete data, the input shows an error state,
                often accompanied by a helpful message to guide corrections.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                <strong>Read-only:</strong> the input is visible, focusable, and hoverable, but not editable. This is
                ideal for fields with auto-calculated values. Unlike disabled fields, read-only inputs can still be
                submitted with the form and are part of the form data.
              </DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Using text areas",
    content: (
      <>
        <DxcParagraph>
          While{" "}
          <Link href="/components/text-input" passHref legacyBehavior>
            <DxcLink>text inputs</DxcLink>
          </Link>{" "}
          are ideal for short, single-line entries such as names, email addresses, or search queries, text areas are
          specifically designed to handle <strong>multi-line, freeform text</strong>. They offer users more space and
          flexibility, making them the right choice for collecting messages, feedback, descriptions, or any content that
          may extend beyond a sentence or two.
        </DxcParagraph>
        <DxcParagraph>
          Choosing between a text input and a text area depends on the nature of the content you're asking for. For
          instance, a "Job Title" field should use a standard text input, while a "Cover Letter" or "Project
          Description" clearly benefits from a textarea. In some cases, even radio buttons, dropdowns, or checkboxes may
          be more effective if the expected input can be predefined or simplified.
        </DxcParagraph>
        <DxcParagraph>
          Understanding the user's intent and the expected length and complexity of the response is key to choosing the
          right input type. Misusing a text area for short, simple answers can overwhelm users, while using a text input
          for extended responses can result in frustration or poor usability.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Use the textarea for extended input:</strong> provide a textarea when users need to enter responses
          longer than a single line, such as comments, messages, or descriptions.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Break down complex inputs:</strong> avoid using a textarea when a long question can be broken into
          multiple, simpler fields. This helps reduce cognitive load and improves response quality.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Allow resizing only when beneficial:</strong> enable textarea resizing if the user may benefit from
          adjusting the visible input area, especially for writing long or detailed content.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid auto-expanding fields excessively:</strong> dynamic resizing can enhance usability, but ensure
          it doesn't disrupt page layout or push key UI elements out of view.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>
            Provide <Code>error</Code> messages for clarity:
          </strong>{" "}
          use the <Code>error</Code> prop to surface validation messages. Make sure these are clear and actionable.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>
            Apply <Code>placeholder</Code> for hints, not instructions:
          </strong>{" "}
          use <Code>placeholder</Code> to provide example content or expected format (e.g., "Write your feedback
          here…"). Avoid using it as a replacement for the label.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>
            Leverage <Code>helperText</Code> to guide users:
          </strong>{" "}
          add context, tips to help users complete the input accurately (e.g., "Avoid including personal information
          like passwords or credit card numbers.").
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const TextareaOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/textarea/overview/TextareaOverviewPage.tsx" />
  </DxcFlex>
);

export default TextareaOverviewPage;

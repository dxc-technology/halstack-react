import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import prefixSuffix from "./examples/prefixSuffix";
import Example from "@/common/example/Example";
import customAction from "./examples/customAction";
import anatomy from "./images/text_input_anatomy.png";
import textInputClearContent from "./images/text_input_clear_content.png";
import textInputAutosuggest from "./images/text_input_autosuggest.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        Text inputs are essential UI elements that enable users to enter and interact with{" "}
        <strong>text-based information</strong>. They are widely used in forms for collecting data, performing searches,
        and completing various user interactions. Use text inputs to facilitate user input in structured formats such as
        usernames, descriptions, URLs, phone numbers, credit card details, emails, and addresses. Ensuring clear labels,
        proper validation, and intuitive formatting enhances usability and improves the overall user experience.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Text input's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Label:</strong> a descriptive text that helps users understand what information is expected in the
            input field. It should be clear, concise, and placed near the input for better readability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Optional indicator</strong> <em>(Optional)</em>: a small indicator that signals the input field is
            not mandatory. It helps users know they can leave the field empty without causing validation errors.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Input action</strong> <em>(Optional)</em>: an interactive element, such as an icon or button, inside
            the input field that triggers a specific action (e.g., revealing a password, opening a date picker, or
            searching).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Close action</strong> <em>(Optional)</em>: a small button, represented by an "X" icon, that allows
            users to clear the entered text quickly without manually deleting it.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Helper text</strong> <em>(Optional)</em>: additional text placed below the input field that provides
            guidance, examples, or explanations to assist users in filling out the field correctly.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Container:</strong> the visual wrapper around the input field that provides structure, ensures
            accessibility, and helps differentiate the input from other UI elements.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Prefix</strong> <em>(Optional)</em>: a visual element placed before or after the user input, like
            currency symbols or units, to help clarify the expected data.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Placeholder:</strong> a short hint displayed inside the input field before any text is entered,
            offering a brief example or instruction on what type of data is expected. It disappears when the user starts
            typing.
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
          include a submission method —such as a submit button, link, or keyboard trigger— to complete the interaction.
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
                <strong>Prefix or suffix:</strong> some inputs include a visual element before or after the user input
                —like currency symbols or units— to help clarify the expected data.
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
    title: "Using text inputs",
    content: (
      <DxcParagraph>
        Text inputs, in particular, are commonly found in forms, search bars, and interactive fields that require text
        user input. Our text input component is highly configurable, allowing designers and developers to adapt it to
        different use cases while maintaining usability and accessibility. In this section, we will cover some key
        characteristics of our text input, so you can learn about its particularities and behavior.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Actions",
        subSections: [
          {
            title: "Clearing content",
            content: (
              <>
                <DxcParagraph>
                  Clearing content is one of the key actions of the text input. It allows users to{" "}
                  <strong>remove the content</strong> of the input without having to do it manually through a keyboard,
                  which is particularly useful when large data has been introduced.
                </DxcParagraph>
                <Figure caption="States for the clear content button">
                  <Image src={textInputClearContent} alt="States for the clear content button" />
                </Figure>
              </>
            ),
          },
          {
            title: "Custom actions",
            content: (
              <>
                <DxcParagraph>
                  On top of the clear content action, our text input supports another custom action, such as copying the
                  data introduced or triggering a tooltip with helper text. This added flexibility allows teams to
                  tailor the input's behavior to their specific use case, enabling more{" "}
                  <strong>dynamic interactions</strong> directly from the input field.
                </DxcParagraph>
                <Example example={customAction} />
              </>
            ),
          },
        ],
      },
      {
        title: "Prefix and suffix",
        content: (
          <>
            <DxcParagraph>
              Halstack inputs also support the use of prefixes and suffixes—visual elements that help users quickly{" "}
              <strong>understand the type of data expected in the field</strong>. These cues provide additional context
              and improve clarity during data entry.
            </DxcParagraph>
            <Example example={prefixSuffix} />
          </>
        ),
      },

      {
        title: "Autosuggest",
        content: (
          <>
            <DxcParagraph>
              The <strong>autosuggest</strong> feature in our text input provides users with{" "}
              <strong>real-time suggestions</strong> as they type, based on a predefined list of options. As the user
              enters characters, the input field dynamically filters and displays matching values in a dropdown,
              allowing for quick and efficient selection.
            </DxcParagraph>
            <DxcParagraph>
              This feature is particularly useful for reducing input errors, speeding up data entry, and guiding users
              toward valid or commonly used values—especially in cases where the list of possibilities is large but
              predictable, such as country names, email domains, or product codes. It enhances usability by minimizing
              typing effort and improving overall form completion accuracy.
            </DxcParagraph>
            <Figure caption="Autosuggest states of the text input">
              <Image src={textInputAutosuggest} alt="Autosuggest states of the text input" />
            </Figure>
          </>
        ),
      },
    ],
  },
  {
    title: "Best practices",
    subSections: [
      {
        title: "General",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Always use clear labels:</strong> ensure every text input has a visible, descriptive label that
              doesn't disappear as users begin typing. Avoid relying solely on placeholder text.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Use placeholders as hints only:</strong> placeholders should provide examples or expected formats
              (e.g., "e.g., johndoe@email.com"), not serve as the primary field descriptor.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Clarify field requirements:</strong> use an "Optional" tag next to labels to indicate when a field
              isn't mandatory, reducing user uncertainty.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Provide helper text when needed:</strong> include contextual guidance below the input to help
              users provide the correct information, especially for complex or specific inputs.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Support various states consistently:</strong> reflect focus, disabled, error, and read-only states
              with distinct, accessible visual cues.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Actions",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Provide a way to clear content:</strong> allow users to easily clear the input with a clear icon
              or button, especially useful for fields like search or filters.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Use custom action icons appropriately:</strong> if adding custom icons inside the input (e.g., a
              calendar icon for date inputs or a search icon), ensure they're meaningful, accessible, and do not
              interfere with user input.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Avoid distracting behaviors:</strong> don't introduce actions that reset, redirect, or submit
              forms unexpectedly from within a text field.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Prefix/suffix",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Use prefixes and suffixes to add clarity:</strong> add visual cues like currency symbols (€),
              units (kg), or domain suffixes (.com) to help users understand the context of their input.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Do not confuse with input content:</strong> ensure prefixes/suffixes are visually distinct and not
              editable to avoid confusion with the actual value being typed.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Keep it minimal and functional:</strong> avoid decorative or unnecessary additions—prefixes and
              suffixes should always serve a clear purpose.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Autosuggest",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              <strong>Use autosuggest for known data sets:</strong> ideal when users need to search or select from a
              large, predefined list (e.g., city names, users, tags). It enhances speed and reduces errors.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Ensure accessibility:</strong> suggestions should be fully navigable using a keyboard and readable
              by screen readers. Users must be able to select options using arrow keys and Enter.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Prioritize relevance in suggestions:</strong> filter and order suggestions logically based on the
              user's input to avoid overwhelming them with too many or unrelated options.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              <strong>Allow free input if appropriate:</strong> when the field accepts both suggested and custom
              entries, clearly indicate this behavior and validate accordingly.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const TextInputOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/text-input/overview/TextInputOverviewPage.tsx" />
  </DxcFlex>
);

export default TextInputOverviewPage;

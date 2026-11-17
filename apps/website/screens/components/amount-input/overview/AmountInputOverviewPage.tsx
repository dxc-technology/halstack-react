import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
// import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
// import Image from "@/common/Image";

const sections = [
  {
    title: "Introduction",
    content: <DxcParagraph>Introduction</DxcParagraph>,
  },
  {
    title: "Anatomy",
    content: (
      <>
        {/* <Image src={anatomy} alt="Amount input anatomy" /> */}
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Label</strong> <em>(Optional)</em>: a descriptive text that helps users understand what information
            is expected in the amount input field. It should be clear, concise, and placed near the input for better
            readability.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Optional indicator</strong> <em>(Optional)</em>: a small indicator that signals the input field is
            not mandatory. It helps users know they can leave the field empty without causing validation errors.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Clear action</strong> <em>(Optional)</em>: a small button, represented by an "X" icon, that allows
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
            <strong>Placeholder/Value:</strong> a short hint displayed inside the input field before any text is
            entered, offering a brief example or instruction on what type of data is expected. It disappears when the
            user starts typing. The value represents the actual content entered by the user. Unlike the placeholder, the
            value persists during interaction and is what gets submitted with the form.
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
            <DxcBulletedList.Item>
              <strong>Apply appropiate alignment:</strong> It is recommended to use left alignment in general, except
              when there is a specific need for right alignment, such as in currency inputs or numeric fields, generally
              using a suffix.
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
              <strong>Keep it minimal and functional:</strong> avoid decorative or unnecessary additions. Prefixes and
              suffixes should always serve a clear purpose.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const AmountInputOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/amount-input/overview/AmountInputOverviewPage.tsx" />
  </DxcFlex>
);

export default AmountInputOverviewPage;

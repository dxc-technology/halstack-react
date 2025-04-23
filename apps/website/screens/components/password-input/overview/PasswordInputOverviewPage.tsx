import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import anatomy from "./images/password_anatomy.png";
import clearContent from "./images/password_clear_content.png";
import Figure from "@/common/Figure";
import Example from "@/common/example/Example";
import showHide from "./examples/showHide";

const sections = [
  {
    title: "Introduction",
    content: (
      <>
        <DxcParagraph>
          The password input component allows users to <strong>securely enter and manage sensitive data</strong> such as
          credentials or authentication codes. It behaves similarly to a standard text input but masks the content to
          protect the user's privacy. This component also includes functionality to toggle visibility, making it easier
          for users to verify their input when needed.
        </DxcParagraph>
        <DxcParagraph>
          Password inputs are essential in authentication forms, account settings, and any interaction where users need
          to enter or confirm confidential information. Ensuring both usability and security is key to providing a
          reliable password entry experience.
        </DxcParagraph>
      </>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Password input anatomy" />
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
            <strong>Input action</strong> <em>(Optional)</em>: an interactive element, inside the input field that
            triggers the action of revealing the password.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Close action</strong> <em>(Optional)</em>: a small button, usually represented by an "X" icon, that
            allows users to clear the entered password quickly without manually deleting it.
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
            <strong>Value:</strong> displays the selected or manually entered date in the input field, following the
            specified format.
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
    title: "Using password inputs",
    content: (
      <DxcParagraph>
        Password inputs are designed to handle sensitive information securely by masking the characters typed by the
        user. Unlike regular text inputs, they include specific features to enhance privacy and usability, such as the
        ability to toggle visibility and optionally clear the field. These inputs are commonly used for login forms,
        account creation, and any scenario requiring authentication data.
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
                  Password inputs can include a clear action icon, typically displayed when the field contains text.
                  This allows users to <strong>quickly remove the entire content</strong> of the input with a single
                  click or tap, making it easier to retype the password if necessary. This action enhances user
                  experience, particularly when correcting mistakes or switching between input attempts.
                </DxcParagraph>
                <Figure caption="States for the clear content button">
                  <Image src={clearContent} alt="States for the clear content button" />
                </Figure>
              </>
            ),
          },
          {
            title: "Show/hide action",
            content: (
              <>
                <DxcParagraph>
                  To improve usability without compromising security, our password input include a show/hide action
                  icon. This control allows users to <strong>reveal the password temporarily</strong>, helping prevent
                  input errors—especially on small screens or when dealing with complex passwords. By default, passwords
                  are hidden and masked with dots, and toggling the visibility should be a clearly labeled and
                  accessible action.
                </DxcParagraph>
                <Example example={showHide} />
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Use the password input only for sensitive information:</strong> limit its use to fields where the user
          is required to enter secure data, such as passwords, passcodes, or access tokens.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Include a show/hide toggle icon:</strong> this gives users the option to view their input and helps
          prevent typing errors without compromising usability.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Provide helper text or guidelines when necessary:</strong> if there are specific password requirements
          (length, special characters, etc.), display them clearly below the input field.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Avoid auto-filling or pre-populating password fields:</strong> for security reasons, let users input
          their credentials manually unless using a trusted browser-based password manager.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use the clear icon sparingly:</strong> only include a clear action when it improves user experience,
          such as on mobile or when the field is optional.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Ensure strong visual feedback for validation:</strong> use clear error messages and states to help
          users correct mistakes quickly and securely.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Never use plain text inputs for passwords:</strong> always use the dedicated password input component
          to ensure proper handling, masking, and interaction.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const PasswordInputOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/password-input/overview/PasswordInputOverviewPage.tsx" />
  </DxcFlex>
);

export default PasswordInputOverviewPage;

import { DxcParagraph, DxcBulletedList, DxcFlex, DxcLink } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import Figure from "@/common/Figure";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import inputActionsClearImage from "./images/input_actions_clear.png";
import inputActionsCustom from "./images/input_actions_custom.png";
import prefixSuffix from "./examples/prefixSuffix";
import Example from "@/common/example/Example";
import helperText from "./examples/helperText";
import Link from "next/link";
import autosuggest from "./examples/autosuggest";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcParagraph>
        Use text inputs in forms to help people enter, select and search for text. Common text input types include:
        usernames, descriptions, URLs, phone numbers, credit cards, emails, addresses or plain text searches.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Do's",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Do use fixed-width inputs for content that has a specific, known length (e.g. postcode, phone number).
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Do use sentence for any input text case with standard, local grammar and punctuation rules.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Do use helpful and clear text for labels, error messages and helper texts.
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "Don'ts",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Do not use text input for text longer than a single line (e.g. name, phone number). Use the textarea
              instead.
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>Do not disable copy and paste.</DxcBulletedList.Item>
            <DxcBulletedList.Item>Do not display a pop-up error message after validating.</DxcBulletedList.Item>
            <DxcBulletedList.Item>Avoid masking label, keep it always visible.</DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
  {
    title: "Content",
    subSections: [
      {
        title: "Actions",
        subSections: [
          {
            title: "Clearing content",
            content: (
              <>
                <DxcParagraph>Clear actions allow user to remove the content of the text input.</DxcParagraph>
                <Figure caption="Text input with a clear content action button">
                  <Image src={inputActionsClearImage} alt="Text input with a clear content action button" />
                </Figure>
              </>
            ),
          },
          {
            title: "Custom actions",
            content: (
              <>
                <DxcParagraph>Text inputs can have an additional custom action.</DxcParagraph>
                <Figure caption="Text input with an additional action">
                  <Image src={inputActionsCustom} alt="Text input with an additional action" />
                </Figure>
              </>
            ),
          },
        ],
      },
      {
        title: "Prefixes and suffixes",
        content: (
          <>
            <DxcParagraph>
              Prefixes and suffixes help the user to understand the purpose of the text input.
            </DxcParagraph>
            <Example example={prefixSuffix} />
          </>
        ),
      },
    ],
  },
  {
    title: "Helper text",
    content: (
      <>
        <DxcParagraph>
          Helper text can be used as additional instructions to the user when filling in the form. It should be always
          visible even in a focus state.
        </DxcParagraph>
        <Example example={helperText} />
      </>
    ),
    subSections: [
      {
        title: "Usage",
        content: (
          <>
            <DxcParagraph>Do:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>Keep helper text as short and specific as possible.</DxcBulletedList.Item>
              <DxcBulletedList.Item>
                Only use helper text when truly necessary to avoid overloading the user.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>Should give an example or an explanation of the field.</DxcBulletedList.Item>
            </DxcBulletedList>
            <DxcParagraph>Don't:</DxcParagraph>
            <DxcBulletedList>
              <DxcBulletedList.Item>Helper text should not run longer than the input area.</DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
  {
    title: "Autosuggest",
    content: (
      <>
        <DxcParagraph>
          Suggests a list of options to fill a text input. A user can either select a suggestion or enter their own
          answer.
        </DxcParagraph>
        <Example example={autosuggest} />
      </>
    ),
    subSections: [
      {
        title: "Usage",
        content: (
          <>
            <DxcBulletedList>
              <DxcBulletedList.Item>
                Use the suggestions to help users select from a list of standard responses when needed.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>
                If the value for the textbox must be chosen from a predefined set of allowed values, use the{" "}
                <Link href="/components/select" passHref legacyBehavior>
                  <DxcLink>select</DxcLink>
                </Link>{" "}
                component instead.
              </DxcBulletedList.Item>
              <DxcBulletedList.Item>Keep suggestions simple and avoid scroll.</DxcBulletedList.Item>
            </DxcBulletedList>
          </>
        ),
      },
    ],
  },
];

const TextInputUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2}></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/text-input/usage/TextInputUsagePage.tsx" />
    </DxcFlex>
  );
};

export default TextInputUsagePage;

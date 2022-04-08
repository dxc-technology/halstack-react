import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import inputActionsClearImage from "./images/input_actions_clear.png";
import inputActionsCustom from "./images/input_actions_custom.png";
import inputPrefixSuffix from "./images/input_prefix_suffix.png";
import inputHelperText from "./images/input_helper_text.png";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";
import Image from "@/common/Image";

const TextInputUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcText as="p">
          Use text inputs in forms to help people enter, select, and search for
          text. Common text input types include: Usernames, descriptions, URLs,
          phone numbers, credit cards, emails, addresses or plain text searches.
        </DxcText>
        <HeadingLink level={3}>Do&#39;s</HeadingLink>
        <DxcList>
          <DxcText>
            Do use fixed-width inputs for content that has a specific, known
            length (e.g. postcode, phone number).
          </DxcText>
          <DxcText>
            Do use sentence for any input text case with standard, local
            grammar, and punctuation rules.
          </DxcText>
          <DxcText>
            Do use helpful and clear text for labels, error messages and helper
            texts.
          </DxcText>
        </DxcList>
        <HeadingLink level={3}>Don&#39;ts</HeadingLink>
        <DxcList>
          <DxcText>
            Do not use text input for text longer than a single line (e.g. name,
            phone number). Use the text-area instead.
          </DxcText>
          <DxcText>Do not disable copy and paste.</DxcText>
          <DxcText>
            Do not display a pop-up error message after validating.
          </DxcText>
          <DxcText>Avoid masking label, keep it always visible.</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Content</HeadingLink>
        <HeadingLink level={4}>Actions</HeadingLink>
        <HeadingLink level={5}>Clearing content</HeadingLink>
        <DxcText as="p">
          Clear actions allow user to remove the content of the text input.
        </DxcText>
        <Figure caption="Example of text input with a clear content action button">
          <Image
            src={inputActionsClearImage}
            alt="Example of text input with a clear content action button"
          />
        </Figure>
        <HeadingLink level={5}>Custom actions</HeadingLink>
        <DxcText as="p">
          Text inputs can have an additional custom action.
        </DxcText>
        <Figure caption="Example of text input with an additional action">
          <Image
            src={inputActionsCustom}
            alt="Example of text input with an additional action"
          />
        </Figure>
        <HeadingLink level={4}>Prefixes and suffixes</HeadingLink>
        <DxcText as="p">
          Prefixes and suffixes help the user to understand the purpose of the
          text input.
        </DxcText>
        <Figure caption="Icon or text prefixes and suffixes usage">
          <Image
            src={inputPrefixSuffix}
            alt="Icon or text prefixes and suffixes usage"
          />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Helper text</HeadingLink>
        <DxcText as="p">
          Helper text can be used as additional instructions to the user when
          filling in the form. It should be always visible even in a focus
          state.
        </DxcText>
        <Figure caption="Text input helper text example">
          <Image src={inputHelperText} alt="Text input helper text example" />
        </Figure>
        <HeadingLink level={4}>Usage</HeadingLink>
        <DxcText as="p">Do:</DxcText>
        <DxcList>
          <DxcText>Keep helper text as short and specific as possible.</DxcText>
          <DxcText>
            Only use helper text when truly necessary to avoid overloading the
            user.
          </DxcText>
          <DxcText>
            Should give an example or an explanation of the field
          </DxcText>
        </DxcList>
        <DxcText as="p">Don&#39;t:</DxcText>
        <DxcList>
          <DxcText>
            Helper text should not run longer than the input area.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/text-input/usage/TextInputUsagePage.tsx" />
    </DxcStack>
  );
};

export default TextInputUsagePage;

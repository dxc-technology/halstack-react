import { DxcText, DxcList, DxcStack } from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import HeadingLink from "../../../common/HeadingLink";
import variantsImage from "./images/wizard_variants.png";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";
import validationImage from "./images/wizard_validation.png";
import contentImage from "./images/wizard_content.png";
import helperTextImage from "./images/wizard_helper_text.png";

const WizardUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcList>
          <DxcText>
            The horizontal/vertical line should not extend to the left of the
            first circle or to the right of the last circle.
          </DxcText>
          <DxcText>
            Do not overwhelmed the component with too many steps, it won't be a
            good idea for the user workflow neither for the display of the
            information.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Variants</HeadingLink>
        <DxcText as="p">
          The wizard component has two variants: <strong>horizontal</strong> and{" "}
          <strong>vertical</strong>.
        </DxcText>
        <Figure caption="Examples of horizontal and vertizal wizard flows">
          <Image
            src={variantsImage}
            alt="Examples of horizontal and vertizal wizard flows"
          />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Validation</HeadingLink>
        <DxcText as="p">
          There could be some scenarios in which the content of a step wants to
          be validated while the user is filling the fields with information or
          doing relevant actions in every step of the wizard. For that case, a
          validation mark can be represented in every step once the user
          navigate to the next step in the linear progression. This will
          represent the status of the validation respecting the content, with a
          success mark or an error mark visible on the step mark.
        </DxcText>
        <Figure caption="Example of wizard step validation">
          <Image
            src={validationImage}
            alt="Example of wizard step validation"
          />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Content</HeadingLink>
        <DxcText as="p">
          Different variations of the content can be performed in the step:
        </DxcText>
        <DxcList>
          <DxcText>Only numbers</DxcText>
          <DxcText>Only icons</DxcText>
          <DxcText>Numbers/icons with step label</DxcText>
        </DxcList>
        <Figure caption="Examples of wizard content with an icon">
          <Image
            src={contentImage}
            alt="Examples of wizard content with an icon"
          />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Helper text</HeadingLink>
        <DxcText as="p">
          Helper text can be added to the wizard component step:
        </DxcText>
        <Figure caption="Example of wizard helper text">
          <Image src={helperTextImage} alt="Example of wizard helper text" />
        </Figure>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/wizard/usage/WizardUsagePage.tsx" />
    </DxcStack>
  );
};

export default WizardUsagePage;

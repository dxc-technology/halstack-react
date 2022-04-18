import Image from "@/common/Image";
import passwordInputActions from "./images/password_actions.png";
import passwordInputAnatomy from "./images/password_anatomy.png";
import passwordInputSpecs from "./images/password_specs.png";
import passworsInputStates from "./images/password_states.png";
import HeadingLink from "../../../common/HeadingLink";
import {
  DxcStack,
  DxcText,
  DxcLink,
  DxcList,
} from "@dxc-technology/halstack-react";
import Figure from "../../../common/Figure";
import Code from "../../../common/Code";
import DocFooter from "../../../common/DocFooter";

const PasswordInputSpecsPage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Specifications</HeadingLink>
        <Figure caption="Password input component specifications">
          <Image
            src={passwordInputSpecs}
            alt="Password input component specifications"
          />
        </Figure>
        <DxcText as="p">
          The password input <Code>color</Code>, <Code>typography</Code>,{" "}
          <Code>border</Code>, <Code>spacing</Code>, <Code>width</Code> and{" "}
          <Code>margin</Code> specifications are inherited from the text input,
          for reference{" "}
          <DxcLink
            href="/components/text-input/specifications"
            text="check the text input component documentation"
          />
          .
        </DxcText>
        <DxcText as="p">
          The password input doesn&#39;t have the following text input elements,
          therefore their listed styles don&#39;t apply:
        </DxcText>
        <DxcList>
          <DxcText>Placeholder</DxcText>
          <DxcText>Prefix / Suffix</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>States</HeadingLink>
        <DxcText as="p">
          The component password has the following states:
        </DxcText>
        <DxcText as="p">
          States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>error</strong> and{" "}
          <strong>disabled</strong>.
        </DxcText>
        <Figure caption="Password input component states">
          <Image
            src={passworsInputStates}
            alt="Password input component states"
          />
        </Figure>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Anatomy</HeadingLink>
        <Image src={passwordInputAnatomy} alt="Component anatomy example" />
        <DxcList type="number">
          <DxcText>Label</DxcText>
          <DxcText>
            Helper text <em>(Optional)</em>
          </DxcText>
          <DxcText>Input container</DxcText>
          <DxcText>Show/Hide action</DxcText>
          <DxcText>Clear action</DxcText>
          <DxcText>Error icon</DxcText>
          <DxcText>Error message</DxcText>
          <DxcText>Input value</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Actions</HeadingLink>
        <Figure caption="Show and hide action to toggle the value visibility">
          <Image
            src={passwordInputActions}
            alt="Show and hide action to toggle the value visibility"
          />
        </Figure>
        <DxcText as="p">
          The value of the input can be toggled on or off using the default
          action the component provides. The password input can also be
          clearable.
        </DxcText>
        <DxcList>
          <DxcText>
            The toggle indicates the action that will be performed when clicked,
            tapped, or pressing keyboard <Code>Enter</Code> key.
          </DxcText>
          <DxcText>
            The toggle has a <Code>title</Code> with a textual cue for the
            resulting action.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Accessibility</HeadingLink>
        <HeadingLink level={4}>WCAG</HeadingLink>
        <DxcList>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html"
              text="SC 1.3.5 Identify Input Purpose"
              newWindow
            ></DxcLink>
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion"
              text="SC 3.3.3 Error Suggestion"
              newWindow
            ></DxcLink>
          </DxcText>
          <DxcText>
            Understanding WCAG 2.2 -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication"
              text="SC 3.3.7 Accessible Authentication"
              newWindow
            ></DxcLink>
          </DxcText>
        </DxcList>
        <HeadingLink level={4}>WAI Web Accessibility Tutorials</HeadingLink>
        <DxcList>
          <DxcText>
            Forms -{" "}
            <DxcLink
              href="https://www.w3.org/WAI/tutorials/forms/examples/password/"
              text="Full Password Example"
              newWindow
            ></DxcLink>
          </DxcText>
        </DxcList>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/password-input/specs/PasswordInputSpecsPage.tsx" />
    </DxcStack>
  );
};

export default PasswordInputSpecsPage;

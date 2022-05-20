import {
  DxcStack,
  DxcText,
  DxcLink,
  DxcList,
} from "@dxc-technology/halstack-react";
import Link from "next/link";
import Figure from "@/common/Figure";
import Code from "@/common/Code";
import DocFooter from "@/common/DocFooter";
import Image from "@/common/Image";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import passwordInputActions from "./images/password_actions.png";
import passwordInputAnatomy from "./images/password_anatomy.png";
import passwordInputSpecs from "./images/password_specs.png";
import passworsInputStates from "./images/password_states.png";

const sections = [
  {
    title: "Specifications",
    content: (
      <>
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
          <DxcLink>
            <Link href="/components/text-input/specifications">
              <a>check the text input component documentation</a>
            </Link>
          </DxcLink>
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
      </>
    ),
  },
  {
    title: "States",
    content: (
      <>
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
      </>
    ),
  },

  {
    title: "Anatomy",
    content: (
      <>
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
      </>
    ),
  },
  {
    title: "Actions",
    content: (
      <>
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
      </>
    ),
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WCAG",
        content: (
          <DxcList>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html"
                newWindow
              >
                SC 1.3.5 Identify Input Purpose
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion"
                newWindow
              >
                SC 3.3.3 Error Suggestion
              </DxcLink>
            </DxcText>
            <DxcText>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication"
                newWindow
              >
                SC 3.3.7 Accessible Authentication
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
      {
        title: "WAI Web Accessibility Tutorials",
        content: (
          <DxcList>
            <DxcText>
              Forms -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/tutorials/forms/examples/password/"
                newWindow
              >
                Full Password Example
              </DxcLink>
            </DxcText>
          </DxcList>
        ),
      },
    ],
  },
];

const PasswordInputSpecsPage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Specifications"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/password-input/specs/PasswordInputSpecsPage.tsx" />
    </DxcStack>
  );
};

export default PasswordInputSpecsPage;

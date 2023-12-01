import {
  DxcParagraph,
  DxcFlex,
  DxcLink,
  DxcBulletedList,
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
        <Figure caption="Password input design specifications">
          <Image
            src={passwordInputSpecs}
            alt="Password input design specifications"
          />
        </Figure>
        <DxcParagraph>
          The password input <Code>color</Code>, <Code>typography</Code>,{" "}
          <Code>border</Code>, <Code>spacing</Code>, <Code>width</Code> and{" "}
          <Code>margin</Code> specifications are inherited from the text input,
          for reference check the{" "}
          <Link
            href="/components/text-input/specifications"
            passHref
            legacyBehavior
          >
            <DxcLink>text input</DxcLink>
          </Link>{" "}
          component documentation.
        </DxcParagraph>
        <DxcParagraph>
          The password input doesn&#39;t have the following text input elements,
          therefore their listed styles don&#39;t apply:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>Placeholder</DxcBulletedList.Item>
          <DxcBulletedList.Item>Prefix / Suffix</DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "States",
    content: (
      <>
        <DxcParagraph>
          The component password has the following states:
        </DxcParagraph>
        <DxcParagraph>
          States: <strong>enabled</strong>, <strong>hover</strong>,{" "}
          <strong>focus</strong>, <strong>error</strong> and{" "}
          <strong>disabled</strong>.
        </DxcParagraph>
        <Figure caption="Password input states">
          <Image src={passworsInputStates} alt="Password input states" />
        </Figure>
      </>
    ),
  },

  {
    title: "Anatomy",
    content: (
      <>
        <Image src={passwordInputAnatomy} alt="Password input anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>Label</DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Helper text <em>(Optional)</em>
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>Input container</DxcBulletedList.Item>
          <DxcBulletedList.Item>Show/Hide action</DxcBulletedList.Item>
          <DxcBulletedList.Item>Clear action</DxcBulletedList.Item>
          <DxcBulletedList.Item>Error icon</DxcBulletedList.Item>
          <DxcBulletedList.Item>Error message</DxcBulletedList.Item>
          <DxcBulletedList.Item>Input value</DxcBulletedList.Item>
        </DxcBulletedList>
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
        <DxcParagraph>
          The value of the input can be toggled on or off using the default
          action the component provides. The password input can also be
          clearable.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            The toggle indicates the action that will be performed when clicked,
            tapped, or pressing keyboard <Code>Enter</Code> key.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            The toggle has a <Code>title</Code> with a textual cue for the
            resulting action.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Accessibility",
    subSections: [
      {
        title: "WCAG",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html"
                newWindow
              >
                SC 1.3.5 Identify Input Purpose
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion"
                newWindow
              >
                SC 3.3.3 Error Suggestion
              </DxcLink>
            </DxcBulletedList.Item>
            <DxcBulletedList.Item>
              Understanding WCAG 2.2 -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication"
                newWindow
              >
                SC 3.3.7 Accessible Authentication
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
      {
        title: "WAI Web Accessibility Tutorials",
        content: (
          <DxcBulletedList>
            <DxcBulletedList.Item>
              Forms -{" "}
              <DxcLink
                href="https://www.w3.org/WAI/tutorials/forms/examples/password/"
                newWindow
              >
                Full Password Example
              </DxcLink>
            </DxcBulletedList.Item>
          </DxcBulletedList>
        ),
      },
    ],
  },
];

const PasswordInputSpecsPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/password-input/specs/PasswordInputSpecsPage.tsx" />
    </DxcFlex>
  );
};

export default PasswordInputSpecsPage;

import { DxcParagraph, DxcBulletedList, DxcFlex } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import description from "./examples/description";
import anatomy from "./images/wizard_anatomy.png";
import Image from "@/common/Image";
import vertical from "./examples/vertical";
import horizontal from "./examples/horizontal";
import stepNavigation from "./examples/stepNavigation";
import linearNonLinear from "./examples/linearNonLinear";
import validation from "./examples/validation";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The wizard component helps users navigate through multi-step processes in a structured and guided manner. It
        breaks down complex workflows into manageable steps, improving clarity and reducing cognitive load.{" "}
        <strong>Each step represents a key stage of the process</strong>, allowing users to track progress and move
        forward or backward as needed. Wizards are commonly used in forms, onboarding flows, and setup configurations
        where sequential input is required.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Wizard's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Step:</strong> represents an individual stage in the wizard navigation. Each step corresponds to a
            specific section of a multi-step process, guiding the user progressively through a flow.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Label:</strong> a descriptive title for the step that provides users with a clear understanding of
            the content or action required at that stage.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Separator:</strong> a visual connector between steps that indicates the sequence and relationship
            between them, reinforcing the step-by-step progression.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Step validator:</strong> a status indicator (checkmark or error icon) that provides feedback on
            whether the step has been successfully completed or requires attention.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Description:</strong> an optional text displayed alongside a step to offer additional guidance,
            clarifications, or instructions, ensuring users understand the requirements before proceeding.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Key interactions and features",
    content: (
      <DxcParagraph>
        To better understand the wizard component and its possible use cases when working with a form, it's important to
        review its key characteristics and interactions.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Step navigation",
        content: (
          <>
            <DxcParagraph>
              Users progress through the wizard by clicking on steps, using navigation buttons, or interacting with the
              interface if direct access to steps is enabled. Navigation can be controlled based on the form's
              requirements, preventing users from skipping essential steps when necessary.
            </DxcParagraph>
            <Example example={stepNavigation} />
          </>
        ),
      },
      {
        title: "Linear vs. Non-Linear Flow",
        content: (
          <>
            <DxcParagraph>
              Wizards can follow a <strong>linear</strong> approach, where users must complete each step in sequence
              before proceeding, or a <strong>non-linear</strong> approach, which allows free movement between steps.
              The choice depends on the complexity of the process and whether dependencies exist between steps.
            </DxcParagraph>
            <Example example={linearNonLinear} />
          </>
        ),
      },
      {
        title: "Step validation",
        content: (
          <>
            <DxcParagraph>
              There may be scenarios where the content of a step needs to be validated while the user is filling in
              fields or performing relevant actions within each step of the wizard. In such cases, a validation mark can
              be displayed on each step once the user progresses to the next one. This mark will indicate the validation
              status of the content, showing either a success or error mark on the step.
            </DxcParagraph>
            <Example example={validation} />
          </>
        ),
      },
      {
        title: "Optional description and icons",
        content: (
          <>
            <DxcParagraph>
              Each step can include description or validation icons to provide context and feedback.
            </DxcParagraph>
            <Example example={description} />
          </>
        ),
      },
    ],
  },
  {
    title: "Variants",
    content: (
      <DxcParagraph>
        The wizard component has two variants depending on its orientation: horizontal and vertical.
      </DxcParagraph>
    ),
    subSections: [
      {
        title: "Horizontal",
        content: (
          <>
            <DxcParagraph>
              The <strong>horizontal variant</strong> of the wizard is suitable for workflows where space is available
              horizontally, making it ideal for tasks like multi-step forms and progress tracking. For example, setting
              up a user account with several steps.
            </DxcParagraph>
            <Example example={horizontal} />
          </>
        ),
      },
      {
        title: "Vertical",
        content: (
          <>
            <DxcParagraph>
              The <strong>vertical variant</strong> works well when horizontal space is limited, often used in scenarios
              like long forms or detailed steps in a process. An example could be an onboarding process with in-depth
              configuration options.
            </DxcParagraph>
            <Example example={vertical} />
          </>
        ),
      },
    ],
  },
  {
    title: "Responsive behavior",
    content: (
      <>
        <DxcParagraph>
          The size of the Wizard display is directly related to the size of the parent component (ex. flex or
          container).
        </DxcParagraph>
        <DxcParagraph>There are two options for displaying the Wizard for more compact widths:</DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Compact variant</strong>: The default (or preferred ) responsive execution reduces the wizard to
            just the numbered steps for more compact screens.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Scrollable full-text Wizard</strong>: makes use of the parent container to create a horizontally
            scrollable box that allows users to see the full numbers and text.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          <strong>Keep steps clear and logical:</strong> ensure that each step represents a meaningful part of the
          process, following a natural order that users can easily follow.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Use concise and descriptive labels:</strong> step labels should clearly indicate the purpose of each
          step to help users understand where they are in the process.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Provide real-time validation:</strong> if validation is required before moving forward, display clear
          and immediate error messages to help users correct mistakes.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Indicate progress visually:</strong> use clear indicators to show the user's current step, completed
          steps, and upcoming steps to enhance orientation and usability.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Confirm before final submission:</strong> if the wizard leads to an irreversible action (e.g.,
          submitting an application), provide a review step where users can check and edit their inputs.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          <strong>Choose the right layout:</strong> use the horizontal variant for processes with a small number of
          steps and the vertical variant for complex flows with long step descriptions.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },
];

const WizardOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainerLayout>
      <QuickNavContainer sections={sections} startHeadingLevel={2} />
    </QuickNavContainerLayout>
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/wizard/overview/WizardOverviewPage.tsx" />
  </DxcFlex>
);

export default WizardOverviewPage;

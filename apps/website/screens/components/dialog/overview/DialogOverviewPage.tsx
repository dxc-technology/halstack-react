import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import content from "./images/dialog_content.png";
import overlay from "./images/dialog_overlay.png";
import anatomy from "./images/dialog_anatomy.png";

const sections = [
  {
    title: "Introduction",
    content: (
      <DxcParagraph>
        The dialog component is a modal window that captures user attention for critical interactions, such as
        confirmations, alerts, or form inputs. It appears above the main content and requires user action before
        continuing. To maintain usability, dialogs should be concise, focused on a single task, and provide clear
        actions like confirmation or dismissal.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Dialog's anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            The dialog always should have a title to introduce the actions or information that will get displayed on the
            screen.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Can contain a descriptive text or a phrase related to the action that triggered the dialog.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Can have some combinations of actions, like buttons to accept/cancel the action. There can be one, two or
            more buttons.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            If the dialog is not including a cancel action, provide a way to close it.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Modal dialog boxes should overlay only a portion of the underlying page to keep the user oriented within the
            workflow.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            In a dialog, the focus should remain within the modal box until the user completes the required action (if
            any) or closes it. In addition, and as a general rule, the focus should appear on the first focusable child
            when the dialog is opened.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Placing content in a dialog",
    content: (
      <>
        <Figure caption="Example of a form inside of a Halstack dialog">
          <Image src={content} alt="Example of a form inside of a Halstack dialog" />
        </Figure>
        <DxcParagraph>
          Any content (Halstack components or custom) can be placed inside the dialog component. Dialog tasks should be
          direct and easy to complete. However, to ensure that the component is used as intended and to prevent it from
          becoming unusable, please consider the following aspects:
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Avoid placing complex or large amounts of data</strong>, as it will increase the cognitive load and
            users will struggle when processing information.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            As much as possible, <strong>avoid scrolling in a dialog</strong>, as it disrupts focus and usability,
            especially for modal interactions that require immediate attention. It can also make critical actions harder
            to access, forcing users to scroll to find the key information or buttons. Instead, keep dialogs concise or
            consider alternative patterns to display the information.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Overlay in dialogs",
    content: (
      <>
        <DxcParagraph>
          The overlay element helps focus the user's attention on the dialog by creating a semi-transparent layer
          between the main application and the modal content. This visual separation reduces distractions, ensures the
          dialog stands out, and reinforces the need for user action before returning to the underlying interface.
          Additionally, it enhances accessibility by preventing unintended interactions with background elements.
        </DxcParagraph>
        <Figure caption="Example of the overlay usage in a dialog">
          <Image src={overlay} alt="Example of the overlay usage in a dialog" />
        </Figure>
      </>
    ),
  },
  {
    title: "Best practices",
    content: (
      <>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            <strong>Use dialogs for critical interactions:</strong> reserve dialogs for important decisions that require
            user confirmation or input.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Ensure clarity:</strong> titles and messages should be direct, with clear descriptions of the
            action's consequences.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Provide easy dismissal:</strong> always include a way to close the dialog, whether through a cancel
            button or a close icon.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Maintain focus:</strong> keep the user's attention within the dialog by managing focus and
            preventing background interactions.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Provide clear actions:</strong> use distinct primary and secondary buttons for confirmation and
            cancellation.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Keep it focused:</strong> dialogs should be concise and address a single task to avoid overwhelming
            users.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Avoid scrolling:</strong> keep content brief to prevent excessive scrolling; use alternative
            patterns for complex interactions.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];

const DialogOverviewPage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer sections={sections} startHeadingLevel={2} />
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/dialog/overview/DialogOverviewPage.tsx" />
    </DxcFlex>
  );
};

export default DialogOverviewPage;

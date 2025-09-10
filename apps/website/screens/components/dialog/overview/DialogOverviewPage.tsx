import { DxcBulletedList, DxcFlex, DxcParagraph } from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
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
        The <strong>dialog</strong> component is a modal window that{" "}
        <strong>captures user attention for critical interactions</strong>, such as confirmations, alerts, or form
        inputs. It appears above the main content and requires user action before continuing. To maintain usability,
        dialogs should be concise, focused on a single task, and provide clear actions like confirmation or dismissal.
      </DxcParagraph>
    ),
  },
  {
    title: "Anatomy",
    content: (
      <>
        <Image src={anatomy} alt="Dialog anatomy" />
        <DxcBulletedList type="number">
          <DxcBulletedList.Item>
            <strong>Title:</strong> displays the main heading of the dialog, providing users with a clear and immediate
            understanding of its purpose
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Container:</strong> the structural wrapper that holds all dialog elements, ensuring proper
            alignment, spacing, and responsiveness.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Close action:</strong> an optional button, usually represented by an "X" icon, allowing users to
            dismiss the dialog without completing an action.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Content:</strong> the main area where relevant information, messages, or interactive elements (e.g.,
            forms) are displayed.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            <strong>Actions:</strong> a set of buttons at the bottom of the dialog that guide users toward completing or
            cancelling the intended action.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <DxcParagraph>
          <em>
            * Please note that while these elements are not included by default in the component's configuration, they
            are the expected components in a dialog.
          </em>
        </DxcParagraph>
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
          The <strong>overlay</strong> element helps focus the user's attention on the dialog by creating a
          semi-transparent layer between the main application and the modal content. This visual separation reduces
          distractions, ensures the dialog stands out, and reinforces the need for user action before returning to the
          underlying interface. Additionally, it enhances accessibility by preventing unintended interactions with
          background elements.
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

const DialogOverviewPage = () => (
  <DxcFlex direction="column" gap="4rem">
    <QuickNavContainer sections={sections} startHeadingLevel={2} />
    <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/apps/website/screens/components/dialog/overview/DialogOverviewPage.tsx" />
  </DxcFlex>
);

export default DialogOverviewPage;

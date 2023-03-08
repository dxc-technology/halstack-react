import {
  DxcBulletedList,
  DxcFlex,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import dialogContent from "./images/dialog_content.png";
import dialogOverlay from "./images/dialog_overlay.png";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          The dialog always should have a title to introduce the actions or
          information that will get displayed on the screen.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Can contain a descriptive text or a phrase related to the action that
          triggered the dialog.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Can have some combinations of actions, like buttons to accept/cancel
          the action. There can be one, two or more buttons.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          If the dialog is not including a cancel action, provide a way to close
          it.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Modal dialog boxes should overlay only a portion of the underlying
          page to keep the user oriented within the workflow.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          In a dialog, the focus should remain within the modal box until the
          user completes the required action (if any) or closes it. In addition,
          and as a general rule, the focus should appear on the first focusable
          child when the dialog is opened.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },

  {
    title: "Content",
    content: (
      <>
        <Figure caption="Example of a dialog using Halstack components as content">
          <Image
            src={dialogContent}
            alt="Example of a dialog using Halstack components as content"
          />
        </Figure>
        <DxcParagraph>
          Any content (Halstack components or custom) can be placed inside the
          dialog component. Dialog tasks should be direct and easy to complete.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Do not use to display complex or large amounts of data.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Do not recreate a full app or page in a dialog.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Try always to avoid scrolling.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
  {
    title: "Overlay",
    content: (
      <>
        <Figure caption="Example of the overlay usage">
          <Image src={dialogOverlay} alt="Example of the overlay usage" />
        </Figure>
        <DxcParagraph>
          The overlay element makes possible to get the user attention into the
          dialog creating a layer between the actual application and the modal
          information showed in the user interface.
        </DxcParagraph>
      </>
    ),
  },
];

const DialogUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/dialog/usage/DialogUsagePage.tsx" />
    </DxcFlex>
  );
};

export default DialogUsagePage;

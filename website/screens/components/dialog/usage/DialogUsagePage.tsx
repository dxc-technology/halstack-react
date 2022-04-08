import Image from "@/common/Image";
import { DxcList, DxcStack, DxcText } from "@dxc-technology/halstack-react";
import HeadingLink from "../../../common/HeadingLink";
import dialogContent from "./images/dialog_content.png";
import dialogOverlay from "./images/dialog_overlay.png";
import DocFooter from "../../../common/DocFooter";
import Figure from "../../../common/Figure";

const DialogUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcList>
          <DxcText>
            The dialog always should have a title to introduce the actions or
            information that will get displayed on the screen.
          </DxcText>
          <DxcText>
            Can contain a descriptive text or a phrase related to the action
            that triggered the dialog.
          </DxcText>
          <DxcText>
            Can have some combinations of actions, like buttons to accept/cancel
            the action. There can be one, two or more buttons.
          </DxcText>
          <DxcText>
            If the dialog is not including a cancel action, provide a way to
            close it.
          </DxcText>
          <DxcText>
            Modal dialog boxes should overlay only a portion of the underlying
            page to keep the user oriented within the workflow.
          </DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Content</HeadingLink>
        <Figure caption="Example of a dialog using Halstack components as content">
          <Image
            src={dialogContent}
            alt="Example of a dialog using Halstack components as content"
          />
        </Figure>
        <DxcText as="p">
          Any content (Halstack components or custom) can be placed inside the
          dialog component. Dialog tasks should be direct and easy to complete.
        </DxcText>
        <DxcList>
          <DxcText>
            Do not use to display complex or large amounts of data.
          </DxcText>
          <DxcText>Do not recreate a full app or page in a dialog</DxcText>
          <DxcText>Try always to avoid scrolling</DxcText>
        </DxcList>
      </DxcStack>
      <DxcStack gutter="large">
        <HeadingLink level={3}>Overlay</HeadingLink>
        <Figure caption="Example of the overlay usage">
          <Image src={dialogOverlay} alt="Example of the overlay usage" />
        </Figure>
        <DxcText as="p">
          The overlay element makes possible to get the user attention into the
          dialog creating a layer between the actual application and the modal
          information showed in the user interface.
        </DxcText>
      </DxcStack>

      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/dialog/usage/DialogUsagePage.tsx" />
    </DxcStack>
  );
};

export default DialogUsagePage;

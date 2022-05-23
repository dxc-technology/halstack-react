import {
  DxcList,
  DxcStack,
  DxcTable,
  DxcText,
} from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Figure from "@/common/Figure";
import Image from "@/common/Image";
import buttonIconImage from "./images/button_icon.png";
import buttonVariantsImage from "./images/button_variants.png";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcList>
        <DxcText>
          In instances where buttons are vertically stacked, buttons should be
          the same length.
        </DxcText>
        <DxcText>
          Horizontally displayed buttons are dependent on the amount of text, so
          button lengths may vary, always considering the minimum and maximum
          established sizes.
        </DxcText>
        <DxcText>Text or icon on a button should always be centered.</DxcText>
        <DxcText>
          There must be 8 pixels of space between horizontally displayed
          buttons.
        </DxcText>
      </DxcList>
    ),
  },

  {
    title: "Variants",
    content: (
      <>
        <DxcText as="p">
          We can identify three different variants that imply some visual
          changes according to color and border attributes.
        </DxcText>
        <DxcText as="p">
          Variants: <strong>primary</strong>, <strong>secondary</strong> and{" "}
          <strong>text</strong>.
        </DxcText>
        <Figure caption="Example of the button component variants">
          <Image
            src={buttonVariantsImage}
            alt="Example of the button component variants"
          />
        </Figure>
        <DxcTable>
          <thead>
            <tr>
              <th>Variant</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Primary</td>
              <td>
                For the principal call to action on the page; primary buttons
                should only appear once per screen (not including the
                application header or in a modal dialog)
              </td>
            </tr>
            <tr>
              <td>Secondary</td>
              <td>
                For less prominent actions; secondary buttons can be used in
                isolation or paired with a primary button when there are
                multiple calls to action
              </td>
            </tr>
            <tr>
              <td>Text</td>
              <td>
                For the least pronounced actions; often used in conjunction with
                a primary button (e.g. cancel in a modal dialog)
              </td>
            </tr>
          </tbody>
        </DxcTable>
      </>
    ),
  },
  {
    title: "Icon usage",
    content: (
      <>
        <DxcText as="p">
          Any icon can be used in Halstack Design System, so it is apt to the
          user to choose between one of the multiple options that are offered
          through internet but it is recommended to use the same library of
          icons along the application to keeping concistency.
        </DxcText>
        <DxcList>
          <DxcText>
            Icon can go before or after the text with a separation of 8 pixels
            respecting the main button&#39;s text.
          </DxcText>
          <DxcText>
            Do not use icons mainly for visual interest, the glyph must add
            information and clarification to the action that would be performed
            in the context of the button.
          </DxcText>
          <DxcText>
            A button with an icon and no text is also allowed in the design
            system.
          </DxcText>
        </DxcList>
        <Figure caption="Icon usage examples">
          <Image src={buttonIconImage} alt="Icon usage examples" />
        </Figure>
      </>
    ),
  },
];

const ButtonUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          title="Usage"
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/button/usage/ButtonUsagePage.tsx" />
    </DxcStack>
  );
};

export default ButtonUsagePage;

import {
  DxcBulletedList,
  DxcStack,
  DxcTable,
  DxcParagraph,
} from "@dxc-technology/halstack-react";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import QuickNavContainer from "@/common/QuickNavContainer";
import DocFooter from "@/common/DocFooter";
import Example from "@/common/example/Example";
import variants from "./examples/variants";
import icons from "./examples/iconUsage";
import HeaderDescriptionCell from "@/common/HeaderDescriptionCell";

const sections = [
  {
    title: "Usage",
    content: (
      <DxcBulletedList>
        <DxcBulletedList.Item>
          In instances where buttons are vertically stacked, buttons should be
          the same length.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Horizontally displayed buttons are dependent on the amount of text, so
          button lengths may vary, always considering the minimum and maximum
          established sizes.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          Text or icon on a button should always be centered.
        </DxcBulletedList.Item>
        <DxcBulletedList.Item>
          There must be 8 pixels of space between horizontally displayed
          buttons.
        </DxcBulletedList.Item>
      </DxcBulletedList>
    ),
  },

  {
    title: "Variants",
    content: (
      <>
        <DxcParagraph>
          We can identify three different variants that imply some visual
          changes according to color and border attributes.
        </DxcParagraph>
        <DxcParagraph>
          Variants: <strong>primary</strong>, <strong>secondary</strong> and{" "}
          <strong>text</strong>.
        </DxcParagraph>
        <Example example={variants} />
        <DxcTable>
          <thead>
            <tr>
              <th>Variant</th>
              <HeaderDescriptionCell>Description</HeaderDescriptionCell>
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
        <DxcParagraph>
          Any icon can be used in Halstack Design System, so it is apt to the
          user to choose between one of the multiple options that are offered
          through internet but it is recommended to use the same library of
          icons along the application to keeping concistency.
        </DxcParagraph>
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Icon can go before or after the text with a separation of 8 pixels
            respecting the main button&#39;s text.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Do not use icons mainly for visual interest, the glyph must add
            information and clarification to the action that would be performed
            in the context of the button.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            A button with an icon and no text is also allowed in the design
            system.
          </DxcBulletedList.Item>
        </DxcBulletedList>
        <Example example={icons} />
      </>
    ),
  },
];

const ButtonUsagePage = () => {
  return (
    <DxcStack gutter="xxlarge">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/components/button/usage/ButtonUsagePage.tsx" />
    </DxcStack>
  );
};

export default ButtonUsagePage;
